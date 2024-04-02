import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBikeComponent } from './book-bike.component';

describe('BookBikeComponent', () => {
  let component: BookBikeComponent;
  let fixture: ComponentFixture<BookBikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookBikeComponent]
    });
    fixture = TestBed.createComponent(BookBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
