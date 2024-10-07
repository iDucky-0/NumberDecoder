function decodeNumber() {
    const inputNumber = document.getElementById("inputNumber").value;
    const base = parseInt(document.getElementById("baseSelect").value);
    let result;

    try {
        if (base === 2) {
            result = parseInt(inputNumber, 2);
        } else if (base === 10) {
            result = inputNumber; // Already in decimal
        } else if (base === 12) {
            result = parseInt(inputNumber, 12);
        } else if (base === 16) {
            result = parseInt(inputNumber, 16);
        }

        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById("result").innerText = "Invalid input!";
    }
}
