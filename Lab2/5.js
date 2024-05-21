// 5. Перетворення масиву persons у масив текстових фрагментів

const personDescriptions = persons.map(person => {
    return `${person.name} from ${person.city} born in ${new Date().getFullYear() - person.age}`;
});

console.log(personDescriptions);
