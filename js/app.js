//function for bill segment
function bill(perameter, location) {
    const cost = document.getElementById(location);

    if (perameter == '8gb' || perameter == '256gb' || perameter == 'free') {

        cost.innerText = 0;
    }
    else if (perameter == '16gb' || perameter == '1tb') {
        cost.innerText = 180;
    }
    else if (perameter == '512gb') {
        cost.innerText = 100;
    }
    else {
        cost.innerText = 20;
    }

    //Total
    total();

};


//function for total segment
function total() {
    //call total price
    const totalPrice = document.getElementById('total-price');
    //call total
    const totalWithoutCode = document.getElementById('total');
    //add all costs
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseInt(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-charge').innerText);
    const totalCost = bestPrice + extraMemoryCost + extraStorageCost + deliveryCost;
    //show total price
    totalPrice.innerText = totalCost;
    totalWithoutCode.innerText = totalCost;

};
//function for pomocode
function PomoCode() {
    let code = document.getElementById('code');
    const total = document.getElementById('total');
    const totalPrice = document.getElementById('total-price').innerText;
    if (code.value == 'stevekaku') {
        const balance = totalPrice * 0.8;
        total.innerText = balance;
    }
    code.value = '';


};


//memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    bill('8gb', 'extra-memory-cost');
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    bill('16gb', 'extra-memory-cost');
});


//storage
document.getElementById('256gb-storage').addEventListener('click', function () {
    bill('256gb', 'extra-storage-cost');
});
document.getElementById('512gb-storage').addEventListener('click', function () {
    bill('512gb', 'extra-storage-cost');
});
document.getElementById('1tb-storage').addEventListener('click', function () {
    bill('1tb', 'extra-storage-cost');
});


//delivery
document.getElementById('free').addEventListener('click', function () {
    bill('free', 'delivery-charge');
});
document.getElementById('charge').addEventListener('click', function () {
    bill('charge', 'delivery-charge');
});


//pomo code
document.getElementById('apply').addEventListener('click', function () {
    PomoCode();
});