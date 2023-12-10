import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCharacterDetails } from "../../Slices/CharacterSlice";
import "../../Styles/Characters.css";
import { Audio } from  'react-loader-spinner'


const CharacterDetail = () => {
  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(fetchCharacterDetails(characterId));
  }, [dispatch, characterId]);

  const character = useSelector((state) => {
    console.log(state.character);
    return state.character.selectedCharacter;
  });

  if (!character) {
    console.log("Character not found");
    return <div className="loader">      <Audio
    height = "80"
    color="black"

    width = "80"
    radius = "9"
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  /></div>;
  }

  return (
    <div className="character-detail-container">
      <h1 className="character-detail-title">Character Detail</h1>
      <div className="character-detail-card">
        <div className="character-detail-image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="character-detail-info">
          <div>
            <b>ID:</b> {character.id}
          </div>
          <div>
            <b>Name:</b> {character.name}
          </div>
          <div>
            <b>Status:</b> {character.status}
          </div>
          <div>
            <b>Species:</b> {character.species}
          </div>
          <div>
            <b>Type:</b> {character.type}
          </div>
          <div>
            <b>Gender:</b> {character.gender}
          </div>

          <div>
            <b>Origin:</b> {character.origin.name}
          </div>
          <div>
            <b>Location:</b> {character.location.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
