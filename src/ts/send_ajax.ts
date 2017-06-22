/// <reference path="popups.ts" />
interface iForm {
  form: HTMLFormElement;
  url: string;
  dataArray: any[];
  type: string;
  validation(type:string, name:string, phone:string, text:string, email:string): boolean;
  ajax(formData:any): JQueryresponse;
  gettype(type:string): string;
}

interface JQueryresponse { 
  responseJSON?: any;
}

class Form implements iForm {
  form: HTMLFormElement;
  url:string;
  dataArray: any[];
  type: string;
  constructor (form:HTMLFormElement, url:string, dataArray:any, type:string) {
    this.form = form;
    this.url = url;
    this.dataArray = dataArray;
    this.type = type;
  }

  validation(type:string, name:string, phone:string, text:string, email:string) : boolean {
    let valid_name:boolean = false;
    let valid_phone:boolean = false;
    let valid_text:boolean = false;
    let valid_email:boolean = false;

    if (phone != "" || type == "catalog") {
      valid_phone = true;
    } 

    if (name != "" || type == "catalog") {
      valid_name = true;
    }

    if (text != "") {
      valid_text = true;
    }

    var pattern_email = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if(pattern_email.test(email) || type != "catalog" ) {
      valid_email = true;
    }

    if(!valid_name) {            
      $(this.form).find("input[name='name']").css('border', '2px solid red');
      $(this.form).find("input[name='name']+.error").css('display', 'block');
    } else {
      $(this.form).find("input[name='name']").css('border', '');
      $(this.form).find("input[name='name']+.error").css('display', 'none');
    }
        
    if(!valid_phone) {
      $(this.form).find("input[name='phone']").css('border', '2px solid red');
      $(this.form).find("input[name='phone']+.error").css('display', 'block');
    } else {
      $(this.form).find("input[name='phone']").css('border', '');
      $(this.form).find("input[name='phone']+.error").css('display', 'none');
    }

    if(!valid_text) {
      $(this.form).find("textarea").css('border', '2px solid red');
      $(this.form).find("textarea+.error").css('display', 'block');
    } else {
      $(this.form).find("textarea").css('border', '');
      $(this.form).find("textarea+.error").css('display', 'none');
    }

    if(!valid_email) {
      $(this.form).find("input[name='email']").css('border', '2px solid red');
      $(this.form).find("input[name='email']+.error").css('display', 'block');
    } else {
      $(this.form).find("input[name='email']").css('border', '');
      $(this.form).find("input[name='email']+.error").css('display', 'none');
    }

    let check:boolean = false;

    if($(this.form).find("input[name='check']").prop("checked")) {
      check = true;
      $(this.form).find("input[name='check'] + span").css('border', '1px solid #a4a9ae');
      $(this.form).find(".checkbox_text").css('textDecoration', 'none');
    } else {
      $(this.form).find("input[name='check'] + span").css('border', '1px solid red');
      $(this.form).find(".checkbox_text").css('textDecoration', 'underline');
    }
        
    return valid_name && valid_phone && valid_text && valid_email && check;
  }

  ajax(formData:any): string {
    let response: string;

    formData.append('type', this.gettype());
    let name:string;
    if ($(this.form).find("input[name='name']").length != 0) {
        name = $(this.form).find("input[name='name']").val();
    } else {
        name="no name";
    }

    let text:string;
    if ($(this.form).find("textarea").length != 0) {
        text = $(this.form).find("textarea").val();
    } else {
        text="no text";
    }

    let email:string;
    if ($(this.form).find("input[name='email']").length != 0) {
        email = $(this.form).find("input[name='email']").val();
    } else {
        email="no email";
    }

    let phone = $(this.form).find("input[name='phone']").val();

    let valid:boolean = this.validation($(this.form).attr('name'), name, phone, text, email)
    if(valid) {
      $.ajax({
        type: "POST",
        url: this.url,
        processData: false,
        contentType: false,
        data: formData
      }).done(function(res) {
          
        let obj = jQuery.parseJSON( res );

        let type= obj.type;
        let dataArray = this.dataArray;
        
        switch (type) {
        case "Обратный звонок":
            showSuccessCallback();
            break
        case "Новый заказ":
            let gift:string = obj.gift;
            let item:string = obj.item;
            let price:string = obj.price;
            let image:string = obj.image;
            showSuccessOrder(name, gift, item, image, price);
            $("form[name='order']").trigger('reset');
            break
        case "Заказ каталога":
            showSuccessCatalog();
            $("form[name='catalog']").trigger('reset'); 
            break
        case "Форма внизу страницы":
            showSuccess();
            $("form[name='bottom_form']").trigger('reset');
            break
        case "Отзыв":
            showSuccessReview();
            $("form[name='review']").trigger('reset'); 
            break
    }
              
      }).fail(function(res) {
        console.log(res);
       });
    }
    return response;
  }

  gettype(): string {
    let type;
    switch (this.type) {
      case "callback":
        type = "Обратный звонок"; 
        break
    case "order_main":
        type = "Заказ с баннера"; 
        break
      case "order":
        type = "Новый заказ"; 
        break
      case "catalog":
        type = "Заказ каталога"; 
        break
      case "bottom_form":
        type = "Форма внизу страницы";
        break
      case "review":
        type = "Отзыв";
        break
    }
  return type;
  }
}


$(function() {
      $('form').submit(function(e) {
        e.preventDefault(); 
      
        let dataArray = $(this).serializeArray();
        let type = $(this).attr('name');
        let url = $(this).attr('action');
        let form:Form = new Form(this, url, dataArray, type);
        var formData = new FormData(this);
        let response = form.ajax(formData);
      });

      $('input[type="file"]').change(function() {
        let val = $(this).val();
        let regV = /[^\\/]+\.[A-Za-z]+/gi; 
        let result = val.match(regV);
        if(result != null) {
          $(this).siblings('span').html(result);
        } else {
          $(this).siblings('span').html('Добавить фото');
        }
      });
});      