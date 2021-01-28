
// -----------SMOOTH SCROLL---------------------

var navMenuTabs =document.querySelectorAll('.nav-menu a');
// console.log(navMenuTabs);
//global beacuse it is used in for loop and function both
var scroll;

for(var i=0;i<navMenuTabs.length;i++){

    navMenuTabs[i].addEventListener('click', function(event){
        var targetSectionID = this.textContent.trim().toLowerCase();
        if(targetSectionID !="contact"){
             event.preventDefault();
        }
             var targetSection=document.getElementById(targetSectionID);
            //   console.log(targetSection);
            // console.log(targetSectionID);
            
            if(targetSectionID !="contact"){
    //1.passing argument to verticalScroll func in 3rd argument ,
     //cannot pass in () that makes function call 
            //   scroll= setInterval(verticalScroll,20 ,targetSection);

            //2nd method 
              scroll= setInterval(function(){
                verticalScroll(targetSection);
              },20)
                }
    });

}

function verticalScroll(targetSection){
        var coordinates= targetSection.getBoundingClientRect();
                if(coordinates.top<=0){
                    clearInterval(scroll);
                }else{
                    window.scrollBy(0,30);
                }
            }


            
// --------------FILL SKILL BARS----------------------------------

// var progressBars = document.querySelectorAll('.skills-progress > div');
// // console.log(progressBars);
// var skillsContainer = document.getElementById('skills-container');
// var animationDone=false;

// window.addEventListener('scroll', checkScroll);

// function initialiseBars(){
//   for(let bar of progressBars){
//     bar.style.width = 0 + '%';
//   }
// }
// initialiseBars();

// function fillBars(){
//   for(let bar of progressBars){
//     let targetWidth=bar.getAttribute('data-bar-width');
//     let currentWidth=0;
//     let interval = setInterval(function(){
//             if(currentWidth>targetWidth)
//             clearInterval;
//             else{
//               currentWidth++;
//               bar.style.width = currentWidth + '%';
//             }
//     },10)
//   }
// }

// function checkScroll(){
// //check wheather skills-container is visble or not 
// var coordinates = skillsContainer.getBoundingClientRect();
// if(!animationDone && coordinates.top < window.innerHeight){
   
//   animationDone=true;
//   // console.log('skills section visible');
//      fillBars();
// } else if( coordinates.top > window.innerHeight){
//   animationDone=false;
//   initialiseBars();
// }
// }

var progressBars = document.querySelectorAll(".skills-progress > div");


function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 10);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top < (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
 
