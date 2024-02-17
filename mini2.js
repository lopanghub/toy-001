// 변수 설정
let tableData = document.querySelectorAll('td');


// fuction내에 i를 넣으니 i값이 초기화 되서 밖으로 뺌
// 흑백을 차례로 두고 돌이 있으면 돌을 두지 않음
let i = 0;
tableData.forEach(td => {
    td.addEventListener('click', rotate)
})

function rotate(e) {
    if(!e.target.innerHTML){
        if(i%2 === 0){
            e.target.innerHTML='⚫'
        } else {
            e.target.innerHTML = '⚪';
        }
        i++;

        checkAndMarkCells(e.target);
    }
}

// 각 데이터가 자기 주의 8칸의 값을 탐지해서 빈칸이거나 같은값이면 실행하지 않고
// 다른 값이면 console.log 값을 출력하는 함수 만들어줘


function checkAndMarkCells(clickedCell) {
    let rowIndex = clickedCell.parentElement.rowIndex;
    let columnIndex = clickedCell.cellIndex;

    // 주변 셀 위치 배열
    let directions = [
        { row: -1, col: -1 }, // 왼쪽 위 대각선
        { row: -1, col: 0 },  // 위쪽
        { row: -1, col: 1 },  // 오른쪽 위 대각선
        { row: 0, col: -1 },  // 왼쪽
        { row: 0, col: 1 },   // 오른쪽
        { row: 1, col: -1 },  // 왼쪽 아래 대각선
        { row: 1, col: 0 },   // 아래쪽
        { row: 1, col: 1 }    // 오른쪽 아래 대각선
    ];

    for (let dir of directions) {
        let newRow = rowIndex + dir.row;
        let newCol = columnIndex + dir.col;

        // 주변 셀이 테이블 범위 안에 있는지 확인
        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            let adjacentCell = tableData[newRow * 8 + newCol];

         
         
            // 주변 셀이 다른 값이면 출력
            if (!adjacentCell.innerHTML || adjacentCell.innerHTML !== clickedCell.innerHTML) {
                console.log(`Clicked cell: (${rowIndex}, ${columnIndex}), Surrounding cell: (${newRow}, ${newCol}), Value: ${adjacentCell.innerHTML}`);
            }
    }
   }
}

// 자 함수를 새로 짜보자 우린 클릭시 checkAndMarkCells 함수가 발동하게 했는데
// 난 이걸 클릭하기 전에 이미 출력이 된 상태를 원해 
