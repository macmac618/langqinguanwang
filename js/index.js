//顶部悬
  window.onscroll = function(){
      var header = document.getElementById("hea");
	  var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
	  if(_scroll>=0){
		header.style.position = "fixed";
		header.style.top = 0;
	  }
  }

// $(".im").mouseenter(function(){
//     $(".ab_12").slideDown(1000);
// });
// $(".im").mouseleave(function(){
//     $(".ab_12").css("display","none");
// });
let myTimer=0;
$(".i2").mouseenter(function(){
	if($(".ab_12").css("display","block")){
		console.log("checkclass:mouseenter");
		$(".ab_12").slideDown();
	}
	
});

$(".i2").mouseleave(function(){
    myTimer=setTimeout(function(){
		$(".ab_12").slideUp();
		console.log(11111);
	},200);
});

$(".ab_12").mouseenter(function(){	
	clearInterval(myTimer);
	//$(this).show();	
});

$(".ab_12").mouseleave(function(){
	$(this).hide();	
})


// let myTimer=0;
$(".i3").mouseenter(function(){
	if($(".ab_22").css("display","block")){
		console.log("checkclass:mouseenter");
		$(".ab_22").slideDown();
	}
	
});

$(".i3").mouseleave(function(){
    myTimer=setTimeout(function(){
		$(".ab_22").slideUp();
		console.log(11111);
	},200);
});

$(".ab_22").mouseenter(function(){	
	clearInterval(myTimer);
	//$(this).show();	
});

$(".ab_22").mouseleave(function(){
	$(this).hide();	
})


$(".i4").mouseenter(function(){
	if($(".ab_33").css("display","block")){
		console.log("checkclass:mouseenter");
		$(".ab_33").slideDown();
	}
	
});

$(".i4").mouseleave(function(){
    myTimer=setTimeout(function(){
		$(".ab_33").slideUp();
		console.log(11111);
	},200);
});

$(".ab_33").mouseenter(function(){	
	clearInterval(myTimer);
	//$(this).show();	
});

$(".ab_33").mouseleave(function(){
	$(this).hide();	
})



// $(".a_a").click(function(){
//   $(".a_1").css("display","block");
// })
