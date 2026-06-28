/*==================================================
        RSM AYURVEDA
        LANGUAGE SYSTEM
==================================================*/

let currentLanguage = localStorage.getItem("rsm_language") || "en";

let languageData = {};


/*==============================
Load Language File
==============================*/

async function loadLanguage(lang){

    try{

        const response = await fetch(`assets/data/language-${lang}.json`);

        languageData = await response.json();

        applyLanguage();

        localStorage.setItem("rsm_language",lang);

        currentLanguage = lang;

    }

    catch(error){

        console.error("Language File Not Found",error);

    }

}


/*==============================
Apply Translation
==============================*/

function applyLanguage(){

    document.querySelectorAll("[data-lang]").forEach(item=>{

        const key=item.getAttribute("data-lang");

        if(languageData[key]){

            item.innerHTML=languageData[key];

        }

    });

}


/*==============================
Initialize
==============================*/

document.addEventListener("DOMContentLoaded",()=>{

    loadLanguage(currentLanguage);

});

const langButtons = document.querySelectorAll("#changeLanguage, #changeLanguageMobile");

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        const next = currentLanguage === "en" ? "gu" : "en";

        loadLanguage(next);

    });

});