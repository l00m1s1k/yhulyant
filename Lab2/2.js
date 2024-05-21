// 2. Об'єднання двох об'єктів з пріоритетом властивостей userSetting

const defaults = {
    mode: 'test',
    debugLevel: 'error',
    logFolder: 'root'
};

const userSetting = {
    mode: 'production',
    debugLevel: 'trace'
};

// Спосіб 1: Object.assign
function mergeSettings1(defaults, userSetting) {
    return Object.assign({}, defaults, userSetting);
}

// Спосіб 2: Spread оператор
function mergeSettings2(defaults, userSetting) {
    return { ...defaults, ...userSetting };
}

// Спосіб 3: Цикл for...in
function mergeSettings3(defaults, userSetting) {
    const result = { ...defaults };
    for (const key in userSetting) {
        if (userSetting.hasOwnProperty(key)) {
            result[key] = userSetting[key];
        }
    }
    return result;
}

console.log(mergeSettings1(defaults, userSetting));
console.log(mergeSettings2(defaults, userSetting));
console.log(mergeSettings3(defaults, userSetting));
