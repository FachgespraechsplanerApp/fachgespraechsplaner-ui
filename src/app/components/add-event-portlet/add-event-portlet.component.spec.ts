import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventPortletComponent } from './add-event-portlet.component';

describe('AddEventPortletComponent', () => {
  let component: AddEventPortletComponent;
  let fixture: ComponentFixture<AddEventPortletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventPortletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventPortletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
