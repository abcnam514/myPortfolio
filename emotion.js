// emotion.js 파일
document.addEventListener('DOMContentLoaded', () => {
    const colorItems = document.querySelectorAll('.show li');
    const videoElement = document.querySelector('video');

    // 각 색상 아이템에 클릭 시 이벤트 리스너 추가
    colorItems.forEach(item => {
        item.addEventListener('click', () => {
            // 모든 아이템에서 재생 클래스 제거
            colorItems.forEach(el => el.classList.remove('active'));

            // 클릭된 아이템에 재생 클래스 추가
            item.classList.add('active');

            // 비디오 소스 변경
            const videoSrc = item.getAttribute('data-video');
            videoElement.src = `video/${videoSrc}`;

            // 비디오 재생
            videoElement.play().catch(error => {
                console.error('비디오 재생 오류:', error);
            });
        });
    });

    // 기본적으로 첫 번째 아이템을 활성 상태로 설정
    colorItems[0].classList.add('active');
});