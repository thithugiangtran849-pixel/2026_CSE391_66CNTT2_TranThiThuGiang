$(document).ready(function() {
    $.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
}, "Chỉ được nhập chữ cái");
    $('#registerForm').validate({
        rules:{
            fullname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
            },
            password: {
                required: true,
                minlength: 8,
            },
            confirmPassword: {
                required: true,
                equalTo: '#password',
            },
            gender:{
                required: true,
            },
            terms: {
                required: true,
            },
        },
        messages: {
            fullname: {
                required: "Vui lòng nhập họ và tên",
                minlength: "Họ và tên phải có ít nhất 3 ký tự",
                lettersonly: "Họ và tên chỉ được chứa chữ cái"
            },
            email: {
                required: "Vui lòng nhập email",
                email: "Vui lòng nhập email hợp lệ"
            },
            phone: {
                required: "Vui lòng nhập số điện thoại",
                digits: "Số điện thoại chỉ được chứa chữ số",
                minlength: "Số điện thoại phải có ít nhất 10 ký tự"
            },
            password: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu phải có ít nhất 8 ký tự"
            },
            confirmPassword: {
                required: "Vui lòng xác nhận mật khẩu",
                equalTo: "Mật khẩu xác nhận không khớp"
            },
            gender: {
                required: "Vui lòng chọn giới tính"
            },
            terms: {
                required: "Vui lòng đồng ý với điều khoản sử dụng"
            }
        }
    });
});