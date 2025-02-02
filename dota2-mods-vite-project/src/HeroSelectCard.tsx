import heroSelectionImage from "./assets/modded_hero_selection_image/npc_dota_hero_pudge.png";
import originalHeroMiniImage from "./assets/original_hero_mini_image/npc_dota_hero_pudge_png.png";

const HeroSelectCard = () => {
  return (
    <a href="" className="clickable-container">
      <div className="image-container">
        <img
          src={heroSelectionImage}
          alt="Hero Selection Image"
          className="main-image"
        />
        <img
          src={originalHeroMiniImage}
          alt="Original Hero Mini Image"
          className="overlay-image"
        />
      </div>
      <p className="hero-name">Pudge</p>
    </a>
  );
};

export default HeroSelectCard;
