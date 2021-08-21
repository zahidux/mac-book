// Get Extra Cost
function getExtraCost(productId, price) {
    const extraCost = document.getElementById(productId + '_cost');
    extraCost.innerText = price;
    // calculate subtotal
    calculateSubTotal();
    document.getElementById('total_cost').innerText = calculateSubTotal();
}

// calculate sub total
function calculateSubTotal() {
    // memory cost
    const memoryCost = document.getElementById('extra_memory_cost');
    const memoryCostNumber = parseFloat(memoryCost.innerText);

    // storag cost
    const storageCost = document.getElementById('extra_storage_cost');
    const storageCostNumber = parseFloat(storageCost.innerText);

    // delivery cost
    const deliveryCost = document.getElementById('delivery_cost');
    const deliveryCostNumber = parseFloat(deliveryCost.innerText);

    // total parts cost
    const extraPartsTotal = memoryCostNumber + storageCostNumber + deliveryCostNumber;
    const subTotal = 1299 + extraPartsTotal;
    const subTotalPrice = document.getElementById('sub_total').innerText = subTotal;
    return subTotalPrice;
}

// promo code apply and discount
function promoCodeApply() {
    const inputPromo = document.getElementById('promo_input');
    const inputCode = inputPromo.value;
    const totalCost = document.getElementById('total_cost');
    const discount = calculateSubTotal() * 20 / 100;
    let total = calculateSubTotal() - discount;

    if (inputCode == 'stevekaku') {
        total = calculateSubTotal() - discount;
    } else {
        total = calculateSubTotal();
    }
    totalCost.innerText = total;
    // clear the input value
    inputPromo.value = '';
}


// extra memory cost
document.getElementById('memory_first_option').addEventListener('click', function () {
    getExtraCost('extra_memory', 0);

});
document.getElementById('memory_second_option').addEventListener('click', function () {
    getExtraCost('extra_memory', 180);
});

// extra storage cost
document.getElementById('storage_first_option').addEventListener('click', function () {
    getExtraCost('extra_storage', 0);
});
document.getElementById('storage_second_option').addEventListener('click', function () {
    getExtraCost('extra_storage', 100);
});
document.getElementById('storage_third_option').addEventListener('click', function () {
    getExtraCost('extra_storage', 180);
});


// extra delivery cost
document.getElementById('delivery_first_option').addEventListener('click', function () {
    getExtraCost('delivery', 0);
});
document.getElementById('delivery_second_option').addEventListener('click', function () {
    getExtraCost('delivery', 20);
});