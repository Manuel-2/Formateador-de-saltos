const textBoxInput = document.getElementById('txtBox');
const sendButton = document.getElementById('sendButton');
const textOutput = document.getElementById('output');

function getText() {
    const value = textBoxInput.value;
    const result = value.split('').map(letter => {
        if (letter == '\n') {
            return '\\n';
        } else {
            return letter;
        }
    }).join('');
    textOutput.value = result;
    console.log(result);
}

function copyText() {
    textOutput.select();
    document.execCommand('copy');
}