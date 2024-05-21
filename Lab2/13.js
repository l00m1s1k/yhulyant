// 13. Алгоритм, який замінює певне слово у текстовому фрагменті

function replaceWord(text, oldWord, newWord) {
    const regex = new RegExp(oldWord, 'g');
    return text.replace(regex, newWord);
}

console.log(replaceWord('This is a test sentence', 'test', 'real'));
