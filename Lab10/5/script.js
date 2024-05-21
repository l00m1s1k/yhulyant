document.getElementById('save-button').addEventListener('click', function () {
    const text = document.getElementById('text-input').value;
    if (text.trim() !== '') {
        saveTextToFile(text);
    }
});

function saveTextToFile(text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const fileName = 'text_file.txt';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
