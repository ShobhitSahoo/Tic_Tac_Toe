const boxes = Array.from(document.querySelectorAll('.box'));

const winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

let firstPlayer = [],
    secondPlayer = [],
    count = 0;

function check(array) {
    // Check if any player has won or not
    let finalResult = false;
    for (let item of winner) {
        let res = item.every(val => array.indexOf(val) !== -1);
        if (res) {
            finalResult = true;
            break;
        }
    }
    return finalResult;
}

function winnerPlayer(p) {
    // To display the winner

    /**
     * First create a winner modal
     * Create the replay button
     * Add replay functionality to replay button
     * Append replay button to modal
     * Append modal to the body via DOM
     */
    const modal = document.createElement("div");
    const player = document.createTextNode(p);
    const replay = document.createElement("button");

    // Add the winner class
    modal.classList.add("winner");
    modal.appendChild(player);
    replay.appendChild(document.createTextNode("Replay"));

    replay.onclick = function() {
        rep();
    };
    modal.appendChild(replay);
    document.body.appendChild(modal);
}

function draw() {
    if (this.classList = 'box') {
        count++;

        if (count % 2 !== 0) {
            // Player 1 || X plays

            // Add class x to that box
            this.classList.add('x');

            // Push it to first player's array
            firstPlayer.push(Number(this.dataset.index));

            // Check if player won or not
            if (check(firstPlayer)) {
                winnerPlayer("Congrats Player 1! You win!!");
            }
        } else {
            // Player 2 || O plays

            // Add class o to that box
            this.classList.add('o');

            // Push it to second player's array
            secondPlayer.push(Number(this.dataset.index));

            // Check if player won or not
            if (check(secondPlayer)) {
                winnerPlayer("Congrats Player 2! You win!!");
            }
        }

        if (count === 9) {
            winnerPlayer("Draw");
        }
    }
}

function rep() {
    const w = document.querySelector(".winner");
    boxes.forEach(box => box.classList = "box");
    firstPlayer = [];
    secondPlayer = [];
    count = 0;
    w.remove();
}

boxes.forEach(box => box.addEventListener('click', draw));