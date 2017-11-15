import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Round } from '../round';
import { Category, Skill } from '../skills';
import { SkillService } from '../skill.service'
import { EN_ATK, EN_DEF } from '../mock-enemy'
import { RenderSkillComponent } from '../render-skill/render-skill.component'
import { RenderRoundComponent } from '../render-round/render-round.component'

function attacks(id: number): boolean {
  return id % 2 === 0;
}

function getMoveIndex(id: number): number {
  return id % 2;
}

function makeMove(attack: Skill, defence: Skill): Round {
  var r;
  r.atk = attack;
  r.def = defence;
  r.desc = "DummyDesc";
  r.damage = 5;
  return r;
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FightComponent implements OnInit {

  skills : Skill[];
  attacks : Skill[] = [];
  defences : Skill[] = [];
  enoughAt : boolean = false;
  enoughDef : boolean = false;
  continue : boolean = false;
  renderDuel : boolean = false;

  rounds : Round[] = [];
  hp : number = 40;
  en_hp : number = 40;


  constructor(
    private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void{
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

  addMove(skill: Skill): void{
    if (skill.type && this.defences.length === 6)
    {
      this.enoughDef = true;
    }
    if (!skill.type && this.attacks.length === 6)
    {
      this.enoughAt = true;
    }
    if (skill.type && this.defences.length < 6)
    {
      this.defences.push(skill);
    }
    else if (this.attacks.length < 6)
    {
      this.attacks.push(skill);
    }
    if (this.attacks.length == 6 && this.defences.length == 6)
    {
      this.continue = true;
    }

  }

  startDuel(): void{
    this.renderDuel = true;
    var sleepInterval = 500;
    var sleepCount = sleepInterval;
    while (this.hp > 0 || this.en_hp > 0 || this.rounds.length < 12)
    {
        sleep(sleepCount).then(() => {
          sleepCount += sleepInterval;

          let counter = this.rounds.length;
          var thisRound;
          if (attacks(counter))
          {
            thisRound = makeMove(this.attacks[getMoveIndex(counter)], EN_DEF[getMoveIndex(counter)]);
            this.en_hp -= thisRound.damage;
          }
          else
          {
            thisRound = makeMove(EN_ATK[getMoveIndex(counter)], this.defences[getMoveIndex(counter)]);
            this.hp -= thisRound.damage;
          }
          this.rounds.push(thisRound);

        });
    }
  }

}
