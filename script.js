function switchToLightTheme() {
    document.body.classList.remove('dark-mode');
    document.querySelector('.container').classList.remove('dark-mode');
    document.querySelectorAll('h1, label, input').forEach(el => el.classList.remove('dark-mode'));
    document.querySelectorAll('input').forEach(input => input.classList.remove('dark-mode'));
}

function switchToDarkTheme() {
    document.body.classList.add('dark-mode');
    document.querySelector('.container').classList.add('dark-mode');
    document.querySelectorAll('h1, label, input').forEach(el => el.classList.add('dark-mode'));
    document.querySelectorAll('input').forEach(input => input.classList.add('dark-mode'));
}

function convertFromBinary() {
    // Your conversion logic here
}

function convertFromDenary() {
    // Your conversion logic here
}

function convertFromPenary() {
    // Your conversion logic here
}

function convertFromHexadecimal() {
    // Your conversion logic here
}

function showCredits() {
    document.getElementById('credits-message').style.display = 'block';
}

function hideCredits() {
    document.getElementById('credits-message').style.display = 'none';
}
