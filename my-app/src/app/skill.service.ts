import { Injectable } from '@angular/core';
import { Category, Skill } from './skills';
import { SKILLS } from './mock-skills';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SkillService {

  constructor(private messageService: MessageService) { }

  getSkills(): Observable<Skill[]> {
  	this.messageService.add("SkillService: getSkills()");
  	return of(SKILLS);
  }

  getSkill(id: number) : Observable<Skill> {
  	this.messageService.add("SkillService: getSkill(" + id + ")");
  	return of(SKILLS.find(skill => skill.id === id));
  }

}
