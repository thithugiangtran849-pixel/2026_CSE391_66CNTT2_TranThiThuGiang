const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

button.addEventListener("click", loadUsers);

// 1 + 2 + 3 + 4
async function loadUsers(){

    try{

        // 2. Gọi API bằng Fetch
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // kiểm tra lỗi kết nối
        if(!response.ok){
            throw new Error("Không thể lấy dữ liệu");
        }

        // 4. Chuyển dữ liệu sang JSON
        const users = await response.json();

        console.log(users);

        // 5. Hiển thị lên DOM
        displayUsers(users);

    }
    catch(error){

        console.log("Có lỗi xảy ra:", error);

        userList.innerHTML = "Không thể tải dữ liệu";

    }

}


// 5. Hiển thị dữ liệu lên giao diện
function displayUsers(users){

    userList.innerHTML = "";

    users.forEach(function(user){

        const div = document.createElement("div");

        div.classList.add("user");

        div.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
        `;

        userList.appendChild(div);

    });

}