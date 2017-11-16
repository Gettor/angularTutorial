import { Category, Skill } from "./skills";

export const SKILLS: Skill[] = [
    {id: 1, name: "Strong Attack", imagePath: "assets/strong_atk.png", type: false, category: Category.Strong, value: 10},
    {id: 2, name: "Swift Attack", imagePath: "assets/swift_atk.png", type: false, category: Category.Swift, value: 10},
    {id: 3, name: "Mistic Attack", imagePath: "assets/magic_atk.png", type: false, category: Category.Mistic, value: 10},
    {id: 4, name: "Strong Defense", imagePath: "assets/strong_def.png", type: true, category: Category.Strong, value: 10},
    {id: 5, name: "Swift Defense", imagePath: "assets/swift_def.png", type: true, category: Category.Swift, value: 10},
    {id: 6, name: "Mistic Defense", imagePath: "assets/magic_def.png", type: true, category: Category.Mistic, value: 10},
];