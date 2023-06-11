const players = [
    {
        "first_name": "Frank (Tom)",
        "last_name": "Ernst",
        "email": "fternst@gmail.com",
        "birthyear": "1953",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Mariorlan",
        "last_name": "Acosta",
        "email": "mariorlan@yahoo.com",
        "birthyear": "1976",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Marianne",
        "last_name": "Millan",
        "email": "mariannemillan00@gmail.com",
        "birthyear": "2000",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jackie",
        "last_name": "Michelini",
        "email": "jackiemichelini@hotmail.com",
        "birthyear": "510",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Joel",
        "last_name": "Calendrillo",
        "email": "joelcallo@gmail.com",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "first_name": "Mingping (Max)",
        "last_name": "Di",
        "email": "wmsea66@yahoo.com",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "MARCELA",
        "last_name": "Ramponi",
        "email": "marcelaramponi@gmail.com",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Louisa",
        "last_name": "Kerma",
        "email": "lkerma@yahoo.com",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Cris",
        "last_name": "Cimato",
        "email": "criscimato@gmail.com",
        "birthyear": "2002",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Maria",
        "last_name": "Holgu\u00edn",
        "email": "piliholguin27@gmail.com",
        "birthyear": "1981",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Mario",
        "last_name": "Sandino",
        "email": "mariosandino7@yahoo.com",
        "birthyear": "1984",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Heidi",
        "last_name": "Fisher",
        "email": "heidifisher0823@aol.com",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\",\"Bonaventure TC Club\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Gustavo",
        "last_name": "Pfeifer",
        "email": "gustavo.pfeifer63@gmail.com",
        "birthyear": "1963",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Greg",
        "last_name": "Koscs",
        "email": "gk_in_ftl@msn.com",
        "birthyear": "1956",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "David",
        "last_name": "Nehdar",
        "email": "nehdar@yahoo.com",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Andrea",
        "last_name": "Culberson",
        "email": "andyculberson@me.com",
        "birthyear": "1946",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Enrique",
        "last_name": "Guzman-Barron Villar",
        "email": "eguzmanbarronv@hotmail.com",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Alexandra",
        "last_name": "Compres",
        "email": "alexcompres@gmail.com",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Arleen",
        "last_name": "Rodriguez",
        "email": "trumpcondo@aol.com",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Carole",
        "last_name": "Cooper",
        "email": "coopstone@yahoo.com",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Fredrick",
        "last_name": "Carrasquillo",
        "email": "wiver97@aol.com",
        "birthyear": "1983",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Cesar",
        "last_name": "Sanchez",
        "email": "cecisam1@hotmail.com",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Gary",
        "last_name": "Klopman",
        "email": "gklopman@aol.com",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Yonghong",
        "last_name": "Chen",
        "email": "yh_chen24@hotmail.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Sharlene",
        "last_name": "Teng",
        "email": "sxteng@gmail.com",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Miguel",
        "last_name": "Maymo",
        "email": "topdollarlistings@gmail.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Rosa",
        "last_name": "Elena Nunez",
        "email": "roselena305@yahoo.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Alina",
        "last_name": "Leontarakis",
        "email": "alina.leontarakis@gmail.com",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "first_name": "Gina",
        "last_name": "Pineda",
        "email": "ginarose21@gmail.com",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Gustavo",
        "last_name": "Milla",
        "email": "gusmilla@gmail.com",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Carlos",
        "last_name": "Salaverria",
        "email": "Carlosmsalaverria@gmail.com",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Migdalia",
        "last_name": "Matias",
        "email": "dalchico@yahoo.com",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Xin",
        "last_name": "Luo",
        "email": "xinluo2004@gmail.com",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Sherill",
        "last_name": "Poleo",
        "email": "cuchapoleo@gmail.com",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Lois",
        "last_name": "Paskow",
        "email": "lois.paskow@gmail.com",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Edwin",
        "last_name": "Colon",
        "email": "colonedwin83@gmail.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Adry",
        "last_name": "Abreu",
        "email": "eidrianaabreu@gmail.com",
        "birthyear": "1979",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Xiaofang",
        "last_name": "Fan",
        "email": "Moonbow1129@yahoo.com",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Levis",
        "last_name": "Aguila",
        "email": "laguila614@gmail.com",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Arsenio",
        "last_name": "Rondon",
        "email": "ajmatthew@msn.com",
        "birthyear": "1959",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Arturo",
        "last_name": "Garzon",
        "email": "arturo2009futbol@hotmail.com",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Enrique",
        "last_name": "Montanez",
        "email": "enriquemontanez@icloud.com",
        "birthyear": "1976",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Alejandro",
        "last_name": "Da Ponte",
        "email": "alejandrodaponte@gmail.com",
        "birthyear": "1985",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Janette",
        "last_name": "Romero",
        "email": "mathteacher.romero@gmail.com",
        "birthyear": "1976",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Alexander",
        "last_name": "Mabrich",
        "email": "alex.mabrich@bentley.com",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Alex",
        "last_name": "Munoz",
        "email": "alexfmunoz@hotmail.com",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jay",
        "last_name": "Kreutzer",
        "email": "jkreut@aol.com",
        "birthyear": "2023",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Michael",
        "last_name": "Perez",
        "email": "perezm031@gmail.com",
        "birthyear": "1989",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Diego",
        "last_name": "Fernandez",
        "email": "dhf_abc@yahoo.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Jose",
        "last_name": "Fuentes",
        "email": "jose.g.fuentes@gmail.com",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Andy",
        "last_name": "Cooper",
        "email": "coopstone@yahoo.com",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Longobardi",
        "last_name": "Pasquale",
        "email": "pasquale.longobardi@outlook.com",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Marcia",
        "last_name": "Gelband",
        "email": "msgelband@yahoo.com",
        "birthyear": "1943",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Leslie",
        "last_name": "Barclay",
        "email": "lesliebarclay@bellsouth.net",
        "birthyear": "1963",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "first_name": "Ginna",
        "last_name": "Velazquez",
        "email": "ginna8377@hotmail.com",
        "birthyear": "1977",
        "favourite_court_locaton": "[\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Emilio",
        "last_name": "Manzo",
        "email": "em77@me.com",
        "birthyear": "1967",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Yoram",
        "last_name": "Peretz",
        "email": "peretzyoram@gmail.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Mario",
        "last_name": "Garcia",
        "email": "mariog2681@gmail.com",
        "birthyear": "1981",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Miguel",
        "last_name": "Sancho",
        "email": "sanchojaf@gmail.com",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Freddy",
        "last_name": "Pineda",
        "email": "frederickpineda@yahoo.com",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Gonzalo",
        "last_name": "Pirela",
        "email": "gpirela69@hotmail.com",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Mari Corina",
        "last_name": "Parra",
        "email": "maco1998@hotmail.com",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jesus",
        "last_name": "Gonzalez",
        "email": "pirulo1961@icloud.com",
        "birthyear": "1981",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Peilan",
        "last_name": "Yao",
        "email": "fangfangyao88@yahoo.com",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Roni",
        "last_name": "Menendez",
        "email": "ronimenendez@gmail.com",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Victor",
        "last_name": "Marquez",
        "email": "vicmar2212@hotmail.com",
        "birthyear": "2005",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Robert",
        "last_name": "Romero",
        "email": "saltydog2907@gmail.com",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Paula",
        "last_name": "Lotero",
        "email": "paulalotero10@hotmail.com",
        "birthyear": "1969",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Beitao",
        "last_name": "Li",
        "email": "beitao.li@gmail.com",
        "birthyear": "1977",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Alejandro",
        "last_name": "Macario",
        "email": "amacario00@gmail.com",
        "birthyear": "2000",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Maria",
        "last_name": "Vasquez",
        "email": "mariavasquez88@hotmail.com",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jairo",
        "last_name": "Calderon",
        "email": "jaical1@yahoo.com",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Elisa",
        "last_name": "Stambouli",
        "email": "stambouli@gmail.com",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Franco",
        "last_name": "Calandra",
        "email": "franco.calandra@icloud.com",
        "birthyear": "1992",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Erik",
        "last_name": "Hervas",
        "email": "erikhervas@gmail.com",
        "birthyear": "1980",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Patricia",
        "last_name": "Calderon",
        "email": "pattycalderon18@yahoo.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Victoria",
        "last_name": "Mous",
        "email": "vmous@hotmail.com",
        "birthyear": "1596",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jerry",
        "last_name": "Cabrera",
        "email": "jerrycjr99@gmail.com",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Patricia",
        "last_name": "Calderon",
        "email": "pattycalderon18@yahoo.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Karen",
        "last_name": "Brennan",
        "email": "bjbrennan9207@hotmail.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Jorge",
        "last_name": "Acosta",
        "email": "jorge_oav@yahoo.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Miles",
        "last_name": "Kreuzter",
        "email": "mkreut5@aol.com",
        "birthyear": "2002",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Aaron",
        "last_name": "Borno",
        "email": "aaronborno@icloud.com",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jose",
        "last_name": "Eguez",
        "email": "jose.eguez@outlook.com",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Lisa",
        "last_name": "Koscs",
        "email": "gk_in_ftl@msn.com",
        "birthyear": "1958",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Fernando",
        "last_name": "Cimato",
        "email": "fernando_cimato@hotmail.com",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Rob",
        "last_name": "Cottet",
        "email": "rcottet@bellsouth.net",
        "birthyear": "1949",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Steve",
        "last_name": "Becker",
        "email": "sbecker14@msm.com",
        "birthyear": "1947",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Juan",
        "last_name": "Macario",
        "email": "juan.macario66@gmail.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jairon",
        "last_name": "Moreno",
        "email": "jairon@unitedsocceracademy.org",
        "birthyear": "1988",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Helen",
        "last_name": "Brown",
        "email": "gogobrown@aol.com",
        "birthyear": "1954",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Marcos",
        "last_name": "Hamann Beier",
        "email": "marcos.beier@hotmail.com",
        "birthyear": "1976",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Rachael",
        "last_name": "Manocchio",
        "email": "Doctorsbest03@yahoo.com",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Vicki",
        "last_name": "Wexler",
        "email": "vickiwexler@gmail.com",
        "birthyear": "1942",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Andrea",
        "last_name": "Chico",
        "email": "andchico@yahoo.com",
        "birthyear": "1993",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Fulvio",
        "last_name": "Pileggi",
        "email": "fulvio.pileggi@gmail.com",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jacki",
        "last_name": "May",
        "email": "jlestat3@gmail.com",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Karolay",
        "last_name": "Pichardo",
        "email": "pichardokarolay@gmail.com",
        "birthyear": "1985",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Eugenie",
        "last_name": "Meijer",
        "email": "eus_gus@hotmail.com",
        "birthyear": "1975",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Zhaohui",
        "last_name": "Fu",
        "email": "fujen@sunshinemaps.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Bonaventure TC Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "William (Bill)",
        "last_name": "Guasch",
        "email": "bguasch@bellsouth.net",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Judy",
        "last_name": "Bloom",
        "email": "judyabloom@aol.com",
        "birthyear": "1944",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Gabriela",
        "last_name": "CANCELA",
        "email": "gcancela4422@gmail.com",
        "birthyear": "1973",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Nick",
        "last_name": "Manocchio",
        "email": "nick.manocchio24@gmail.com",
        "birthyear": "693",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Maria Gabriela",
        "last_name": "Pimentel",
        "email": "gabrielapimentelh@gmail.com",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Coral",
        "last_name": "Chico",
        "email": "coral.chico22@gmail.com",
        "birthyear": "2001",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Rachel",
        "last_name": "Cottet",
        "email": "rcottet@aol.com",
        "birthyear": "1960",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Lourdes",
        "last_name": "Gim\u00e9nez",
        "email": "Lg@supervista.com",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "William",
        "last_name": "Stalhuth",
        "email": "wstalh@gmail.com",
        "birthyear": "1967",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Alex",
        "last_name": "Dalmady",
        "email": "dalmady@gmail.com",
        "birthyear": "1960",
        "favourite_court_locaton": "[\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Gail",
        "last_name": "Haimes",
        "email": "p4restore@aol.com",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Frank",
        "last_name": "ZHANG",
        "email": "zfznova@gmail.com",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Luis",
        "last_name": "Ponce",
        "email": "luis.x.ponce@gmail.com",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Keith",
        "last_name": "Lawson",
        "email": "k_lawson0901@yahoo.com",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Lori",
        "last_name": "Goldwyn",
        "email": "lbg717@aol.com",
        "birthyear": "1965",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Gary",
        "last_name": "Lentchner",
        "email": "grtfulharry@aol.com",
        "birthyear": "1959",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\",\"Advanced\"]"
    },
    {
        "first_name": "Sebastian",
        "last_name": "Vargas",
        "email": "sebasvargas220033@gmail.com",
        "birthyear": "2003",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Rogerio",
        "last_name": "Silberberg",
        "email": "rogerio@fanatee.com",
        "birthyear": "1972",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Tonia",
        "last_name": "Costa",
        "email": "tonia_costa2@hotmail.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Debbie",
        "last_name": "Gold",
        "email": "debgold@bellsouth.net",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Irina",
        "last_name": "Zolotareva",
        "email": "irina.zolotareva@gmail.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Tie",
        "last_name": "Qian",
        "email": "tieqian@yahoo.com",
        "birthyear": "1964",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Mar\u00eda Corina",
        "last_name": "Parra",
        "email": "maco1998@hotmail.com",
        "birthyear": "1998",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\",\"Weston Midtown Athetic Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jonathan",
        "last_name": "Kaufman",
        "email": "jkaufmantarheels@gmail.com",
        "birthyear": "1962",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Noah",
        "last_name": "Roman",
        "email": "noahroman123@hotmail.com",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Jorge",
        "last_name": "Acosta",
        "email": "jorge_oav@yahoo.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jenee",
        "last_name": "Zirker",
        "email": "zirkerzoo@gmail.com",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Steve",
        "last_name": "Sandler",
        "email": "steve@stevesandler.net",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Racket Club\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Fuchen",
        "last_name": "Cheng",
        "email": "fuchen.cheng01@gmail.com",
        "birthyear": "1956",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Bobby",
        "last_name": "Auerbach",
        "email": "bobby@auerbachhomes.com",
        "birthyear": "1978",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Charlie",
        "last_name": "Exelbirt",
        "email": "charlie@mattisadvisors.com",
        "birthyear": "1970",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Dominick",
        "last_name": "Savastano",
        "email": "domsav9@gmail.com",
        "birthyear": "",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Giovanni",
        "last_name": "Hernandez",
        "email": "1giovannihernandez@gmail.com",
        "birthyear": "1985",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Dora",
        "last_name": "Montoya",
        "email": "dojumo@hotmail.com",
        "birthyear": "1968",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Michelle",
        "last_name": "Avick",
        "email": "mmavick@aol.com",
        "birthyear": "1974",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Vanessa",
        "last_name": "Holler",
        "email": "vanholler13@hotmail.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\",\"Markham Park\"]",
        "current_playing_level": "[\"Certified Instructor\"]"
    },
    {
        "first_name": "Marla",
        "last_name": "Roebuck",
        "email": "mroeb314@gmail.com",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Racket Club\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Michelle",
        "last_name": "Avick",
        "email": "mmavick@aol.com",
        "birthyear": "2023",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Ari",
        "last_name": "Pe",
        "email": "makeithappen2023@hotmail.com",
        "birthyear": "1982",
        "favourite_court_locaton": "[\"Need Suggestions\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Luiz",
        "last_name": "Gonsales",
        "email": "luiz.gonsales@gmail.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Jose",
        "last_name": "Gonzalez",
        "email": "jose@wowvisualgroup.com",
        "birthyear": "1961",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Jeff",
        "last_name": "Kummler",
        "email": "jeffkummler@gmail.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Juan",
        "last_name": "Chico",
        "email": "arcchico@hotmail.com",
        "birthyear": "1966",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Jose",
        "last_name": "Linares",
        "email": "Linaresjose657@gmail.com",
        "birthyear": "1999",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Martin",
        "last_name": "Michelsen",
        "email": "martinmich29@gmail.com",
        "birthyear": "2001",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Advanced\"]"
    },
    {
        "first_name": "Natalie",
        "last_name": "Bunting",
        "email": "nataliembunting@yahoo.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Hector",
        "last_name": "Hernandez",
        "email": "hector.worldtraveler@gmail.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Beginner\"]"
    },
    {
        "first_name": "Rebecca Sherry",
        "last_name": "Eshraghi",
        "email": "rebeccaeshraghi@gmail.com",
        "birthyear": "1971",
        "favourite_court_locaton": "[\"Weston Regional Park\"]",
        "current_playing_level": "[\"Intermediate\"]"
    },
    {
        "first_name": "Steven",
        "last_name": "Lisman",
        "email": "stevenlisman6@gmail.com",
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
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                <h2 class="flex items-center text-lg font-bold mb-4"><i class="fas fa-user mr-2"></i> ${player.first_name} ${player.last_name}</h2>
                <p class="flex items-center"><i class="fas fa-birthday-cake mr-2"></i><b> Year of Birth: </b>&nbsp; ${birthyear}</p>
                <p class="flex items-center"><i class="fas fa-signal mr-2"></i><b> Level: </b>&nbsp; ${level}</p>
                <p class="flex"><i class="fas fa-tree mr-2"></i><b> Park: </b>&nbsp; ${park}</p>
            `;
                playerGrid.appendChild(card);
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


