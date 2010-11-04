//jQuery Plugin: Drop Shadow Text
// call like this: $(element).textDropShadow();
(function($) {
 $.fn.textDropShadow = function(){
	 $(this).html('<span class="jq-shadow">'+$(this).html()+'</span><span>'+$(this).html()+'</span>');
	 return $(this);
 }
})(jQuery);



// javascript method: "pxToEm"
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4($){k.9.7=5.9.7=4(a){3 b=p;2(b.j==5)b=d(b);2(!a)3 a=$(\'g\');2($(a).6()>0){3 c=b*(1/(d($(a).r("n-6"))))+\'m\';8 c}l 8\'i: o h q f s a e t\'}})(u);',31,31,'||if|var|function|String|size|pxToEm|return|prototype||||parseInt|DOM|is|body|scope|Error|constructor|Number|else|em|font|Provided|this|argument|css|not|element|jQuery'.split('|'),0,{}));





// hover fix plugin
/*jQuery.fn.fixHover.js : for all elements, add hover class on mouseover and remove on mouseout */
jQuery.fn.fixHover = function(){
	$(this).each(function(){
		var hoverClasses = ' hover';
		if($(this).attr('class')){		
			var classes = $(this).attr('class');
			var classArray = classes.split(' ');
			$(classArray).each(function(){
				hoverClasses += ' ' + this + 'Hover';
			});
		}
		$(this).hover(
		function(){
			if(classes) $(this).attr('class', classes + hoverClasses);
			else $(this).addClass('hover');
		},
		function(){
			if(classes) $(this).attr('class', classes);
			else $(this).removeClass('hover');
		}
		);
	});
}

/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "pngFix"
 * Version: 1.1, 11.09.2007
 * by Andreas Eberhard, andreas.eberhard@gmail.com
 *                      http://jquery.andreaseberhard.de/
 *
 * Copyright (c) 2007 Andreas Eberhard
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(s($){3.1s.1k=s(j){j=3.1a({12:\'1m.1j\'},j);8 k=(n.P=="r 10 Z"&&U(n.v)==4&&n.v.E("14 5.5")!=-1);8 l=(n.P=="r 10 Z"&&U(n.v)==4&&n.v.E("14 6.0")!=-1);o(3.17.16&&(k||l)){3(2).L("1r[m$=.M]").z(s(){3(2).7(\'q\',3(2).q());3(2).7(\'p\',3(2).p());8 a=\'\';8 b=\'\';8 c=(3(2).7(\'K\'))?\'K="\'+3(2).7(\'K\')+\'" \':\'\';8 d=(3(2).7(\'A\'))?\'A="\'+3(2).7(\'A\')+\'" \':\'\';8 e=(3(2).7(\'C\'))?\'C="\'+3(2).7(\'C\')+\'" \':\'\';8 f=(3(2).7(\'B\'))?\'B="\'+3(2).7(\'B\')+\'" \':\'\';8 g=(3(2).7(\'R\'))?\'1d:\'+3(2).7(\'R\')+\';\':\'\';8 h=(3(2).1c().7(\'1b\'))?\'19:18;\':\'\';o(2.9.y){a+=\'y:\'+2.9.y+\';\';2.9.y=\'\'}o(2.9.t){a+=\'t:\'+2.9.t+\';\';2.9.t=\'\'}o(2.9.w){a+=\'w:\'+2.9.w+\';\';2.9.w=\'\'}8 i=(2.9.15);b+=\'<x \'+c+d+e+f;b+=\'9="13:11;1q-1p:1o-1n;O:W-V;N:1l;\'+g+h;b+=\'q:\'+3(2).q()+\'u;\'+\'p:\'+3(2).p()+\'u;\';b+=\'J:I:H.r.G\'+\'(m=\\\'\'+3(2).7(\'m\')+\'\\\', D=\\\'F\\\');\';b+=i+\'"></x>\';o(a!=\'\'){b=\'<x 9="13:11;O:W-V;\'+a+h+\'q:\'+3(2).q()+\'u;\'+\'p:\'+3(2).p()+\'u;\'+\'">\'+b+\'</x>\'}3(2).1i();3(2).1h(b)});3(2).L("*").z(s(){8 a=3(2).T(\'N-S\');o(a.E(".M")!=-1){8 b=a.X(\'1g("\')[1].X(\'")\')[0];3(2).T(\'N-S\',\'1f\');3(2).Q(0).Y.J="I:H.r.G(m=\'"+b+"\',D=\'F\')"}});3(2).L("1e[m$=.M]").z(s(){8 a=3(2).7(\'m\');3(2).Q(0).Y.J=\'I:H.r.G\'+\'(m=\\\'\'+a+\'\\\', D=\\\'F\\\');\';3(2).7(\'m\',j.12)})}1t 3}})(3);',62,92,'||this|jQuery||||attr|var|style|||||||||||||src|navigator|if|height|width|Microsoft|function|padding|px|appVersion|margin|span|border|each|class|alt|title|sizingMethod|indexOf|scale|AlphaImageLoader|DXImageTransform|progid|filter|id|find|png|background|display|appName|get|align|image|css|parseInt|block|inline|split|runtimeStyle|Explorer|Internet|relative|blankgif|position|MSIE|cssText|msie|browser|hand|cursor|extend|href|parent|float|input|none|url|after|hide|gif|pngFix|transparent|blank|line|pre|space|white|img|fn|return'.split('|'),0,{}))


// $(...).newWindow();
// open links in a new window on click, add a title attribute to tell the user it will open in a new window
jQuery.fn.newWindow = function(){
	$(this).click(function(){
		var newWindow = window.open(jQuery(this).attr('href'), '_blank').focus();
	    return false;
	});
	jQuery(this).attr('title', '* This link opens in a new window');
	return jQuery(this);
}




/*-------------------------------------------------------------------- 
 * JQuery Plugin: "EqualHeights"
 * by:
   Scott Jehl (scott@filamentgroup.com) 
   Todd Parker (todd@filamentgroup.com)
   http://www.filamentgroup.com
 *
 * Copyright (c) 2007 Filament Group
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Description: Compares the heights of the first-children of a provided element 
 								  and sets their min-height to the tallest height. Sets in em units by default if pxToEm() method is available.
 * Dependencies: jQuery library, pxToEm method								  
 * Usage Example: $(element).equalHeights();
   						      Optional: to set min-height in px, pass a true argument: $(element).equalHeights(true);
 * Version: 1.0, 08.02.2007
 * Changelog:
 *  08.02.2007 initial Version 1.0
--------------------------------------------------------------------*/



$.fn.equalHeights = function(px) {
	$(this).each(function(){
		var currentTallest = 0;
		$(this).children().each(function(i){
				if($(this).height() > currentTallest) { currentTallest = $(this).height(); }
		});
		if(!px || !Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm($(this)); //use ems unless px is specified or 
		// for ie6, set height since min-height isn't supported
		var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
		if ($.browser.msie && (ie6)) { $(this).children().css({'height': currentTallest}); }
		$(this).children().css({'min-height': currentTallest}); 
	});
	return $(this);
};

document.documentElement.className = "js";

/*-------------------------------------------------------------------------------
 * jQuery Website Screen Behavior Layer
 * Author: Scott Jehl, scottjehl.com
 * Created: April 08
 * Notes:
-------------------------------------------------------------------------------*/
$(function(){
		//add enhanced class to body
		$('body').addClass('jq-enhanced');

		//create faux radios that control actual radios 
/*
		$('#jq-download input:radio').each(function(){
			var state = ($(this).is(':checked')) ? ' jq-checked' : '';
			$(this).after('<a href="#" class="jq-radioToggle '+$(this).attr('name')+state+'">'+$(this).attr('value')+'</a>').hide();
		});
*/

/* hacky nav highlighting */
var loc = window.location.href;
//strip the existing current state
$('#jq-secondaryNavigation .jq-current').removeClass('jq-current');

//add class to current section...
//Download
if(loc.indexOf('http://docs.jquery.com/Downloading_jQuery') > -1){
       $('#jq-secondaryNavigation .jq-download').addClass('jq-current');
}
//Tutorials
else if(loc.indexOf('http://docs.jquery.com/Tutorials') > -1){
       $('#jq-secondaryNavigation .jq-tutorials').addClass('jq-current');
}
//Discussion
else if(loc.indexOf('http://docs.jquery.com/Discussion') > -1){
       $('#jq-secondaryNavigation .jq-discussion').addClass('jq-current');
}
//UI within docs
else if(loc.indexOf('http://docs.jquery.com/UI') > -1){
       $('#jq-primaryNavigation .jq-current').removeClass('jq-current');
       $('#jq-primaryNavigation .jq-ui').addClass('jq-current');
       $('#jq-secondaryNavigation .jq-documentation').addClass('jq-current');
}
//About
else if(loc.indexOf('http://docs.jquery.com/About') > -1){
       $('#jq-primaryNavigation .jq-current').removeClass('jq-current');
       $('#jq-primaryNavigation .jq-about').addClass('jq-current');
}
//Donate
else if(loc.indexOf('http://docs.jquery.com/Donate') > -1){
       $('#jq-primaryNavigation .jq-current').removeClass('jq-current');
       $('#jq-primaryNavigation .jq-donate').addClass('jq-current');
}
//Docs, in general
else if(loc.indexOf('http://docs.jquery.com/') > -1){
       $('#jq-secondaryNavigation .jq-documentation').addClass('jq-current');
}
// Dev
else if(loc.indexOf('http://dev.jquery.com/') > -1){
       $('#jq-secondaryNavigation .jq-bugTracker').addClass('jq-current');
}
//plugins popular
else if(loc.indexOf('http://plugins.jquery.com/most_popular') > -1){
 $('#jq-secondaryNavigation .jq-popularPlugins').addClass('jq-current');
}
//plugins latest
else if(loc.indexOf('http://plugins.jquery.com/latest_releases') > -1){
 $('#jq-secondaryNavigation .jq-latestReleases').addClass('jq-current');
}
//plugins browse
else if(loc.indexOf('http://plugins.jquery.com/project/Plugins') > -1){
 $('#jq-secondaryNavigation .jq-browseCategories').addClass('jq-current');
}
//plugins lates
else if(loc.indexOf('http://plugins.jquery.com/project/Plugins/name') > -1){
 $('#jq-secondaryNavigation .jq-allPlugins').addClass('jq-current');
}


		$('.jq-radioToggle, #jq-download label').click(function(){
				var thisToggle = $(this).is('.jq-radioToggle') ? $(this) : $(this).prev();
				var checkBox = thisToggle.prev();
				checkBox.trigger('click');
				$('.jq-radioToggle').removeClass('jq-checked');
				thisToggle.addClass('jq-checked');
		
				return false;
		});
		//nav drop shads
		$('#jq-secondaryNavigation a, #jq-footerNavigation a').each(function(){$(this).textDropShadow();});

		$('#jq-intro li').hover(
			function(){$(this).find('div.jq-checkpointSubhead:hidden').fadeIn(500);},
			function(){$(this).find('div.jq-checkpointSubhead:visible').fadeOut(500);}
		);

		//cta click
		$('#jq-intro li div p').click(function(){
			$(this).parent().prev().trigger('click');
		});

		//home snippet
		$('.jq-runCode').click(function(){
			eval($(this).parent().find('code').text());
			$(this).hide();
			return false;
		});


		//interior content box heights
		if( !$.browser.msie ){
			$('#jq-interior #jq-content').equalHeights();
		}
		
	
		$(document).pngFix(); 
		
});

// Hehe.
if ( window.addEventListener ) {
        var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
        window.addEventListener("keydown", function(e){
                kkeys.push( e.keyCode );
                if ( kkeys.toString().indexOf( konami ) >= 0 )
                        window.location = "http://ejohn.org/apps/hero/";
        }, true);
}
