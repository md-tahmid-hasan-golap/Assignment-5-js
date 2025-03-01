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

