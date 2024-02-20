// 변수 설정
let tableData = document.querySelectorAll('td');
let turnNum = document.getElementById('turnNum')

// fuction내에 i를 넣으니 i값이 초기화 되서 밖으로 뺌
// 흑백을 차례로 두고 돌이 있으면 돌을 두지 않음
let i = 0;
turnNum.textContent =`${i+1}`
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
        turnNum.textContent =`${i+1}`
        
    }
}
// 각 테이블 데이터에 blank 0 black 1 white -1 값을 부여하고 싶어