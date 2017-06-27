/// <reference path="../../typings/index.d.ts" />
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
            onBefore: function( data:any ) {
				if(data.scroll.direction == "next") {
					//data.items.old.eq( 2 ).animate({ marginRight: 20 });
					//data.items.visible.eq( 2 ).animate({ marginRight: 0 });
	 
				} else {
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

    //$('.reviews_slider').children().eq( 2 ).css({ marginRight: 0 });
};