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
    }
}

// rowIndex와 cellIndex는 알았다
// 위의 함수는 클릭시 함수니까 이건 클릭 함수와 별도로 돌아가게 해야한다
// 자체계산이니까

function checkAndMarkCells(cellIndex){
    let rows = document.getElementsByTagName('tr');
    
}