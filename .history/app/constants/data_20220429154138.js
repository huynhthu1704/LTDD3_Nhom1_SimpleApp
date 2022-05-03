export const music = {
    title : "The Nordland Night Train",
    author : "Erik Braa",
    duration : 300,
    img : require("../../assets/images/launch_screen_img")
}

export const musicCategory = [
    {
      id: 1,
      name: "Sleep stories",
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
      name : "Popular sleep stories",
      idCategory: 1,
    },
    {
      id: 2,
      name : "Popular meditation",
      idCategory: 2,
    },
    {
      id: 3,
      name : "Sleep stories for kids",
      idCategory: 1,
    },
  ];
  
 export const audio = [
    {
      id : 1,
      name : "First audio",
      duration : 1,
      author : "David",
      idList : 1
    },
    {
      id : 2,
      name : "Second audio",
      duration : 40,
      author : "Yushu",
      idList : 1
    },
    {
      id : 3,
      name : "Third audio",
      duration : 1,
      author : "Aniya",
      idList : 1
    },
  ]
  export default {musicCategory, listInCategory, audio}