function printNumbers(number) {
    const enNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arNumbers = ['صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
    const thNumbers = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];

    console.log(`English: ${enNumbers[number]}`);
    console.log(`Arabic: ${arNumbers[number]}`);
    console.log(`Thai: ${thNumbers[number]}`);
}

// Example usage:
printNumbers(3);
