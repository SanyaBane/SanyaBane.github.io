import { useParams } from "react-router-dom";
import { AllModsDetailedInfoData } from "../data/ModDetailedInfo";

const ModDetails = () => {
  const { mod_id } = useParams<{ mod_id: string }>();
  const modDetailedInfoData = AllModsDetailedInfoData.find((r) => r.mod_id.toString() === mod_id);

  if (!modDetailedInfoData) {
    return <div>Mod not found</div>;
  }

  return (
    <div className="mod-detail">
      <div>{modDetailedInfoData.modSelectionInfoProps?.heroName}</div>
    </div>
  );
};

export default ModDetails;
