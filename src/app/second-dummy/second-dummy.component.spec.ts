import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDummyComponent } from './second-dummy.component';

describe('SecondDummyComponent', () => {
  let component: SecondDummyComponent;
  let fixture: ComponentFixture<SecondDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
