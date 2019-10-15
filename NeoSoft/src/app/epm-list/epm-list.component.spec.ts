import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmListComponent } from './epm-list.component';

describe('EpmListComponent', () => {
  let component: EpmListComponent;
  let fixture: ComponentFixture<EpmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
