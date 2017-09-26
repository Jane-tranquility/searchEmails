import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameListsComponent } from './name-lists.component';

describe('NameListsComponent', () => {
  let component: NameListsComponent;
  let fixture: ComponentFixture<NameListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
