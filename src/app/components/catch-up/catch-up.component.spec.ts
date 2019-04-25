import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchUpComponent } from './catch-up.component';

describe('CatchUpComponent', () => {
  let component: CatchUpComponent;
  let fixture: ComponentFixture<CatchUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
