import React, { useState, useEffect } from "react";
import "./Mappings.css";

import dataStageMapping from "../files/STAGING.png";
import leagueMapping from "../files/LEAGUE.png";
import clubMapping from "../files/CLUB.png";
import playerMapping from "../files/PLAYER.png";
import countryMapping from "../files/COUNTRY.png";
import timeMapping from "../files/TIME.png";
import matchTypeMapping from "../files/MATCH-TYPE.png";
import playerStatsMapping from "../files/PLAYER-STATS.png";
import teamStatsMapping from "../files/TEAM-STATS.png";


const Mappings = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  const handleZoomedImageClick = () => {
    setSelectedImage(null);
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setShowOverlay(scrollPosition >= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const galleryData = [
    {
        id: 1,
        imageSrc: dataStageMapping,
        description: "Data Staging",
    },
    {
      id: 2,
      imageSrc: leagueMapping,
      description: "League",
    },
    {
      id: 3,
      imageSrc: clubMapping, 
      description: "Club",
    },
    {
        id: 4,
        imageSrc: playerMapping, 
        description: "Player",
      },
      {
        id: 5,
        imageSrc: countryMapping, 
        description: "Country",
      },
      {
        id: 6,
        imageSrc: timeMapping, 
        description: "Time",
      },
      {
        id: 7,
        imageSrc: matchTypeMapping, 
        description: "Match Type",
      },
      {
        id: 8,
        imageSrc: playerStatsMapping, 
        description: "Player Statistics",
      },
      {
        id: 9,
        imageSrc: teamStatsMapping, 
        description: "Team Statistics",
      }
  ];

  return (
    <div className="gallery-container">
      <h1 id="mappingsTitle">MAPPINGS</h1>
      <div className="image-grid">
        {galleryData.map((image) => (
          <div
            key={image.id}
            className="image-card"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.imageSrc} alt={image.description} className="mappingImages"/>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="zoomed-image"
          onClick={handleZoomedImageClick}
        >
          <img src={selectedImage.imageSrc} alt={selectedImage.description} className="zoomedImage"/>
          <p>{selectedImage.description}</p>
        </div>
      )}
      {showOverlay && <div className="overlay"></div>}
    </div>
  );
};

export default Mappings;