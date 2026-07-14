// ==========================================
// 1. SCOPE & CLOSURE DEMONSTRATION
// ==========================================
// Global Scope variable
const appName = "Palindrome Checker";

// Outer Function creating a Closure to track check statistics safely
function createTracker() {
    // Local Scope / Lexical Environment variable
    let checkCount = 0; 
    
    // The inner function forms a closure over 'checkCount'
    return function incrementCount() {
        checkCount++;
        return checkCount;
    };
}
// Instantiate our closure tracking tool
const trackCheck = createTracker();


// ==========================================
// 2. FUNCTION TYPES DEMONSTRATION
// ==========================================

// Function Declaration: Cleans text using standard syntax
function cleanText(str) {
    // Uses block scope (let) inside the function logic
    let lowerStr = str.toLowerCase();
    // Strip out non-alphanumeric characters using regex
    return lowerStr.replace(/[^a-z0-9]/g, "");
}

// Function Expression (Arrow Function): Reverses a string
const reverseString = (str) => {
    return str.split("").reverse().join("");
};


// ==========================================
// 3. CORE LOGIC & TRY-CATCH ERROR HANDLING
// ==========================================
function handleCheck() {
    const inputField = document.getElementById("textInput");
    const resultDiv = document.getElementById("result");
    const statsPanel = document.getElementById("statsPanel");
    
    const userValue = inputField.value;

    try {
        // Validation Check: If string is completely empty or just spaces
        if (!userValue.trim()) {
            throw new Error("Input cannot be empty. Please type something!");
        }
        
        // Process text using our declared tools
        const clean = cleanText(userValue);
        const reversed = reverseString(clean);
        
        // Determine if it matches backward and forward
        const isPalindrome = (clean === reversed);
        
        // Update stats using our closure tracker
        const currentCount = trackCheck();
        statsPanel.innerText = `Checks completed: ${currentCount}`;

        // Render success UI responses
        if (isPalindrome) {
            resultDiv.className = "success";
            resultDiv.innerHTML = `🎉 "${userValue}" is a palindrome!`;
        } else {
            resultDiv.className = "error";
            resultDiv.innerHTML = `❌ "${userValue}" is NOT a palindrome.`;
        }

    } catch (error) {
        // Gracefully catch unexpected behaviors or explicit validation errors
        resultDiv.className = "error";
        resultDiv.innerHTML = `⚠️ Error: ${error.message}`;
        console.error(`[${appName}] Logged Exception:`, error);
    }
}