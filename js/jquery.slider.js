(function($){
	$.fn.slider = function(settings){
		/*
		*slider:滑动标签
		*triggerLeft:左触发器
		*triggerRight:右触发器
		*speed:滑动一次的时间
		*time:两次滑动的间隔
		*autoPlay:是否自动滑动
		*/
		settings = $.extend({
			slider: "#list",
			triggerLeft: "#spec-left",
			triggerRight: "#spec-right",
			speed: 600,
			time:3000,
			autoPlay:true
		}, settings);
		
		return this.each(function(){
			var containter = $(this);
			var slider = $(settings.slider);
			var itemWidth = slider.children().eq(0).width(); //slider的直接后代的宽度
			var itemCount = slider.children().size(); //slider的直接后代的数量
			slider.width(itemWidth*itemCount);
			
			$(settings.triggerRight).click(function(){
				slider.animate({left:"+="+itemWidth}, 
					settings.speed, 
					function(){
						$(this).children(":last").prependTo($(this));
						$(this).animate({left:"-="+itemWidth},0);
					}
				);
				return false;
			});
			
			$(settings.triggerLeft).click(function(){
				slider.animate({left:"-="+itemWidth}, 
					settings.speed, 
					function(){
						$(this).children(":first").appendTo($(this));
						$(this).animate({left:"+="+itemWidth},0);
					}
				);
				return false;
			});
			
			if(settings.autoPlay) {
				var timer = setInterval(function(){$(settings.triggerLeft).click();}, settings.time);
				containter.parent().children().hover(function(){clearInterval(timer);}, function(){timer = setInterval(function(){$(settings.triggerLeft).click();}, settings.time);});
			}
		});
	};
})(jQuery);
