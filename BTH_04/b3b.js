let currentStep = 1

function showStep(step){

$(".step").removeClass("active")
$("#step"+step).addClass("active")

let percent = (step/3)*100
$("#progressBar").css("width",percent+"%")
$("#progressBar").text("Bước "+step+" / 3")

currentStep = step

}

$("#registerForm").validate({

rules:{
fullname:{
required:true,
minlength:3
},

birthday:{
required:true
},

gender:{
required:true
},

email:{
required:true,
email:true
},

password:{
required:true,
minlength:6
},

confirm:{
required:true,
equalTo:"#password"
}

},

messages:{
fullname:"Nhập họ tên",

birthday:"Chọn ngày sinh",

gender:"Chọn giới tính",

email:"Email không hợp lệ",

password:"Mật khẩu ít nhất 6 ký tự",

confirm:"Mật khẩu không khớp"
}

})


$("#next1").click(function(){

if(
$("input[name='fullname']").valid() &&
$("input[name='birthday']").valid() &&
$("select[name='gender']").valid()
){
showStep(2)
}

})


$("#next2").click(function(){

if(
$("input[name='email']").valid() &&
$("input[name='password']").valid() &&
$("input[name='confirm']").valid()
){

let summary = `
Họ tên: ${$("input[name='fullname']").val()} <br>
Ngày sinh: ${$("input[name='birthday']").val()} <br>
Giới tính: ${$("select[name='gender']").val()} <br>
Email: ${$("input[name='email']").val()}
`

$("#summary").html(summary)

showStep(3)

}

})


$("#back1").click(function(){
showStep(1)
})

$("#back2").click(function(){
showStep(2)
})


$("#registerForm").submit(function(e){

e.preventDefault()

alert("Đăng ký thành công 🎉")

})