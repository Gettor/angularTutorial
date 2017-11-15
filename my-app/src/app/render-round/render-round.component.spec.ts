import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderRoundComponent } from './render-round.component';

describe('RenderRoundComponent', () => {
  let component: RenderRoundComponent;
  let fixture: ComponentFixture<RenderRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
