import { Category, Skill } from "./skills";

export const SKILLS: Skill[] = [
    {id: 1, name: "Strong Attack", type: false, category: Category.Strong, value: 10},
    {id: 2, name: "Swift Attack", type: false, category: Category.Swift, value: 10},
    {id: 3, name: "Mistic Attack", type: false, category: Category.Mistic, value: 10},
    {id: 4, name: "Strong Defense", type: true, category: Category.Strong, value: 10},
    {id: 5, name: "Swift Defense", type: true, category: Category.Swift, value: 10},
    {id: 6, name: "Mistic Defense", type: true, category: Category.Mistic, value: 10},
];