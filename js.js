const setupForm = document.querySelector("#setup-form");
const playerInput = document.querySelector("#player-input");
const nameError = document.querySelector("#name-error");
const playArea = document.querySelector("#play-area");
const playerName = document.querySelector("#player-name");
const playerScoreLabel = document.querySelector("#player-score");
const computerScoreLabel = document.querySelector("#computer-score");
const playerNumberLabel = document.querySelector("#player-number");
const computerNumberLabel = document.querySelector("#computer-number");
const roundLabel = document.querySelector("#round-label");
const resultLabel = document.querySelector("#result");
const playButton = document.querySelector("#play-button");
const restartButton = document.querySelector("#restart-button");
let playerScore = 0;
let computerScore = 0;
let round = 1;
let gameOver = false;
setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = playerInput.value.trim();
  if (!name) {
    nameError.textContent = "Р‘СѓРґСЊ Р»Р°СЃРєР°, РІРІРµРґРё СЃРІРѕС” С–РјвЂ™СЏ.";
    playerInput.setAttribute("aria-invalid", "true");
    playerInput.focus();
    return;
  }
  nameError.textContent = "";
  playerInput.removeAttribute("aria-invalid");
  playerName.textContent = name;
  setupForm.hidden = true;
  playArea.hidden = false;
  playButton.focus();
});
playButton.addEventListener("click", () => {
  if (gameOver) return;
  const playerNumber = Math.floor(Math.random() * 100) + 1;
  const computerNumber = Math.floor(Math.random() * 100) + 1;
  playerNumberLabel.textContent = playerNumber;
  computerNumberLabel.textContent = computerNumber;
  if (playerNumber > computerNumber) {
    playerScore += 1;
    resultLabel.textContent = `${playerName.textContent} РѕС‚СЂРёРјСѓС” РѕС‡РєРѕ!`;
  } else if (computerNumber > playerNumber) {
    computerScore += 1;
    resultLabel.textContent = "РћС‡РєРѕ РєРѕРјРївЂ™СЋС‚РµСЂР°!";
  } else {
    resultLabel.textContent = "РќС–С‡РёСЏ вЂ” Р¶РѕРґРЅРѕРіРѕ РѕС‡РєР° РЅРµ РЅР°СЂР°С…РѕРІР°РЅРѕ.";
  }
  playerScoreLabel.textContent = playerScore;
  computerScoreLabel.textContent = computerScore;
  if (playerScore === 3 || computerScore === 3) {
    gameOver = true;
    playButton.disabled = true;
    restartButton.hidden = false;
    resultLabel.textContent = playerScore === 3
      ? `Р’С–С‚Р°СЋ, ${playerName.textContent}! РІРё РїРµСЂРµРјРѕРіР»Рё!`
      : "РљРѕРјРївЂ™СЋС‚РµСЂ РїРµСЂРµРјС–Рі. РЎРїСЂРѕР±СѓР№С‚Рµ С‰Рµ СЂР°Р·";
    restartButton.focus();
    return;
  }
  round += 1;
  roundLabel.textContent = `Р Р°СѓРЅРґ ${round}`;
});
restartButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  gameOver = false;
  playerScoreLabel.textContent = "0";
  computerScoreLabel.textContent = "0";
  playerNumberLabel.textContent = "вЂ”";
  computerNumberLabel.textContent = "вЂ”";
  roundLabel.textContent = "Р Р°СѓРЅРґ 1";
  resultLabel.textContent = "РќР°С‚РёСЃРЅРё РєРЅРѕРїРєСѓ, С‰РѕР± Р·С–РіСЂР°С‚Рё!";
  playButton.disabled = false;
  restartButton.hidden = true;
  playButton.focus();
});
