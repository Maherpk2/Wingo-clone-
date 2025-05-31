const xTable = [1, 3, 8, 24, 72, 216, 648];
let currentStep = 0;

function getResult() {
  const resultText = document.querySelector('.result')?.innerText;
  if (!resultText) return null;
  return resultText.includes("Big") ? "Big" : "Small";
}

function placeBet(amount) {
  const input = document.querySelector('#betAmount');
  const bigBtn = document.querySelector('#betBig');
  if (input && bigBtn) {
    input.value = amount;
    bigBtn.click();
  }
}

function runBot() {
  if (localStorage.getItem('bigBotRunning') !== 'true') return;

  const result = getResult();
  if (result) {
    if (result === 'Big') {
      currentStep = 0;
    } else {
      currentStep = Math.min(currentStep + 1, xTable.length - 1);
    }
    placeBet(xTable[currentStep]);
  }
  setTimeout(runBot, 60000);
}

runBot();