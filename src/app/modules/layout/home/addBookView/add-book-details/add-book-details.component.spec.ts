import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookDetailsComponent } from './add-book-details.component';

describe('AddBookDetailsComponent', () => {
  let component: AddBookDetailsComponent;
  let fixture: ComponentFixture<AddBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
