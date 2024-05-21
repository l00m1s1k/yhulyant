import CryptoJS from 'crypto-js';

const secretKey = 'mySecretKey';

export function encryptMessage(message) {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
}

export function decryptMessage(encryptedMessage) {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
