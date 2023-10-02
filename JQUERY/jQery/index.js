$("h1").css("color", "red");


//we can use $ mark instead of writing document.QuerySelector().....

// document.querySelectorAll("button");
// $("button");
//these are both same

// if two properties are thers then it is setting

$("h1").addClass("big-title");
//remove class
$("h1").removeClass("big-title");

//when adding two classes clases should be seperated by
// a single space
$("h1").addClass("big-title margin-50");

//checking whether an element is appied by a class
$("h1").hasClass("Margin-50");

//changing text
$("h1").text("Dulani");
//by using these method it applies to all the elements of h1

$("button").html("<em>Hi Sasa </em>");

//manupulating attribute 0 
$("img").attr("src");
console.log($("img").attr("src"));

//setting 
$("a").attr("href", "https://www.yahoo.com");


//adding event listners
$("h1").click(function(){
    $("h1").css("color", "purple");
})

//adding event listener to the buttons
for(var i = 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventLister("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}

$("button").click(function(){
    $("h1").css("color","purple");
});


$("input").keypress(function(event){
    console.log(event.key);
});

//creating html eements with jquery
// creating a button:
$("h1").before("<button>New</button>"); //befire ttge oening tage of the seected methd
$("h1").after("<button>New</button>");//after tge selected method
$("h1")prepend("<button>New</button>");
$("h1").append("<button>New</button>");


//removing
$("button").remove //this ren=movves all the button

//animations
//fade toggle, hiding, slide up 
//custome css = . animate  




