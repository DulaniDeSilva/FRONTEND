//alert("Hello external js");

//selecting elements 


//document.querySelector("h1").innerHTML = "Hello Dulani";
// ("#title")
// (.btn)
// space between the selecetors as they are following a heirrarchy
//anchoor tag inside list '
//document.querySelector("li a");
//document.getElementsByTagName("li")[2].style.color = "purple";
//even though the list contains one element accessing is doone using array indexing
// important "Elements"
//document.getElementsByClassName("btn")[0].style.color = "black";
//but getElementById() => this selects only one element

//if the selector matches more than one selector
//document.querySelector("#list .item") 
//this provides the first element of the selected list


// document.querySelector("li a");
// document.querySelector("li a").style.color = "red;"

//manipulating the query selector elements
document.querySelector("h1").style.color = "black";
document.querySelector("h1").style.fontSize = "2rem";

//changing the background color to green
document.querySelector("button").style.backgroundColor = "green";

document.querySelector("button").classList;
document.querySelector("button").classList.add("invisible");
//turn on and off the css styles using invisible

// toggle: if invisible keep invisible else do invisible

document.querySelector("h1").classList.add("huge");



// Manupulating and text content property
document.querySelector("h1").textContent; 
//"Hello"
document.querySelector("h1").innerHTML;
//<strong>Dulani</strong>
document.querySelector("h1").innerHTML = "<em>Goodbye</em>"

//Manupulating html elements
// class, href, a ; every thing does inside a tag
document.querySelector("a");
document.querySelector("a").attributes; //gives all the attributes
document.querySelector("a").getAttribute("href"); //should specify the which attribute wants
document.querySelector("a").setAttribute("href", "https://www.bing.com"); //sets attribute
 