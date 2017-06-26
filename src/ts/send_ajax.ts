/// <reference path="popups.ts" />
interface iForm {
  form: HTMLFormElement;
  url: string;
  dataArray: any[];
  form_type: string;
  validation(): boolean;
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

  validation() : boolean {
    let valid:boolean = true;

    $.each($(this.form).find('input.requi#d02121'), function(i, val) {
      if($(this).val() == "") {
        valid = false; 
        $(this).css('border', '2px solid #d02121');
        if ($(this).siblings().is(".error_message")) { 
          $(this).siblings('.error_message').show();
        }
      } else {
        $(this).css('border', ''); 
        if  ($(this).siblings().is(".error_message")) { 
          $(this).siblings('.error_message').hide();
        }
      }
     });

    return valid;
  }

  ajax(): void {
    let name:string =  $(this.form).find("input[name='name']").val();   

    let phone =  $(this.form).find("input[name='phone']").val();

    let valid:boolean = this.validation();
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