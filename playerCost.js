document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerCostElement = document.getElementById('player-cost');
    const numberOfPlayers = ol.childElementCount;

    const perPlayerCost = getInputValue('per-player-cost');

    const playerExpenses = numberOfPlayers * perPlayerCost;

    playerCostElement.innerText = playerExpenses;
})