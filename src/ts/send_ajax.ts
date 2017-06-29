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

    $.each($(this.form).find('input.required'), function(i, val) {
      //alert($(this).attr('name') + " " +$(this).val())
      //let a = $(this).val();
      if($(this).val() == "") {
        valid = false; 
        $(this).css('border', '2px solid #d02121');
        if ($(this).closest('.field').find('p').is(".error_message")) { 
          $(this).closest('.field').find('.error_message').show();
        }
      } else {
        $(this).css('border', ''); 
        if  ($(this).closest('.field').find('p').is(".error_message")) { 
          $(this).closest('.field').find('.error_message').hide();
        }
      }
     });

     if($(this.form).find('input').is('input[name="check"]')) {
       if(!$(this.form).find('input[name="check"]').prop("checked")) {
         $(this.form).find('input[name="check"] + span.checkbox').css('border', '2px solid #d02121');
         $(this.form).find('.check_desc').css('textDecoration', 'underline');
       } else {         
         $(this.form).find('.check_desc').css('textDecoration', '');
         $(this.form).find('input[name="check"] + span.checkbox').css('border', '');
       }
     }

    return valid;
  }

  ajax(): void {

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
});      