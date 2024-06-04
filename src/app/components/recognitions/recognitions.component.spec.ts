import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionsComponent } from './recognitions.component';

describe('RecognitionsComponent', () => {
  let component: RecognitionsComponent;
  let fixture: ComponentFixture<RecognitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecognitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
