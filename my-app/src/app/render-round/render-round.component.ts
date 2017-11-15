import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Category, Skill } from '../skills';
import { Round } from '../round';

@Component({
  selector: 'app-render-round',
  templateUrl: './render-round.component.html',
  styleUrls: ['./render-round.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderRoundComponent implements OnInit {

  @Input() round : Round;

  constructor() { }

  ngOnInit() {
  }

}
