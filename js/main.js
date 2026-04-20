// Start Product Information 

// Select All lis In This Section 
let lisOptions = document.querySelectorAll(".product-information .details li");

//Select All Contents 
let allContents = document.querySelectorAll(".product-information .content div");

// When Click On Any Option 
lisOptions.forEach(option => {

    option.onclick = function (e) {

        //Remove Class Active From All Options 
        lisOptions.forEach(li => {

            li.classList.remove("active");

        });

        // Add Class Active To The Current Li 
        e.target.classList.add("active");

        //Remove Class Active From All Contents 
        allContents.forEach(content => {
            content.classList.remove("show");
        });

        //Add Class Active To The Current Content'
        document.querySelector(`.${e.target.dataset.details}`).classList.toggle("show");
    }
})
// End Product Information 

//Span In Footer
//Select The Span
let spanFooter = document.querySelector(".footer .copyright span");

//Define The Object From Date Class
let date = new Date();

//Set The Value Of The Span To The Current Year
spanFooter.textContent = date.getFullYear();

//Span In Footer