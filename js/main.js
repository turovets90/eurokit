$(document).ready(function(){


    $(window).resize(function(){
        var header_height = $('header').outerHeight();

        $('.modal').css({
            'top':header_height+'px'
        });

        if($(window).innerWidth() < 1024){
            $('.main_menu').css({
                'top':header_height+'px'
            });
            $('.home_categories').css({
                'margin-top':header_height+'px'
            });
        }
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });
    });
    $(window).resize();

    $('.mm_btn').on('click',function () {
        $(this).toggleClass('act');
        $('html').toggleClass('page_noscroll');
        $('.main_menu').slideToggle();
        return false;
    });


    $('.main_menu .arrow').on('click',function () {
        $(this).parent().toggleClass('act');
        $(this).next().slideToggle();
        return false;
    });



    $('.products_group').each(function(){
        var p_group_title=$(this).find('.p_group_title');
        $(p_group_title).click(function(){
            $(p_group_title).toggleClass('act');
            $(p_group_title).next().slideToggle();
        });
    });

    $('.item_title_mobile').click(function(){
        $(this).toggleClass('act');
        $(this).next().slideToggle();
    });




    var productView = localStorage.getItem('productView');
    if(productView == 'list'){
        $('.views_block .views_grid').removeClass('act');
        $('.views_block .views_list').addClass('act');
        $('.portfolio_list').removeClass('grid_view').addClass('list_view');
    }else if(productView == 'grid'){
        $('.views_block .views_list').removeClass('act');
        $('.views_block .views_grid').addClass('act');
        $('.portfolio_list').removeClass('list_view').addClass('grid_view');
    }
    $('.views_block .views_grid').click(function(){
        localStorage.removeItem('productView');
        localStorage.setItem('productView', 'grid');
        $('.views_block .views_list').removeClass('act');
        $(this).addClass('act');
        $('.portfolio_list').removeClass('list_view').addClass('grid_view');
        return false;
    });
    $('.views_block .views_list').click(function(){
        localStorage.removeItem('productView');
        localStorage.setItem('productView', 'list');
        $('.views_block .views_grid').removeClass('act');
        $(this).addClass('act');
        $('.portfolio_list').removeClass('grid_view').addClass('list_view');
        return false;
    });

    console.log( "productView = " + localStorage.getItem("productView"));


    if($(window).innerWidth() < 1024){
        $('.steps_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            //fade:true,
            //autoplay: true,
            //speed: 1000,
            //autoplaySpeed:9000,
        });

    }


    if($(window).innerWidth() > 1024){
        $('.p_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }

    $('.p_prev').click(function(){
        $('.p_slider').slick('slickPrev');
    });
    $('.p_next').click(function(){
        $('.p_slider').slick('slickNext');
    });


    $('.portfolio_page_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        dots: true,
        variableWidth: true,
        //centerMode: true,
        focusOnSelect:true,
        //asNavFor: '.portfolio_page_slider_nav',
        dotsClass: 'slider__dots',
        customPaging: function(slick, index) {
            var image = $(slick.$slides[index]).find('.slider__img').attr('src');
            return '<img src="' + image + '" alt="" /> '
        }
    });

    $('.p_prev1').click(function(){
        $('.portfolio_page_slider').slick('slickPrev');
    });
    $('.p_next1').click(function(){
        $('.portfolio_page_slider').slick('slickNext');
    });




    if($(window).innerWidth() < 575){
        $('.insta_feed_list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
        });
    }

    $('.i_prev').click(function(){
        $('.insta_feed_list').slick('slickPrev');
    });
    $('.i_next').click(function(){
        $('.insta_feed_list').slick('slickNext');
    });


    $(function () {
        $('form input[type="text"], form textarea').each(function () {
            $(this).focus(function () {
                $(this).parent().addClass('act_label');
            });
            $(this).blur(function(){
                if(!this.value){
                    $(this).parent().removeClass('act_label');
                }
                else{
                    $(this).parent().addClass('act_label');
                }
            });
            if ( !this.value ) {
                $(this).parent().removeClass('act_label');
            }
            else{
                $(this).parent().addClass('act_label');
            }
        });
    });


    $("a.anchor").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });





    /*$('.portfolio_list .portfolio_item').onScreen({
        doIn: function() {
            $(this).find('.cd-catalog-overlay').addClass('moveLeft');
            $(this).find('img').addClass('fadeInRightBig');
        }
    });*/




    new WOW().init();

});


