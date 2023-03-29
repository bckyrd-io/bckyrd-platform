/* ON PAGE SCROLL */
const scrl2 = ScrollReveal({ 
  origin: 'top',distance:'100px',
  duration:600,reset:true
});
scrl2.reveal(
  'h1, iframe, .col-section, .max.inverted a img, .left-heading',
  {interval:200}
);
const scrl = ScrollReveal({ 
    origin: 'bottom',distance:'100px',
    duration:400,reset:true
});
scrl.reveal(
  'h2, #post__section p, #events p, .col-section p, footer p',
  {interval:100}
);




/* ACCORDION SERVICES */
function initAccordion(accordionElem){
  //when panel is clicked, handlePanelClick is called.          
  function handlePanelClick(event){
      showPanel(event.currentTarget);
  }
  //Hide current one. First time it will be null
  function showPanel(panel){
      var expandedPanel = accordionElem.querySelector(".active");
      if (expandedPanel){expandedPanel.classList.remove("active");}
      panel.classList.add("active");  //Show new one
  }
  //
  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++){
        allPanelElems[i].addEventListener("click", handlePanelClick);
  }
  showPanel(allPanelElems[0])//By Default Show first panel
}
initAccordion(document.getElementById("accordion"));



/* NAVIGATION MOBILE MENU */
function openNav(){
  var nav_menu = document.getElementById("nav_menu")
  var nav_link = document.getElementById("nav_link")
  nav_link.classList.toggle("change");
  nav_menu.classList.toggle("nav");
}


