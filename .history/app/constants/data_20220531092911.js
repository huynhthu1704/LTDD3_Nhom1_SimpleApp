export const onBoardingSleeping = {
  title: " Welcome to Sleep",
  description:
    "Explore the new king of sleep. It uses sound and visualization to create perfect conditions for refreshing sleep",
};
export const musicCategory = [
  {
    id: 1,
    name: "Sleep stories",
    playlist: [
      {
        name:  "Popular sleep stories",
      }
    ]
      name: "Popular sleep stories",
      audio: {
        1: {
          id: 1,
          name: "Sedative",
          src: require("../../assets/audio/sedative-110241.mp3"),
          img: require("../../assets/images/night.jpg"),
          duration: 181,
          author: "David",
        },
      },
    },
  },
  {
    id: 2,
    name: "Meditation",
  },
  {
    id: 3,
    name: "Music",
  },
];

export const listInCategory = [
  {
    id: 1,

    idCategory: 1,
  },
  {
    id: 2,
    name: "Popular meditation",
    idCategory: 2,
  },
  {
    id: 3,
    name: "Sleep stories for kids",
    idCategory: 1,
  },
  {
    id: 4,
    name: "Sleep stories for adult",
    idCategory: 1,
  },
  {
    id: 5,
    name: "Relieve stress/ anxiety",
    idCategory: 2,
  },
  {
    id: 6,
    name: "Music for sleeping",
    idCategory: 3,
  },
];

export const audio = [
  {
    id: 1,
    name: "Sedative",
    src: require("../../assets/audio/sedative-110241.mp3"),
    img: require("../../assets/images/night.jpg"),
    duration: 181,
    author: "David",
    idList: 1,
  },
  {
    id: 2,
    name: "Order",
    src: require("../../assets/audio/order-99518.mp3"),
    img: require("../../assets/images/night2.jpg"),
    duration: 104,
    author: "Yushu",
    idList: 1,
  },
  {
    id: 3,
    name: "Third audio",
    src: require("../../assets/audio/sedative-110241.mp3"),
    img: require("../../assets/images/night.jpg"),
    duration: 1,
    author: "Aniya",
    idList: 1,
  },
  {
    id: 4,
    name: "4 audio",
    src: require("../../assets/audio/sedative-110241.mp3"),
    img: require("../../assets/images/night.jpg"),
    duration: 1,
    author: "Aniya",
    idList: 2,
  },
  {
    id: 5,
    name: "5 audio",
    src: require("../../assets/audio/sedative-110241.mp3"),
    img: require("../../assets/images/night2.jpg"),
    duration: 1,
    author: "Aniya",
    idList: 2,
  },
  {
    id: 6,
    name: "6 audio",
    src: require("../../assets/audio/sedative-110241.mp3"),
    img: require("../../assets/images/night.jpg"),
    duration: 1,
    author: "Aniya",
    idList: 3,
  },
  {
    id: 7,
    name: "7 audio",
    src: require("../../assets/audio/sedative-110241.mp3"),
    img: require("../../assets/images/night.jpg"),
    duration: 1,
    author: "Aniya",
    idList: 3,
  },
  {
    id: 8,
    name: "8 audio",
    src: require("../../assets/audio/sedative-110241.mp3"),
    img: require("../../assets/images/night.jpg"),
    duration: 1,
    author: "Aniya",
    idList: 5,
  },
  {
    id: 9,
    name: "9 audio",
    src: require("../../assets/audio/sedative-110241.mp3"),
    img: require("../../assets/images/night.jpg"),
    duration: 1,
    author: "Aniya",
    idList: 4,
  },
];
export default { musicCategory, listInCategory, audio };
