import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBookModalComponent } from './insert-book-modal.component';

describe('InsertBookModalComponent', () => {
  let component: InsertBookModalComponent;
  let fixture: ComponentFixture<InsertBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertBookModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
