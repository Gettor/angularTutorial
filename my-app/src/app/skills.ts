
export enum Category {
  Strong = "Strong",
  Swift = "Swift",
  Mistic = "Mistic"
}

export class Skill {
  id: number;
  name: string;
  imagePath: string;
  type: boolean;
  category: Category;
  value: number;
}