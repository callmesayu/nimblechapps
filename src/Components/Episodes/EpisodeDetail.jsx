import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEpisodeDetails } from "../../Slices/EpisodeSlice";
import "../../Styles/Episodes.css";
import { Audio } from  'react-loader-spinner'


const EpisodeDetail = () => {
  const dispatch = useDispatch();
  const { episodeId } = useParams();

  useEffect(() => {
    dispatch(fetchEpisodeDetails(episodeId));
  }, [dispatch, episodeId]);

  const episode = useSelector((state) => {
    return state.episode.episodeDetails;
  });

  if (!episode) {
    return <div>      <Audio
    height = "80"
    color="black"

    width = "80"
    radius = "9"
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  /></div>;
  }

  const formattedCreationDate = new Date(episode.created).toLocaleDateString(
    "en-GB"
  );

  return (
    <div className="episode-details-container">
      <h1 className="episode-details-title">
        {" "}
        <center>Episode Detail </center>
      </h1>
      <div className="episode-details-card">
        <div className="episode-details-info">
          <div>
            <b>ID:</b> {episode.id}
          </div>
          <div>
            <b>Name:</b> {episode.name}
          </div>
          <div>
            <b>Episode Code:</b> {episode.episode}
          </div>
          <div>
            <b>Air Date:</b> {episode.air_date}
          </div>
          <div>
            <b>Creation Date:</b> {formattedCreationDate}
          </div>
          <div>
            <b>Episode URL:</b> {episode.url}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;
