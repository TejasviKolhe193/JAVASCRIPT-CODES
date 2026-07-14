// 1. Demonstrating var, let, and const
const TAX_RATE = 0.08; // const: Cannot be reassigned. Perfect for fixed rates.
const DISCOUNT_THRESHOLD = 100;

function calculateBill() {
    // let: Block-scoped. Can be reassigned. Used for values that change.
    let subtotal = 0; 
    
    // var: Function-scoped (older way, avoid in modern JS, but shown for demonstration)
    var storeName = "TechMart"; 

    // Simulating a user's shopping cart object
    const cart = {
        customerName: "Alex Doe",
        items: [
            { name: "Wireless Mouse", price: 25, quantity: 2 },
            { name: "Mechanical Keyboard", price: 80, quantity: 1 },
            { name: "HDMI Cable", price: 15, quantity: 3 }
        ]
    };

    console.log(`--- Welcome to ${storeName} ---`);

    // Loop through items to calculate subtotal
    for (let item of cart.items) {
        // 2. Demonstrating Destructuring
        // Pulling properties directly out of the item object
        const { name, price, quantity } = item;
        
        let itemTotal = price * quantity;
        subtotal += itemTotal;

        // 3. Demonstrating Template Literals
        // Using backticks (`) and ${} to embed variables directly into strings
        console.log(`- ${name} x${quantity}: $${itemTotal.toFixed(2)}`);
    }

    // Apply a conditional discount using let
    let discount = 0;
    if (subtotal > DISCOUNT_THRESHOLD) {
        discount = subtotal * 0.10; // 10% discount
    }

    const tax = (subtotal - discount) * TAX_RATE;
    const finalTotal = subtotal - discount + tax;

    // Output final summary using template literals
    console.log(`\n--- Bill Summary for ${cart.customerName} ---`);
    console.log(`Subtotal:      $${subtotal.toFixed(2)}`);
    console.log(`Discount:     -$${discount.toFixed(2)}`);
    console.log(`Tax (8%):      +$${tax.toFixed(2)}`);
    console.log(`Total Due:     $${finalTotal.toFixed(2)}`);
    console.log(`-----------------------------------`);
}

calculateBill();