import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    {
      title: "Sath Ya Khilaaf",
      artist: "Kr$na feat.Raftaar",
      duration: "3:08",
    },
    { title: "Fall Off", artist: "Kr$na", duration: "2:13" },
    { title: "Say My Name", artist: "Kr$na", duration: "2:06" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  console.log(action.payload);
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
