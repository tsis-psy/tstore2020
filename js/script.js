//문서가 모드 로드되면 함수실행
document.addEventListener('DOMContentLoaded', function(){

// 변수지정
var $slideWrap = document.querySelector('.ban'),
    $slideContainer = document.querySelector('.slider-container'),
    $slide = document.querySelectorAll('.slide'),
    $slideHeight = 0,
    $currentIndex = 0,
    $slideCount = $slide.length;

    // 슬라이드 높이 중 가장 높은 값을 부모 높이로 가져오기
    for(var i = 0; i < $slideCount ; i++){
        if($slideHeight < $slide[i].offsetHeight){
            $slideHeight = $slide[i].offsetHeight;
        }
    }

    $slideWrap.style.height = $slideHeight + 'px';
    $slideContainer.style.height = $slideHeight + 'px';

    // 슬라이드가 있으면 가로로 배열하가
    for(var a = 0; a < $slideCount; a++){
        $slide[a].style.left =  a * 100 + '%';
    }
    
    // 슬라이드 이동 함수
    function goToSlide(idx){
        $slideContainer.style.left = -100 * idx + '%';
        $slideContainer.classList.add('animated');
        $currentIndex = idx;
    }

    // 










});