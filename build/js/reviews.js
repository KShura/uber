function reviewsSlider() {
    $('.reviews_slider').carouFredSel({
        circular: true,
        infinite: false,
        width: 1160,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7SUFFSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDcEMsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLGVBQWU7UUFDbEIsSUFBSSxFQUFFLGdCQUFnQjtRQUNuQixVQUFVLEVBQUUsZ0JBQWdCO1FBQ2xDLE1BQU0sRUFBRTtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLFVBQVUsSUFBUTtnQkFDcEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFJckMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUixDQUFDO1lBQ0YsQ0FBQztTQUNEO1FBQ0QsSUFBSSxFQUFFLEtBQUs7UUFDWCxLQUFLLEVBQUU7WUFDTixPQUFPLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLENBQUM7YUFDSDtTQUNKO1FBQ0QsS0FBSyxFQUFFO1lBQ04sT0FBTyxFQUFFLElBQUk7U0FDYjtLQUNELENBQUMsQ0FBQztBQUdKLENBQUM7QUFBQSxDQUFDIiwiZmlsZSI6InJldmlld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuZnVuY3Rpb24gcmV2aWV3c1NsaWRlcigpIHtcclxuICAgIFxyXG4gICAgJCgnLnJldmlld3Nfc2xpZGVyJykuY2Fyb3VGcmVkU2VsKHtcclxuXHRcdGNpcmN1bGFyOiB0cnVlLFxyXG5cdFx0aW5maW5pdGU6IGZhbHNlLFxyXG5cdFx0d2lkdGg6IDExNjAsXHJcblx0XHRwcmV2OiAnI3Jldmlld3MtbGVmdCcsXHJcbiAgICBcdG5leHQ6ICcjcmV2aWV3cy1yaWdodCcsXHJcbiAgICAgICAgcGFnaW5hdGlvbjogXCIjcmV2aWV3cy1wYWdlclwiLFxyXG5cdFx0c2Nyb2xsOiB7IFxyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgb25CZWZvcmU6IGZ1bmN0aW9uKCBkYXRhOmFueSApIHtcclxuXHRcdFx0XHRpZihkYXRhLnNjcm9sbC5kaXJlY3Rpb24gPT0gXCJuZXh0XCIpIHtcclxuXHRcdFx0XHRcdC8vZGF0YS5pdGVtcy5vbGQuZXEoIDIgKS5hbmltYXRlKHsgbWFyZ2luUmlnaHQ6IDIwIH0pO1xyXG5cdFx0XHRcdFx0Ly9kYXRhLml0ZW1zLnZpc2libGUuZXEoIDIgKS5hbmltYXRlKHsgbWFyZ2luUmlnaHQ6IDAgfSk7XHJcblx0IFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXV0bzogZmFsc2UsXHJcblx0XHRpdGVtczoge1xyXG5cdFx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdFx0bWluOiAzLFxyXG5cdFx0XHRcdG1heDogM1xyXG5cdFx0ICAgIH1cclxuXHRcdH0sXHJcblx0XHRzd2lwZToge1xyXG5cdFx0XHRvblRvdWNoOiB0cnVlXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG4gICAgLy8kKCcucmV2aWV3c19zbGlkZXInKS5jaGlsZHJlbigpLmVxKCAyICkuY3NzKHsgbWFyZ2luUmlnaHQ6IDAgfSk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc3JjL3RzIn0=
