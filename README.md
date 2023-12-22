# Techit_frontend

-------------

    ※ HTML : 구조 및 내용
    (파일명.html)
    => HyperText Martkup Language

    ※ CSS : 모양 및 스타일
    (파일명.css)
    => Cascading Style Sheets : HTML에 스타일읍 입혀서 가독성을 높이고 기능을 향상시킴
        - Cascading : CSS 설정이 상위 요소에서 하위 요소로 흐르는 것을 빗댄 표현 (폭포처럼 떨어지는, 계단식의)

    ※ JS : 이벤트 및 반응
    (파일명.js)
    => JavaScript : HTML과 CSS로 구성된 웹 페이지에 생명을 불어넣는 역할
        ※ 브라우저가 아닌 환경에서도 JavaScript를 실행할 수 있게 해주는 런타임엔진임

    ※※ (JavaScript와 Java 언어는 전혀 다른, 독립적인 언어들임) ※※
        

    => 웹 페이지를 이루는 세 가지의 축

# HTML Element

    ※ HTML (HyperText Markup Language)

        - HyperText : 텍스트가 링크를 가질 수 있는 형태

        - Markup : 텍스트의 구조 혹은 의미를 부여하는 것을 의미
            ex) <제목>제목</제목>, <부제>부제</부제>, <내용>내용</내용> 
                이와 같은 형식으로 여는 태그와 닫는 태그가 존재
                
        - Language
        
    ※ HTML Attribute(속성)
        - HTML의 요소에 속성을 넣는 것
        ex) 속성이름="속성값" , class="memo"

    ※ HTML Comment(주석)
        - 작성이 되어있는 코드를 브라우저에 뜨지 않도록 무시하는 것
        ex) <!-- 주석처리할 내용 --> 

        - HTML의 주석을 포함한 모든 내용이 서버로 전송되므로 개인정보 등의 노출을 조심해야 함

    ※ HTML 문서 구조
        - Boilerplate : 프론트엔드에서 일정한 규칙을 띄고 있는 것 
        (프레임워크마다 반복적으로 사용되는 구성들)                        
        ex) html에서의 Boilerplate는 두가지 => <head> 태그 & <body> 태그

        - <!DOCTYPE html> : HTML 문서임을 알리는 부분 
        - <html> : HTML 의 내용이 어떤 언어로 사용되어 작성되었는지 명시해주는 부분
            ex) <html land="ko">
        - <head> : 브라우저 화면에 나타나지 않음. 
        웹 문서의 속성, 인코딩 방식, 외부 리소스를 로드하는 등의 설정들이 작성되어 있음.
            => <meta charset="UTF-8"> : 인코딩 방식이 UTF-8 임
            => <meta http-equiv="X-UA-Compatible" content="IE=edge"> : 브라우저 호환성을 설정하는 부분 
            => <meta name="viewport" content="width=device-width, initial-scale=1.0"> :
            width=device-width) 브라우저의 너비를 각 스크린에 맞게 조정되도록 문서에 설정해둔 것, 
            initial-scale=1.0) 초기 배율을 1배로 설정(확대나 축소를 하지 않는다는 의미),
        - <title> : 웹 브라우저의 탭에 표시되는 텍스트를 설정하는 것
        
-------------

# Block Element vs Inline Element (블록 요소와 인라인 요소)

    ※ Block Element (블록 요소) : 태그 자기 자신 앞 뒤에 라인을 구분하고, 브라우저에서 하나의 면을 차지하는 것을 블록 요소라 함
        ex) <h1> ~ <h3>, <p>, <ol>, <ul>, <li>, <div> 등

    ※ Inline Element (인라인 요소) : 줄을 바꾸지 않고 특정 텍스트 영역에서만 영향을 미치는 것. 
        ex) <a>, <span> 등

    => ppt 참조

-------------

# HTML <body>

    ※ heading(h1, h2, h3등) 태그 : 글씨를 키우려는 목적으로 사용하는 것이 아님

    ※ <p> (paragraph) 태그 

    ※ <br> (line breaker) 태그 : 줄바꿈을 할 때 사용

    ※ <ol>, <ul>, <li> 태그 
        => <ol> (ordered list) 태그 : 순서를 매기는 태그
            ※ 하나하나의 요소들을 표시하려면 <li> 태그를 사용해야 함.
        ex) <ol> 
                <li>첫번째 요소</li>
                <li>두번째 요소</li>
                <li>세번째 요소</li>
            </ol>
        
        => <ul> (unordered list) 태그 : 순서를 매기지 않는 태그
            ex) <ul>
                    <li>첫번째 요소</li>
                    <li>두번째 요소</li>
                    <li>세번째 요소</li>
                </ul>

    ※ <a> (anchor) 태그 : 다른 페이지로 이동할 수 있는 태그
        ex) <a href="연결할 url">표시할 텍스트</a>

        만약 새로운 창에서 url을 연결하고 싶다면
        <a href="연결할 url" target="_blank">표시할 텍스트</a>

    ※ <span> 태그 : 텍스트 중 일부만 선택해서 영향을 주고 싶을 때 사용
        ex) <p><span class="">예시 텍스트</span>입니다</p>

    ※ div 태그 : 여러가지 요소들을 묶어서 그룹화 하는 태그
        ex) <div class="그룹화 할 이름">
                <h2>프론트 화이팅</h2>
                <p><span>특별취급할 텍스트☆</span>은<br>너굴맨이 처리했다구~</p>
                <ol>
                    <li> 숫자가 잇는 리스트1 </li>
                    <li> 숫자가 잇는 리스트2 </li>
                </ol>

                <ul>
                    <li> 숫자가 없는 리스트1 </li>
                    <li> 숫자가 없는 리스트1 </li>
                </ul>
            </div>

-------------

# HTML on the Next Level

    ※ OG(Open Graph) 태그 
        ex) 
        <meta property="og:title" content="제목">
        <meta property="og:description" content="설명">
        <meta property="og:image" content="./thumbnail.png">



