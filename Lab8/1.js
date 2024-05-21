class Person {
    constructor(firstName, lastName, gender, maritalStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    toLocaleString(locale) {
        const salutations = {
            en: {
                male: 'Mr.',
                female: {
                    single: 'Ms.',
                    married: 'Mrs.'
                }
            },
            fr: {
                male: 'M.',
                female: {
                    single: 'Mme',
                    married: 'Mme'
                }
            },
            de: {
                male: 'Herr',
                female: {
                    single: 'Frau',
                    married: 'Frau'
                }
            }
            // Add more salutations for other languages as needed
        };

        const salutation = salutations[locale][this.gender][this.maritalStatus];
        return `${salutation} ${this.lastName}`;
    }
}

// Example usage:
const person = new Person('John', 'Smith', 'male', 'married');
console.log(person.toLocaleString('en')); // Output: Mr. Smith
console.log(person.toLocaleString('fr')); // Output: Mme Smith
console.log(person.toLocaleString('de')); // Output: Herr Smith
