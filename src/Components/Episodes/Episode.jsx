import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../Slices/EpisodeSlice";
import "../../Styles/Episodes.css";
import { Audio } from  'react-loader-spinner'


const EpisodeCard = ({ episode }) => {
  return (
    <a href={`/episode/${episode.id}`} className="episode-card">
      <div className="episode-info">
        <div>
          <b>ID:</b> {episode.id}
        </div>
        <div>
          <b>Name:</b> {episode.name}
        </div>
        <div>
          <b>Code:</b> {episode.episode}
        </div>
      </div>
    </a>
  );
};

const Episodes = () => {
  const dispatch = useDispatch();
  const { episodes, status, error } = useSelector((state) => state.episode);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  if (status === "loading") {
    return <div>      <Audio
    height = "80"
    width = "80"
    radius = "9"
    color="black"

    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  /></div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="episode-list">
      <h1>Episodes</h1>
      <div className="episode-container">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default Episodes;
