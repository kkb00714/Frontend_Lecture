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

    ※ 레이아웃
        - header : 머릿말과 같은 성질 (서비스를 대변하는 무언가를 나타내거나 서비스를 설명하는 등)

        - nav (navigation) : 메뉴와 같은 성질

        - section : 실제 내용들이 들어가는 부분

        - footer : 저작권 정보, 다른 사이트로 이동하는 경로, 서비스 배포자의 연락처 등의 다양한 정보들이 들어감.

    ※ sementic web => 의미가 잘 전달되는 웹

    
☆ Github Pages 배포 => ※※ 

-------------

# CSS Beginner

☆웹 페이지☆를  ~아**♡* 름*♡*답 *♡**게~

    ※ CSS (Cascading Style Sheets)
    ex) <link rel="stylesheet" href="CSS 파일의 위치(./style.css)">

    ※ Box-Sizing : 박스에 적용된 사이즈의 기준 정하기 
        ex) ** 나머지 자료는 ppt 참조

        => 두 예시의 차이점은?

        - 요소 사이즈에 패딩과 테두리 포함 x
            div{
                box-sizing: content-box;
                width: 100px;
                padding: 5px;
            }
            => 내용이 차지하는 영역에만 100px으로 하고, padding은 따로 5px만큼이 추가됨. (즉, 화면에서 차지하는 전체 요소는 110px 을 가지게 됨) ※ 생각했던 요소 + a

        - 요소 사이즈에 패딩과 테두리 포함 o 
            div{
                box-sizing: border-box;
                width: 100px;
                padding: 5px;
            }
            => 테두리부터 내용까지의 모든 곳을 100px 으로 하고, padding이 양쪽에 5px만큼 있으니까 내용이 90px을 차지하게 됨. (즉, 화면에서 차지하는 전체 요소가 100px 임) 

    ※ 따라서 테두리를 포함하여 사이즈를 적용하는 매직 키워드를 하나 넣은 이후 CSS을 작업하는 게 좋음.

    ※ 기본값은 내용이 차지하는 영역에만 사이즈(width, height)가 적용되는 content-box => universal selector로 전체 적용할 수 있음
        ex) *{
            box-sizing: border-box;
        }
    
    ------

    ※ CSS 구성

    ※ 선택자(Selector) : 어떤 HTML 요소에 스타일을 적용할 지 선택
        ex) h1 {
            color: brown;
        }

        => h1이 선택자, 
        color 가 property(속성 - 스타일을 부여할 항목), 
        brown이 value(값 - 속성에 대한 값)
        
        => color: brown; 부분을 declaration(선언 - 속성과 값을 합한 부분)

        => h1부터 코드 끝까지를 rule(규칙 - 선택자와 선언부의 조합)

    ※ CSS_Practice/practice1 참조

    ------

    ※ CSS 특징 (상속, 우선순위)
    
    1) 태그의 속성이 중복 선언되어있다면, 마지막으로 작성된 규칙을 적용

    2) 부모 요소의 CSS 규칙을 자식 요소가 상속받아 적용
        ex) div {
            color: pink;
        }
        => 일 때, div 태그 내에 있는 나머지 태그들에 CSS를 적용
            (div 내의 태그들이 분홍색)

        ※ 단!!! ※ 자식 요소가 CSS 규칙을 가지고 있다면 이를 우선하여 적용함

        ex) div {
            color: pink;
        }
        
        p.coding {
            color: lime;
        }

        => div 태그 내에 존재하는 p 태그라고 가정했을 때, p 태그는 라임색, 나머지 태그들은 분홍색으로 적용
        

    ※ 우선순위 
    => HTML 요소의 속성 > id로 선택된 요소 > class로 선택된 요소 > 태그의 이름으로 선택된 요소

    ※ 



