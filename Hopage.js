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

// 구독 이메일 validation 검사
function validateEmail() {
    const email = document.getElementById("email");
    const emailValue = email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
        alert("이메일을 입력해주세요.");
        return false;
    }

    if (!emailPattern.test(emailValue)) {
        alert("유효한 이메일 주소를 입력해주세요.");
        return false;
    }

    return true;
};

// 구독 버튼 클릭 시 모달 열기
function handleSubscribe() {
    if (validateEmail()) {
        openModal();
    }
};

// 모달 열기
function openModal() {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden";
};

// 모달 닫기 및 폼 제출
document.getElementById("modal-submit").addEventListener("click", function () {
    document.getElementById("subscribe-form").submit();
    closeModal();
});

// 모달 닫기 함수
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "";
};

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

// 모바일 네비게이션 열기
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');

    const icon = document.getElementById('menu-icon');
    icon.classList.toggle('close-icon');
};

// 모바일 네비게이션 닫기
function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('open');
};

// 뒤로가기 아이콘 클릭 시 닫기 함수 호출
window.addEventListener('DOMContentLoaded', function() {
    const closeIcon = document.getElementById('menu-icon');

    closeIcon.addEventListener('click', function() {
        closeMenu();
    });
});