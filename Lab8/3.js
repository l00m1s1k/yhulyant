function formatDate(dateTime, locale) {
    return dateTime.toLocaleString(locale);
}

// Example usage:
const date = new Date();
console.log(formatDate(date, 'fr-FR')); // Output will vary based on current date and time
console.log(formatDate(date, 'zh-CN')); // Output will vary based on current date and time
console.log(formatDate(date, 'ar-EG')); // Output will vary based on current date and time
console.log(formatDate(date, 'th-TH-u-nu-thai')); // Output will vary based on current date and time
