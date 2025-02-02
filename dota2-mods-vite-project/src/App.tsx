import HeroSelectCard from "./HeroSelectCard";
import { HeroSelectionData } from "./HeroSelectCard";

const cards: HeroSelectionData[] = [
  {
    heroName: "Pudge",
    moddedHeroSelectionImage:
      "./hero_cards/Pudge_Medusa/npc_dota_hero_pudge.png",
    originalHeroMiniImage:
      "./hero_cards/Pudge_Medusa/npc_dota_hero_pudge_png.png",
  },
  {
    heroName: "Phoenix",
    moddedHeroSelectionImage:
      "./hero_cards/Phoenix_Megumin/npc_dota_hero_phoenix.png",
    originalHeroMiniImage:
      "./hero_cards/Phoenix_Megumin/npc_dota_hero_phoenix_png.png",
  },
  {
    heroName: "Wraith King",
    moddedHeroSelectionImage:
      "./hero_cards/WraithKing_LichKing/npc_dota_hero_skeleton_king.png",
    originalHeroMiniImage:
      "./hero_cards/WraithKing_LichKing/npc_dota_hero_skeleton_king_png.png",
  },
];

function App() {
  return (
    <div className="hero-list">
      {cards.map((heroSelectionData) => (
        <HeroSelectCard
          key={heroSelectionData.heroName}
          {...heroSelectionData}
        />
      ))}
    </div>
  );
}

export default App;
