import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmFromComponent } from './epm-from.component';

describe('EpmFromComponent', () => {
  let component: EpmFromComponent;
  let fixture: ComponentFixture<EpmFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
