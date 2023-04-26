export interface Pokemon {
  abilities: Abilities;
  base_experience: number;
  forms: Forms;
  game_indices: GameIndices;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves;
  name: string;
  order: number;
  species: Forms;
  sprites: Sprites;
  stats: Stats;
  types: Types;
  weight: number;
}

export interface Abilities {
  ability: Forms;
  is_hidden: boolean;
  slot: number;
}

export interface Forms {
  name: string;
  url: string;
}

export interface GameIndices {
  game_index: number;
  version: Forms;
}

export interface Moves {
  move: Forms;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Forms;
  version_group: Forms;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female: Female;
  back_shiny: string;
  back_shiny_female: Female;
  front_default: string;
  front_female: Female;
  front_shiny: string;
  front_shiny_female: Female;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: Female;
  front_shiny: string;
  front_shiny_female: Female;
}

export interface Female {}

export interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female: Female;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Forms;
}

export interface Types {
  slot: number;
  type: Forms;
}
