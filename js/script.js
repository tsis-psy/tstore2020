//문서가 모드 로드되면 함수실행
document.addEventListener('DOMContentLoaded', function(){

// 변수지정
var $slideWrap = document.querySelector('.ban'),
    $slideContainer = document.querySelector('.slider-container'),
    $slide = document.querySelectorAll('.slide'),
    $slideHeight = 0,
    $currentIndex = 0,
    $timer,
    $pagerHTML = '',
    $pager = document.querySelector('.pager'),
    $slideCount = $slide.length;

    // 슬라이드 높이 중 가장 높은 값을 부모 높이로 가져오기
    // for(var i = 0; i < $slideCount ; i++){
    //     if($slideHeight < $slide[i].offsetHeight){
    //         $slideHeight = $slide[i].offsetHeight;
    //     }
    // }

    $slideWrap.style.height = $slideHeight + 'px';
    $slideContainer.style.height = $slideHeight + 'px';

    // 슬라이드가 있으면 가로로 배열하가
    for(var a = 0; a < $slideCount; a++){
        $slide[a].style.left =  a * 100 + '%';
        //<span data-idx="0">1</span>
        $pagerHTML += '<span data-idx="' + a + '"></span>';
        $pager.innerHTML = $pagerHTML

    }

    $pagerBtn = document.querySelectorAll('.pager span');
    
    // 슬라이드 이동 함수
    function goToSlide(idx){
        $slideContainer.classList.add('animated');
        $slideContainer.style.left = -100 * idx + '%';
        $currentIndex = idx;

        //클릭된 요소에 active 추가
        for(var y = 0;y < $pagerBtn.length; y++){
            $pagerBtn[y].classList.remove('active');
        }
        $pagerBtn[idx].classList.add('active');
        
    }

    goToSlide(0);

    // 자동슬라이드

    setInterval(function(){
        var nextIdx = ($currentIndex + 1) % $slideCount; 
        goToSlide(nextIdx);
    }, 3000);


    //pager로 슬라이드 이동
    for(var x = 0; x < $pagerBtn.length;x++){
        $pagerBtn[x].addEventListener('click', function(event){
            var pagerNum = event.target.getAttribute('data-idx');
            goToSlide(pagerNum);
            
        });
    }



});



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.body.classList.add("stop-scroll");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove("stop-scroll");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("stop-scroll");
  }
}