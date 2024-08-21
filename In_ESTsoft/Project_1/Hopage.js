console.log("JavaScript is working");

function openModal() {
    document.getElementById("modal").style.display = "block";
    console.log("JavaScript is working");
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    console.log("JavaScript is working");
}

// 모달 외부 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}
