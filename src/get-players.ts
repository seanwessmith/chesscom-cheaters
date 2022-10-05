import axios from "axios";

export const getPlayers = async () => {
  const titlePlayers = await axios.get("https://api.chess.com/pub/titled/GM");
  console.log(titlePlayers.data.players);
};
getPlayers();
