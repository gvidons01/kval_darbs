import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuggiesComponent } from './buggies.component';

describe('BuggiesComponent', () => {
  let component: BuggiesComponent;
  let fixture: ComponentFixture<BuggiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuggiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuggiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
