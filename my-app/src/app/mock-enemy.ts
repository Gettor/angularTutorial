import { Category, Skill } from './skills';
import { SKILLS } from './mock-skills';

export const EN_ATK: Skill[] = [
    {id: 1, name: "Strong Attack", imagePath: "assets/strong_atk.png", type: false, category: Category.Strong, value: 10},
    {id: 2, name: "Swift Attack", imagePath: "assets/strong_atk.png", type: false, category: Category.Swift, value: 10},
    {id: 3, name: "Mistic Attack", imagePath: "assets/strong_atk.png", type: false, category: Category.Mistic, value: 10},
    {id: 1, name: "Strong Attack", imagePath: "assets/strong_atk.png", type: false, category: Category.Strong, value: 10},
    {id: 2, name: "Swift Attack", imagePath: "assets/strong_atk.png", type: false, category: Category.Swift, value: 10},
    {id: 3, name: "Mistic Attack", imagePath: "assets/strong_atk.png", type: false, category: Category.Mistic, value: 10},
];

export const EN_DEF: Skill[] = [
    {id: 4, name: "Strong Defense", imagePath: "assets/strong_atk.png", type: true, category: Category.Strong, value: 10},
    {id: 5, name: "Swift Defense", imagePath: "assets/strong_atk.png", type: true, category: Category.Swift, value: 10},
    {id: 6, name: "Mistic Defense", imagePath: "assets/strong_atk.png", type: true, category: Category.Mistic, value: 10},
    {id: 4, name: "Strong Defense", imagePath: "assets/strong_atk.png", type: true, category: Category.Strong, value: 10},
    {id: 5, name: "Swift Defense", imagePath: "assets/strong_atk.png", type: true, category: Category.Swift, value: 10},
    {id: 6, name: "Mistic Defense", imagePath: "assets/strong_atk.png", type: true, category: Category.Mistic, value: 10},
];