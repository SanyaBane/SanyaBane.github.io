import ModSelectionCard from "./ModSelectionCard";
import { AllModsSelectionInfoData } from "../data/ModSelectionInfo";
import "./ModList.css";

function ModList() {
  return (
    <div className="hero-list">
      {AllModsSelectionInfoData.map((heroSelectionData) => (
        <ModSelectionCard key={heroSelectionData.mod_id} {...heroSelectionData} />
      ))}
    </div>
  );
}

export default ModList;
