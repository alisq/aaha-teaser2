$("#menu-button").click(function(){
    
    $("#menu-button, #menu").toggleClass("active")
})

$("#menu-fist").click(function(){
    
    $(document).scrollTo(0, 400)
})


$(document).scroll(function(){

    fromTop = $(document).scrollTop()
    offset = 10

    if (fromTop > 100) {
        $("#menu-fist").fadeIn(400)
    } else {
        $("#menu-fist").fadeOut(400)
    }

    fft = $("#contact").position().top-fromTop

    if ((fft-offset) <=$(".title-top").position().top ) {
        $(".title-top, #menu-button, #menu-fist").addClass("invert")
    } else {
        $(".title-top, #menu-button, #menu-fist").removeClass("invert")
    }


    if ((fft-offset) <=$(".title-bottom").position().top ) {
        $(".title-bottom").addClass("invert")
    } else {
        $(".title-bottom").removeClass("invert")
    }

    
})

$("#menu li").click(function(){
    id= "#"+$(this).data("item");
    $("#menu").css("opacity","0");
    setTimeout(function(){
        $("#menu, #menu-button").removeClass("active");
        $("#menu").attr("style","")
        $(document).scrollTo(id, 400)
    },400)
});

$(".f").click(function(){
    
    $(".hide").removeClass("hide");
    f = $(this).data("filter")
    $(".action").not(f).addClass("hide");

    
})

$("h2").click(function(){
    d = "#"+$(this).data("demand")
    $(document).scrollTo(d,400)
})


//THIS IS ALL STUFF FOR THE SWITCH DELETE WHEN THE TIME IS RIGHT

    $("#one-col").click(function(){
        $(document).scrollTo("#the-unearned-increment2", 600)
    })

    $("#three-col").click(function(){
        $(document).scrollTo("#the-unearned-increment", 600)
    })
   
    $('#demand-case').change(function() {
        if(this.checked) {
            $(".manifesto").css({
                "text-transform":"uppercase",
                "font-size":"4.5vw"
            });
        } else {
            $(".manifesto").attr("style","");
        }
        
    });

    $('#demand-case2').change(function() {
        if(this.checked) {
            $(".manifesto").css({
                "text-transform":"capitalize",
                //"font-size":"4.5vw"
            });
        } else {
            $(".manifesto").attr("style","");
        }
        
    });


$("#lang div").click(function(){
    $("#lang div").removeClass("active");
    $(this).addClass("active");

    $("h1").toggleClass("fr")

    $("section").fadeOut(400)
    setTimeout(function(){

        $("section").fadeIn(400)
    },400)
});

$(".sticky-demo").click(function(){
    targ = "#"+$(this).parent().parent().parent().attr("id")+" .action-bar";
    $(document).scrollTo(targ, 400);
})

//setTimeout(function(){
$('.main-carousel').flickity({
    // options
    // fullscreen: true,
    cellAlign: 'left',
    contain: true
  });

    //},12600)


// Set the date we're counting down to
var countDownDate = new Date("Mar 15, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, "
  + minutes + " minutes, " + seconds + " seconds";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);