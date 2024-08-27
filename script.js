// Esta parte es del DOM
const inputText = document.getElementById('input-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const outputMessage = document.getElementById('output-message');
const copyBtn = document.getElementById('copy-btn');

// Esta parte es la función para encriptar el texto
function encryptText() {
    const text = inputText.value;
    const encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    displayOutput(encryptedText);
}

// Y esta parte es la función que desencripta el texto
function decryptText() {
    const text = inputText.value;
    const decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    displayOutput(decryptedText);
}

// Esta función per4mite ver la respueta en el output
function displayOutput(text) {
    outputMessage.innerHTML = `<p>${text}</p>`;
    copyBtn.style.display = 'block';
}

// Esta función realiza el copiado del texto al portapapeles
function copyToClipboard() {
    const textToCopy = outputMessage.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        resetApp();
    });
}

// Y esta función me permite reiniciar el encriptador
function resetApp() {
    inputText.value = '';
    outputMessage.innerHTML = `
        <img src="img/Muñeco.png" alt="Ningún mensaje encontrado">
        <p>Copiado realizado con éxito!</p><br>
        <p>Ingresa el texto que desees encriptar o desencriptar nuevamente.</p>`;
    copyBtn.style.display = 'none';
}


encryptBtn.addEventListener('click', encryptText);
decryptBtn.addEventListener('click', decryptText);
copyBtn.addEventListener('click', copyToClipboard);

// Esconde el botón de (Copiar) al inicio
copyBtn.style.display = 'none';
