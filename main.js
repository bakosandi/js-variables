let products = [
    {
        category: "konyhai", 
        name: "turmix2000", 
        price: 5000, 
        stock: 4, 
        attachments: ["fej", "motor"]
    },
    {
        category: "fürcsi",
        name: "sampon",
        price: "800",
        stock: "120",
        attachments: ["head" , "shoulders"] 
    },
    {
        category: "fürcsi",
        name: "tusi",
        price: "750",
        stock: "150",
        attachments: ["U2" , "kókusz"]
    }
];

let customer = "Ádám";

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

function inventory() {
    let stock = products[2].stock;
    let price = products[2].price;
    let value = stock * price;
    let div = document.createElement("div");
    div.innerText = products[2].name + " : " + value;
    document.body.append(div);

    stock = products[0].stock;
    price = products[0].price;
    value = stock * price;
    div = document.createElement("div");
    div.innerText = products[0].name + " : " + value;
    document.body.append(div);

    stock = products[1].stock;
    price = products[1].price;
    value = stock * price;
    div = document.createElement("div");
    div.innerText = products[1].name + " : " + value;
    document.body.append(div);

    stock = products[0].stock;
    let available = stock >= 5;
    div = document.createElement("div");
    if (available) {
        div.innerText= products[0].name + " elérhető ";
    } else {
          div.innerText= products[0].name + " nem elérhető ";
    }
    document.body.append(div);

    let special = customer === "Ádám"; // mindig használjuk a ===, ne használjuk így ==; ha nem egyenlő !== //
    if (!available && special) { // ! azt jelenti, hogy not //
        div.innerText = div.innerText + " De neki mégis ";
    } 
    
}

window.addEventListener("load", inventory);

