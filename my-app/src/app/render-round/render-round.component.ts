import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Category, Skill } from '../skills';
import { Round } from '../round';
import { SkillService } from '../skill.service'

@Component({
  selector: 'app-render-round',
  templateUrl: './render-round.component.html',
  styleUrls: ['./render-round.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderRoundComponent implements OnInit {

  @Input() round : Round;

  private my_skill : Skill;
  private his_skill : Skill;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void{
    this.skillService.getSkill(this.round.my_skill)
      .subscribe(skill => this.my_skill = skill);
    this.skillService.getSkill(this.round.his_skill)
      .subscribe(skill => this.his_skill = skill);
  }

}
