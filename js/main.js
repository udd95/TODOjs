document.addEventListener("DOMContentLoaded", () => {
    const addInput = document.querySelector(".add-input");
    const addBtn = document.querySelector(".add-btn");
    const todoList = document.querySelector(".todo-item");
    const finishList = document.querySelector(".finish-item");

    // 추가 버튼 클릭 이벤트
    addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const inputValue = addInput.value.trim();
        const newLi = document.createElement("li");
        const newIcon = document.createElement("i");
        newIcon.className = "bi bi-patch-check";

        // p 태그 생성
        const newP = document.createElement("p");
        newP.textContent = inputValue;

        // button 태그 생성
        const newButton = document.createElement("button");
        newButton.textContent = "X";
        newButton.addEventListener("click", () => {
            newLi.remove(); // 삭제 버튼 클릭 시 해당 li 삭제
        });
        
        // i 태그 클릭이벤트
        newIcon.addEventListener("click",()=> {
            finishList.appendChild(newLi);
            newIcon.className =" bi-patch-check-fill";
        });

        // li에 i, p, button 추가
        newLi.appendChild(newIcon);
        newLi.appendChild(newP);
        newLi.appendChild(newButton);

        // ol에 li 추가
        todoList.appendChild(newLi);

        // 입력창 초기화
        addInput.value = "";
    });
});