import { ModSelectionInfoProps } from "../types/ModSelectionInfoProps"

export interface ModDetailedInfoProps {
  mod_id: string;
  modSelectionInfoProps: ModSelectionInfoProps;
  titleImage: string;
  spellIcons: SpellIcon[];
  loadoutImages: LoadoutImage[];
  //ingameImages: IngameImage[];
}

export interface SpellIcon {
  image: string;
}

export interface LoadoutImage {
  image: string;
}

export interface IngameImage {
  image: string;
}
