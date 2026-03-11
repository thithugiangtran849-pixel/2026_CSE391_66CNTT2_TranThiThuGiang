// 1. Click event
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert("Bạn vừa click nút!");
});


// 2. Keyboard event
const input = document.getElementById("keyboardInput");

input.addEventListener("keydown", function(event){
    console.log("Bạn vừa nhấn phím:", event.key);
});


// 3. Form submit và ngăn reload
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Form đã được submit nhưng trang không reload");
});


// 4. Event Bubbling
document.querySelector(".container").addEventListener("click", function(){
    console.log("Container clicked");
});

document.querySelector(".box").addEventListener("click", function(){
    console.log("Box clicked");
});

document.querySelector(".inner").addEventListener("click", function(){
    console.log("Inner clicked");
});


// 5. Event Delegation
const menu = document.getElementById("menu");

menu.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        alert("Bạn chọn: " + event.target.textContent);
    }
});