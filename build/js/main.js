$(function () {
    $('.animation input').focus(function () {
        $(this).siblings('label').animate({
            top: 0,
            left: 0,
            fontSize: 14,
        }, 300);
    });
    $('input').focusout(function () {
        $(this).siblings('label').animate({
            top: 25,
            left: 17,
            fontSize: 0,
        }, 300);
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsQ0FBQyxDQUFDO0lBQ0UsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzlCLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7WUFDUCxRQUFRLEVBQUUsRUFBRTtTQUNmLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDOUIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxDQUFDO1NBQ2QsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoJy5hbmltYXRpb24gaW5wdXQnKS5mb2N1cyhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKCdpbnB1dCcpLmZvY3Vzb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRvcDogMjUsXHJcbiAgICAgICAgICAgIGxlZnQ6IDE3LFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMCxcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbn0pOyAiXSwic291cmNlUm9vdCI6Ii9zcmMvdHMifQ==
