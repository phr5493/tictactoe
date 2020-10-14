const gameBoard = (() => {
    let board = [["", "", ""],["", "", ""],["", "", ""]]
    const markBoard = loc => {
        const gridArray = loc.id.split('');
        const col = gridArray[0]-1
        const row = gridArray[2]-1

        if (board[col][row] == ""){
            let mark = displayController.checkPlayer().getMarker()
            loc.innerText = mark
            board[col][row] = mark
            if(checkBoard()) alert("Game over!\n"+displayController.checkPlayer().getName()+" won!")
            displayController.changePlayer()
        } 
        else {
            alert("Spot already used\nPlease pick a different square")
        }

    } 
    const checkBoard = () => {

        for (i = 0; i < 3; i++) {
            if (checkIfSame(board[i][0],board[i][1],board[i][2]))return true
        }

        for (i = 0; i < 3; i++) {
            if (checkIfSame(board[0][i],board[1][i],board[2][i]))return true
        }

        if (checkIfSame(board[0][0],board[1][1],board[2][2]))return true

        if (checkIfSame(board[0][2],board[1][1],board[2][0]))return true


    }
    const checkIfSame = (a,b,c) => {

        if (a=="" || b=="" || c=="")return false
        if (a==b && b==c && a==c) return true
        return false

    }
    return {markBoard}
})()

const Player = (name, marker) => {
    const getName  = () => name
    const getMarker = () => marker
    
    return {getName, getMarker}
}

const displayController = (() => {
    let isPlayerOne = true
    const playerOne = Player("Jeff", "X")
    const playerTwo = Player("John", "O")
    const checkPlayer = () => {
        if (isPlayerOne) return playerOne
        else return playerTwo
    }
    const changePlayer = () => {
        if (isPlayerOne) isPlayerOne = false
        else isPlayerOne = true
    }
    return {checkPlayer, changePlayer}
})()

