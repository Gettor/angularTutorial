import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Category, Skill } from '../skills';
import { SkillService } from '../skill.service'

@Component({
  selector: 'app-skill-pick',
  templateUrl: './skill-pick.component.html',
  styleUrls: ['./skill-pick.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillPickComponent implements OnInit {

  skills : Skill[];

  constructor(
    private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

}
