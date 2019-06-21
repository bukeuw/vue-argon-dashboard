export default {
  state: {
    pagination: {
      perPage: 25,
      page: 1
    },
    leads: [],
    customers: [
      {
        id: 1,
        instansi: "Divanoodle",
        pic: "Sonnie Cristofaro",
        telp: "607-109-1904",
        alamat: "2 Vernon Pass"
      },
      {
        id: 2,
        instansi: "Quire",
        pic: "Bartholomeus Hubbock",
        telp: "639-140-3312",
        alamat: "6831 Village Point"
      },
      {
        id: 3,
        instansi: "Voonte",
        pic: "Mattie Teresi",
        telp: "135-167-5998",
        alamat: "14096 2nd Park"
      },
      {
        id: 4,
        instansi: "Quire",
        pic: "Sanderson Triggle",
        telp: "288-881-0302",
        alamat: "49 Schurz Trail"
      },
      {
        id: 5,
        instansi: "Skiptube",
        pic: "Jennette Troughton",
        telp: "737-551-6328",
        alamat: "42363 Di Loreto Lane"
      },
      {
        id: 6,
        instansi: "Kazio",
        pic: "Eden Stuchbery",
        telp: "734-182-4678",
        alamat: "473 Arrowood Parkway"
      },
      {
        id: 7,
        instansi: "Katz",
        pic: "Dennie Dengel",
        telp: "455-434-6588",
        alamat: "67 Waxwing Road"
      },
      {
        id: 8,
        instansi: "Photolist",
        pic: "Neila De Launde",
        telp: "148-742-5391",
        alamat: "22625 Elgar Circle"
      },
      {
        id: 9,
        instansi: "Realmix",
        pic: "Clarisse Pargiter",
        telp: "898-870-4875",
        alamat: "7517 Talmadge Court"
      },
      {
        id: 10,
        instansi: "Kwilith",
        pic: "Artemas Woolpert",
        telp: "174-992-3165",
        alamat: "370 Fuller Point"
      },
      {
        id: 11,
        instansi: "Zoonder",
        pic: "Rey Pirdue",
        telp: "837-835-6345",
        alamat: "4282 Mcbride Street"
      },
      {
        id: 12,
        instansi: "Realcube",
        pic: "Tabb McCoy",
        telp: "966-736-6854",
        alamat: "0578 Pawling Point"
      },
      {
        id: 13,
        instansi: "Digitube",
        pic: "Wolfgang MacCawley",
        telp: "313-570-4671",
        alamat: "20 Russell Drive"
      },
      {
        id: 14,
        instansi: "Gigazoom",
        pic: "Clywd Crass",
        telp: "299-625-4167",
        alamat: "8 Dahle Park"
      },
      {
        id: 15,
        instansi: "Plambee",
        pic: "Temple Farlambe",
        telp: "725-413-6952",
        alamat: "1 Corscot Street"
      },
      {
        id: 16,
        instansi: "Tagfeed",
        pic: "Peta Dancey",
        telp: "513-809-2201",
        alamat: "526 Shoshone Hill"
      },
      {
        id: 17,
        instansi: "Buzzbean",
        pic: "Umberto Weins",
        telp: "101-731-2235",
        alamat: "3 Larry Lane"
      },
      {
        id: 18,
        instansi: "Blogtag",
        pic: "Fayre Wyleman",
        telp: "862-604-0259",
        alamat: "95188 Meadow Valley Place"
      },
      {
        id: 19,
        instansi: "Fivechat",
        pic: "Dee MacKenny",
        telp: "229-222-4917",
        alamat: "97164 Sunnyside Court"
      },
      {
        id: 20,
        instansi: "Rhybox",
        pic: "Electra Scothorn",
        telp: "482-634-3233",
        alamat: "06648 Fordem Crossing"
      },
      {
        id: 21,
        instansi: "Devbug",
        pic: "Wini Harral",
        telp: "470-150-7694",
        alamat: "66 Merrick Avenue"
      },
      {
        id: 22,
        instansi: "Kwideo",
        pic: "Arv MacCartair",
        telp: "346-177-1798",
        alamat: "4 Rowland Alley"
      },
      {
        id: 23,
        instansi: "Roomm",
        pic: "Law Thorsen",
        telp: "519-776-3817",
        alamat: "590 Bonner Street"
      },
      {
        id: 24,
        instansi: "Jatri",
        pic: "Erroll Etherington",
        telp: "177-967-0061",
        alamat: "25800 Sugar Alley"
      },
      {
        id: 25,
        instansi: "Quimba",
        pic: "Wash Petersen",
        telp: "264-879-6277",
        alamat: "0797 Reinke Trail"
      },
      {
        id: 26,
        instansi: "Divape",
        pic: "Carr Polglase",
        telp: "163-531-7245",
        alamat: "4 Brown Crossing"
      },
      {
        id: 27,
        instansi: "Gevee",
        pic: "Selle Brolly",
        telp: "199-926-2449",
        alamat: "0 Old Gate Alley"
      },
      {
        id: 28,
        instansi: "Jaxbean",
        pic: "Micaela Burnside",
        telp: "916-961-4599",
        alamat: "811 Glendale Center"
      },
      {
        id: 29,
        instansi: "Devpulse",
        pic: "Nessi Thomassin",
        telp: "304-427-4356",
        alamat: "924 Anthes Center"
      },
      {
        id: 30,
        instansi: "Jabberbean",
        pic: "Cherilyn Ebourne",
        telp: "924-623-0067",
        alamat: "06869 Sundown Point"
      },
      {
        id: 31,
        instansi: "Browseblab",
        pic: "Wylma Prover",
        telp: "836-975-1747",
        alamat: "4 Sutteridge Court"
      },
      {
        id: 32,
        instansi: "Pixope",
        pic: "Nessie Grindle",
        telp: "854-398-0974",
        alamat: "62 Morning Park"
      },
      {
        id: 33,
        instansi: "Kazu",
        pic: "Ardys Geldeford",
        telp: "848-152-1443",
        alamat: "066 Toban Pass"
      },
      {
        id: 34,
        instansi: "Vipe",
        pic: "Ozzy Erratt",
        telp: "315-929-2965",
        alamat: "3 John Wall Terrace"
      },
      {
        id: 35,
        instansi: "Bubblemix",
        pic: "Gipsy Steers",
        telp: "181-164-6822",
        alamat: "97 Erie Street"
      },
      {
        id: 36,
        instansi: "Lazz",
        pic: "Juliane Wellbelove",
        telp: "658-293-9380",
        alamat: "277 Saint Paul Pass"
      },
      {
        id: 37,
        instansi: "Skyble",
        pic: "Gale Maleham",
        telp: "972-601-4922",
        alamat: "16 Dovetail Terrace"
      },
      {
        id: 38,
        instansi: "Talane",
        pic: "Morgan Durgan",
        telp: "795-905-9965",
        alamat: "2276 Manufacturers Point"
      },
      {
        id: 39,
        instansi: "Chatterbridge",
        pic: "Graig Setford",
        telp: "556-629-9512",
        alamat: "10 Derek Court"
      },
      {
        id: 40,
        instansi: "Thoughtbeat",
        pic: "Rori Kiddle",
        telp: "584-539-4249",
        alamat: "07269 Elka Lane"
      },
      {
        id: 41,
        instansi: "Twitterbridge",
        pic: "Curry Luther",
        telp: "195-946-3380",
        alamat: "7857 Bartillon Pass"
      },
      {
        id: 42,
        instansi: "Voonder",
        pic: "Alana Leacy",
        telp: "824-594-3398",
        alamat: "9843 Dottie Park"
      },
      {
        id: 43,
        instansi: "Tazz",
        pic: "Leroy Diche",
        telp: "241-126-9094",
        alamat: "1 Green Center"
      },
      {
        id: 44,
        instansi: "Dynabox",
        pic: "Pall Ramalho",
        telp: "612-961-6051",
        alamat: "1 Marcy Court"
      },
      {
        id: 45,
        instansi: "Rhynyx",
        pic: "Adella Warnes",
        telp: "206-255-6868",
        alamat: "1428 Kensington Hill"
      },
      {
        id: 46,
        instansi: "JumpXS",
        pic: "Ulrika Mynott",
        telp: "488-265-3339",
        alamat: "5 Warrior Hill"
      },
      {
        id: 47,
        instansi: "Livetube",
        pic: "Avis Simpkiss",
        telp: "558-155-7031",
        alamat: "4 Stoughton Circle"
      },
      {
        id: 48,
        instansi: "Abata",
        pic: "Clerissa Yirrell",
        telp: "660-733-7264",
        alamat: "17116 Memorial Park"
      },
      {
        id: 49,
        instansi: "Browsedrive",
        pic: "Perceval Eatttok",
        telp: "371-173-9004",
        alamat: "4451 Lakewood Pass"
      },
      {
        id: 50,
        instansi: "Wikizz",
        pic: "Candra Schwandt",
        telp: "216-146-5221",
        alamat: "637 Mallard Drive"
      },
      {
        id: 51,
        instansi: "Meezzy",
        pic: "Aridatha Arnow",
        telp: "836-626-8250",
        alamat: "5 Texas Plaza"
      },
      {
        id: 52,
        instansi: "Skinte",
        pic: "Silvan Vasquez",
        telp: "664-115-2196",
        alamat: "84 Mcbride Pass"
      },
      {
        id: 53,
        instansi: "Quamba",
        pic: "Christyna Bedwell",
        telp: "376-904-1988",
        alamat: "945 Kropf Plaza"
      },
      {
        id: 54,
        instansi: "Omba",
        pic: "Jerald Copcott",
        telp: "535-513-7347",
        alamat: "0 Old Gate Alley"
      },
      {
        id: 55,
        instansi: "Edgeblab",
        pic: "Kip Yemm",
        telp: "987-962-9007",
        alamat: "49 Scofield Junction"
      },
      {
        id: 56,
        instansi: "Kwimbee",
        pic: "Elsa Reisk",
        telp: "897-406-5954",
        alamat: "402 Glendale Junction"
      },
      {
        id: 57,
        instansi: "Twiyo",
        pic: "Smitty Littleton",
        telp: "555-513-2120",
        alamat: "2 5th Lane"
      },
      {
        id: 58,
        instansi: "Voonix",
        pic: "Waylen Liversley",
        telp: "975-582-3950",
        alamat: "904 Russell Hill"
      },
      {
        id: 59,
        instansi: "Rhyloo",
        pic: "Beatrice Hulls",
        telp: "707-140-0628",
        alamat: "209 Caliangt Crossing"
      },
      {
        id: 60,
        instansi: "Realfire",
        pic: "Adella De Filippo",
        telp: "857-646-8371",
        alamat: "6435 Warner Lane"
      },
      {
        id: 61,
        instansi: "Skipfire",
        pic: "Pattie Frowd",
        telp: "866-138-5930",
        alamat: "10221 Forest Run Lane"
      },
      {
        id: 62,
        instansi: "Brainsphere",
        pic: "Claiborne Shewsmith",
        telp: "337-328-9589",
        alamat: "9187 David Terrace"
      },
      {
        id: 63,
        instansi: "Eamia",
        pic: "Carling Vedekhin",
        telp: "919-216-0512",
        alamat: "491 Dayton Court"
      },
      {
        id: 64,
        instansi: "Zoovu",
        pic: "Petronille Yurshev",
        telp: "500-647-9533",
        alamat: "2 Lake View Parkway"
      },
      {
        id: 65,
        instansi: "Brainsphere",
        pic: "Demetrius Caves",
        telp: "849-717-1465",
        alamat: "896 Little Fleur Drive"
      },
      {
        id: 66,
        instansi: "Trudoo",
        pic: "Kassey Sedman",
        telp: "916-914-8387",
        alamat: "578 Butterfield Pass"
      },
      {
        id: 67,
        instansi: "LiveZ",
        pic: "Zebedee Ruffler",
        telp: "667-987-2647",
        alamat: "67866 Huxley Junction"
      },
      {
        id: 68,
        instansi: "Jabberbean",
        pic: "Paten McRae",
        telp: "789-194-7496",
        alamat: "7 Kings Terrace"
      },
      {
        id: 69,
        instansi: "Divanoodle",
        pic: "Beulah Outerbridge",
        telp: "852-704-2214",
        alamat: "246 Kings Pass"
      },
      {
        id: 70,
        instansi: "Oyoba",
        pic: "Herbie Brumbie",
        telp: "178-228-1245",
        alamat: "2 Hanson Way"
      },
      {
        id: 71,
        instansi: "Photojam",
        pic: "Denise Mac Giolla Pheadair",
        telp: "255-151-5782",
        alamat: "6701 Reindahl Center"
      },
      {
        id: 72,
        instansi: "Oyondu",
        pic: "Camille Dinis",
        telp: "529-463-9004",
        alamat: "0 Tennessee Circle"
      },
      {
        id: 73,
        instansi: "Jaxbean",
        pic: "Nadia Bagenal",
        telp: "151-624-2222",
        alamat: "5 Grasskamp Terrace"
      },
      {
        id: 74,
        instansi: "Youspan",
        pic: "Debora Boykett",
        telp: "477-365-1439",
        alamat: "7 Burning Wood Center"
      },
      {
        id: 75,
        instansi: "Tekfly",
        pic: "Cathyleen Maryet",
        telp: "734-902-7775",
        alamat: "2 Eastwood Park"
      },
      {
        id: 76,
        instansi: "Skyba",
        pic: "Foster Ridhole",
        telp: "710-530-1926",
        alamat: "723 Portage Pass"
      },
      {
        id: 77,
        instansi: "Dabvine",
        pic: "Gerome Toman",
        telp: "684-893-6137",
        alamat: "3 Northridge Hill"
      },
      {
        id: 78,
        instansi: "Lazzy",
        pic: "Cherye Nisot",
        telp: "253-500-6482",
        alamat: "162 Mcbride Alley"
      },
      {
        id: 79,
        instansi: "Zoomlounge",
        pic: "Celine O'Regan",
        telp: "835-526-0971",
        alamat: "6 Londonderry Circle"
      },
      {
        id: 80,
        instansi: "Zooxo",
        pic: "Rafi MacGillreich",
        telp: "292-876-0745",
        alamat: "6671 Corry Street"
      },
      {
        id: 81,
        instansi: "Twitterbridge",
        pic: "Karlan Gareisr",
        telp: "694-929-5815",
        alamat: "1 Lighthouse Bay Plaza"
      },
      {
        id: 82,
        instansi: "Reallinks",
        pic: "Brennen Dineen",
        telp: "108-927-3961",
        alamat: "6 3rd Parkway"
      },
      {
        id: 83,
        instansi: "Zoomcast",
        pic: "Angelina Convery",
        telp: "552-621-6966",
        alamat: "14101 Esker Terrace"
      },
      {
        id: 84,
        instansi: "Devpulse",
        pic: "Idette Cicerone",
        telp: "916-818-5288",
        alamat: "8 Swallow Park"
      },
      {
        id: 85,
        instansi: "Blognation",
        pic: "Darcy Hutten",
        telp: "411-290-7465",
        alamat: "94685 Cottonwood Terrace"
      },
      {
        id: 86,
        instansi: "Yozio",
        pic: "Clarance Entwisle",
        telp: "937-344-1425",
        alamat: "32 Lukken Hill"
      },
      {
        id: 87,
        instansi: "Wordify",
        pic: "Amory Loveday",
        telp: "819-690-4721",
        alamat: "41 Carpenter Hill"
      },
      {
        id: 88,
        instansi: "Gabvine",
        pic: "Engelbert Josuweit",
        telp: "376-417-3721",
        alamat: "97 Brentwood Road"
      },
      {
        id: 89,
        instansi: "Buzzbean",
        pic: "Delphinia Ebbrell",
        telp: "435-694-2530",
        alamat: "95 Vidon Junction"
      },
      {
        id: 90,
        instansi: "Avamba",
        pic: "Reagan Tasch",
        telp: "192-688-1760",
        alamat: "48 Straubel Terrace"
      },
      {
        id: 91,
        instansi: "Zoonoodle",
        pic: "Jens Mapston",
        telp: "661-891-1114",
        alamat: "6083 Debra Parkway"
      },
      {
        id: 92,
        instansi: "Gigabox",
        pic: "Chet Toye",
        telp: "446-575-3285",
        alamat: "596 Miller Road"
      },
      {
        id: 93,
        instansi: "Kazio",
        pic: "Bethina Nott",
        telp: "314-133-8218",
        alamat: "3 Merry Place"
      },
      {
        id: 94,
        instansi: "Lazz",
        pic: "Blanche Whybray",
        telp: "982-832-1087",
        alamat: "648 Moulton Drive"
      },
      {
        id: 95,
        instansi: "Feedfish",
        pic: "Aldis Shelbourne",
        telp: "952-490-4918",
        alamat: "31606 Browning Plaza"
      },
      {
        id: 96,
        instansi: "BlogXS",
        pic: "Simonne Puckett",
        telp: "306-254-0519",
        alamat: "20724 2nd Circle"
      },
      {
        id: 97,
        instansi: "Aibox",
        pic: "Woodman Sissot",
        telp: "237-147-0552",
        alamat: "6965 8th Pass"
      },
      {
        id: 98,
        instansi: "Eazzy",
        pic: "Abbot Issard",
        telp: "198-291-9091",
        alamat: "22 Harper Avenue"
      },
      {
        id: 99,
        instansi: "Topiclounge",
        pic: "Vidovik Roux",
        telp: "811-528-0057",
        alamat: "4 Iowa Street"
      },
      {
        id: 100,
        instansi: "Blogtag",
        pic: "Abbi Libbie",
        telp: "901-326-9296",
        alamat: "67220 Darwin Street"
      }
    ],
    products: []
  },
  getters: {
    paginatedCustomers(state) {
      let pos =
        state.pagination.page <= 1
          ? 0
          : (state.pagination.page - 1) * state.pagination.perPage;
      let chunk = state.customers.slice(pos, pos + state.pagination.perPage);

      return chunk;
    },
    totalCustomer(state) {
      return state.customers.length;
    },
    currentPage(state) {
      return state.pagination.page;
    }
  },
  mutations: {
    changePage(state, page) {
      state.pagination.page = page;
    }
  },
  actions: {
    changePage({ commit }, page) {
      commit("changePage", page);
    }
  }
};
