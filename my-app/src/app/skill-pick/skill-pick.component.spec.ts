import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPickComponent } from './skill-pick.component';

describe('SkillPickComponent', () => {
  let component: SkillPickComponent;
  let fixture: ComponentFixture<SkillPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
