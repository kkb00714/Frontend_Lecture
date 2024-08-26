// 모달
function openModal() {
    document.getElementById("modal").style.display = "block";
    console.log("JavaScript is working");
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    console.log("JavaScript is working");
}

// 스크롤 이벤트 처리
window.addEventListener('DOMContentLoaded', function() {
    const upButton = document.querySelector('.upbutton');
    const lastPicture = document.querySelector('.last-picture');
    const footer = this.document.querySelector('footer');

    // 스크롤이 100 이상일 때 버튼 노출
    window.addEventListener('scroll', function() {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (window.scrollY > 100) {
            upButton.classList.add('show-upbutton');
        } else {
            upButton.classList.remove('show-upbutton');
        }

        if (footerPosition <= windowHeight) {
            upButton.classList.remove('fixed');
            upButton.classList.add('absolute');
        } else {
            upButton.classList.remove('absolute');
            upButton.classList.add('fixed');
        }
    });

    upButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});