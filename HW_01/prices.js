function Prices() {
    ApplePrice();
    OrangePrice();
    return console.log('end task 1');
}

function ApplePrice(apple = 12.50, discount = 15) {
    do {
        apple = +prompt('ENTER THE COST OF APPLES', 12.50);
    } while (!(isFinite(apple) && apple > 0));

     do {
         discount = +prompt('WRITE DISCOUNT FOR APPLES PRICE VALUE', 15);
     } while (!(isFinite(discount) && discount > 0));

    let applePrice = (apple - apple * discount/100).toFixed(2);
    confirm(`Price of apples: ${applePrice}`);
    return applePrice;
}

function OrangePrice(orange = 12.50, margin = 15) {
    do {
    orange = +prompt('ENTER THE COST OF ORANGE', 12.50);
    } while (!(isFinite(orange) && orange > 0));

    do {
        margin = +prompt('WRITE MARGIN FOR ORANGES PRICE VALUE', 15);
    } while (!(isFinite(margin) && margin > 0));

    let orangePrice = (orange + orange * margin/100).toFixed(2);

    confirm(`Price of oranges: ${orangePrice}`);
    return orangePrice;
}

function PriceTag() {
    confirm('T a s k 2');
    let price = ApplePrice();
    let message = `Apples from Ukraine. \nPrice: ${price}hrn`;
    let messageSecondWay = `Apples from Ukraine. 
    Price: ${price}hrn`;
    confirm(message);
    confirm(messageSecondWay);
    document.write(`Apples from Ukraine. Price: ${price}hrn`);
    return price;
}

Prices();
PriceTag();
