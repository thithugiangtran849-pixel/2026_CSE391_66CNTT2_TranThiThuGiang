let students = [];
let filteredStudents = [];
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const tableBody = document.getElementById("tableBody");
const thongke = document.getElementById("thongke");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchName");
const filterRank = document.getElementById("filterRank");
const sortScore = document.getElementById("sortScore");

let sortDirection = "asc";

function getRank(score){
    if(score >= 8.5) return "Giỏi";
    if(score >= 7) return "Khá";
    if(score >= 5) return "Trung bình";
    return "Yếu";
}

function renderTable(){

    tableBody.innerHTML = "";
    if(filteredStudents.length === 0){
        tableBody.innerHTML =
        `<tr><td colspan="5">Không có kết quả</td></tr>`;
        return;
    }


filteredStudents.forEach((sv,index)=>{

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
searchInput.addEventListener("input", applyFilters);
filterRank.addEventListener("change", applyFilters);

function applyFilters(){

    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedRank = filterRank.value;

    filteredStudents = students.filter(s => {

        const matchName = s.name.toLowerCase().includes(searchTerm);
        const rank = getRank(s.score);

        const matchRank = selectedRank === "all" || rank === selectedRank;

        return matchName && matchRank;
    });

    filteredStudents.sort((a,b)=>{
        if(sortDirection === "asc"){
            return a.score - b.score;
        }else{
            return b.score - a.score;
        }
    });

    renderTable();
}
sortScore.addEventListener("click", function(){

    if(sortDirection === "asc"){
        sortDirection = "desc";
        sortScore.textContent = "Điểm ▼";
    }else{
        sortDirection = "asc";
        sortScore.textContent = "Điểm ▲";
    }

    applyFilters();
});
function updateStats(){

    let total = filteredStudents.length;

    let sum = 0;
    filteredStudents.forEach(s => sum += s.score);

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

    applyFilters();

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

        applyFilters();
    }

});
applyFilters();