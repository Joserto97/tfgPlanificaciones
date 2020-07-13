import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnopanelComponent } from './alumnopanel.component';

describe('AlumnopanelComponent', () => {
  let component: AlumnopanelComponent;
  let fixture: ComponentFixture<AlumnopanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnopanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnopanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
