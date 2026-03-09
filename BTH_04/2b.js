const prices = {
ao:150000,
quan:200000,
giay:500000
}

function updateTotal(){

const product = $("#product").val()
const quantity = Number($("#quantity").val())

if(prices[product] && quantity){

const total = prices[product] * quantity

$("#total").text(total.toLocaleString("vi-VN"))

}

}
$("#product").change(updateTotal)
$("#quantity").on("input",updateTotal)
$("#note").on("input",function(){

const len = $(this).val().length

$("#counter").text(len + "/200")

if(len > 200){
$("#counter").css("color","red")
}else{
$("#counter").css("color","black")
}
})
$("#orderForm").validate({

rules:{

product:{
required:true
},

quantity:{
required:true,
digits:true,
min:1,
max:99
},

date:{
required:true,
},

address:{
required:true,
minlength:10
},

note:{
maxlength:200
},

payment:{
required:true
}

},

messages:{

product:"Chọn sản phẩm",

quantity:{
required:"Nhập số lượng",
digits:"Chỉ nhập số",
min:"Ít nhất 1",
max:"Tối đa 99"
},

date:{
required:"Chọn ngày giao hàng",
},
address:{
required:"Nhập địa chỉ",
minlength:"Ít nhất 10 ký tự"
},

note:{
maxlength:"Tối đa 200 ký tự"
},

payment:"Chọn phương thức thanh toán"

},

submitHandler:function(){

showConfirm()

}

})
function showConfirm(){

const product = $("#product option:selected").text()
const quantity = $("#quantity").val()
const total = $("#total").text()

$("#summary").html(
`
Sản phẩm: ${product}<br>
Số lượng: ${quantity}<br>
Tổng tiền: ${total} đ
`
)

$("#confirmBox").show()

}
$("#confirmBtn").click(function(){

$("#orderForm").hide()

$("#confirmBox").html("Đặt hàng thành công 🎉")

})

$("#cancelBtn").click(function(){

$("#confirmBox").hide()})
