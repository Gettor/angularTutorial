import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillPickComponent } from './skill-pick/skill-pick.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillService } from './skill.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SkillPickComponent,
    SkillDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
