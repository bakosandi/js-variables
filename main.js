let products = [
    "sampon", 
    "tusfurdo", 
    {
        category: "konyhai", 
        name: "turmix2000", 
        price: 5000, 
        inStock: true, 
        attachments: ["fej", "motor"]
    }
];

function main() {
    console.log("It works");
    let product = products[2];
    let answer = window.confirm("Do you want a " + product.name);
    if (answer === false) {
        let answer = window.confirm("But is has " + product.attachments.join(","));
        if (answer === true) {
            console.log(product);
        }
    }
}

window.addEventListener("load", main);

