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
export const getTitledPlayerUsernames = async () => {
  let titledPlayerUsernames: string[] = [];

  // iterate over all chess titles to get all titled plays and save to titledPlayerUsernames array
  for (const title of chessTitles) {
    const titlesRes = await axios
      .get(`https://api.chess.com/pub/titled/${title}`)
      .then((d) => d.data.players);
    titledPlayerUsernames = [...titledPlayerUsernames, ...titlesRes];
  }

  // save titled players to file
  fs.writeFileSync(
    "src/data/titledPlayerUsernames.json",
    JSON.stringify(titledPlayerUsernames.flat())
  );
};
getTitledPlayerUsernames();
