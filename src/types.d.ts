declare namespace ChessCom {
  export type Title =
    | "GM"
    | "WGM"
    | "IM"
    | "WIM"
    | "FM"
    | "WFM"
    | "NM"
    | "WNM"
    | "CM"
    | "WCM";

  export interface PlayerInfo {
    player_id: number;
    "@id": string;
    url: string;
    name: string;
    username: string;
    title: Title;
    followers: number;
    country: string;
    last_online: number;
    joined: number;
    status: string;
    is_streamer: boolean;
    verified: boolean;
  }
}

export { ChessCom as ChessCom };
