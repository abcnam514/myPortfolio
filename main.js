<!--item-container.js, clear.js-->

$(document).ready(function() {

    // 페이지 로드 시 로컬 스토리지에서 위치 정보를 읽어와 적용
    $('.draggable').each(function(index) {
        var className = $(this).attr('class').split(' ')[1]; // draggable 외 다른 클래스를 가져옴
        var position = localStorage.getItem(className + '_' + index); // class뿐만 아니라 인덱스와 함께 키로 사용
        if (position) { // 위치 정보가 존재하면
            var pos = JSON.parse(position); // JSON 문자열을 객체로 변환
            $(this).css({ top: pos.top, left: pos.left }); // 해당 위치로 요소를 이동
        }
    });

    // draggable 클래스가 들어간 요소에 대해 드래그 이벤트를 설정
    $('.draggable').draggable({
        containment: '.item-container', // 드래그할 수 있는 범위를 헤더 밑 위치의 .item-container 로 제한
        cursor: 'move', // 드래그 커서를 move 스타일로 변경
        stop: function(event, ui) { // 드래그가 끝난 후의 이벤트
            var className = $(this).attr('class').split(' ')[1]; // draggable 외 다른 클래스를 가져옴
            var index = $(this).index('.draggable'); // 해당 요소의 인덱스를 가져옴
            var position = ui.position; // 드래그가 끝난 시점의 좌표를 가져옴
            localStorage.setItem(className + '_' + index, JSON.stringify(position)); // 클래스명과 인덱스를 기반으로 좌표 저장
        }
    })

    // #cat-container drag.js
    $('#cat').draggable({
        containment: '#cat-container', //드래그할 수 있는 범위를 컴퓨터 속 #cat-container 로 제한
        cursor: 'move'
    });

    // Clear 버튼 클릭 시
    $('.clear a').on('click', function(event) {
        event.preventDefault(); // 기본 동작(페이지 이동)을 막음
        localStorage.clear(); // 로컬 스토리지의 모든 데이터를 삭제 (모든 위치 정보 초기화)

        // 모든 요소를 원래 위치로
        $('.draggable').each(function() {
            $(this).css({ top: '', left: '' }); // 기본 위치로 reset
        });
    });
});


<!--info.js-->

    const info = document.querySelector('.info');
    const infobox = document.getElementById('info-box');
    const infoboxbg = document.getElementById('info-box-bg');
    const closeinfobox = document.getElementById('closeInfo-box');

    //info 아이콘 클릭 시 반투명한 배경과 함께 info 창이 뜸.
    info.addEventListener('click', () => {
    infobox.classList.add('show');
    infoboxbg.classList.add('show');
});

    //'닫기' 누르면 info 창과 배경 없애기(원래 화면으로 돌아가기)
    closeinfobox.addEventListener('click', () => {
    infobox.classList.remove('show');
    infoboxbg.classList.remove('show');
});

    //뒤에 'info-box-bg' 배경 눌러도 info 창과 배경 없애기(원래 화면으로 돌아가기) 가능
    infoboxbg.addEventListener('click', () => {
    infobox.classList.remove('show');
    infoboxbg.classList.remove('show');
});