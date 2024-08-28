# Frontend_Lecture

branch Test

# FE 프로젝트
https://kkb00714.github.io/Frontend_Lecture/

피그마 링크와 요구사항 명세를 참고하여 랜딩페이지를 만들어 보도록 합니다. 모바일 화면도 고려하여 과제를 수행해야 합니다.

## 3.1 피그마 링크

[https://www.figma.com/design/s9RCnA6dSi3QHHeMDFHKE6/EST-오르미(BE)_HTML%2FCSS%2FJS?node-id=104924-12&t=DkHqKMa1PBxYw4n3-0](https://www.figma.com/design/s9RCnA6dSi3QHHeMDFHKE6/EST-%EC%98%A4%EB%A5%B4%EB%AF%B8(BE)_HTML%2FCSS%2FJS?node-id=104924-12&t=DkHqKMa1PBxYw4n3-0)

## 3.2 요구사항 명세

1. 피그마를 참고하여 페이지 구현을 합니다.
2. 모바일 화면도 고려하여 페이지 구현을 합니다.
3. 스크롤시 헤더가 고정되게 합니다. (단, 처음에는 고정된 상태가 아닙니다.)
4. 스크롤 탑 버튼을 구현합니다. 
    1. 스크롤 탑 버튼은 스크롤시 나타납니다.
    2. 스크롤 탑 버튼은 푸터 아래로 내려가지 않습니다.
    3. 스크롤 탑 버튼을 누르면 스크롤이 최상단으로 올라갑니다. (단, 부드럽게 올라가야 합니다.)
5. 구독하기 모달창
    1. 이메일을 입력하고 `Subscribe` 버튼을 클릭하면 모달창이 나타납니다.
    2. 이메일 유효성 검사를 진행해야 합니다. (값이 들어가지 않거나 이메일 형식이 유효하지 않으면 alert 창으로 경고 문구가 떠야합니다.)
    3. 이메일이 잘 입력되었다면 모달창이 뜹니다. 이때 모달창의 `OK! I love HODU` 버튼을 클릭하면 form이 제출되고 모달창이 닫힙니다.






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

-------------

# Box Model

    ※ Box (Inline Box & Block Box)

    ※ Inline Box (displat:inline)
        - 한 줄에 표시됨
        - <a>, <img>, <span> 
        - 태그로 감싸진 내용만큼만 영역을 차지
        - width와 height로 요소의 크기를 조절할 수 없음
        - inline은 좌우 margin, padding만 적용

    ※ Block Box (display:block)
        - 개별 요소마다 줄을 바꿈
        - <h1>, <p>, <div>
        - width와 height로 요소의 크기를 조절
        - 내용과 별개로 자신의 영역을 가짐

    ※※ block은 가지지만 inline은 가지지 못하는 것은? ※※
        => width, height, margin, padding
        
        - inline은 좌우 margin, padding만 적용 가능하므로

        - inline에 적용되는 것처럼 보이는 상하 padding은 레이아웃에 영향을 미치지 못함

    ※ inline-block (display:inline-block)
        - inline과 block의 특징을 모두 포함함
        - 줄을 바꾸지 않음
        - block처럼 width와 heigh를 가짐
        - 상하 margin, padding이 레이아웃에 유효함

    ------

    ※ Box Model
        => Block Box가 가지는 기본 모델

        ※ Margin : 테두리로부터 다른 요소까지의 거리
            ex) div {
                margin: 20px;
            }
            => 상하좌우에 모두 같은 값을 적용
            
            margin: 상하px 좌우px;

            *혹은  margin: 상px 우px 하px 좌px; (네 개의 값은 위쪽부터 시계방향으로 이동한다고 암기)

            *혹은 margin-top, margin-right, margin-bottom, margin-left 으로 설정도 가능

        ※ Border : 내용을 둘러싼 테두리
            ex) div {
                border : 6px solid blue;
            }

            => 6px 두께, 실선, 파란색

            => 하나의 속성에 두께, 유형, 색상 적용 가능

            => border-width, border-style, border-color 등으로도 사용 가능

        ※ Padding : 내용으로부터 테두리까지의 거리
            ex) div {
                padding: 4px;
            }
            => 상하좌우에 같은 값 적용 

            padding: 상하px 좌우px;

            *혹은  padding: 상px 우px 하px 좌px; (네 개의 값은 위쪽부터 시계방향으로 이동한다고 암기)

            *혹은 padding-top, padding-right, padding-bottom, padding-left 으로 설정도 가능

    ------

    ※ CSS 단위
        - px : 스크린을 구성하는 작은 점

        - % : 부모 요소를 기준으로 크기를 설정
        
        -rem/em : em(부모 요소의 폰트 크기), rem(루트 요소의 폰트 크기)
        => 폰트 크기에 비례하여 설정 가능

        => 상위 요소의 크기 값에 em 값을 곱하는 방식으로 요소의 크기를 결정 (※ 예시 참조 ※)

    ※ 따라서 최상위 요소인 <html>의 폰트 사이즈를 기준으로 크기 설정

    ※ 통일도니 기준을 잡기 위해서는 rem 단위 사용 권장

    ※ vw & vh 
        - view port : 각 디바이스별 화면의 너비/ 높이를 기준으로 배율 설정

        - vh : 현재 화면만큼의 높이를 지정

    ------

    ※ 이미지 삽입 방법
    => <img src="이미지 경로" alt="대체 문구">
    (꼭 div로 마크업 후 사용해야 함)

        ex) img {
            max-width: 100%;
        }
        => 부모 영역에서 벗어나지 않도록 이미지의 너비 상한선을 100%로 설정
        
        img {
            object-fit: cover;
        }
        => 이미지를 부모 요소 영역의 크기만큼 확대/축소 하여 채움

        img {
            object-fit: contain;
        }
        => 이미지의 비율을 유지하면서 크기를 변경하여 부모 요소를 채움

        img {
            object-fil: fill;
        }
        => 이미지의 비율을 유지하지 않고 부모 요소의 크기에 맞게 변경하여 채움 (원본 비율이 훼손됨)

    ------

    ※ overflow 설정 
    => 부모 영역을 벗어나게 될 때, 그 값을 무시해버리게 하는 것

    ex) div {
        overflow: hidden; or overflow: scroll;
    }
    => hidden은 숨기는 것, scroll은 잘린 값을 스크롤을 하여 볼 수 있게 함

    overflow-x: scroll; , overflow-y: scroll; 속성들은 각각 좌우, 상하만 스크롤이 가능하도록 됨

    overflow-auto: scroll; 으로 지정하면 자동으로 지정해줌

    ------

    ※ 폰트 꾸미기 

        - color

        방법 1) 일반적으로 색상을 넣을 때
            p {
                color: 색상;
            }

        방법 2) Hex color를 통해 RGB를 각각 지정해줌
            => 각각 16진수로 나타내어 조합
            #00(Red)00(Green)00(Blue)

        - font

        ex) 
            html {
                font-size: 10px;
            }

            p {
                font-size: 0.5rem;
                font-style: italic;
                font-style: bold;
            }
            
            => html의 1/2이므로 p의 폰트 사이즈는 5px, 
            italic체로 작성(기울임체)
            bold는 굵게 작성

        - underline

        ex)
            p {
                text-decoration: underline;
                text-decoration: none;
            }
            => underline은 밑줄 표시를 하는 것, none은 표시를 없애는 것

            만약 밑줄표시가 기본으로 되어있는 a 태그의 경우! (순서는 a, a:link, a:visited 고정으로 할 것)

            a {
                text-decoration: none;
            }

            a:link{
                color:black;
            }
            => 클릭한 적이 없는 링크

            a:visited {
                color: black;
            }
            => 클릭한 적이 있는 링크


    ------

    ※ 테두리 

        <div clsas="container">
            <p>예시 내용</p>
        </div>

        ex) .container {
            border-width: 2px;
            border-style: solid;
            border-color: blue;
        }
        => width는 두께를 가리킴, solid는 실선을 가리킴, color는 테두리의 색상

        ※ 위의 코드를 조금 더 간단하게 작성해보면, 아래와 같이 표현가능 (border: 두께 스타일 색상;)

        .container {
            border: 2px solid blue;
            border-radius: 20px;
        }
        => border-radius : 반경 값을 넣어 모서리를 둥글게 함

    ------

    ※ 배경 설정

        .container {
            background-color: yellow;
            background-image: url(이미지.jpg)
            background-repeat: no-repeat;
            background-size: contain;
            background-size: cover;
            background-position: center;
        }
        => 배경에 색상을 추가하거나 이미지를 사용할 수 있음

        => 배경에 이미지를 집어넣을 때 이미지가 반복되어서 들어갈 수가 있음 (no-repeat 속성을 통해 이미지 반복을 방지함)

        => contain : 이미지가 온전히 표시되는 것이 우선됨

        => cover: 요소의 배경을 모두 덮는 것이 우선

        => center: 이미지의 위치를 가운데로 옮김

    ※ 이미지를 레이아웃에 맞는 해상도로 크롭해서 사용하는 것이 BEST ※

    ------

    ※ 요소 정렬하기

        - margin: 0 auto;
            => 가운데로 요소의 위치를 맞춤 (margin의 값을 동일하게 맞춰서 요소들이 가운데로 모일 수 있도록 하는 원리)
        
            => 부모의 block 요소의 width를 기준으로 자동으로 margin 계산

        - text-align: center;
            => 블록 요소 내의 인라인 요소를 가운데로 정렬 (부모 태그 하위에 있는 inline 요소일 때 사용 가능)
        
        
        ※ 부모 요소가 block 이고 정렬하려는 자식 요소가 inline 일때 사용

-------------

# CSS on the Next Level

    ※ Float : (떠오르다) 자식이 부모로부터 margin을 없애버린다?
        => 자식 요소의 width 값 자체가 바뀌는 게 아니라, 부모 요소의 width 값 만큼 margin이 생기는 것!

        ※ 가로 배치가 되지 않고 겹쳐지는 요소를 어떻게 해야 할까?
            => 가로 배치를 하고 싶은 요소에 전부 float 선언을 하는 것!

        ex) 
        div class가 각각 pink, blue 두개가 있다고 가정

        div.pink, div.blue {
            width: 50px;
            height: 50px;
            float: left;
        }
        => float 속성에 상하좌우로 배치가 가능함

    ------

    ※ Clear : float로 인해 없어진 margin 영역에 대응하기 위한 방책이 clear
        => 즉, float로 없어진 margin 영역을 무시하고 올라가지 않도록 처리
        
        div.pink {
            float: left;
        }
        => 이 div는 margin이 사라짐


        div.blue {
            clear: left;
        }
        => 이 div는 margin이 사라지지 않음

    ※ Clearfix : clear라는 속성으로 Layout을 바로잡는 기법
        ex) 
        (범람을 막고 싶은 요소)::after {
            content: " ";
            display : block;
            clear: both;
        }


    ※ Flex, Flexbox
    => 가로 배치를 해결

        ex) div:last-child {
            margin : 0
        }
        => 가장 마지막에 작성된 요소

    ※ Float, Flexbox 차이점? 

    ------
    
    ※ Position

        - static : 모든 요소의 디폴트 값. (생성된 원래 위치)

        - relative : 원래 위치를 기준으로 요소를 움직일 때 사용
            ex) div {
                position: relative;
                left: 50px;
            }
            => 왼쪽에서 50px 떨어진 거리에 위치하게 됨. 
            (원래 위치에서 얼마나 떨어뜨릴 것인지)
        
        - absolute : Position이 static이 아닌 가장 가까운 부모를 기준으로 함
        ex) div {
                position: abosolute;
                left: 50px;
            }
            => body를 기준으로 위치를 움직임 

            => .relative {
                position: relative;
            }

            div {
                position: absolute;
                left: 30px;
            }  
            => 부모 요소가 어떤 position을 가지고 있느냐에 따라 바뀔 수 있음

        ※ 전체적인 흐름에서 벗어나 부모를 기준으로 위치만 변경


        - fixed : 브라우저 창을 기준으로 고정된 위치
        ex) div {
            position: fixed;
            top: 0;
            left: 0;
        }
        => 좌측 상단에 고정되어 있음 (bottom, right 등 지정 가능)

        - sticky : 스크롤로 특정 위치에 도달하면 고정
        ex) div {
            position: sticky;
            top: 0;
        }
        => (스크롤을 올렸을 때) top 0 에 도달하면 멈춤

    ------

    ※ Grid : 열(列)이 12개이고 행(行)이 무한한 바둑판
    => 즉, 페이지 레이아웃의 가이드 라인

        - container : Grid system이 적용될 영역

        - row : 가로 부분 행. floatehls column.

        - column : 세로 부분 열. 요소의 위치 결정에서 실직적인 역할 수행

        - gutter : row와 column 사이의 간격

    ※ width가 1080px인 box에 구성한 가장 기본적인 grid system

    ※ 한 column의 양 옆에 있는 margin이 gutter를 구성

-------------

# CSS 외부 리소스 적용 

    ※ Font Awesome 5.15.4 사용
    => https://fontawesome.com/v5/docs/web/use-with/wordpress/install-manually

    => <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>

    ※ tailwindcss 


-------------

# JavaScript 

    ※ 동적으로 HTML 문서를 조작함.
    
    ※ 웹 페이지에 생동감을 불어넣기 위해 만들어진 프로그래밍 언어

    ※ JavaScript와 Java의 차이점?
    => Java는 OOP(Object Oriented Programming) 프로그래밍 언어인 반면,

    => JavaScr ipt는 OOP 스크립팅 언어

    ※ OOP (Object Oriented Programming)
    => 객체 지향 프로그래밍 (Object-Oriented Programming, OOP) : 컴퓨터 프로그램을 명령어의 목록에서 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 “객체” 들의 모임으로 파악하고자 하는 것이다. 각각의 객체는 메시지를 주고받고, 데이터를 처리할 수 있다. 
    
    
    ※ JavaScript on the Next Level
