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

}
//function for total segment



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