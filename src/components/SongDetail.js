import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log(song);
  if (!song) return <div>Select a song</div>;

  return (
    <div>
      <h3>Details for: {song.title}</h3>
      <p>
        artist: {song.artist} <br />
        duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
