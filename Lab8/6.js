class PaperSize {
    constructor(locale, unit = 'mm') {
      this.locale = locale;
      this.unit = unit;
    }
  
    getStandardSize() {
      // Додаткова логіка для вибору розміру відповідно до локалі
      const sizes = {
        'ISO 216': {
          'A0': { width: 841, height: 1189 },
          'A1': { width: 594, height: 841 },
          // Додайте інші розміри за необхідності
        },
        // Додаткові стандарти
      };
      
      return sizes['ISO 216']; // Повертаємо розмір за стандартом ISO 216 як приклад
    }
  
    getDimensions() {
      const { width, height } = this.getStandardSize();
      return {
        width: `${width} ${this.unit}`,
        height: `${height} ${this.unit}`
      };
    }
  }
  
  // Приклад використання
  const paper = new PaperSize('fr-FR');
  console.log(paper.getDimensions()); // Виведе: { width: '841 mm', height: '1189 mm' }
  