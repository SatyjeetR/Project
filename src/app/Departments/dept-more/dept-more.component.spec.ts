import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptMoreComponent } from './dept-more.component';

describe('DeptMoreComponent', () => {
  let component: DeptMoreComponent;
  let fixture: ComponentFixture<DeptMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
