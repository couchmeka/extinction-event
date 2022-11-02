let linethrough = document.querySelectorAll('ol li');
let opacityList = document.querySelectorAll('ul li');
let imageRow = document.querySelectorAll('#row img');
let resetButton = document.querySelector('#destroy-all');
let body = document.querySelector('body');


linethrough.forEach(element => {
    
  element.addEventListener('click', function(){

    element.style.textDecoration = "line-through";
  })
});



opacityList.forEach(element => {
    
    element.addEventListener('click', function(){
  
      element.style.opacity = .5;
    })
  });



  imageRow.forEach(element => {
    
    element.addEventListener('click', function(){
  
      element.style.width = "0px";
    })
  });



resetButton.addEventListener('click', function(){

let audio = new Audio('big-impact-7054.mp3');
audio.play();



    for (let i = 0; i < linethrough.length; i++){
      
            linethrough[i].style.textDecoration = "line-through";
    
    }
    
    
    for (let i = 0; i < opacityList.length; i++){
       
    
            opacityList[i].style.opacity = .5;
    
        
    }
    
    for (let i = 0; i < imageRow.length; i++){
      
    
            imageRow[i].style.width = 0;   

}

body.style.backgroundImage = "pictures/giphy.gif"

});
