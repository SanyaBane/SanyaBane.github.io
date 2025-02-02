import ModSelectionCard from "./ModSelectionCard";
import { AllModsSelectionInfoData } from "../data/ModSelectionInfo";

function ModList() {
  return (
    <div className="hero-list">
      {AllModsSelectionInfoData.map((heroSelectionData) => (
        <ModSelectionCard key={heroSelectionData.heroName} {...heroSelectionData} />
      ))}
    </div>
  );
}

export default ModList;
