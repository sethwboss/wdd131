// main.js

const mainContentHTML = `
    <h1>Rock Paper Scissors Game</h1>
    <section class="rules-section">
        <h2>Rules</h2>
        <p>Click on the Rock, Paper, or Scissors images to make your move. The computer will then randomly choose its move. After 1 round, click another image to make your next move. </p>
        <p>Win 5 times for a special message!</p>
    </section>
    <section class="user-selection">
        <h2>Your selection</h2>
        <div class="choices-row">
            <div class="choice-box"><img src="images/rock.png" alt="Rock" class="choice-img" id="rock-choice"></div>
            <div class="choice-box"><img src="images/paper.jpg" alt="Paper" class="choice-img" id="paper-choice"></div>
            <div class="choice-box"><img src="images/scissors.png" alt="Scissors" class="choice-img" id="scissors-choice"></div>
        </div>
    </section>
    <section class="computer-selection">
        <h2>Computer selection</h2>
        <div class="choices-row-comp">
            <div class="choice-box-comp"><img src="images/rock.png" alt="Rock" class="choice-img-comp" id="comp-rock"></div>
            <div class="choice-box-comp"><img src="images/paper.jpg" alt="Paper" class="choice-img-comp" id="comp-paper"></div>
            <div class="choice-box-comp"><img src="images/scissors.png" alt="Scissors" class="choice-img-comp" id="comp-scissors"></div>
        </div>
    </section>
    <section class="score-section">
        <h2>Your Score</h2>
        <div class="score-row">
            <div class="score-box" id="wins-display">Wins: 0</div>
            <div class="score-box" id="ties-display">Ties: 0</div>
            <div class="score-box" id="losses-display">Losses: 0</div>
        </div>
    </section>
        <h2>Attributes</h2>
        <a href="https://www.flaticon.com/free-icons/rock" class="attribute" title="rock icons">Attribute 1: Rock icons created by Icongeek26 - Flaticon</a>
        <a href="http://www.freepik.com" class="attribute" title="paper & scissors icons">Attribute 2: Paper & Scissors icons designed by macrovector / Freepik</a>
  
`;

document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.getElementById('dynamic-main-content');
    if (mainElement) {
        mainElement.innerHTML = mainContentHTML;
    } else {
        console.error("<main id=\"dynamic-main-content\"> element not found.");
        return; 
    }

    let userScore = 0;
    let computerScore = 0;
    let ties = 0;

    const winsDisplay = document.getElementById('wins-display');
    const tiesDisplay = document.getElementById('ties-display');
    const lossesDisplay = document.getElementById('losses-display');

    const choices = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(user, computer) {
        if (user === computer) {
            return 'tie';
        }
        if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            return 'win';
        }
        return 'lose';
    }

    function updateScore(result) {
        if (result === 'win') {
            userScore++;
        } else if (result === 'lose') {
            computerScore++;
        } else if (result === 'tie') {
            ties++;
        } else if (result === 'reset') {
            userScore = 0;
            computerScore = 0;
            ties = 0;
        }
        winsDisplay.textContent = `Wins: ${userScore}`;
        tiesDisplay.textContent = `Ties: ${ties}`;
        lossesDisplay.textContent = `Losses: ${computerScore}`;
    }

    function displayChoices(userChoice, computerChoice) {
        const allUserChoiceBoxes = document.querySelectorAll('.user-selection .choice-box');
        allUserChoiceBoxes.forEach(box => {
            box.classList.remove('user-selected');
            box.style.opacity = '0.3';
        });

        const selectedUserBox = document.getElementById(`${userChoice}-choice`).parentElement;
        if (selectedUserBox) {
            selectedUserBox.classList.add('user-selected');
            selectedUserBox.style.opacity = '1';
        }

        const allComputerChoiceBoxes = document.querySelectorAll('.computer-selection .choice-box-comp');
        allComputerChoiceBoxes.forEach(box => {
            box.classList.remove('computer-selected');
            box.style.opacity = '0.3';
        });
        
        const selectedCompBox = document.getElementById(`comp-${computerChoice}`).parentElement;
        if (selectedCompBox) {
            selectedCompBox.classList.add('computer-selected');
            selectedCompBox.style.opacity = '1';
        }
    }

    function playRound(userChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        displayChoices(userChoice, computerChoice);
        updateScore(result);

        if (userScore >= 5) {
            alert("Congratulations! You won 5 times!");
            updateScore('reset');
            
            const allUserChoiceBoxes = document.querySelectorAll('.user-selection .choice-box');
            allUserChoiceBoxes.forEach(box => {
                box.classList.remove('user-selected');
                box.style.opacity = '1';
            });

            const allComputerChoiceBoxes = document.querySelectorAll('.computer-selection .choice-box-comp');
            allComputerChoiceBoxes.forEach(box => {
                box.classList.remove('computer-selected');
                box.style.opacity = '1';
            });
        }
    }

    const userChoiceImages = document.querySelectorAll('.user-selection .choice-img');
    userChoiceImages.forEach(img => {
        img.addEventListener('click', () => {
            const userChoice = img.alt.toLowerCase();
            playRound(userChoice);
        });
    });

    console.log("Game logic initialized!");
});