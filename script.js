const players = [
    {
        "id": "214",
        "first_name": "Debbie",
        "last_name": "Gray",
        "birthyear": "1959",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "232",
        "first_name": "Sebastian",
        "last_name": "Calderon",
        "birthyear": "2001",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "115",
        "first_name": "Frank (Tom)",
        "last_name": "Ernst",
        "birthyear": "1953",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "88",
        "first_name": "Mariorlan",
        "last_name": "Acosta",
        "birthyear": "1976",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "118",
        "first_name": "Marianne",
        "last_name": "Millan",
        "birthyear": "2000",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "65",
        "first_name": "Jackie",
        "last_name": "Michelini",
        "birthyear": "510",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "281",
        "first_name": "Paula",
        "last_name": "Gomez",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "15",
        "first_name": "Joel",
        "last_name": "Calendrillo",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "id": "245",
        "first_name": "Carlos",
        "last_name": "Lovera",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "211",
        "first_name": "Jason",
        "last_name": "Alper",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "284",
        "first_name": "Rudi",
        "last_name": "Eyl",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Midtown Athetic Club\",\"Need Suggestions\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "49",
        "first_name": "Mingping (Max)",
        "last_name": "Di",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "167",
        "first_name": "Daniel",
        "last_name": "Perez Poleo",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "156",
        "first_name": "Ira",
        "last_name": "Abels",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "id": "266",
        "first_name": "Giacomo",
        "last_name": "Tenace",
        "birthyear": "1953",
        "favourite_court_locaton": "[\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "237",
        "first_name": "Rafael",
        "last_name": "Zornosa",
        "birthyear": "01/2",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "56",
        "first_name": "MARCELA",
        "last_name": "Ramponi",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "108",
        "first_name": "Louisa",
        "last_name": "Kerma",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "225",
        "first_name": "LUIS",
        "last_name": "AYET",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "172",
        "first_name": "Sharon",
        "last_name": "Comora",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\",\"Need Suggestions\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "185",
        "first_name": "Andreina",
        "last_name": "Manzo",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "210",
        "first_name": "Doreen",
        "last_name": "Andjich",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "14",
        "first_name": "Cris",
        "last_name": "Cimato",
        "birthyear": "2002",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "139",
        "first_name": "Maria",
        "last_name": "Holgu\u00edn",
        "birthyear": "1981",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "219",
        "first_name": "Ronaldo",
        "last_name": "Hauser",
        "birthyear": "1948",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "256",
        "first_name": "Iliana",
        "last_name": "Cardentey",
        "birthyear": "1967",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "123",
        "first_name": "Mario",
        "last_name": "Sandino",
        "birthyear": "1984",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "68",
        "first_name": "Heidi",
        "last_name": "Fisher",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\",\"Bonaventure TC Club\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "264",
        "first_name": "Amanda",
        "last_name": "Budejen",
        "birthyear": "2004",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "169",
        "first_name": "Justin",
        "last_name": "Crow",
        "birthyear": "1987",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "178",
        "first_name": "David",
        "last_name": "Sandoval",
        "birthyear": "1986",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "289",
        "first_name": "Oscar",
        "last_name": "Franco",
        "birthyear": "1947",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "27",
        "first_name": "Gustavo",
        "last_name": "Pfeifer",
        "birthyear": "1963",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "152",
        "first_name": "Greg",
        "last_name": "Koscs",
        "birthyear": "1956",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "33",
        "first_name": "David",
        "last_name": "Nehdar",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "101",
        "first_name": "Andrea",
        "last_name": "Culberson",
        "birthyear": "1946",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "119",
        "first_name": "Enrique",
        "last_name": "Guzman-Barron Villar",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "268",
        "first_name": "Michael",
        "last_name": "Iglesias",
        "birthyear": "1990",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "79",
        "first_name": "Alexandra",
        "last_name": "Compres",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "291",
        "first_name": "Javier",
        "last_name": "Morales",
        "birthyear": "1979",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\",\"Intermediate\"]"
    },
    {
        "id": "208",
        "first_name": "Marisela",
        "last_name": "Cusati",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "100",
        "first_name": "Arleen",
        "last_name": "Rodriguez",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "224",
        "first_name": "Marcos",
        "last_name": "Hernandez",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "120",
        "first_name": "Carole",
        "last_name": "Cooper",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "72",
        "first_name": "Fredrick",
        "last_name": "Carrasquillo",
        "birthyear": "1983",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "98",
        "first_name": "Cesar",
        "last_name": "Sanchez",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "128",
        "first_name": "Gary",
        "last_name": "Klopman",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "38",
        "first_name": "Yonghong",
        "last_name": "Chen",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "150",
        "first_name": "Sharlene",
        "last_name": "Teng",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "235",
        "first_name": "Orlando",
        "last_name": "Comas",
        "birthyear": "1055",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "209",
        "first_name": "Thomas",
        "last_name": "Francisco",
        "birthyear": "1992",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "135",
        "first_name": "Miguel",
        "last_name": "Maymo",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "255",
        "first_name": "Leilani",
        "last_name": "Baumanis",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "261",
        "first_name": "H\u00e9ctor",
        "last_name": "Budejen",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "41",
        "first_name": "Rosa",
        "last_name": "Elena Nunez",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "102",
        "first_name": "Alina",
        "last_name": "Leontarakis",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "id": "226",
        "first_name": "Roxanna",
        "last_name": "Arjoon",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "70",
        "first_name": "Gina",
        "last_name": "Pineda",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "273",
        "first_name": "Debbi",
        "last_name": "Stark",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "69",
        "first_name": "Gustavo",
        "last_name": "Milla",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "35",
        "first_name": "Carlos",
        "last_name": "Salaverria",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "16",
        "first_name": "Migdalia",
        "last_name": "Matias",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "9",
        "first_name": "Xin",
        "last_name": "Luo",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "238",
        "first_name": "Heidi",
        "last_name": "Donofrio",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "223",
        "first_name": "Alfredo",
        "last_name": "Pons",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "87",
        "first_name": "Sherill",
        "last_name": "Poleo",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "190",
        "first_name": "Manuel",
        "last_name": "Lucena",
        "birthyear": "1960",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "59",
        "first_name": "Lois",
        "last_name": "Paskow",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "6",
        "first_name": "Edwin",
        "last_name": "Colon",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "82",
        "first_name": "Adry",
        "last_name": "Abreu",
        "birthyear": "1979",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "39",
        "first_name": "Xiaofang",
        "last_name": "Fan",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "60",
        "first_name": "Levis",
        "last_name": "Aguila",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "251",
        "first_name": "Sonita",
        "last_name": "Ramsaran",
        "birthyear": "1954",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "77",
        "first_name": "Arsenio",
        "last_name": "Rondon",
        "birthyear": "1959",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "99",
        "first_name": "Arturo",
        "last_name": "Garzon",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "30",
        "first_name": "Enrique",
        "last_name": "Montanez",
        "birthyear": "1976",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "236",
        "first_name": "Dana",
        "last_name": "Nguyen",
        "birthyear": "1957",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "160",
        "first_name": "Camden",
        "last_name": "Kummler",
        "birthyear": "2007",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "133",
        "first_name": "Alejandro",
        "last_name": "Da Ponte",
        "birthyear": "1985",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "144",
        "first_name": "Janette",
        "last_name": "Romero",
        "birthyear": "1976",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "227",
        "first_name": "MARIA LUISA PAULINA",
        "last_name": "HERRERA",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "192",
        "first_name": "Yuri",
        "last_name": "Alejaldre",
        "birthyear": "1967",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "18",
        "first_name": "alexander",
        "last_name": "mabrich",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "254",
        "first_name": "Steven",
        "last_name": "Zaffos",
        "birthyear": "1963",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "81",
        "first_name": "Alex",
        "last_name": "Munoz",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "12",
        "first_name": "Jay",
        "last_name": "Kreutzer",
        "birthyear": "2023",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "198",
        "first_name": "Mercy",
        "last_name": "Cosio",
        "birthyear": "1963",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "103",
        "first_name": "Michael",
        "last_name": "Perez",
        "birthyear": "1989",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "132",
        "first_name": "Diego",
        "last_name": "Fernandez",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "271",
        "first_name": "Brandon",
        "last_name": "Boswell",
        "birthyear": "'-",
        "favourite_court_locaton": "[\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "90",
        "first_name": "Jose",
        "last_name": "Fuentes",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "260",
        "first_name": "Egidio",
        "last_name": "Romano",
        "birthyear": "1943",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "277",
        "first_name": "Sonika",
        "last_name": "Sardana",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "189",
        "first_name": "Javier",
        "last_name": "Budejen",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\",\"Advanced\"]"
    },
    {
        "id": "231",
        "first_name": "Nicolas",
        "last_name": "Mendoza",
        "birthyear": "2006",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "243",
        "first_name": "Carmen",
        "last_name": "Sorvill",
        "birthyear": "1960",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "121",
        "first_name": "Andy",
        "last_name": "Cooper",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "124",
        "first_name": "Longobardi",
        "last_name": "Pasquale",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "55",
        "first_name": "Marcia",
        "last_name": "Gelband",
        "birthyear": "1943",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "215",
        "first_name": "Miguel",
        "last_name": "Palazzo",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "13",
        "first_name": "Leslie",
        "last_name": "Barclay",
        "birthyear": "1963",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "id": "93",
        "first_name": "Ginna",
        "last_name": "Velazquez",
        "birthyear": "1977",
        "favourite_court_locaton": "[\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "32",
        "first_name": "Emilio",
        "last_name": "Manzo",
        "birthyear": "1967",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "130",
        "first_name": "Yoram",
        "last_name": "Peretz",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "23",
        "first_name": "Mario",
        "last_name": "Garcia",
        "birthyear": "1981",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "8",
        "first_name": "Miguel",
        "last_name": "Sancho",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "131",
        "first_name": "Freddy",
        "last_name": "Pineda",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "85",
        "first_name": "Gonzalo",
        "last_name": "Pirela",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "176",
        "first_name": "Jeff",
        "last_name": "Kramer",
        "birthyear": "64",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "84",
        "first_name": "Mari Corina",
        "last_name": "Parra",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "91",
        "first_name": "Jesus",
        "last_name": "Gonzalez",
        "birthyear": "1981",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "21",
        "first_name": "Peilan",
        "last_name": "Yao",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "42",
        "first_name": "Roni",
        "last_name": "Menendez",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "20",
        "first_name": "Victor",
        "last_name": "Marquez",
        "birthyear": "2005",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "165",
        "first_name": "Pablo",
        "last_name": "Camus",
        "birthyear": "1956",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "43",
        "first_name": "Robert",
        "last_name": "Romero",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "45",
        "first_name": "Paula",
        "last_name": "Lotero",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "248",
        "first_name": "Jose",
        "last_name": "Ferre",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "186",
        "first_name": "Adam",
        "last_name": "Beer",
        "birthyear": "1967",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "36",
        "first_name": "Beitao",
        "last_name": "Li",
        "birthyear": "1977",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "145",
        "first_name": "Alejandro",
        "last_name": "Macario",
        "birthyear": "2000",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "54",
        "first_name": "Maria",
        "last_name": "Vasquez",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "64",
        "first_name": "Jairo",
        "last_name": "Calderon",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "73",
        "first_name": "Elisa",
        "last_name": "Stambouli",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "153",
        "first_name": "Franco",
        "last_name": "Calandra",
        "birthyear": "1992",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "140",
        "first_name": "Erik",
        "last_name": "Hervas",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "149",
        "first_name": "Victoria",
        "last_name": "Mous",
        "birthyear": "1596",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "25",
        "first_name": "Jerry",
        "last_name": "Cabrera",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "47",
        "first_name": "Patricia",
        "last_name": "Calderon",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "89",
        "first_name": "Karen",
        "last_name": "Brennan",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "274",
        "first_name": "Dana",
        "last_name": "Reece",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "292",
        "first_name": "Adele",
        "last_name": "Pick",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "244",
        "first_name": "Tomas",
        "last_name": "Heredia",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "285",
        "first_name": "SOBEL",
        "last_name": "Elizabeth",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "22",
        "first_name": "Miles",
        "last_name": "Kreuzter",
        "birthyear": "2002",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "106",
        "first_name": "Aaron",
        "last_name": "Borno",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "166",
        "first_name": "Claudio",
        "last_name": "Corsi",
        "birthyear": "67",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "200",
        "first_name": "Rick",
        "last_name": "Basinger",
        "birthyear": "1958",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "61",
        "first_name": "Jose",
        "last_name": "Eguez",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "187",
        "first_name": "Marcelo",
        "last_name": "Pantaleon",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "151",
        "first_name": "Lisa",
        "last_name": "Koscs",
        "birthyear": "1958",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "29",
        "first_name": "Fernando",
        "last_name": "Cimato",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "275",
        "first_name": "Romulo",
        "last_name": "Aguilar",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "282",
        "first_name": "Marcia",
        "last_name": "Gelband",
        "birthyear": "1943",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "44",
        "first_name": "Rob",
        "last_name": "Cottet",
        "birthyear": "1949",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "138",
        "first_name": "Steve",
        "last_name": "Becker",
        "birthyear": "1947",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "146",
        "first_name": "Juan",
        "last_name": "Macario",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "26",
        "first_name": "Jairon",
        "last_name": "Moreno",
        "birthyear": "1988",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "10",
        "first_name": "Helen",
        "last_name": "Brown",
        "birthyear": "1954",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "276",
        "first_name": "Ouri",
        "last_name": "Kahn",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "191",
        "first_name": "Maye",
        "last_name": "Alejaldre",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "113",
        "first_name": "Marcos",
        "last_name": "Hamann Beier",
        "birthyear": "1976",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "230",
        "first_name": "Benjamin",
        "last_name": "Ayet",
        "birthyear": "2005",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "203",
        "first_name": "Roberto",
        "last_name": "Echeverria",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "122",
        "first_name": "Rachael",
        "last_name": "Manocchio",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "182",
        "first_name": "Marco",
        "last_name": "Zegarra",
        "birthyear": "0722",
        "favourite_court_locaton": "[\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "136",
        "first_name": "Vicki",
        "last_name": "Wexler",
        "birthyear": "1942",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "206",
        "first_name": "Kristy",
        "last_name": "Hendrick",
        "birthyear": "1984",
        "favourite_court_locaton": "[\"Weston Racket Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "17",
        "first_name": "Andrea",
        "last_name": "Chico",
        "birthyear": "1993",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "142",
        "first_name": "Fulvio",
        "last_name": "Pileggi",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "222",
        "first_name": "Corina",
        "last_name": "Stone Martinez",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "287",
        "first_name": "Gabriela",
        "last_name": "Vayshelboym",
        "birthyear": "1983",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\",\"Certified Instructor\"]"
    },
    {
        "id": "196",
        "first_name": "Andres",
        "last_name": "Lartitegui",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "290",
        "first_name": "Lucienne",
        "last_name": "Campos",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "66",
        "first_name": "Jacki",
        "last_name": "May",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "105",
        "first_name": "Karolay",
        "last_name": "Pichardo",
        "birthyear": "1985",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "96",
        "first_name": "Eugenie",
        "last_name": "Meijer",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "199",
        "first_name": "Ronald",
        "last_name": "Bolivar",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "252",
        "first_name": "Peter",
        "last_name": "Fari\u00f1as",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "229",
        "first_name": "Nicholas",
        "last_name": "Cortes",
        "birthyear": "2006",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "280",
        "first_name": "Erika",
        "last_name": "Garvey",
        "birthyear": "3/6/",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "217",
        "first_name": "Corinna",
        "last_name": "Kushner",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "194",
        "first_name": "Mario",
        "last_name": "Jardon",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "174",
        "first_name": "Erika",
        "last_name": "Garvey",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "213",
        "first_name": "Jodie",
        "last_name": "Fry",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\",\"Advanced\"]"
    },
    {
        "id": "258",
        "first_name": "Lisa",
        "last_name": "Romano",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "171",
        "first_name": "Arturo",
        "last_name": "Valery",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "37",
        "first_name": "Zhaohui",
        "last_name": "Fu",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "278",
        "first_name": "Thomas",
        "last_name": "DeYulia",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "163",
        "first_name": "Joel",
        "last_name": "Rada",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "19",
        "first_name": "William (Bill)",
        "last_name": "Guasch",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "104",
        "first_name": "Judy",
        "last_name": "Bloom",
        "birthyear": "1944",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "288",
        "first_name": "Richard",
        "last_name": "Stark",
        "birthyear": "1952",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "116",
        "first_name": "Gabriela",
        "last_name": "CANCELA",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "126",
        "first_name": "Nick",
        "last_name": "Manocchio",
        "birthyear": "693",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "109",
        "first_name": "Maria Gabriela",
        "last_name": "Pimentel",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "143",
        "first_name": "Coral",
        "last_name": "Chico",
        "birthyear": "2001",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "257",
        "first_name": "Claudio",
        "last_name": "Romano",
        "birthyear": "1990",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\",\"Advanced\"]"
    },
    {
        "id": "247",
        "first_name": "Mary",
        "last_name": "Amodeo",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "45",
        "first_name": "Rachel",
        "last_name": "Cottet",
        "birthyear": "1960",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "162",
        "first_name": "Janett",
        "last_name": "Rada",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "111",
        "first_name": "Lourdes",
        "last_name": "Gim\u00e9nez",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "270",
        "first_name": "Julie",
        "last_name": "Edelstein",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "240",
        "first_name": "KELLY",
        "last_name": "WILLIAMS",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "249",
        "first_name": "Irina",
        "last_name": "Concas",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\",\"Intermediate\"]"
    },
    {
        "id": "125",
        "first_name": "William",
        "last_name": "Stalhuth",
        "birthyear": "1967",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "80",
        "first_name": "Alex",
        "last_name": "Dalmady",
        "birthyear": "1960",
        "favourite_court_locaton": "[\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "173",
        "first_name": "Vivian",
        "last_name": "P Perez",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "170",
        "first_name": "Walter",
        "last_name": "Nieto",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "71",
        "first_name": "Gail",
        "last_name": "Haimes",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "95",
        "first_name": "Frank",
        "last_name": "ZHANG",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "58",
        "first_name": "Luis",
        "last_name": "Ponce",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "206",
        "first_name": "Oscar",
        "last_name": "Luna",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "262",
        "first_name": "Roman",
        "last_name": "Pinsky",
        "birthyear": "1959",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "265",
        "first_name": "Nicol\u00e1s",
        "last_name": "Budejen",
        "birthyear": "2009",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "5",
        "first_name": "Keith",
        "last_name": "Lawson",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "7",
        "first_name": "Lori",
        "last_name": "Goldwyn",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "127",
        "first_name": "Gary",
        "last_name": "Lentchner",
        "birthyear": "1959",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "110",
        "first_name": "Sebastian",
        "last_name": "Vargas",
        "birthyear": "2003",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "114",
        "first_name": "Rogerio",
        "last_name": "Silberberg",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "293",
        "first_name": "Alexandre",
        "last_name": "Campos",
        "birthyear": "2002",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "148",
        "first_name": "Tonia",
        "last_name": "Costa",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "97",
        "first_name": "Debbie",
        "last_name": "Gold",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "177",
        "first_name": "Travis",
        "last_name": "May",
        "birthyear": "1996",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "164",
        "first_name": "DAVID",
        "last_name": "PEREZ",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "272",
        "first_name": "Rocio",
        "last_name": "May",
        "birthyear": "1996",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "67",
        "first_name": "Irina",
        "last_name": "Zolotareva",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "40",
        "first_name": "Tie",
        "last_name": "Qian",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "242",
        "first_name": "Laura",
        "last_name": "Morales",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "183",
        "first_name": "Roberto",
        "last_name": "Lopez",
        "birthyear": "1967",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "263",
        "first_name": "\u00d3scar",
        "last_name": "Budejen",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "24",
        "first_name": "Jonathan",
        "last_name": "Kaufman",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "283",
        "first_name": "Frances",
        "last_name": "Yahia",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "279",
        "first_name": "Kali",
        "last_name": "Sevel",
        "birthyear": "1993",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\",\"Advanced\"]"
    },
    {
        "id": "168",
        "first_name": "Gustavo",
        "last_name": "Valero",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "4",
        "first_name": "Noah",
        "last_name": "Roman",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "267",
        "first_name": "Carlos",
        "last_name": "Iglesias",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "63",
        "first_name": "Jorge",
        "last_name": "Acosta",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "216",
        "first_name": "Sidney",
        "last_name": "Lu Shing",
        "birthyear": "1958",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "117",
        "first_name": "Jenee",
        "last_name": "Zirker",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "86",
        "first_name": "Steve",
        "last_name": "Sandler",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Racket Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "286",
        "first_name": "Liz",
        "last_name": "Sobel",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "94",
        "first_name": "Fuchen",
        "last_name": "Cheng",
        "birthyear": "1956",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "76",
        "first_name": "Bobby",
        "last_name": "Auerbach",
        "birthyear": "1978",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "34",
        "first_name": "Charlie",
        "last_name": "Exelbirt",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "75",
        "first_name": "Dominick",
        "last_name": "Savastano",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "228",
        "first_name": "Antonio",
        "last_name": "Ortega Vicente",
        "birthyear": "2006",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\",\"Advanced\"]"
    },
    {
        "id": "175",
        "first_name": "Heidi",
        "last_name": "Kramer",
        "birthyear": "65",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "28",
        "first_name": "Giovanni",
        "last_name": "Hernandez",
        "birthyear": "1985",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "74",
        "first_name": "Dora",
        "last_name": "Montoya",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "50",
        "first_name": "Michelle",
        "last_name": "Avick",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "2",
        "first_name": "Vanessa",
        "last_name": "Holler",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "id": "250",
        "first_name": "Ashton",
        "last_name": "Richardson",
        "birthyear": "2008",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\",\"Intermediate\"]"
    },
    {
        "id": "53",
        "first_name": "Marla",
        "last_name": "Roebuck",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "180",
        "first_name": "Hamada",
        "last_name": "Albiesh",
        "birthyear": "1987",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "107",
        "first_name": "Ari",
        "last_name": "Pe",
        "birthyear": "1982",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "193",
        "first_name": "Nate",
        "last_name": "Exelbirt",
        "birthyear": "2006",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\",\"Advanced\"]"
    },
    {
        "id": "57",
        "first_name": "Luiz",
        "last_name": "Gonsales",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "3",
        "first_name": "Jose",
        "last_name": "Gonzalez",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "201",
        "first_name": "Roy",
        "last_name": "Paskow",
        "birthyear": "1960",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "129",
        "first_name": "Jeff",
        "last_name": "Kummler",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "269",
        "first_name": "Clemencia",
        "last_name": "Restrepo",
        "birthyear": "0927",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "1",
        "first_name": "Juan",
        "last_name": "Chico",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "197",
        "first_name": "Alex",
        "last_name": "Suarez",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "62",
        "first_name": "Jose",
        "last_name": "Linares",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "294",
        "first_name": "Pablo",
        "last_name": "Luna",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "195",
        "first_name": "Matthew",
        "last_name": "Wetcher",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "181",
        "first_name": "Carlos",
        "last_name": "Andino",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "246",
        "first_name": "Jennifer",
        "last_name": "D\u2019Angelo",
        "birthyear": "1979",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "11",
        "first_name": "Martin",
        "last_name": "Michelsen",
        "birthyear": "2001",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "id": "48",
        "first_name": "Natalie",
        "last_name": "Bunting",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "158",
        "first_name": "Johanna",
        "last_name": "Rivera",
        "birthyear": "1977",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "259",
        "first_name": "Adam",
        "last_name": "Schildkraut",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "233",
        "first_name": "Andriy",
        "last_name": "Petrushkevych",
        "birthyear": "2007",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "188",
        "first_name": "Kevin",
        "last_name": "Romero",
        "birthyear": "2004",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "92",
        "first_name": "Hector",
        "last_name": "Hernandez",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "id": "141",
        "first_name": "Rebecca Sherry",
        "last_name": "Eshraghi",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "253",
        "first_name": "Val",
        "last_name": "Zaffos",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "218",
        "first_name": "Barbara",
        "last_name": "Hauser",
        "birthyear": "1948",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "id": "147",
        "first_name": "Steven",
        "last_name": "Lisman",
        "birthyear": "1997",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    }
];

document.addEventListener('DOMContentLoaded', function () {

    const playerGrid = document.getElementById('player-grid');
    // Update card count
    const cardCountElement = document.getElementById('card-count');

    // Function to generate the player cards
    function generatePlayerCards() {
        playerGrid.innerHTML = '';

        const filterLevel = document.getElementById('filter-level').value;
        const filterPark = document.getElementById('filter-park').value;
        const filterAge = document.getElementById('filter-age').value;
        const searchQuery = document.getElementById('search-input').value.toLowerCase();

        // Sort options
        const sortOption = document.getElementById('sort-by').value;
        const sortAscending = document.getElementById('sort-order').value === 'ascending';

        // Apply sorting
        players.sort((a, b) => {
            if (sortOption === 'firstName') {
                return a.first_name.localeCompare(b.first_name);
            } else if (sortOption === 'lastName') {
                return a.last_name.localeCompare(b.last_name);
            } else if (sortOption === 'age') {
                return a.birthyear - b.birthyear;
            } else if (sortOption === 'level') {
                return a.current_playing_level.localeCompare(b.current_playing_level);
            } else {
                return 0;
            }
        });

        if (!sortAscending) {
            players.reverse();
        }

        let playerCount = 0;

        players.forEach(function (player) {
            const firstName = player.first_name.toLowerCase();
            const lastName = player.last_name.toLowerCase();
            const park = player.favourite_court_locaton.slice(1, -1).split(",").join(", ").replaceAll('"', '');
            const level = player.current_playing_level.slice(1, -1).replaceAll('"', '');
            const birthyear = (invalidYearOfBirth(player.birthyear)) ? '-' : player.birthyear;

            if (
                (filterLevel === 'All' || level === filterLevel) &&
                (filterPark === 'All' || park === filterPark) &&
                (filterAge === 'All' || checkAgeRange(player.birthyear, filterAge)) &&
                (searchQuery === '' ||
                    firstName.includes(searchQuery) ||
                    lastName.includes(searchQuery))
            ) {
                const cardMember = document.createElement('div');
                cardMember.classList.add('card-member');
                cardMember.innerHTML = `
  <div class="card-front">
    <div class="column-logo">
        <div class="card-logo">
            <img src="https://github.com/ebanux/explore/assets/4213488/c131ba2c-0e70-410c-b075-ec5a33c0b196" alt="Card Logo">
        </div>
    </div>
    <div class="card-name">${player.first_name} ${player.last_name}</div>
    <div class="info-container">
      <div class="column-label">
        <div class="info-label">Member:</div>
        <div class="info-label">Level:</div>
        <div class="info-label">Park:</div>
      </div>
      <div class="column">
        <div class="info-value">No. ${player.id}</div>
        <div class="info-value">${level}</div>
        <div class="info-value">${park}</div>
      </div>
    </div>
    <div class="info-club"><b>Weston Pickleball Club Member</b></div>
  </div>
`;
                playerGrid.appendChild(cardMember);
                playerCount++;
            }
        });

        cardCountElement.textContent = `Total Players: ${playerCount}`;

        return playerCount;
    }


    function invalidYearOfBirth(age) {
        const currentYear = new Date().getFullYear();
        if (age < 1920 || age > (currentYear - 3))
            return true;
        return false;
    }

    // Function to check if the player's age falls within the selected range
    function checkAgeRange(yearOfBirth, filterAge) {
        const currentYear = new Date().getFullYear();
        if (invalidYearOfBirth(yearOfBirth))
            return false;
        const age = currentYear - yearOfBirth;

        if (filterAge === '<19' && age <= 19) {
            return true;
        } else if (filterAge === '20-34' && age >= 30 && age <= 34) {
            return true;
        } else if (filterAge === '35-49' && age > 35 && age <= 49) {
            return true;
        } else if (filterAge === '50-59' && age > 50 && age <= 59) {
            return true;
        } else if (filterAge === '60-69' && age > 60 && age <= 69) {
            return true;
        } else if (filterAge === '70-79' && age > 70 && age <= 79) {
            return true;
        } else if (filterAge === '>80' && age >= 80) {
            return true;
        } else {
            return false;
        }
    }

    // Call the function initially
    // updateCardCount();

    // Event listener for filter change
    const filterSelectLevel = document.getElementById('filter-level');
    filterSelectLevel.addEventListener('change', generatePlayerCards);

    const filterSelectPark = document.getElementById('filter-park');
    filterSelectPark.addEventListener('change', generatePlayerCards);

    const filterSelectAge = document.getElementById('filter-age');
    filterSelectAge.addEventListener('change', generatePlayerCards);

    // Sort options event listeners
    const sortOption = document.getElementById('sort-by');
    const sortOrder = document.getElementById('sort-order');
    sortOption.addEventListener('change', generatePlayerCards);
    sortOrder.addEventListener('change', generatePlayerCards);

    // Initial generation of player cards
    generatePlayerCards();

    const resetButton = document.getElementById("reset-filter");
    resetButton.addEventListener("click", function () {
        document.getElementById("filter-level").value = "All";
        document.getElementById("filter-park").value = "All";
        document.getElementById("filter-age").value = "All";
        generatePlayerCards(); // Update this with your filtering logic

    });
});


