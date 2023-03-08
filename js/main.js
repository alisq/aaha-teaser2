console.log( $("#intro").height()-$(window).height())


let i =0;

let bb = setInterval(function(){

    $(document).scrollTo(i)
    i++;
    // if (i >= ($(document).height()-$(window).height())) {
    //     i=$("#intro").height()-$(window).height()
    //     $(document).scrollTo(i)
    //     clearInterval(bb);
    // }
    
},1)


$(".title-top").hover(() => {
  console.log("fff")
  clearInterval(bb)
},() => {
  bb = setInterval(function(){

    $(document).scrollTo(i)
    i++;
  
    
},1)
})

//clearInterval(bb)



$(document).mousedown(() => {
  clearInterval(bb)
})



// $("body").mouseup(() => {
//   bb = setInterval(function(){

//     $(document).scrollTo(i)
//     i++;
  
    
// },1)
// })


$(document).scroll(function(){

  console.log("s: "+$(document).scrollTop())

  if ($(document).scrollTop() >= $("#outro").offset().top-1) {

    
      i=0
      $(document).scrollTo(i)
      
    
  }
    //i = $(document).scrolltop()

    //clearInterval(bb)
})

// Set the date we're counting down to
var countDownDate = new Date("Mar 29, 2023 12:00:00").getTime();

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