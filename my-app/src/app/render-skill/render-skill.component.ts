import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Category, Skill } from '../skills';

@Component({
  selector: 'app-render-skill',
  templateUrl: './render-skill.component.html',
  styleUrls: ['./render-skill.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderSkillComponent implements OnInit {

  @Input() skill : Skill;

  constructor() { }

  ngOnInit() {
  }

}
