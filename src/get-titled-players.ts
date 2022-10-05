import axios from "axios";
import fs from "fs";

const chessTitles = [
  "GM",
  "WGM",
  "IM",
  "WIM",
  "FM",
  "WFM",
  "NM",
  "WNM",
  "CM",
  "WCM",
];
export const getPlayers = async () => {
  let titledPlayers: string[] = [];

  // iterate over all chess titles to get all titled plays and save to titledPlayers array
  for (const title of chessTitles) {
    const titlesRes = await axios
      .get(`https://api.chess.com/pub/titled/${title}`)
      .then((d) => d.data.players);
    titledPlayers = [...titledPlayers, ...titlesRes];
  }

  // save titled players to file
  fs.writeFileSync("./data/titledPlayers.json", JSON.stringify(titledPlayers.flat()));
};
getPlayers();
