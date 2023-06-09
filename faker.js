const fs = require('fs');
const faker = require('faker');

const parks = ['Weston Regional Park', 'Markham Park', 'Bonaventure TC Club'];

const players = [];

for (let i = 0; i < 2000; i++) {
    const numParks = faker.random.number({ min: 1, max: 3 });
    const selectedParks = faker.random.arrayElements(parks, numParks);

    const player = {
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        year_of_birth: faker.random.number({ min: 1950, max: 2005 }),
        level: faker.random.arrayElement(['Beginner', 'Intermediate', 'Advanced']),
        park: selectedParks.join(', ')
    };

    players.push(player);
}

// Convert the players array to a JSON string
const jsonData = JSON.stringify(players, null, 2);

// Write the JSON data to a file
fs.writeFile('players.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data written to players.json file');
    }
});
