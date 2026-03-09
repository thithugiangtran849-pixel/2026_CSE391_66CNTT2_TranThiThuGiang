document.addEventListener("DOMContentLoaded", function(){

const password = document.getElementById("password");
const strength = document.getElementById("strength");
const toggle = document.getElementById("togglePassword");
const fullname = document.getElementById("fullname");
const charCount = document.getElementById("charCount");

/* Đếm ký tự */

if(fullname){
fullname.addEventListener("input", function(){
charCount.textContent = fullname.value.length + "/50";
});
}

/* Toggle password */

if(toggle){
toggle.addEventListener("click", function(){
password.type = password.type === "password" ? "text" : "password";
});
}

/* Password strength */

if(password){

password.addEventListener("input", function(){

let value = password.value;

strength.classList.remove("weak","medium","strong");

let hasUpper = /[A-Z]/.test(value);
let hasLower = /[a-z]/.test(value);
let hasNumber = /[0-9]/.test(value);
let hasSpecial = /[^A-Za-z0-9]/.test(value);

if(value.length < 8){
strength.classList.add("weak");
}
else if(hasUpper && hasLower && hasNumber && hasSpecial){
strength.classList.add("strong");
}
else{
strength.classList.add("medium");
}

});

}

});