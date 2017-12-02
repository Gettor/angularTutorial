import { Injectable } from '@angular/core';
import { Category, Skill } from './skills';
import { SKILLS } from './mock-skills';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SkillService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private requestBase = "http://localhost:3000";

  getSkills(): Observable<Skill[]> {
    this.messageService.add("SkillService: getSkills()");
    const request = this.requestBase + "/skills"
    return this.http.get(request)
      .map(data => <Skill[]>(data));;
  }

  getSkill(id: number) : Observable<Skill> {
    this.messageService.add("SkillService: getSkill(" + id + ")");
    const request = this.requestBase + "/skill/" + id.toString()
    return this.http.get(request)
      .map(data => <Skill>(data));
    // return of(SKILLS.find(skill => skill.id === id));

  }

}
