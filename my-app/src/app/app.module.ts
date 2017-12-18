import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SkillPickComponent } from './skill-pick/skill-pick.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillService } from './skill.service';
import { AppRoutingModule } from './/app-routing.module';
import { FightComponent } from './fight/fight.component';
import { RenderSkillComponent } from './render-skill/render-skill.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { RenderRoundComponent } from './render-round/render-round.component';
import { RenderFightComponent } from './render-fight/render-fight.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillPickComponent,
    SkillDetailComponent,
    FightComponent,
    RenderSkillComponent,
    MessagesComponent,
    RenderRoundComponent,
    RenderFightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SkillService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
