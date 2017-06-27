function reviewsSlider() {
    $('.reviews_slider').carouFredSel({
        circular: true,
        infinite: false,
        responsive: true,
        prev: '#reviews-left',
        next: '#reviews-right',
        pagination: "#reviews-pager",
        scroll: {
            items: 3,
            onBefore: function (data) {
                if (data.scroll.direction == "next") {
                }
                else {
                }
            }
        },
        auto: false,
        items: {
            visible: {
                min: 3,
                max: 3
            }
        },
        swipe: {
            onTouch: true
        }
    });
}
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7SUFFSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDcEMsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsS0FBSztRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxlQUFlO1FBQ2xCLElBQUksRUFBRSxnQkFBZ0I7UUFDbkIsVUFBVSxFQUFFLGdCQUFnQjtRQUNsQyxNQUFNLEVBQUU7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLFFBQVEsRUFBRSxVQUFVLElBQVE7Z0JBQ3BDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBSXJDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1IsQ0FBQztZQUNGLENBQUM7U0FDRDtRQUNELElBQUksRUFBRSxLQUFLO1FBQ1gsS0FBSyxFQUFFO1lBQ04sT0FBTyxFQUFFO2dCQUNSLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2FBQ0g7U0FDSjtRQUNELEtBQUssRUFBRTtZQUNOLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDLENBQUM7QUFHSixDQUFDO0FBQUEsQ0FBQyIsImZpbGUiOiJyZXZpZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmZ1bmN0aW9uIHJldmlld3NTbGlkZXIoKSB7XHJcbiAgICBcclxuICAgICQoJy5yZXZpZXdzX3NsaWRlcicpLmNhcm91RnJlZFNlbCh7XHJcblx0XHRjaXJjdWxhcjogdHJ1ZSxcclxuXHRcdGluZmluaXRlOiBmYWxzZSxcclxuXHRcdHJlc3BvbnNpdmU6IHRydWUsXHJcblx0XHRwcmV2OiAnI3Jldmlld3MtbGVmdCcsXHJcbiAgICBcdG5leHQ6ICcjcmV2aWV3cy1yaWdodCcsXHJcbiAgICAgICAgcGFnaW5hdGlvbjogXCIjcmV2aWV3cy1wYWdlclwiLFxyXG5cdFx0c2Nyb2xsOiB7IFxyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgb25CZWZvcmU6IGZ1bmN0aW9uKCBkYXRhOmFueSApIHtcclxuXHRcdFx0XHRpZihkYXRhLnNjcm9sbC5kaXJlY3Rpb24gPT0gXCJuZXh0XCIpIHtcclxuXHRcdFx0XHRcdC8vZGF0YS5pdGVtcy5vbGQuZXEoIDIgKS5hbmltYXRlKHsgbWFyZ2luUmlnaHQ6IDIwIH0pO1xyXG5cdFx0XHRcdFx0Ly9kYXRhLml0ZW1zLnZpc2libGUuZXEoIDIgKS5hbmltYXRlKHsgbWFyZ2luUmlnaHQ6IDAgfSk7XHJcblx0IFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXV0bzogZmFsc2UsXHJcblx0XHRpdGVtczoge1xyXG5cdFx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdFx0bWluOiAzLFxyXG5cdFx0XHRcdG1heDogM1xyXG5cdFx0ICAgIH1cclxuXHRcdH0sXHJcblx0XHRzd2lwZToge1xyXG5cdFx0XHRvblRvdWNoOiB0cnVlXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG4gICAgLy8kKCcucmV2aWV3c19zbGlkZXInKS5jaGlsZHJlbigpLmVxKCAyICkuY3NzKHsgbWFyZ2luUmlnaHQ6IDAgfSk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc3JjL3RzIn0=
