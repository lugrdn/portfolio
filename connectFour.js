var turn = 1;
var gameRunning = true;
var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];
var blackWins = 0;
var redWins = 0;

function gt(x, y) {
    if (gameRunning) {
        if (board[x][y] == 0 && x == 5) {
            if (turn == 1) {
                board[x][y] = 1;
                document.getElementById('x' + x + 'y' + y).textContent = '⚫';
                turn = -1;
                document.getElementById('turnText').textContent = 'Red';
            }
            else if (turn == -1) {
                board[x][y] = -1;
                document.getElementById('x' + x + 'y' + y).textContent = '🔴';
                turn = 1;
                document.getElementById('turnText').textContent = 'Black';
            }
        }
        else if (board[x][y] == 0 && board[x+1][y] != 0) {
            if (turn == 1) {
                board[x][y] = 1;
                document.getElementById('x' + x + 'y' + y).textContent = '⚫';
                turn = -1;
                document.getElementById('turnText').textContent = 'Red';
            }
            else if (turn == -1) {
                board[x][y] = -1;
                document.getElementById('x' + x + 'y' + y).textContent = '🔴';
                turn = 1;
                document.getElementById('turnText').textContent = 'Black';
            }
        }
        else { }
        //vertical
        if (gc(x,y) + gc(x+1,y) + gc(x+2,y) + gc(x-1,y) == 4 || gc(x,y) +  gc(x-1,y) + gc(x-2,y) + gc(x+1,y) == 4 || gc(x,y) + gc(x+1,y) + gc(x+2,y) + gc(x+3,y) == 4 || gc(x,y) + gc(x-1,y) + gc(x-2,y) + gc(x-3,y) == 4 || gc(x,y) + gc(x+1,y) + gc(x+2,y) + gc(x-1,y) == -4 || gc(x,y) + gc(x-1,y) + gc(x-2,y) + gc(x+1,y) == -4 || gc(x,y) + gc(x+1,y) + gc(x+2,y) + gc(x+3,y) == -4 || gc(x,y) + gc(x-1,y) + gc(x-2,y) + gc(x-3,y) == -4) {
            if (turn == 1 * -1) {
                document.getElementById('winText').textContent = 'Black Wins!';
                gameRunning = false;
                blackWins++;
                document.getElementById('xWins').textContent = blackWins;
            }
            else if (turn == -1 * -1) {
                document.getElementById('winText').textContent = 'Red Wins!';
                gameRunning = false;
                redWins++;
                document.getElementById('oWins').textContent = redWins;
            }
        }
        else{}
        //horizontal
        if (gc(x,y) + gc(x,y+1) + gc(x,y+2) + gc(x,y-1) == 4 || gc(x,y) +  gc(x,y-1) + gc(x,y-2) + gc(x,y+1) == 4 || gc(x,y) + gc(x,y+1) + gc(x,y+2) + gc(x,y+3) == 4 || gc(x,y) + gc(x,y-1) + gc(x,y-2) + gc(x,y-3) == 4 || gc(x,y) + gc(x,y+1) + gc(x,y+2) + gc(x,y-1) == -4 || gc(x,y) + gc(x,y-1) + gc(x,y-2) + gc(x,y+1) == -4 || gc(x,y) + gc(x,y+1) + gc(x,y+2) + gc(x,y+3) == -4 || gc(x,y) + gc(x,y-1) + gc(x,y-2) + gc(x,y-3) == -4) {
            if (turn == 1 * -1) {
                document.getElementById('winText').textContent = 'Black Wins!';
                gameRunning = false;
                blackWins++;
                document.getElementById('xWins').textContent = blackWins;
            }
            else if (turn == -1 * -1) {
                document.getElementById('winText').textContent = 'Red Wins!';
                gameRunning = false;
                redWins++;
                document.getElementById('oWins').textContent = redWins;
            }
        }
        else{}
        //updiagonal
        if (gc(x,y) + gc(x+1,y-1) + gc(x+2,y-2) + gc(x-1,y+1) == 4 || gc(x,y) +  gc(x-1,y+1) + gc(x-2,y+2) + gc(x+1,y-1) == 4 || gc(x,y) + gc(x+1,y-1) + gc(x+2,y-2) + gc(x+3,y-3) == 4 || gc(x,y) + gc(x-1,y+1) + gc(x-2,y+2) + gc(x-3,y+3) == 4 || gc(x,y) + gc(x+1,y-1) + gc(x+2,y-2) + gc(x-1,y+1) == -4 || gc(x,y) + gc(x-1,y+1) + gc(x-2,y+2) + gc(x+1,y-1) == -4 || gc(x,y) + gc(x+1,y-1) + gc(x+2,y-2) + gc(x+3,y-3) == -4 || gc(x,y) + gc(x-1,y+1) + gc(x-2,y+2) + gc(x-3,y+3) == -4) {
            if (turn == 1 * -1) {
                document.getElementById('winText').textContent = 'Black Wins!';
                gameRunning = false;
                blackWins++;
                document.getElementById('xWins').textContent = blackWins;
            }
            else if (turn == -1 * -1) {
                document.getElementById('winText').textContent = 'Red Wins!';
                gameRunning = false;
                redWins++;
                document.getElementById('oWins').textContent = redWins;
            }
        }
        else{}
        //downdiagonal
        if (gc(x,y) + gc(x+1,y+1) + gc(x+2,y+2) + gc(x-1,y-1) == 4 || gc(x,y) +  gc(x-1,y-1) + gc(x-2,y-2) + gc(x+1,y+1) == 4 || gc(x,y) + gc(x+1,y+1) + gc(x+2,y+2) + gc(x+3,y+3) == 4 || gc(x,y) + gc(x-1,y-1) + gc(x-2,y-2) + gc(x-3,y-3) == 4 || gc(x,y) + gc(x+1,y+1) + gc(x+2,y+2) + gc(x-1,y-1) == -4 || gc(x,y) + gc(x-1,y-1) + gc(x-2,y-2) + gc(x+1,y+1) == -4 || gc(x,y) + gc(x+1,y+1) + gc(x+2,y+2) + gc(x+3,y+3) == -4 || gc(x,y) + gc(x-1,y-1) + gc(x-2,y-2) + gc(x-3,y-3) == -4) {
            if (turn == 1 * -1) {
                document.getElementById('winText').textContent = 'Black Wins!';
                gameRunning = false;
                blackWins++;
                document.getElementById('xWins').textContent = blackWins;
            }
            else if (turn == -1 * -1) {
                document.getElementById('winText').textContent = 'Red Wins!';
                gameRunning = false;
                redWins++;
                document.getElementById('oWins').textContent = redWins;
            }
        }
        else{}







        /*
        for (var r = 0; r < 7; r++) {
            if (board[r][0] + board[r][1] + board[r][2] + board[r][3] + board[r][4] + board[r][5] + board[r][6] >= 4 || board[r][0] + board[r][1] + board[r][2] + board[r][3] + board[r][4] + board[r][5] + board[r][6] <= -4) {
                if (turn == 1 * -1) {
                    document.getElementById('winText').textContent = 'Black Wins!';
                    gameRunning = false;
                    blackWins++;
                    document.getElementById('xWins').textContent = blackWins;
                }
                else if (turn == -1 * -1) {
                    document.getElementById('winText').textContent = 'Red Wins!';
                    gameRunning = false;
                    redWins++;
                    document.getElementById('oWins').textContent = redWins;
                }
            }
            else { }
        }
        for (var c = 0; c < 6; c++) {
            if (board[0][c] + board[1][c] + board[2][c] + board[3][c] + board[4][c] + board[5][c] == 6 || board[0][c] + board[1][c] + board[2][c] + board[3][c] + board[4][c] + board[5][c] == -6) {
                if (turn == 1 * -1) {
                    document.getElementById('winText').textContent = 'Black Wins!';
                    gameRunning = false;
                    blackWins++;
                    document.getElementById('xWins').textContent = blackWins;
                }
                else if (turn == -1 * -1) {
                    document.getElementById('winText').textContent = 'Red Wins!';
                    gameRunning = false;
                    redWins++;
                    document.getElementById('oWins').textContent = redWins;
                }
            }
            else { }
        }
        if (board[0][0] + board[1][1] + board[2][2] == 3 || board[0][0] + board[1][1] + board[2][2] == -3) {
            if (turn == 1 * -1) {
                document.getElementById('winText').textContent = 'Black Wins!';
                gameRunning = false;
                blackWins++;
                document.getElementById('xWins').textContent = blackWins;
            }
            else if (turn == -1 * -1) {
                document.getElementById('winText').textContent = 'Red Wins!';
                gameRunning = false;
                redWins++;
                document.getElementById('oWins').textContent = redWins;
            }
        }
        else { }
        if (board[0][2] + board[1][1] + board[2][0] == 3 || board[0][2] + board[1][1] + board[2][0] == -3) {
            if (turn == 1 * -1) {
                document.getElementById('winText').textContent = 'Black Wins!';
                gameRunning = false;
                blackWins++;
                document.getElementById('xWins').textContent = blackWins;
            }
            else if (turn == -1 * -1) {
                document.getElementById('winText').textContent = 'Red Wins!';
                gameRunning = false;
                redWins++;
                document.getElementById('oWins').textContent = redWins;
            }
        }
        else { }*/
    }
}

function gc(x,y)  {
    return(board[x]||[])[y];
}

function restart() {
    turn = 1;
    gameRunning = true;
    board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    for (var r = 0; r < 6; r++) {
        for (var c = 0; c < 7; c++) {
            document.getElementById('x' + r + 'y' + c).textContent = ' ';
        }
    }
    document.getElementById('winText').textContent = '';
    document.getElementById('turnText').textContent = 'Black';
}