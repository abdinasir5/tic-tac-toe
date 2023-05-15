const multiplayerBtn = document.querySelector('.multiplayer');
const singleplayerBtn = document.querySelector('.multiplayer');
const mode = document.querySelectorAll('.mode');

const playerX = document.querySelector('.x-option');
const playerO = document.querySelector('.o-option');
const player = document.querySelectorAll('.player');

mode.forEach(modeOption => {userChoices(mode, modeOption)});

player.forEach(playerChoice => {userChoices(player, playerChoice)});

function userChoices(selectionType, option) {
    option.addEventListener('click', () => {
        selectionType.forEach(option => option.classList.remove('selected'));
        option.classList.add('selected');
    })
}