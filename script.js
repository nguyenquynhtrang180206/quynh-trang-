document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name-input");
    const greetingText = document.getElementById("greeting");

    const listInput = document.getElementById("item-input");
    const itemList = document.getElementById("item-list");

    const colorBox = document.getElementById("rectangle");
    const circle = document.getElementById("circle");

    let circlePosition = 0;

    // Hiển thị lời chào
    window.greetUser = function() {
        const name = nameInput.value.trim();
        if (name) {
            greetingText.textContent = `Xin chào, ${name}!`;
        }
    };

    // Thêm mục vào danh sách
    window.addItem = function() {
        const itemText = listInput.value.trim();
        if (itemText) {
            const li = document.createElement("li");
            li.textContent = itemText;

            // Gạch ngang mục khi click vào
            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });

            itemList.appendChild(li);
            listInput.value = "";
        }
    };

    // Đổi màu hình chữ nhật
    window.changeColor = function() {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        colorBox.style.background = randomColor;
    };

    // Di chuyển hình tròn
    window.moveCircle = function() {
        circlePosition += 20;
        circle.style.transform = `translateX(${circlePosition}px)`;
    };
});
