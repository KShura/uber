/// <reference path="popups.ts" />
interface iForm {
  form: HTMLFormElement;
  url: string;
  dataArray: any[];
  form_type: string;
  validation(name:string, phone:string): boolean;
  ajax(): void;
}

class Form implements iForm {
  form: HTMLFormElement;
  url:string;
  dataArray: any[];
  form_type: string;
  constructor (form:HTMLFormElement, url:string, dataArray:any, form_type:string) {
    this.form = form;
    this.url = url;
    this.dataArray = dataArray;
    this.form_type = form_type;
  }

  validation(name:string, phone:string) : boolean {
    let valid_name:boolean = false;
    let valid_phone:boolean = false;

    if (phone != "") {
      valid_phone = true;
    } 

    if (name != "") {
      valid_name = true;
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

    return valid_name && valid_phone;
  }

  ajax(): void {
    let name:string =  $(this.form).find("input[name='name']").val();   

    let phone =  $(this.form).find("input[name='phone']").val();

    let valid:boolean = this.validation(name, phone);
    if(valid) {
      $.ajax({
        type: "POST",
        url: this.url,
        processData: false,
        contentType: false,
        data: this.dataArray
      }).done(function(res) {
        if(res) {
          showSuccess(this.form_type);   
        }          
      }).fail(function(res) {
        console.log(res);
       });
    }
  }
}


$(function() {
      $('form').submit(function(e) {
        e.preventDefault(); 
      
        let dataArray = $(this).serializeArray();
        let form_type = $(this).attr('form-type');
        let url = $(this).attr('action');
        let form:Form = new Form(this, url, dataArray, form_type);
        var formData = new FormData(this);
        let response = form.ajax();
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