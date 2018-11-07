const texts = ['And an orator said, "Speak to us of Freedom."'
,"And he answered:"
,"At the city gate and by your fireside I have seen you prostrate yourself and worship your own freedom,"
,"Even as slaves humble themselves before a tyrant and praise him though he slays them."
,"Ay, in the grove of the temple and in the shadow of the citadel I have seen the freest among you wear their freedom as a yoke and a handcuff."
,"And my heart bled within me; for you can only be free when even the desire of seeking freedom becomes a harness to you,"
,"and when you cease to speak of freedom as a goal and a fulfillment."
,"You shall be free indeed when your days are not without a care nor your nights without a want and a grief,"
,"But rather when these things girdle your life and yet you rise above them naked and unbound."
]
let index = 0;

for(let i=0; i<50; i++){
    $("body").append('<div class="bomb"><img src="bomb.png" class="static"><img src="bomb.gif" class="img-top"></div>')
    console.log("working well")
    }
    
$(".bomb").each(function(){
$(this).css("top",Math.random()*$(window).height()-150 + "px")
$(this).css("left",Math.random()*$(window).width()-150 + "px")
// $(".img-top").css("width",Math.random()*1000 + "px")
})

$(".bomb").click(function(){
    $(this).remove();
    console.log("removed")
  })

  $(".content").click(function(){
    console.log(index)
    $("h1").hide()
    $("h2").hide()
    // $("h2").fadeOut("slow")
    $("h2").fadeIn(2000)
    $("h2").html(texts[index]).css("font-size","80px").css("line-height","100px")
    index++
})