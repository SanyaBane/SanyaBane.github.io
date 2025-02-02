import ModSelectionCard from "./ModSelectionCard";
import { AllModsSelectionInfoData } from "../data/ModSelectionInfo";
import "./ModList.css";

function ModList() {
  return (
    <div className="root-container">
      <p className="mods-header">Mods:</p>
      <div className="mods-list">
        {AllModsSelectionInfoData.map((heroSelectionData) => (
          <ModSelectionCard key={heroSelectionData.mod_id} {...heroSelectionData} />
        ))}
      </div>
    </div>
  );
}

export default ModList;
