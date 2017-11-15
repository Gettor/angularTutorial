import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderSkillComponent } from './render-skill.component';

describe('RenderSkillComponent', () => {
  let component: RenderSkillComponent;
  let fixture: ComponentFixture<RenderSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
