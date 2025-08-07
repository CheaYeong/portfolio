$(document).ready(function(){
    
    $("#nav").hide();
    
    $('#ham').click(function(){
        $("#nav").slideToggle(function(){
            // $(this).mouseleave(function(){
            //     $(this).hide();
            // });
        });
    });

    $("#ham").hover(function () {
        $(this).css("cursor", "pointer");
    }, function () {
        $(this).css("cursor", "auto");
    });

    $('.homeLogo').click(function(){
        $( 'html, body' ).stop().animate( { scrollTop : 0 }, 1000 ) 
    });


    // nav event
    $('#nav a').on("click",function(e){
        console.log(this.hash);
        if(this.hash !== 0){
            e.preventDefault();
            let hash = this.hash;
            $("html, body").animate({
                scrollTop : $(hash).offset().top
            },500, function(){
                window.location.hash = hash;
            })
            $('#nav').hide();
        }
    });

    //skill event
    $('.skillCircleBox').hover(function(){
        $(this).children('.tool').css("color" ,"#485AAC");
        $(this).children('.toolSubtitle').css("color" ,"#485AAC");
        $(this).children('.skillCircle').css("background-color" , "#03FBE1")
    },function(){
        $(this).children('.tool').css("color" ,"#03FBE1");
        $(this).children('.toolSubtitle').css("color" ,"#03FBE1");
        $(this).children('.skillCircle').css("background-color" , "#485AAC")
    });

    //
    $('.viewBtnWrap').hover(function(){
        $(this).children('.viewBtn').css("color" ,"#ffffff");
        $(this).children('.viewBtn').css("background-color" ,"#000000");
    },function(){
        $(this).children('.viewBtn').css("color" ,"#000000");
        $(this).children('.viewBtn').css("background-color" ,"#ffffff");
    });

    //work
    
    $(".swiper-slide").click(function(){
		$(location).attr("href", "https://drive.google.com/file/d/1C69p5Q_o5tbyMIkdE2rBuzLV-a64NrcJ/view?usp=sharing")
	});

    // thanks to 
    $('.thanksCircleWrap').hover(function(){
        $(this).children('.returnWrap').css("background-color","#03FBE1")
    },function(){
        $(this).children('.returnWrap').css("background-color","#cccccc")
    });

    $('.thanksCircleWrap').click(function(){
        $( 'html, body' ).stop().animate( { scrollTop : 0 }, 1000 ) 
    });


    //scroll event
    console.log($('#about').offset().top);
    let headeer = $("header")
    let aboutTop = $('#about').offset().top
    let skillTop = $('#skill').offset().top
    let projectTop = $('#project').offset().top
    let workTop = $('#work').offset().top
    let thankTop = $('#thankTo').offset().top
    $(window).scroll(function(){
        //console.log($(document).scrollTop());
        let scrollTop = $(document).scrollTop()
        if(aboutTop - 400 < scrollTop){

        } else if (skillTop - 400 < scrollTop) {

        } else if (projectTop - 400 < scrollTop){

        }
        else if (workTop - 400 < scrollTop){
            
        }
        else if (thankTop - 400 < scrollTop){
            
        }
    });

});

var swiper = new Swiper(".mySwiper", {
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 30,
    //   freeMode: true,      
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
});