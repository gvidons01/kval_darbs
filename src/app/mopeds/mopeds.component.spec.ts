import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MopedsComponent } from './mopeds.component';

describe('MopedsComponent', () => {
  let component: MopedsComponent;
  let fixture: ComponentFixture<MopedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MopedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MopedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
