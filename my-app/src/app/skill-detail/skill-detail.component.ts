import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Category, Skill } from '../skills';
import { SkillService } from '../skill.service'

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillDetailComponent implements OnInit {

  @Input() skill : Skill;

  constructor(
    private route: ActivatedRoute,
    private skillService: SkillService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getSkill();
  }

  getSkill(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.skillService.getSkill(id)
        .subscribe(skill => this.skill = skill);
  }

  goBack(): void {
    this.location.back();
  }

}
