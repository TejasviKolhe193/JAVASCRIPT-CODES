function calculateGrade() {
    // 1. Fetch DOM elements for input and error handling
    const nameInput = document.getElementById("studentName").value.trim();
    const marksInput = document.getElementById("studentMarks").value;
    
    const nameError = document.getElementById("nameError");
    const marksError = document.getElementById("marksError");
    const resultBox = document.getElementById("result");

    // Reset previous errors and hidden results
    nameError.style.display = "none";
    marksError.style.display = "none";
    resultBox.style.display = "none";

    // 2. Form Validation
    let isValid = true;

    if (nameInput === "") {
        nameError.style.display = "block";
        isValid = false;
    }

    // Convert marks to a number for calculation
    const marks = parseFloat(marksInput);

    if (marksInput === "" || isNaN(marks) || marks < 0 || marks > 100) {
        marksError.style.display = "block";
        isValid = false;
    }

    // Stop execution if form validation fails
    if (!isValid) return;

    // 3. Control Structures (Conditional logic to evaluate grades)
    let grade = "";
    let status = "";
    let cssClass = "pass"; // Default styling class

    if (marks >= 90) {
        grade = "A+";
        status = "Excellent Performance!";
    } else if (marks >= 80) {
        grade = "A";
        status = "Very Good!";
    } else if (marks >= 70) {
        grade = "B";
        status = "Good Job!";
    } else if (marks >= 60) {
        grade = "C";
        status = "Satisfactory.";
    } else if (marks >= 50) {
        grade = "D";
        status = "Passed.";
    } else {
        grade = "F";
        status = "Failed. Needs Improvement.";
        cssClass = "fail"; // Switches to red styling box
    }

    // 4. Output Generation using Template Literals
    resultBox.className = `result-box ${cssClass}`;
    resultBox.innerHTML = `
        <h3>Report Card</h3>
        <p>Student: ${nameInput}</p>
        <p>Marks: ${marks}/100</p>
        <p>Grade: ${grade}</p>
        <p>Result: ${status}</p>
    `;
    
    // Make the result container visible
    resultBox.style.display = "block";
}