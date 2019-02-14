import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventPortletComponent } from './list-event-portlet.component';

describe('ListEventPortletComponent', () => {
  let component: ListEventPortletComponent;
  let fixture: ComponentFixture<ListEventPortletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEventPortletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventPortletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
