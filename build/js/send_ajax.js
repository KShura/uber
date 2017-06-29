var Form = (function () {
    function Form(form, url, dataArray, form_type) {
        this.form = form;
        this.url = url;
        this.dataArray = dataArray;
        this.form_type = form_type;
    }
    Form.prototype.validation = function () {
        var valid = true;
        $.each($(this.form).find('input.required'), function (i, val) {
            if ($(this).val() == "") {
                valid = false;
                $(this).css('border', '2px solid #d02121');
                if ($(this).closest('.field').find('p').is(".error_message")) {
                    $(this).closest('.field').find('.error_message').show();
                }
            }
            else {
                $(this).css('border', '');
                if ($(this).closest('.field').find('p').is(".error_message")) {
                    $(this).closest('.field').find('.error_message').hide();
                }
            }
        });
        if ($(this.form).find('input').is('input[name="check"]')) {
            if (!$(this.form).find('input[name="check"]').prop("checked")) {
                $(this.form).find('input[name="check"] + span.checkbox').css('border', '2px solid #d02121');
                $(this.form).find('.check_desc').css('textDecoration', 'underline');
            }
            else {
                $(this.form).find('.check_desc').css('textDecoration', '');
                $(this.form).find('input[name="check"] + span.checkbox').css('border', '');
            }
        }
        return valid;
    };
    Form.prototype.ajax = function () {
        var valid = this.validation();
        if (valid) {
            $.ajax({
                type: "POST",
                url: this.url,
                processData: false,
                contentType: false,
                data: this.dataArray
            }).done(function (res) {
                if (res) {
                    showSuccess(this.form_type);
                }
            }).fail(function (res) {
                console.log(res);
            });
        }
    };
    return Form;
}());
$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var dataArray = $(this).serializeArray();
        var form_type = $(this).attr('form-type');
        var url = $(this).attr('action');
        var form = new Form(this, url, dataArray, form_type);
        var formData = new FormData(this);
        var response = form.ajax();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxJQUFJLElBQUksR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFDVCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzZW5kX2FqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwicG9wdXBzLnRzXCIgLz5cclxuaW50ZXJmYWNlIGlGb3JtIHtcclxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgZGF0YUFycmF5OiBhbnlbXTtcclxuICBmb3JtX3R5cGU6IHN0cmluZztcclxuICB2YWxpZGF0aW9uKCk6IGJvb2xlYW47XHJcbiAgYWpheCgpOiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBGb3JtIGltcGxlbWVudHMgaUZvcm0ge1xyXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudDtcclxuICB1cmw6c3RyaW5nO1xyXG4gIGRhdGFBcnJheTogYW55W107XHJcbiAgZm9ybV90eXBlOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IgKGZvcm06SFRNTEZvcm1FbGVtZW50LCB1cmw6c3RyaW5nLCBkYXRhQXJyYXk6YW55LCBmb3JtX3R5cGU6c3RyaW5nKSB7XHJcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB0aGlzLmRhdGFBcnJheSA9IGRhdGFBcnJheTtcclxuICAgIHRoaXMuZm9ybV90eXBlID0gZm9ybV90eXBlO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGlvbigpIDogYm9vbGVhbiB7XHJcbiAgICBsZXQgdmFsaWQ6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgJC5lYWNoKCQodGhpcy5mb3JtKS5maW5kKCdpbnB1dC5yZXF1aXJlZCcpLCBmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgICAgLy9hbGVydCgkKHRoaXMpLmF0dHIoJ25hbWUnKSArIFwiIFwiICskKHRoaXMpLnZhbCgpKVxyXG4gICAgICAvL2xldCBhID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgaWYoJCh0aGlzKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTsgXHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlcicsICcycHggc29saWQgI2QwMjEyMScpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3AnKS5pcyhcIi5lcnJvcl9tZXNzYWdlXCIpKSB7IFxyXG4gICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCcuZXJyb3JfbWVzc2FnZScpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlcicsICcnKTsgXHJcbiAgICAgICAgaWYgICgkKHRoaXMpLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3AnKS5pcyhcIi5lcnJvcl9tZXNzYWdlXCIpKSB7IFxyXG4gICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCcuZXJyb3JfbWVzc2FnZScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICB9KTtcclxuXHJcbiAgICAgaWYoJCh0aGlzLmZvcm0pLmZpbmQoJ2lucHV0JykuaXMoJ2lucHV0W25hbWU9XCJjaGVja1wiXScpKSB7XHJcbiAgICAgICBpZighJCh0aGlzLmZvcm0pLmZpbmQoJ2lucHV0W25hbWU9XCJjaGVja1wiXScpLnByb3AoXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgICQodGhpcy5mb3JtKS5maW5kKCdpbnB1dFtuYW1lPVwiY2hlY2tcIl0gKyBzcGFuLmNoZWNrYm94JykuY3NzKCdib3JkZXInLCAnMnB4IHNvbGlkICNkMDIxMjEnKTtcclxuICAgICAgICAgJCh0aGlzLmZvcm0pLmZpbmQoJy5jaGVja19kZXNjJykuY3NzKCd0ZXh0RGVjb3JhdGlvbicsICd1bmRlcmxpbmUnKTtcclxuICAgICAgIH0gZWxzZSB7ICAgICAgICAgXHJcbiAgICAgICAgICQodGhpcy5mb3JtKS5maW5kKCcuY2hlY2tfZGVzYycpLmNzcygndGV4dERlY29yYXRpb24nLCAnJyk7XHJcbiAgICAgICAgICQodGhpcy5mb3JtKS5maW5kKCdpbnB1dFtuYW1lPVwiY2hlY2tcIl0gKyBzcGFuLmNoZWNrYm94JykuY3NzKCdib3JkZXInLCAnJyk7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcblxyXG4gIGFqYXgoKTogdm9pZCB7XHJcblxyXG4gICAgbGV0IHZhbGlkOmJvb2xlYW4gPSB0aGlzLnZhbGlkYXRpb24oKTtcclxuICAgIGlmKHZhbGlkKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiB0aGlzLnVybCxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YUFycmF5XHJcbiAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgaWYocmVzKSB7XHJcbiAgICAgICAgICBzaG93U3VjY2Vzcyh0aGlzLmZvcm1fdHlwZSk7ICAgXHJcbiAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgfSkuZmFpbChmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgXHJcbiAgICAgICAgbGV0IGRhdGFBcnJheSA9ICQodGhpcykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICAgICBsZXQgZm9ybV90eXBlID0gJCh0aGlzKS5hdHRyKCdmb3JtLXR5cGUnKTtcclxuICAgICAgICBsZXQgdXJsID0gJCh0aGlzKS5hdHRyKCdhY3Rpb24nKTtcclxuICAgICAgICBsZXQgZm9ybTpGb3JtID0gbmV3IEZvcm0odGhpcywgdXJsLCBkYXRhQXJyYXksIGZvcm1fdHlwZSk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGZvcm0uYWpheCgpO1xyXG4gICAgICB9KTtcclxufSk7ICAgICAgIl0sInNvdXJjZVJvb3QiOiIvc3JjL3RzIn0=
