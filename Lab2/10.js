// 10. Функція, яка відображає букви слова у зворотньому порядку

function reverseText(text) {
    return text.split('').reverse().join('');
}

console.log(reverseText('Hello'));
