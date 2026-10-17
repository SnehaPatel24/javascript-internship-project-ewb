
console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Function to assign a category
function getCategory(price) {
    if (price < 50) {
        return "Budget";
    } else if (price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}

// Take product details from the user
let productName = prompt("Enter the new product name:");
let productPrice = prompt("Enter the product price:");

// Validate the inputs
if (
    productName === null ||
    productName.trim() === "" ||
    productPrice === null ||
    productPrice.trim() === "" ||
    !Number.isFinite(Number(productPrice)) ||
    Number(productPrice) <= 0
) {
    console.log("Invalid input! Please enter a product name and a positive price.");
} else {
    productName = productName.trim();
    productPrice = Number(productPrice);

    const newProduct = {
        name: productName,
        price: productPrice,
        category: getCategory(productPrice)
    };

    inventory.push(newProduct);

    console.log("New product added:", newProduct);
}

console.log("Current inventory:", inventory);

console.log("--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function(product) {
    // Assign category using switch
    let category;

    switch (true) {
        case product.price < 50:
            category = "Budget";
            break;

        case product.price < 200:
            category = "Standard";
            break;

        default:
            category = "Premium";
    }

    // Skip products without a valid name or price
    if (
        !product.name ||
        !Number.isFinite(product.price) ||
        product.price <= 0
    ) {
        console.log("Skipping invalid product");
        return;
    }

    console.log(
        "* Item: " + product.name +
        " ($" + product.price +
        ") -> Category: " + category
    );
});

// Demonstrate break and continue
console.log("--- Inventory Search ---");

for (let i = 0; i < inventory.length; i++) {
    if (!inventory[i].name) {
        continue;
    }

    if (inventory[i].name === "Monitor") {
        console.log("Found product:", inventory[i].name);
        break;
    }
}

console.log("--- Financial Analytics ---");

// Calculate total inventory value
function calculateTotalValue(products) {
    let total = 0;

    products.forEach(function(product) {
        total += product.price;
    });

    return total;
}

// Calculate tax or discount
const calculateAdjustedPrice = (price, percentage, type = "tax") => {
    if (type === "discount") {
        return price - (price * percentage / 100);
    }

    return price + (price * percentage / 100);
};

const totalValue = calculateTotalValue(inventory);

console.log("Total Inventory Value: $" + totalValue);

// Filter products priced under $200
const affordableItems = inventory.filter(function(product) {
    return product.price < 200;
});

const affordableNames = affordableItems.map(function(product) {
    return product.name;
});

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableNames)
);

// Create formatted report
const formattedReport = inventory.map(function(product) {
    return product.name.toUpperCase() + ": $" + product.price;
});

console.log(
    "Formatted Report List:",
    JSON.stringify(formattedReport)
);

// Demonstrate tax and discount calculations
console.log(
    "Price after 10% tax on $100:",
    calculateAdjustedPrice(100, 10)
);

console.log(
    "Price after 10% discount on $100:",
    calculateAdjustedPrice(100, 10, "discount")
);

