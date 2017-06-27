$(function () {
    $('.burger').click(function (e) {
        e.preventDefault();
        if ($('header .top_menu').is(":visible")) {
            $(this).css('backgroundImage', '');
        }
        else {
            $(this).css('backgroundImage', 'url(../img/burger_close.png)');
        }
        $('header .top_menu').toggle('fast');
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLENBQUM7SUFDRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsQ0FBQztRQUMvQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQ0QsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibW9iaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuICAgICQoJy5idXJnZXInKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZigkKCdoZWFkZXIgLnRvcF9tZW51JykuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG5cdFx0XHQkKHRoaXMpLmNzcygnYmFja2dyb3VuZEltYWdlJywgJycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCh0aGlzKS5jc3MoJ2JhY2tncm91bmRJbWFnZScsICd1cmwoLi4vaW1nL2J1cmdlcl9jbG9zZS5wbmcpJyk7XHJcblx0XHR9XHJcblx0XHQkKCdoZWFkZXIgLnRvcF9tZW51JykudG9nZ2xlKCdmYXN0Jyk7XHJcblx0fSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NyYy90cyJ9
