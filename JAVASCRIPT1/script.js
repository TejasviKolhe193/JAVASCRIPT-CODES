// EXTERNAL JAVASCRIPT FILE

console.log("Hello from External JavaScript!");

// Dynamically updating the greeting message from the external file
const welcomeHeading = document.getElementById("welcome-msg");
if (welcomeHeading) {
    welcomeHeading.style.color = "#2c3e50";
    welcomeHeading.innerText = "Hello & Welcome, Tejasvi!";
}

// Demonstrating an error console method
try {
    throw new Error("Simulated external script checkpoint failed.");
} catch (error) {
    console.error("Caught an expected error in external script:", error.message);
}