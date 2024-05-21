function compareTexts(text1, text2, locale, caseSensitive = true) {
    const compareOptions = { locale, sensitivity: caseSensitive ? 'case' : 'base' };
    return text1.localeCompare(text2, locale, compareOptions);
}

// Example usage:
console.log(compareTexts('apple', 'banana', 'en-US')); // Output: -1 (apple comes before banana)
console.log(compareTexts('banana', 'apple', 'en-US')); // Output: 1 (banana comes after apple)
console.log(compareTexts('apple', 'Banana', 'en-US', false)); // Output: 1 (case-insensitive comparison)
