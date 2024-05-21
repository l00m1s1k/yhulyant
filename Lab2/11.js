// 11. Функція, яка визначає, чи передане ім'я файлу є формату '.js'

function isJsFile(fileName) {
    return fileName.endsWith('.js');
}

console.log(isJsFile('script.js'));  // true
console.log(isJsFile('style.css'));  // false
