

// 오셀로 보드 동적테이블로 만들기
function createOthelloBoard(){
    const board = document.getElementById('othelloBoard')
    const table = document.createElement('table')

    let turnNum = 0
    
    for (let i=0;i<8;i++){
        const tr = document.createElement('tr');
        for(let j=0;j<8;j++){
            const td = document.createElement('td');
            basePiece(i,j,td); // 가운데 4칸 돌

            //클릭시 흑백돌 두는 이벤트
            td.addEventListener('click', function(){
                if(!td.textContent){
                    td.textContent = turnNum % 2==0?'⚫' : '⚪';
                    turnNum++
                    turnNumElement.textContent =`${parseInt(turnNum)+1}`
                }
            })
            
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    board.appendChild(table)
}

window.onload = ()=>{createOthelloBoard();}

function basePiece(i,j,td){
    if ((i === 3 && j === 3) || (i === 4 && j === 4)) {
        td.textContent = '⚫'; // Black piece
    } else if ((i === 3 && j === 4) || (i === 4 && j === 3)) {
        td.textContent = '⚪'; // White piece
    }
}

// 턴 넘버 표현
let turnNumElement = document.getElementById('turnNum');
turnNumElement.textContent = 1 // 초기값

// 보드 검사
function updateValidMoves(board, currentPlayer){
    for (let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(!board[i][j].textContent){
                if(isValidMove(i,j,board,currentPlayer)){
                    board[i][j].innerHTML = `&check;`
                }
            }
        }
    }
}