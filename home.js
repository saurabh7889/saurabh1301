console.log("Portfolio Loaded");

// ABOUT SECTION READY
console.log("About Section Loaded");

/* =========================
   WORK SECTION
========================= */

const projectRows =
document.querySelectorAll(".project-row");

projectRows.forEach((row)=>{

    row.addEventListener("mouseenter",()=>{

        row.style.background =
        "rgba(0,0,0,0.015)";
    });

    row.addEventListener("mouseleave",()=>{

        row.style.background =
        "transparent";
    });

});

/* =========================
   SKILLS HOVER EFFECT
========================= */

const skillColumns =
document.querySelectorAll(".skill-column");

skillColumns.forEach((column)=>{

    column.addEventListener("mouseenter",()=>{

        column.style.opacity="1";
    });

    column.addEventListener("mouseleave",()=>{

        column.style.opacity="0.9";
    });

});

/* =========================
   CONTACT FORM
========================= */

const form =
document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Message sent successfully!");

        form.reset();

    });

}

/* =========================
   BACK TO TOP
========================= */

const backToTop =
document.querySelector(".back-to-top");

if(backToTop){

    backToTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}

