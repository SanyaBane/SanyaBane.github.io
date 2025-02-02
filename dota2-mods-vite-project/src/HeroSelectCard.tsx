export interface HeroSelectionData {
  heroName: string;
  moddedHeroSelectionImage: any;
  originalHeroMiniImage: string;
}

const HeroSelectCard = ({
  heroName,
  moddedHeroSelectionImage,
  originalHeroMiniImage,
}: HeroSelectionData) => {
  return (
    <a href="" className="clickable-container">
      <div className="image-container">
        <img
          src={moddedHeroSelectionImage}
          alt="Hero Selection Image"
          className="main-image"
        />
        <img
          src={originalHeroMiniImage}
          alt="Original Hero Mini Image"
          className="overlay-image"
        />
      </div>
      <p className="hero-name">{heroName}</p>
    </a>
  );
};

export default HeroSelectCard;
