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
    alert('Board updated Successfully')
    
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 5;
    const retupNumber = document.getElementById("setUp_number").innerText = 24;
    document.getElementById("activity1").innerText="You have complate the task Fix mobile issu at 12 : 48 : 15 PM"
      
   
})
document.getElementById("first_button1").addEventListener("click", function(event){
    alert('Board updated Successfully')
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 4;
    const retupNumber = document.getElementById("setUp_number").innerText = 25;
     document.getElementById("activity1").innerText="You have complate the task Add Dark Modeat 12 : 48 : 15 PM"
      
   
})
document.getElementById("first_button2").addEventListener("click", function(event){
    alert('Board updated Successfully')
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 3;
    const retupNumber = document.getElementById("setUp_number").innerText = 26;
     document.getElementById("activity1").innerText="You have complate the task Optimize Home page  at 12 : 48 : 15 PM"
      
   
})
document.getElementById("first_button3").addEventListener("click", function(event){
    alert('Board updated Successfully')
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 2;
    const retupNumber = document.getElementById("setUp_number").innerText = 27;
     document.getElementById("activity1").innerText="You have complate the task Add new emojiat 12 : 48 : 15 PM"
      
   
})
document.getElementById("first_button4").addEventListener("click", function(event){
    alert('Board updated Successfully')
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 1;
    const retupNumber = document.getElementById("setUp_number").innerText = 28;
     document.getElementById("activity1").innerText="You have complate the task Integrate OpenAI APIat 12 : 48 : 15 PM"
      
   
})
document.getElementById("first_button5").addEventListener("click", function(event){
    alert('Board updated Successfully')
    event.target.disabled = true;
    const renainTask = document.getElementById("remain_task").innerText = 6;
    const retupNumber = document.getElementById("setUp_number").innerText = 29;
     document.getElementById("activity1").innerText="You have complate the task Improve Job searchingat 12 : 48 : 15 PM"
      
   
})


document.getElementById("clearHistory").addEventListener("click", function(){
     document.getElementById("activity1").innerText = " "
})
document.getElementById("clearHistory").addEventListener("click", function(){
     document.getElementById("activity2").innerText = " "
})
document.getElementById("clearHistory").addEventListener("click", function(){
     document.getElementById("activity3").innerText = " "
})
document.getElementById("clearHistory").addEventListener("click", function(){
     document.getElementById("activity4").innerText = " "
})
document.getElementById("clearHistory").addEventListener("click", function(){
     document.getElementById("activity5").innerText = " "
})
document.getElementById("clearHistory").addEventListener("click", function(){
     document.getElementById("activity6").innerText = " "
})











// document.getElementById("clearHistory").addEventListener("click", function () {
//     document.querySelectorAll(".text-sm.text-gray-700.space-y-2 li").forEach(function (element) {
//         element.textContent = "";
//     });
// });