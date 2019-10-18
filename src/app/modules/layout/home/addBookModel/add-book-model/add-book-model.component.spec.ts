import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookModelComponent } from './add-book-model.component';

describe('AddBookModelComponent', () => {
  let component: AddBookModelComponent;
  let fixture: ComponentFixture<AddBookModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
