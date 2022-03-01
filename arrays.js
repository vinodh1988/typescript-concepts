class Product {
    constructor(name, price, marketedCountries) {
        this.name = name,
            this.price = price;
        this.marketedCountries = marketedCountries;
    }
    print() {
        console.log(this.price, this.marketedCountries);
    }
}
var product = new Product("Mobile", 10000, [
    { countryid: 'IND', name: "India" },
    { countryid: 'CHN', name: "China" }
]);
product.print();
