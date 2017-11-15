import { Injectable } from '@angular/core';
import { Category, Skill } from './skills';
import { SKILLS } from './mock-skills';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SkillService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
  	return of(SKILLS);
  }

  getSkill(id: number) : Observable<Skill> {
  	return of(SKILLS.find(skill => skill.id === id));
  }

}
