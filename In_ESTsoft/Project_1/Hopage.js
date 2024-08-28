// 스크롤 시 헤더 고정
window.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.style.position = 'fixed';
            header.style.top = '0';
        } else {
            header.style.position = 'absolute';
            header.style.top = '0';
        }
    });
});



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

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');

    const icon = document.getElementById('menu-icon');
    icon.classList.toggle('close-icon');
}