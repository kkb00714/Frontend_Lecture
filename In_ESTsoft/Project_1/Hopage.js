console.log("JavaScript is working");

function openModal() {
    document.getElementById("modal").style.display = "block";
    console.log("JavaScript is working");
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    console.log("JavaScript is working");
}

// 모달 외부 클릭 시 모달 닫기 (임시)
window.onclick = function(event) { 
    if (event.target == document.getElementById("modal")) { 
        closeModal(); 
    } 
} 

document.querySelector('.upbutton-center').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    const upButton = document.getElementById('upbutton');
    const footer = document.querySelector('footer');
    
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (window.scrollY > 100) {
        // 특정 픽셀 이상 스크롤했을 때
        upButton.classList.add('show-upbutton');
    } else {
        upButton.classList.remove('show-upbutton');
    }
});