/*
 * cpskin_smart.js
 * Copyright (C) 2017 AuroreMariscal <aurore@affinitic.be>
 *
 * Distributed under terms of the LICENCE.txt license.
 */
$(document).ready(function() {
    var $window = $(window);
    var window_height = $window.height();

//    Parallax
    var lastScrollTop = 0;
    $( window ).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            scroll = "0";
        } else {
            scroll = "1";
        }
        lastScrollTop = st;

        var scrolled = $(window).scrollTop();
        document.getElementById('portal-header').style.top = scrolled / 6 + "px";
    });


//    Slide
    $('.actualites').find('.bloc-item').each(function() {
        $(this).find('.pageleadImage, h3, .description').each(function() {
            $(this).addClass('no-view');
        })
        $(document).scroll(function(){
            $(this).find('.pageleadImage, h3, .description').each(function() {
                add_style($(this));
            })
        })
    });
    $('.agenda').each(function() {
        $(this).find('.bloc-item').each(function() {
            $(this).addClass('no-view');
        })

        $(document).scroll(function(){
            $(this).find('.bloc-item').each(function() {
                add_style($(this));
            })
        })
    });

    function add_style(el) {
        el_offset_top = el.offset().top;
        el_offset_bottom = (el_offset_top + el.outerHeight());
        var docScroll = $window.scrollTop();
        position = docScroll + (window_height/1.2);
        if( (position >= el_offset_top) && (docScroll <= el_offset_bottom) ){
            el.addClass('in-view');
        }
        else {
            el.addClass('no-view').removeClass('in-view');
        }
    }
    
// search
    $( ".btn-search" ).click(function() {
        $( "#hidden-search" ).slideToggle(
        "fast",
        function () {
               $("#searchGadget").focus();
           });
        });
       
       $("#portal-globalnav a[tabindex]").click(function(){
        $("#hidden-search").hide('fast');
       });

});
