const canvas = document.getElementById('drawingCanvas'); // 캔버스 요소
const ctx = canvas.getContext('2d');  // 그리기 작업에 필요한 2d 드로잉 컨텍스트 가져오기
const colorPicker = document.getElementById('colorPicker'); // 색상 요소
const lineWidthInput = document.getElementById('lineWidth'); //선 굵기 요소
const clearBtn = document.getElementById('clearBtn'); //모두 지우기 요소

//현재 그리기 상태 관리 변수들
let isDrawing = false; // 그리는 중인지 확인하는 플래그
let lastX = 0; // 직전 마우스의 X 좌표
let lastY = 0; // 직전 마우스의 Y 좌표

// 그리기 시작할 때의 함수
function startDrawing(e) {
    isDrawing = true; // 그리는 중으로 상태 변경
    [lastX, lastY] = [e.offsetX, e.offsetY]; //현재 마우스 위치를 마지막 좌표로 설정
}

// 실제 그릴 때 함수
function draw(e) {
    // 그리는 중이 아니라면 아무것도 하지않음.
    if (!isDrawing) return;

    ctx.beginPath(); // 새로운 경로 시작
    ctx.moveTo(lastX, lastY); // 직전 좌표에서 시작점
    ctx.lineTo(e.offsetX, e.offsetY); // 현재 마우스 좌표까지 선 그리기
    //선 스타일
    ctx.strokeStyle = colorPicker.value; // 선택 색상 적용
    ctx.lineWidth = lineWidthInput.value; // 선택 굵기 적용
    ctx.lineCap = 'round'; // 선 끝을 둥글게
    // 실제 선 그리기
    ctx.stroke();
    // 마지막 좌표 업데이트
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// 그리기 멈춤 함수
function stopDrawing() {
    isDrawing = false; // 그리는 중이 아님.
}

//캔버스 모두 지우기 함수
function clearCanvas() {
    //캔버스의 전 영역을 지움. (0,0 좌표부터 캔버스 크기만큼)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 이미지 저장
function saveImage() {
    const link = document.createElement('a');
    link.download = '아무거나그림.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    status.textContent = '이미지가 저장되었습니다.';
}

//이벤트 리스너 모음
canvas.addEventListener('mousedown', startDrawing); // 그리기 시작
canvas.addEventListener('mousemove', draw); // 마우스를 움직이는 동안 그리기
canvas.addEventListener('mouseup', stopDrawing); // 마우스 버튼을 떼면 그리기를 멈춤
canvas.addEventListener('mouseout', stopDrawing); // 캔버스 영역에서 나오면 그리기 멈춤
clearBtn.addEventListener('click', clearCanvas); // 모두 지우기
document.getElementById('save').addEventListener('click', saveImage); // 그림 저장