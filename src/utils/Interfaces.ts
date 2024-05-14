export interface Character {
  name: string;
  eye_color: string;
  gender: string;
  birthday_year?: number;
  hair_color?: string;
  height?: number;
  skin_color?: string;
  mass?: number;
  img: string;
  id: string;
  url?: string;
}

export interface Films {
  title: string;
  episode_id: number;
  director: string;
  characters: [];
  url:string;
  img: string;
}
