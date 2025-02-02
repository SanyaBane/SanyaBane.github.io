import { ModSelectionInfoProps } from "../types/ModSelectionInfoProps"

export interface ModDetailedInfoProps {
  mod_id: string;
  modSelectionInfoProps: ModSelectionInfoProps;
  spellIcons?: SpellIcons;
}

export interface SpellIcons {
  icons: Array<string>;
}
