import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateGeneratorComponent } from './date-generator.component';

describe('DateGeneratorComponent', () => {
  let component: DateGeneratorComponent;
  let fixture: ComponentFixture<DateGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
