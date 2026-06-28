document.addEventListener("DOMContentLoaded",()=>{

const popup=document.getElementById("languagePopup");

const continueBtn=document.getElementById("continueBtn");

const closeBtn=document.getElementById("closePopup");

if(!localStorage.getItem("popupSeen")){

popup.style.display="flex";

}else{

popup.style.display="none";

}

function closePopup(){

popup.style.display="none";

localStorage.setItem("popupSeen","yes");

// Default Language

if(!localStorage.getItem("rsm_language")){

localStorage.setItem("rsm_language","en");

}

}

continueBtn.addEventListener("click",closePopup);

closeBtn.addEventListener("click",closePopup);

});