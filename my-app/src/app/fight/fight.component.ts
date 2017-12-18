import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Fight } from '../fight';
import { Round } from '../round';
import { Category, Skill } from '../skills';
import { SkillService } from '../skill.service'
import { EN_ATK, EN_DEF } from '../mock-enemy'
import { RenderSkillComponent } from '../render-skill/render-skill.component'
import { RenderRoundComponent } from '../render-round/render-round.component'
import { RenderFightComponent } from '../render-fight/render-fight.component'

// attacker == true ? me : him
function makeMove(attack: Skill, defence: Skill, attacker: boolean): Round {
  var r = new Round();
  r.damage = 0;
  if (attacker)
  {
    r.desc = "Your " + attack.name + " was blocked by " + defence.name + ".";
    r.my_skill = attack.id;
    r.his_skill = defence.id;
  }
  else
  {
    r.desc = "Enemy used " + attack.name + ", you blocked with " + defence.name + ".";
    r.his_skill = attack.id;
    r.my_skill = defence.id;
  }
  if (attack.category != defence.category)
  {
    r.damage = attack.value;
  }
  else
  {
    r.desc += " Attack was blocked!";
  }
  r.attacker = attacker;
  return r;
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
  enemyAtk = EN_ATK;
  enemyDef = EN_DEF;

  enoughAt : boolean = false;
  enoughDef : boolean = false;
  removeStartBattleButton : boolean = false;
  fightFinished : boolean = false;
  verdict : string;

  rounds : Round[] = [];
  roundsToRender : Round[] = [];
  max_hp : number = 40;
  hp : number = 40;
  max_en_hp : number = 40;
  en_hp : number = 40;
  fight : Fight;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void{
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

  // skill.type == true ? defence : attack
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
    else if (!skill.type && this.attacks.length < 6)
    {
      this.attacks.push(skill);
    }
  }

  // who == true ? me : him (who was attacking)
  updateHp(who: boolean, hit: number): void {
    if (!who)
    {
      var newValue = this.hp - hit;
      this.hp = newValue;
    }
    else
    {
      var newValue = this.en_hp - hit;
      this.en_hp = newValue;
    }
  }

  async stepDuel() {
    this.removeStartBattleButton = true;
    this.makeDuel();
    while (!this.fightFinished)
    {
      this.nextRound();
    }
    this.fight = { rounds: this.rounds, my_hp: this.max_hp, en_hp: this.max_en_hp, verdict: this.verdict };

  }

  makeDuel(): void{
    var i = 0;
    var tmpHp = this.hp;
    var tmpEn_hp = this.en_hp;
    while (i < 6 && tmpHp > 0 && tmpEn_hp > 0)
    {
      var firstMove = makeMove(this.attacks[i], this.enemyDef[i], true);
      this.rounds.push(firstMove);
      tmpEn_hp = tmpEn_hp - firstMove.damage;
      if (tmpEn_hp > 0)
      {
        var secondMove = makeMove(this.enemyAtk[i], this.defences[i], false);
        this.rounds.push(secondMove);
        tmpHp = tmpHp - secondMove.damage;
      }
      i++;
    }
  }

  nextRound(): void{
    if (this.fightFinished)
      return;
    var round = this.rounds[this.roundsToRender.length];
    this.roundsToRender.push(round);
    this.updateHp(round.attacker, round.damage);
    if (this.roundsToRender.length == 12 || this.hp <= 0 || this.en_hp <= 0)
    {
      this.fightFinished = true;
      if (this.hp > this.en_hp)
      {
        this.verdict = "You won!";
      }
      else if (this.hp == this.en_hp)
      {
        this.verdict = "It's a draw!";
      }
      else
      {
        this.verdict = "You lost!";
      }
    }
  }

}
