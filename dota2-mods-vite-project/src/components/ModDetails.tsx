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
      <Link to={`/`}>
        <button className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M39 12H5"></path>
            <path d="M12 5l-7 7 7 7"></path>
          </svg>
        </button>
      </Link>
      <p className="spellicons-text">Spells:</p>
      <div className="spellicons-images">
        {modDetailedInfoData.spellIcons.map((spellIcon) => (
          <img src={spellIcon.image} alt="image" className="spellicon-image" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="mod-detail">
      <div className="title-container">
        <img src={modDetailedInfoData.titleImage} alt="image" className="title-image" />
        <p className="title-text">{modDetailedInfoData.modSelectionInfoProps?.heroName}</p>
      </div>
      {spellIcons}
    </div>
  );
};

export default ModDetails;
