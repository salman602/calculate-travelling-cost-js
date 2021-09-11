const marsCost = 5000;
const moonCost = 3000;



function handleQuantity(planet, operator) {
    // Take quantity input dynamacally
    const quantityInput = document.getElementById(planet + '-quantity').value;

    let quantity = parseInt(quantityInput);
    // console.log(quantity)
    // increment
    if (operator === 'plus') {
        // increasing
        quantity++;
    }
    else {
        // validation of quantity 
        if (quantity < 1) {
            return;
        }
        // decreasing 
        quantity--;
    }
    // update quantity
    document.getElementById(planet + '-quantity').value = quantity;

    calculateJourney(planet)

}

let marsTotal = 0;
let moonTotal = 0;

function calculateJourney(planet) {
    const quantityInput = document.getElementById(planet + '-quantity').value;

    let quantity = parseInt(quantityInput);
    if (planet === 'mars') {
        marsTotal = quantity * marsCost;
        document.getElementById('mars-cost').innerText = marsTotal;
    }
    else {
        moonTotal = quantity * moonCost;
        document.getElementById('moon-cost').innerText = moonTotal;
    }
    totalCost();
}

function totalCost() {

    const totalJourneyCost = marsTotal + moonTotal;
    document.getElementById('total-cost').innerText = totalJourneyCost;
}
