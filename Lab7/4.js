import { log } from './loggingModule.js';

const ALPHABET_SIZE = 26;

export function encrypt(message, shift) {
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            result += String.fromCharCode(((charCode - 65 + shift) % ALPHABET_SIZE) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            result += String.fromCharCode(((charCode - 97 + shift) % ALPHABET_SIZE) + 97);
        } else {
            result += message[i];
        }
    }

    log(LogLevel.INFO, `Encrypted message: ${result}`);
    return result;
}

export function decrypt(encryptedMessage, shift) {
    return encrypt(encryptedMessage, ALPHABET_SIZE - shift);
}
