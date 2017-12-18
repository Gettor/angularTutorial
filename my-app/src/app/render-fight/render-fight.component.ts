import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Round } from '../round';
import { Fight } from '../fight';

import { RenderRoundComponent } from '../render-round/render-round.component'

function delay(ms: number) {
    return new Promise<void>(function(resolve) {
        setTimeout(resolve, ms);
    });
}

@Component({
  selector: 'app-render-fight',
  templateUrl: './render-fight.component.html',
  styleUrls: ['./render-fight.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderFightComponent implements OnInit {

  @Input() fight : Fight;
  private my_hp : number;
  private en_hp : number;
  private renderDone : boolean = false;
  private renderedRounds : Round[] = [];
  private verdict : string;

  constructor() { }

  ngOnInit() {
    this.my_hp = this.fight.my_hp;
    this.en_hp = this.fight.en_hp;
    this.render();
  }

  async render() {
    while (!this.renderDone)
    {
      await delay(1000);
      this.nextRound();
    }

  }

  // who == true ? me : him (who was attacking)
  updateHp(who: boolean, hit: number): void {
    var barName = "his-bar"
    var hitName = "his-hit"
    if (!who)
    {
      barName = "my-bar"
      hitName = "my-hit"
    }
    var myBar = document.getElementById(barName);
    var myHit = document.getElementById(hitName);

    if (!who)
    {
      var newValue = this.my_hp - hit;
      var barWidth = (newValue / this.fight.my_hp) * 100 + "%";
      var hitWidth = (hit / this.my_hp) * 100 + "%";
      myHit.style.width = hitWidth;
      setTimeout(function(){
        myHit.style.width = "0";
        myBar.style.width = barWidth;
      }, 500);
      this.my_hp = newValue;
    }
    else
    {
      var newValue = this.en_hp - hit;
      var barWidth = (newValue / this.fight.en_hp) * 100 + "%";
      var hitWidth = (hit / this.en_hp) * 100 + "%";
      myHit.style.width = hitWidth;
      setTimeout(function(){
        myHit.style.width = "0";
        myBar.style.width = barWidth;
      }, 500);
      this.en_hp = newValue;
    }
  }

  nextRound(): void{
    var round = this.fight.rounds[this.renderedRounds.length];
    this.renderedRounds.push(round);
    this.updateHp(round.attacker, round.damage);
    if (this.renderedRounds.length == 12 || this.my_hp <= 0 || this.en_hp <= 0)
    {
      this.renderDone = true;
      this.verdict = this.fight.verdict;
    }
  }

}
