function Prices() {
    ApplePrice();
    OrangePrice();
}

function ApplePrice(apple = 12.50, discount = 15) {
    do {
        apple = +prompt('ENTER THE COST OF APPLES', 12.50);
    } while (!(isFinite(apple)));

    do {
        discount = +prompt('WRITE DISCOUNT FOR APPLE PRICE VALUE', 15);
    } while (!(isFinite(discount)));

    let applePrice = (apple - apple * discount/100).toFixed(2);
    confirm(`Price of apples: ${applePrice}`);
    return applePrice;
}

function OrangePrice(orange = 12.50, margin = 15) {
    do {
    orange = +prompt('ENTER THE COST OF ORANGE', 12.50);
    } while (!(isFinite(orange)));

    do {
    margin = +prompt('WRITE MARGIN FOR ORANGE PRICE VALUE', 15);
    } while (!(isFinite(margin)));

    let orangePrice = (orange + orange * margin/100).toFixed(2);
    confirm(`Price of oranges: ${orangePrice}`);
    return orangePrice;
}

function PriceTag() {
    confirm('Task2');
    let price = ApplePrice();
    let message = `Apple from Ukraine. \nPrice: ${price}hrn`;
    confirm(message);
    document.write(`Apple from Ukraine. Price: ${price}hrn`);
    return price;
}

Prices();
PriceTag();
