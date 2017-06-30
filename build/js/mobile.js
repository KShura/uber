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
    $('select.uberType').change(function () {
        $(this).closest('.table').find('.td').css('display', 'none');
        $(this).closest('.table').find('.td:nth-child(' + $(this).val() + ')').css('display', 'table-cell');
        $(this).closest('.table').find($('select.uberType option[value="' + $(this).val() + '"]')).prop("selected", true);
        setTimeout(function () {
            $('input, select').trigger('refresh');
        }, 1);
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLENBQUM7SUFDRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsQ0FBQztRQUMvQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQ0QsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRUYsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFcEcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdDQUFnQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEgsVUFBVSxDQUFDO1lBQ1AsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYoJCgnaGVhZGVyIC50b3BfbWVudScpLmlzKFwiOnZpc2libGVcIikpIHtcclxuXHRcdFx0JCh0aGlzKS5jc3MoJ2JhY2tncm91bmRJbWFnZScsICcnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQodGhpcykuY3NzKCdiYWNrZ3JvdW5kSW1hZ2UnLCAndXJsKC4uL2ltZy9idXJnZXJfY2xvc2UucG5nKScpO1xyXG5cdFx0fVxyXG5cdFx0JCgnaGVhZGVyIC50b3BfbWVudScpLnRvZ2dsZSgnZmFzdCcpO1xyXG5cdH0pO1xyXG5cclxuXHQgJCgnc2VsZWN0LnViZXJUeXBlJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnRhYmxlJykuZmluZCgnLnRkJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy50YWJsZScpLmZpbmQoJy50ZDpudGgtY2hpbGQoJyArICQodGhpcykudmFsKCkgKyAnKScpLmNzcygnZGlzcGxheScsICd0YWJsZS1jZWxsJyk7XHJcblxyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnRhYmxlJykuZmluZCgkKCdzZWxlY3QudWJlclR5cGUgb3B0aW9uW3ZhbHVlPVwiJyArICQodGhpcykudmFsKCkgKyAnXCJdJykpLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdpbnB1dCwgc2VsZWN0JykudHJpZ2dlcigncmVmcmVzaCcpO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc3JjL3RzIn0=
