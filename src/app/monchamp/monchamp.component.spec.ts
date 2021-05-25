import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonchampComponent } from './monchamp.component';

describe('MonchampComponent', () => {
  let component: MonchampComponent;
  let fixture: ComponentFixture<MonchampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonchampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonchampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
