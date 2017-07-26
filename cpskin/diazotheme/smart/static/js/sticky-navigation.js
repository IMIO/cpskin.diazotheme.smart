$(document).ready(function(){ 
(function(w,d,undefined){
	var el_html = d.documentElement,
		el_body = d.getElementsByTagName('body')[0],
		header = d.getElementById('top-navigation-inner'),
		header_miniSite = d.getElementById('minisite-navigation-inner'),
		lastScroll = w.pageYOffset || el_body.scrollTop;
		MinilastScroll = w.pageYOffset || el_body.scrollTop;
	
		menuIsStuck = function(triggerElement, wScrollTop, lastScroll) {
			var regexp		= /(nav\-is\-stuck)/i,
				classFound	= el_html.className.match( regexp ),
				navHeight	= header.offsetHeight,
				bodyRect	= el_body.getBoundingClientRect(),
				scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 100,
				scrollValFix = classFound ? scrollValue : scrollValue + navHeight;
			if (window.matchMedia("(min-width: 1024px)").matches){
				
				if (wScrollTop > scrollValFix && !classFound && wScrollTop > lastScroll ) {
					el_html.className = el_html.className + ' nav-is-stuck';
				}
				
				// if nav-is-stuck class exists
				if ( (classFound &&  wScrollTop < lastScroll) || w.pageYOffset == 0) {
					el_html.className = el_html.className.replace( regexp, '' );
				}				
			}	
		};
		
		if ( header_miniSite !== null ) {
				miniSiteMenuIsStuck = function(triggerElement, wScrollTop, MinilastScroll) {
	
				var regexp		= /(nav\-is\-Substuck)/i,
					classFound	= el_html.className.match( regexp ),
					navHeight	= header_miniSite.offsetHeight,
					bodyRect	= el_body.getBoundingClientRect(),
					scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 100,
					scrollValFix = classFound ? scrollValue : scrollValue + navHeight;
					if (window.matchMedia("(min-width: 1024px)").matches) {
                        if ( d.getElementsByClassName('in-minisite-in-portal') || d.getElementsByClassName('in-minisite-out-portal') ) {
					
							if (wScrollTop > scrollValFix && !classFound && wScrollTop > MinilastScroll) {
								el_html.className = el_html.className + ' nav-is-Substuck';
							}
			
							// if nav-is-Substuck class exists
							if ( (classFound && wScrollTop < MinilastScroll) || w.pageYOffset == 0) {
								el_html.className = el_html.className.replace( regexp, '' );
							}
						}
          }	
			}
    };
	
    
		onScrolling = function() {
      //this function fires menuIsStuck()…
		var wScrollTop = w.pageYOffset || el_body.scrollTop;
		
			if (header != null) {			
        menuIsStuck( d.getElementById('header'), wScrollTop, lastScroll );
				lastScroll = wScrollTop;
			}
			
			if (header_miniSite !== null) {
          miniSiteMenuIsStuck( d.getElementById('header_miniSite'), wScrollTop, MinilastScroll );
          MinilastScroll = wScrollTop;
      }
			
		};
		
	// when you scroll, fire onScrolling() function
	w.addEventListener('scroll', function(){
		w.requestAnimationFrame( onScrolling );
	});


}(window, document));

});