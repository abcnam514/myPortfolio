function addEntry() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const entriesDiv = document.getElementById("entries");

    if (name && message) {
        const entry = document.createElement("div");
        entry.className = "entry";
        entry.innerHTML = `<strong>${name}</strong>: ${message}`;
        entriesDiv.appendChild(entry);

        // 입력 필드 초기화
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("이름과 메시지를 모두 입력하세요.");
    }
}