import axios from "axios";
import fs from "fs";
import titledPlayerUsernames from "./data/titledPlayerUsernames.json";
import { ChessCom } from "./types";

export const getPlayer = async () => {
  const titledPlayerInfo: ChessCom.PlayerInfo[] = [];
  // iterate over all usernames and save to titledPlayerInfo array
  for (const username of titledPlayerUsernames) {
    const player = await axios
      .get(`https://api.chess.com/pub/player/${username}`)
      .then((d) => d.data);
    titledPlayerInfo.push(player);
  }

  // save titled players to file
  fs.writeFileSync(
    "src/data/titledPlayerInfo.json",
    JSON.stringify(titledPlayerInfo)
  );
};
getPlayer();
