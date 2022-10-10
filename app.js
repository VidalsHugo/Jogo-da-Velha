let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;
let flag=0;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
    //quando alguem clica na caixa
    boxes[i].addEventListener('click', function () {

        let vez = checkVez(player1, player2);

        //Verifica se ja tem X ou O
        if (this.childNodes.length == 0) {

            //clonando elemento
            let cloneVez = vez.cloneNode(true);

            this.appendChild(cloneVez);

            if (player1 == player2) {
                //computando jogada
                player1++;
                if (secondPlayer == 'IA-player') {
                    //funcao para executar a jogada
                    computerPlay();
                    player2++;
                }
            } else {
                //computando jogada
                player2++;
            }

            //Checa quem venceu
            checkWin();
        }

    });
}

function checkVez(player1, player2) {
    if (player1 == player2) {
        vez = x;
    } else {
        vez = o;
    }
    return vez;
}

//evento par saber se é PvP ou PvIA
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        secondPlayer = this.getAttribute('id');
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }
        setTimeout(function () {
            let container = document.querySelector('#container');
            container.classList.remove('hide');
        }, 500);

    });
}


function checkWin() {

    let b1 = document.querySelector('#box-1');
    let b2 = document.querySelector('#box-2');
    let b3 = document.querySelector('#box-3');
    let b4 = document.querySelector('#box-4');
    let b5 = document.querySelector('#box-5');
    let b6 = document.querySelector('#box-6');
    let b7 = document.querySelector('#box-7');
    let b8 = document.querySelector('#box-8');
    let b9 = document.querySelector('#box-9');
    //horizontal 1
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x
            declaraWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o
            declaraWinner('o');
        }

    }
    //horizontal 2
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x
            declaraWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o
            declaraWinner('o');
        }

    }
    //horizontal 3
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x
            declaraWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o
            declaraWinner('o');
        }

    }
    //vertical 1
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x
            declaraWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o
            declaraWinner('o');
        }

    }
    //vertical 2
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x
            declaraWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o
            declaraWinner('o');
        }

    }
    //vertical 3
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x
            declaraWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o
            declaraWinner('o');
        }
    }
    //diagonal 1
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x
            declaraWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o
            declaraWinner('o');
        }

    }
    //diagonal 1
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x
            declaraWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o
            declaraWinner('o');
        }

    }

    //Deu velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }
    if (counter == 9 && flag <1) {
        declaraWinner('velha');
    }

}

//Limpa jogo, declara vencedor e atualiza o placar
function declaraWinner(winner) {

    let scoreBoardX = document.querySelector('#score-1');
    let scoreBoardO = document.querySelector('#score-2');

    let msg = '';

    if (winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = 'O jogador 1 Venceu!';
    } else if (winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        msg = 'O jogador 2 Venceu!';
    } else {
        msg = 'Deu velha!';
    }

    //exibe msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide');

    //esconde msg
    setTimeout(function () {
        messageContainer.classList.add('hide');
    }, 3000);

    //Zerar jogadas
    player1 = 0;
    player2 = 0;

    setTimeout(function () {
        //remove o X e O
        let boxesToRemove = document.querySelectorAll('.box div');

        for (let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    }, 1500);
    flag++;
}
//executar a lógica da jogada do CPU
function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    //Só preencher se estiver vazio o filho
    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
            //checagem de quantas estão preenchidas
        } else {
            filled++;
        }
    }
    if (counter == 0 && filled < 9) {
        computerPlay();
    }
}