import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContdmComponent } from './contdm.component';

describe('ContdmComponent', () => {
  let component: ContdmComponent;
  let fixture: ComponentFixture<ContdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
