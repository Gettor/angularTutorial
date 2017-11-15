import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillPickComponent } from './skill-pick/skill-pick.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { FightComponent } from './fight/fight.component';


const routes: Routes = [
  { path: 'fight', component: FightComponent },
  { path: 'skills', component: SkillPickComponent },
  { path: 'skill/:id', component: SkillDetailComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
