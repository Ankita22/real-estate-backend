const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};

CONSTANTS.PORT = 7000;
CONSTANTS.ENDPOINT.ADDCONTACT = "/addcontact";
CONSTANTS.ENDPOINT.CONTACTDETAILS = "/getcontact";
CONSTANTS.ENDPOINT.PROJECTDETAILS = "/getproject";

CONSTANTS.PROJECTS = [
  {
    status: 1,
    type: "Completed Projects",
    projects: [
      {
        name: "Mont Vert Grande",
        imgname: "assets/imgs/c1.jpg",
        area: 11300,
        amenities: [
          "Elevators",
          "Club House and Fitness",
          "Eco‐friendly features",
          "Security",
          "Fire Fighting",
          "Garden",
        ],
        about:
          "Mont Vert Grande is a real estate property on Sus Road in Pashan, Pune. It is a project of 2 BHK, and 3 BHK apartments on Pashan-Sus Road, near Sai Chowk. This is a residential project located in West Pune in Pashan very close to Baner, Aundh, Balewadi and Bavdhan. It is an ideally situated apartment complex whether you are working at Hinjewadi IT Park or in the city of Pune.",
        distances: [
          "Mont Vert Grande to Pune University circle --- 4.5 km",
          "Mont Vert Grande to Hinjewadi, Pune --- 10 km",
          "Mont Vert Grande to Mumbai-Bangalore Highway (NH4)-2 km",
          "Mont Vert Grande to Baner Road – 3 km",
          "Mont Vert Grande to Aundh - 4 km",
        ],
        registrationNumber: "P52100020690",
        gallery: ["assets/imgs/grande-1.jpg", "assets/imgs/grande-2.jpg"],
      },
      {
        name: "Mont Vert Sonnet",
        imgname: "assets/imgs/c2.jpg",
        area: 14300,
        amenities: [
          "Elevators",
          "Club House and Fitness",
          "Security",
          "Fire Fighting",
          "Garden",
        ],
        about:
          "Mont Vert Sonnet is ideally located complex of 2 BHK flats for sale in Wakad. It consists of a total of 90 plus apartments with attached balcony. Mont Vert Sonnet has 9 shops. It is a beautifully designed single building with 12 residential floors, each floor with well-planned eight flats. Three automatic elevators ensure efficient service. Mont Vert Sonnet has a provision for adequate car parking in three levels. The lifts and common area lights are with a full power backup.",
        distances: [
          "Mont Vert Sonnet to Hinjewadi Phase I - 3.8 km",
          "Mont Vert Sonnet to Club 29 – 3.7 km",
          "Mont Vert Sonnet to Aditya Birla Hospital- 5 km",
          "Mont Vert Sonnet to Life point multispecialty – 2 km",
          "Mont Vert Sonnet to D-Mart Hinjewadi – 4.1 km",
        ],
        registrationNumber: "P52100004227",
        gallery: ["assets/imgs/sonnet-1.jpg", "assets/imgs/sonnet-2.jpg"],
      },
    ],
  },
  {
    status: 2,
    type: "Ongoing Projects",
    projects: [
      {
        name: "Mont vert Vesta",
        imgname: "assets/imgs/o1.jpg",
        area: 9250,
        amenities: [
          "Elevators",
          "Club House and Fitness",
          "Eco‐friendly features",
          "Security",
          "Fire Fighting",
          "Garden",
        ],
        about:
          "Mont vert Vesta is a gated residential project with 550 plus flats located in scenic area of Urawade Pirangut. Majority of flats are 2 BHK flats. Mont vert Vesta has 9 towers each with 12 residential floors with breath taking views. Each building is supported by 2 elevators. All lifts and common area lights are with a full power backup. Mont vert Vesta community includes an already functioning swimming pool, club houses with gym and a beautifully landscaped 2 acre garden. The project also contains 77 group housing plots.",
        distances: [
          "Mont vert Vesta to Pune Chandani Chowk (NDA circle) --- 15 km",
          "Mont vert Vesta to Hinjewadi phase 3 Via Hinjewadi – Pirangut link road --- 11 km",
          "Mont vert Vesta to Mumbai-Bangaluru Highway NH4 --- 15km",
          "Mont vert Vesta to Kothrud – 17 km",
        ],
        registrationNumber: "P52100003950",
        gallery: [
          "assets/imgs/vesta-1.jpg",
          "assets/imgs/vesta-2.jpg",
          "assets/imgs/vesta-3.jpg",
        ],
      },
    ],
  },
  {
    status: 3,
    type: "Upcoming Projects",
    projects: [
      {
        name: "Mont Vert Belair",
        imgname: "assets/imgs/u1.jpg",
        area: 9700,
        amenities: [
          "Elevators",
          "Club House and Fitness",
          "Eco‐friendly features",
          "Security",
          "Fire Fighting",
        ],
        about:
          "Mont Vert Belair is a gated residential community of 2 BHK and 3 BHK apartments for sale. This residential project in Bhugaon, Pune, consists of 6 towers. Each tower is 12 residential floors. Mont Vert Belair is a project of 224 flats in Bhugaon. You can buy ready possession flats in Bhugaon at Mont Vert Belair. It also offers under construction 2 and 3 BHK flats and garden flats. Mont Vert Belair is a gated community in Bhugaon.",
        distances: [
          "Mont Vert Belair to Bhusari colony, Kothrud --- 6.5 km",
          "Mont Vert Belair to Deccan Gymkhana, Pune --- 11 km",
          "Mont Vert Belair to Pashan, Pune --- 8 km",
          "Mont Vert Belair to Hinjewadi, Pune --- 15 km",
          "Mont Vert Belair to Pirangut, Pune --- 6.5 km",
          "Mont Vert Belair to Manas Lake Resort, Pune --- 1.5 km",
        ],
        registrationNumber: "P52100002756",
        gallery: ["assets/imgs/belair-1.jpg", "assets/imgs/belair-2.jpg"],
      },
    ],
  },
];

module.exports = CONSTANTS;
