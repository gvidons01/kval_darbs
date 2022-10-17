import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadbikesComponent } from './quadbikes.component';

describe('QuadbikesComponent', () => {
  let component: QuadbikesComponent;
  let fixture: ComponentFixture<QuadbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadbikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
