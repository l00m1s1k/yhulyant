function messageFormat(template, ...args) {
    return template.replace(/{(\d+)}/g, (match, index) => args[index]);
}

// Example usage:
console.log(messageFormat('{0} has {1} messages', 'John', 5)); // Output: John has 5 messages
console.log(messageFormat('Il y a {1} messages pour {0}', 'John', 5)); // Output: Il y a 5 messages pour John
