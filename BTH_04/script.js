let students = [];

const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const tableBody = document.getElementById("tableBody");
const thongke = document.getElementById("thongke");
const addBtn = document.getElementById("addBtn");

function getRank(score){
    if(score >= 8.5) return "Giỏi";
    if(score >= 7) return "Khá";
    if(score >= 5) return "Trung bình";
    return "Yếu";
}

function renderTable(){

    tableBody.innerHTML = "";

    students.forEach((sv,index)=>{

        const tr = document.createElement("tr");

        if(sv.score < 5){
            tr.classList.add("yeu");
        }

        tr.innerHTML = `
        <td>${index+1}</td>
        <td>${sv.name}</td>
        <td>${sv.score}</td>
        <td>${getRank(sv.score)}</td>
        <td>
            <button data-index="${index}" class="deleteBtn">Xóa</button>
        </td>
        `;

        tableBody.appendChild(tr);
    });

    updateStats();
}

function updateStats(){

    let total = students.length;

    let sum = 0;
    students.forEach(s => sum += s.score);

    let avg = total ? (sum/total).toFixed(2) : 0;

    thongke.textContent =
    `Tổng sinh viên: ${total} | Điểm trung bình: ${avg}`;
}

function addStudent(){

    let name = nameInput.value.trim();
    let score = parseFloat(scoreInput.value);

    if(name === ""){
        alert("Họ tên không được để trống");
        return;
    }

    if(isNaN(score) || score < 0 || score > 10){
        alert("Điểm phải từ 0 đến 10");
        return;
    }

    students.push({
        name: name,
        score: score
    });

    renderTable();

    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
}

addBtn.addEventListener("click", addStudent);

scoreInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addStudent();
    }
});

tableBody.addEventListener("click", function(e){

    if(e.target.classList.contains("deleteBtn")){

        let index = e.target.dataset.index;

        students.splice(index,1);

        renderTable();
    }

});