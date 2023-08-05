import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrifleComponent } from './prifle.component';

describe('PrifleComponent', () => {
  let component: PrifleComponent;
  let fixture: ComponentFixture<PrifleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrifleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrifleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
