document.addEventListener('DOMContentLoaded', function () {
    // Player data array
    const players = [
        {
            name: "Andrea",
            last_name: "Culberson",
            email: "andyculberson@me.com",
            year_of_birth: 1946,
            level: "Beginner",
            park: "Weston Regional Park"
        },
        {
            name: "Andrea",
            last_name: "Chico",
            email: "andchico@yahoo.com",
            year_of_birth: 1993,
            level: "Beginner",
            park: "Weston Regional Park"
        },
        {
            name: "Ari",
            last_name: "Pe",
            email: "makeithappen2023@hotmail.com",
            year_of_birth: 1982,
            level: "Beginner",
            park: "Need Suggestions"
        },
        {
            name: "Arleen",
            last_name: "Rodriguez",
            email: "trumpcondo@aol.com",
            year_of_birth: 1975,
            level: "Beginner",
            park: "Need Suggestions"
        },
        {
            name: "Arturo",
            last_name: "Garzon",
            email: "arturo2009futbol@hotmail.com",
            year_of_birth: 1965,
            level: "Beginner",
            park: "Bonaventure TC Club"
        },
        {
            name: "Cesar",
            last_name: "Sanchez",
            email: "cecisam1@hotmail.com",
            year_of_birth: 1972,
            level: "Beginner",
            park: "Weston Regional Park, Markham Park, Bonaventure TC Club"
        },
        {
            name: "Miguel",
            last_name: "Sancho",
            email: "sanchojaf",
            year_of_birth: 1980,
            level: "Advanced",
            park: "Weston Regional Park, Markham Park, Bonaventure TC Club"
        },
        {
            name: "Andrea",
            last_name: "Culberson",
            email: "andyculberson@me.com",
            year_of_birth: 1946,
            level: "Beginner",
            park: "Weston Regional Park"
        },
        {
            name: "Andrea",
            last_name: "Chico",
            email: "andchico@yahoo.com",
            year_of_birth: 1993,
            level: "Beginner",
            park: "Weston Regional Park"
        },
        {
            name: "Ari",
            last_name: "Pe",
            email: "makeithappen2023@hotmail.com",
            year_of_birth: 1982,
            level: "Beginner",
            park: "Need Suggestions"
        },
        {
            name: "Arleen",
            last_name: "Rodriguez",
            email: "trumpcondo@aol.com",
            year_of_birth: 1975,
            level: "Beginner",
            park: "Need Suggestions"
        },
        {
            name: "Arturo",
            last_name: "Garzon",
            email: "arturo2009futbol@hotmail.com",
            year_of_birth: 1965,
            level: "Beginner",
            park: "Bonaventure TC Club"
        },
        {
            name: "Cesar",
            last_name: "Sanchez",
            email: "cecisam1@hotmail.com",
            year_of_birth: 1972,
            level: "Beginner",
            park: "Weston Regional Park, Markham Park, Bonaventure TC Club"
        },
        {
            name: "Miguel",
            last_name: "Sancho",
            email: "sanchojaf",
            year_of_birth: 1980,
            level: "Advanced",
            park: "Weston Regional Park, Markham Park, Bonaventure TC Club"
        },
        {
            name: "Andrea",
            last_name: "Culberson",
            email: "andyculberson@me.com",
            year_of_birth: 1946,
            level: "Beginner",
            park: "Weston Regional Park"
        },
        {
            name: "Andrea",
            last_name: "Chico",
            email: "andchico@yahoo.com",
            year_of_birth: 1993,
            level: "Beginner",
            park: "Weston Regional Park"
        },
        {
            name: "Ari",
            last_name: "Pe",
            email: "makeithappen2023@hotmail.com",
            year_of_birth: 1982,
            level: "Beginner",
            park: "Need Suggestions"
        },
        {
            name: "Arleen",
            last_name: "Rodriguez",
            email: "trumpcondo@aol.com",
            year_of_birth: 1975,
            level: "Beginner",
            park: "Need Suggestions"
        },
        {
            name: "Arturo",
            last_name: "Garzon",
            email: "arturo2009futbol@hotmail.com",
            year_of_birth: 1965,
            level: "Beginner",
            park: "Bonaventure TC Club"
        },
        {
            name: "Cesar",
            last_name: "Sanchez",
            email: "cecisam1@hotmail.com",
            year_of_birth: 1972,
            level: "Beginner",
            park: "Weston Regional Park, Markham Park, Bonaventure TC Club"
        },
        {
            name: "Miguel",
            last_name: "Sancho",
            email: "sanchojaf",
            year_of_birth: 1980,
            level: "Advanced",
            park: "Weston Regional Park, Markham Park, Bonaventure TC Club"
        }
    ];

    const playerGrid = document.getElementById('player-grid');

    // Function to generate the player cards
    function generatePlayerCards() {
        playerGrid.innerHTML = '';

        const filterLevel = document.getElementById('filter-level').value;
        const filterPark = document.getElementById('filter-park').value;
        const filterAge = document.getElementById('filter-age').value;
        const searchQuery = document.getElementById('search-input').value.toLowerCase();

        players.forEach(function (player) {
            const name = player.name.toLowerCase();
            const lastName = player.last_name.toLowerCase();
            const email = player.email.toLowerCase();

            if (
                (filterLevel === 'All' || player.level === filterLevel) &&
                (filterPark === 'All' || player.park === filterPark) &&
                (filterAge === 'All' || checkAgeRange(player.year_of_birth, filterAge)) &&
                (searchQuery === '' ||
                    name.includes(searchQuery) ||
                    lastName.includes(searchQuery) ||
                    email.includes(searchQuery))
            ) {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
              <h3><i class="fas fa-user"></i> ${player.name} ${player.last_name}</h3>
              <p><i class="fas fa-envelope"></i> ${player.email}</p>
              <p><i class="fas fa-birthday-cake"></i> Year of Birth: ${player.year_of_birth}</p>
              <p><i class="fas fa-signal"></i> Level: ${player.level}</p>
              <p><i class="fas fa-tree"></i> Park: ${player.park}</p>
            `;
                playerGrid.appendChild(card);
            }
        });
    }


    // Function to check if the player's age falls within the selected range
    function checkAgeRange(yearOfBirth, filterAge) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - yearOfBirth;

        if (filterAge === '<19' && age < 19) {
            return true;
        } else if (filterAge === '19-35' && age >= 19 && age <= 35) {
            return true;
        } else if (filterAge === '35-55' && age > 35 && age <= 55) {
            return true;
        } else if (filterAge === '>55' && age > 55) {
            return true;
        } else {
            return false;
        }
    }

    // Event listener for filter change
    const filterSelectLevel = document.getElementById('filter-level');
    filterSelectLevel.addEventListener('change', generatePlayerCards);

    const filterSelectPark = document.getElementById('filter-park');
    filterSelectPark.addEventListener('change', generatePlayerCards);

    const filterSelectAge = document.getElementById('filter-age');
    filterSelectAge.addEventListener('change', generatePlayerCards);

    // Initial generation of player cards
    generatePlayerCards();

    const resetButton = document.getElementById("reset-filter");
    resetButton.addEventListener("click", function () {
        document.getElementById("filter-level").value = "All";
        document.getElementById("filter-park").value = "All";
        document.getElementById("filter-age").value = "All";

        generatePlayerCards();
    });
});


