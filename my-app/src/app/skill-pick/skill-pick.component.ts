import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Category, Skill } from '../skills';
import { SKILLS } from '../mock-skills';

@Component({
  selector: 'app-skill-pick',
  templateUrl: './skill-pick.component.html',
  styleUrls: ['./skill-pick.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillPickComponent implements OnInit {

  skills = SKILLS;
  selectedSkill : Skill;

  constructor() { }

  ngOnInit() {
  }

  onSelect(skill: Skill): void {
    this.selectedSkill = skill;
  }

}
