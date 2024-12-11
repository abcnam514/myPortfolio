document.getElementById('addButton').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value;
    const mainContainer = document.querySelector('.main-container');

    if (inputText) {
        const newBox = document.createElement('div');

        newBox.classList.add('draggable-box');
        newBox.innerText = inputText;


        const chosenColor = document.getElementById('colorPicker').value;
        // const chosenColor = document.getElementById('colorPicker').value || // 색상을 선택하지않았다면 랜덤으로 배정
        //     `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

        newBox.style.backgroundColor = chosenColor;

        // main-container의 크기
        const containerWidth = mainContainer.clientWidth;
        const containerHeight = mainContainer.clientHeight;

        // 랜덤 위치 계산
        const randomX = Math.floor(Math.random() * (containerWidth - 200));
        const randomY = Math.floor(Math.random() * (containerHeight - 100));

        // 위치 설정
        newBox.style.position = 'absolute';
        newBox.style.left = `${randomX}px`;
        newBox.style.top = `${randomY}px`;


        boxContainer.appendChild(newBox);

        makeDraggable(newBox);
    }
});

function makeDraggable(element) {
    let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;

    element.onmousedown = function(event) {
        event.preventDefault();

        mouseX = event.clientX;
        mouseY = event.clientY;

        document.onmousemove = dragElement;
        document.onmouseup = stopDragElement;
    };

    function dragElement(event) {
        event.preventDefault();

        offsetX = mouseX - event.clientX;
        offsetY = mouseY - event.clientY;
        mouseX = event.clientX;
        mouseY = event.clientY;

        element.style.top = (element.offsetTop - offsetY) + "px";
        element.style.left = (element.offsetLeft - offsetX) + "px";
    }

    function stopDragElement() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}