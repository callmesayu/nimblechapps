import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../Slices/CharacterSlice";
import "../../Styles/Characters.css";
import { Audio } from "react-loader-spinner";

const CharacterCard = ({ character }) => {
  return (
    <a href={`/character/${character.id}`} className="character-card">
      <div className="character-info">
        <div>
          <b> ID: </b>
          {character.id}
        </div>
        <div>
          {" "}
          <b>Name: </b>
          {character.name}
        </div>
        <div>
          {" "}
          <b>Gender: </b> {character.gender}
        </div>
        <div>
          {" "}
          <b>Status: </b>
          {character.status}
        </div>
      </div>
    </a>
  );
};

const Characters = () => {
  const dispatch = useDispatch();
  const { characters, status, error } = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div>
        <Audio
          height="80"
          width="80"
          color="black"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log("HIHIHI", characters);

  return (
    <div className="character-list">
      <h1>Characters</h1>
      <div className="character-container">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
