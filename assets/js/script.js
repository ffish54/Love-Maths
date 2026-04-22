
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        });

    }

    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded and after the user's answer has been processed
 */
function runGame(gameType) {
    let  number1 = Math.floor(Math.random() * 25) + 1;
    let  number2 = Math.floor(Math.random() * 25) + 1;
        if (gameType === "addition") {
            displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
    
}

function checkAnswer() {
    
}   
/**
 * Calculates the correct answer according to the displayed operands and operator.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").textContent);
    let operand2 = parseInt(document.getElementById("operand2").textContent);
    let operator = document.getElementById("operator").textContent;

    if (operator === "+") {
        return operand1 + operand2;
    } else (
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    )

}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
    
}

function displaySubtractQuestion(operand1, operand2) {     

}

function displayMultiplyQuestion(operand1, operand2) {  

}

function displayDivisionQuestion(operand1, operand2) { 

}