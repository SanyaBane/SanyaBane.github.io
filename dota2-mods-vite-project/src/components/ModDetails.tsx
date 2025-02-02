import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AllModsDetailedInfoData } from "../data/ModDetailedInfo";
import "./ModDetails.css";

const ModDetails = () => {
  const { mod_id } = useParams<{ mod_id: string }>();
  const modDetailedInfoData = AllModsDetailedInfoData.find((r) => r.mod_id.toString() === mod_id);

  if (!modDetailedInfoData) {
    return <div>Mod not found</div>;
  }

  const spellIcons = (
    <div className="spellicons-container">
      <p className="spellicons-text">Spells:</p>
      <div className="spellicons-images">
        {modDetailedInfoData.spellIcons.map((spellIcon, index) => (
          <img className="spellicon-image" key={`spellIcon_${index}`} src={spellIcon.image} alt="image" />
        ))}
      </div>
    </div>
  );

  const loadouts = (
    <div className="loadouts-container">
      <p className="loadouts-text">Loadout:</p>
      <div className="loadouts-images">
        {modDetailedInfoData.loadoutImages.map((loadoutImage, index) => (
          <img className="loadouts-image" key={`loadout_${index}`} src={loadoutImage.image} alt="image" />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="title-container">
        <Link className="back-button-container" to={`/`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 12H5"></path>
            <path d="M12 5l-7 7 7 7"></path>
          </svg>
        </Link>
        <img className="title-image" src={modDetailedInfoData.titleImage} alt="image" />
        <p className="title-text">{modDetailedInfoData.modSelectionInfoProps?.heroName}</p>
      </div>
      {spellIcons}
      {loadouts}
    </div>
  );
};

export default ModDetails;
