// diffrient page 
document.getElementById("discover_somthing").addEventListener("click" , function(){
    window.location.href = "./main.html"
})






//  random collor change

let changeBtn = document.getElementById('click_img')

changeBtn.addEventListener('click',function(){
    document.body.style.backgroundColor = generateRandomColor();
})

function generateRandomColor(){
    let randomColor ="#" + Math.floor(Math.random()*16777215).toString(16)
    return randomColor

}



// button diseble and change number



document.getElementById("first_button").addEventListener("click", function(event){
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 5;
    const retupNumber = document.getElementById("setUp_number").innerText = 24;
      
   
})
document.getElementById("first_button1").addEventListener("click", function(event){
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 4;
    const retupNumber = document.getElementById("setUp_number").innerText = 25;
      
   
})
document.getElementById("first_button2").addEventListener("click", function(event){
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 3;
    const retupNumber = document.getElementById("setUp_number").innerText = 26;
      
   
})
document.getElementById("first_button3").addEventListener("click", function(event){
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 2;
    const retupNumber = document.getElementById("setUp_number").innerText = 27;
      
   
})
document.getElementById("first_button4").addEventListener("click", function(event){
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 1;
    const retupNumber = document.getElementById("setUp_number").innerText = 28;
      
   
})
document.getElementById("first_button5").addEventListener("click", function(event){
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 6;
    const retupNumber = document.getElementById("setUp_number").innerText = 29;
      
   
})
