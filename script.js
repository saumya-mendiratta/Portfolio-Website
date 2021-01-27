
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

