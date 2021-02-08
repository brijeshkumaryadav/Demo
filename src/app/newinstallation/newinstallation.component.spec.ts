import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinstallationComponent } from './newinstallation.component';

describe('NewinstallationComponent', () => {
  let component: NewinstallationComponent;
  let fixture: ComponentFixture<NewinstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
