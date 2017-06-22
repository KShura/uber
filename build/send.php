<?

function send_mail($mail_to, $thema, $html, $path)   
  { if ($path) {  
    $fp = fopen($path,"rb");   
    if (!$fp)   
    { print "Cannot open file";   
      exit();   
    }   
    $file = fread($fp, filesize($path));   
    fclose($fp);   
    }  
    $name = basename($path); // в этой переменной надо сформировать имя файла (без всякого пути)  
    $EOL = "\r\n"; // ограничитель строк, некоторые почтовые сервера требуют \n - подобрать опытным путём
    $boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.  
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers    = "MIME-Version: 1.0;$EOL";   
    $headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL";  
    $headers   .= "From: address@server.com";  
      
    $multipart  = "--$boundary$EOL";   
    $multipart .= "Content-Type: text/html; charset=utf-8$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом html-части 
    $multipart .= chunk_split(base64_encode($html));   

    $multipart .=  "$EOL--$boundary$EOL";   
    $multipart .= "Content-Type: application/octet-stream; name=\"$name\"$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= "Content-Disposition: attachment; filename=\"$name\"$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла 
    $multipart .= chunk_split(base64_encode($file));   

    $multipart .= "$EOL--$boundary--$EOL";   
      
        if(!mail($mail_to, $thema, $multipart, $headers))   
         {return False;           //если не письмо не отправлено
      }  
    else { //// если письмо отправлено
    return True;  
    }  
  exit;  
  }


if ($_SERVER['REQUEST_METHOD'] == "POST" && ($_POST['phone'] != "" || $_POST['type'] == "Заказ каталога")) {

	//istmarketing@yandex.ru
	$to = 'istmarketing@yandex.ru';
    
    $type = $_POST['type'];

    $subject = "Культ сна: ".$type;

    $message = "Телефон: ". $_POST['phone']. "\n";

    $rows = array();

    $rows['type'] = $_POST['type'];
    switch ($type) {
    case "Обратный звонок":
    case "Заказ с баннера":
        break;
    case "Новый заказ":
        $message .= "Имя: ".$_POST['name']."\n";
        $message .= "Товар: ".$_POST['item']. "\n";        
        $message .= "Цена: ".$_POST['price']. "\n";        
        $message .= "Размер: ".$_POST['size']. "\n";
        $message .= "Цвет: ".$_POST['color']. "\n";
        $message .= "Подарок: ".$_POST['gift']. "\n";
        $rows['name'] = $_POST['name'];
        $rows['price'] = $_POST['price'];
        $rows['item'] = $_POST['item'];
        $rows['image'] = $_POST['image'];
        $rows['gift'] = $_POST['gift'];
         break;
    case "Заказ каталога":
        $message .= "Имя: ".$_POST['name']."\n";
        $message .= "E-mail: ".$_POST['email']."\n";
        break;
    case "Форма внизу страницы":
    case "Отзыв":
        $message .= "Имя: ".$_POST['name']."\n";
        $message .= "Текст: ".$_POST['comment']."\n";
        break;
    }

    
    if (!empty($_FILES['file']['tmp_name'])) 
        { 
            // Закачиваем файл 
            $path = $_FILES['file']['name']; 
            if (copy($_FILES['file']['tmp_name'], $path)) $picture = $path; 
        }

        if(empty($picture)) {
		    mail($to, $subject, $message);
        }
        else {
            send_mail($to, $subject, $message, $picture); 
        }
		
		echo json_encode($rows);
	
}
?>
