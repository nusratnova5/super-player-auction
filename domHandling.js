const ol = document.getElementById('selected-players');
function showPlayer(btnId, playerName) {
    const button = document.getElementById(btnId);

    button.addEventListener('click', function () {

        const childNumber = ol.childElementCount;
        if (childNumber > 4) {
            alert('No');
            return;
        }

        const nameElement = document.getElementById(playerName);
        const name = nameElement.innerText;
        const newList = document.createElement('li');
        newList.innerText = name;
        ol.appendChild(newList);

        button.setAttribute('disabled', '');
        button.style.backgroundColor = 'gray';
    })
}

function getInputValue(elementId) {
    const element = document.getElementById(elementId);


    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    return elementValue;

}

function getTextValue(elementId) {
    const element = document.getElementById(elementId);


    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;

}
