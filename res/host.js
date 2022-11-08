/**
 * ON PAGE SCROLL
 * **/
const scrl2 = ScrollReveal({ 
  origin: 'bottom',distance:'200px',
  duration:600,reset:true
});
scrl2.reveal(
  'h2,img,#events p,.brick,.left-heading,iframe',
  {interval:50}
);
const scrl = ScrollReveal({ 
    origin: 'top',distance:'400px',
    duration:400,reset:true
});
scrl.reveal(
  'h1,#events,#post__section p,.col-section',
  {interval:100}
);





/**
 * SHUFFLE THE GALLERY 
 * MASONRY IMAGES
 * **/
var counter = 0;
$('.brick img').each(function(i) {
   if (i == 0) {counter = 0;} else {counter++; }
   if (counter < 6) { $(this).addClass('show');
   } else { $(this).addClass('hide');}
});
function shuffleRandomLogos(remove, add) {
  const logo = $("."+remove).toArray();
  const logoLength = logo.length;
  const randomNum = Math.floor(Math.random()*logoLength);
  const randomLogo = logo[randomNum];
  $(randomLogo).removeClass(remove);
  $(randomLogo).addClass(add);
}
window.setInterval(function(){
  shuffleRandomLogos("show", "hide");
  shuffleRandomLogos("hide", "show");
}, 400);



/** 
 * ACCORDION
 * **/
function initAccordion(accordionElem){
  //when panel is clicked, handlePanelClick is called.          
  function handlePanelClick(event){ showPanel(event.currentTarget); }
  //Hide currentPanel and show new panel.//Hide current one.  
  function showPanel(panel){
      var expandedPanel = accordionElem.querySelector(".active");
      if (expandedPanel){expandedPanel.classList.remove("active");}
      panel.classList.add("active");//Show new one
  }
  //
  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++){
      allPanelElems[i].addEventListener("click", handlePanelClick);
  }
  //By Default Show first panel
  showPanel(allPanelElems[0]);
}
initAccordion(document.getElementById("accordion"));



 /**
  * NAVIGATION MOBILE MENU
  * **/
function openNav(){
  var nav_menu = document.getElementById("nav_menu")
  var nav_link = document.getElementById("nav_link")
  nav_link.classList.toggle("change");
  nav_menu.classList.toggle("nav");
}


