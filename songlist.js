document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('ul a');
    const youtubePopup = document.querySelector('.youtube');
    const youtubeIframe = document.querySelector('.youtube iframe');

    // 각 링크에 클릭 이벤트 리스너 추가
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // 클릭한 링크의 data-video에 적힌대로 비디오 ID 가져오기
            const videoId = link.getAttribute('data-video');
            // iframe의 src 속성에 비디오 ID 설정, 자동재생 설정
            youtubeIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            // 해당 유튜브 팝업 보여주기
            youtubePopup.classList.add('show');
        });
    });

    //팝업창 닫기
    youtubePopup.addEventListener('click', (e) => {
        // youtubePopup 배경 클릭 시 팝업 닫기
        if (e.target === youtubePopup) {
            // 팝업 닫기
            youtubePopup.classList.remove('show');
            // iframe의 소스 초기화!
            youtubeIframe.src = '';
        }
    });
});