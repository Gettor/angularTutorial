import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderFightComponent } from './render-fight.component';

describe('RenderFightComponent', () => {
  let component: RenderFightComponent;
  let fixture: ComponentFixture<RenderFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
