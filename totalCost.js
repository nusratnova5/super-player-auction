document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    const playerExpenses = getTextValue('player-cost');

    const totalCost = playerExpenses + managerCost + coachCost;

    const totalElement = document.getElementById('total-cost');

    totalElement.innerText = totalCost;
})