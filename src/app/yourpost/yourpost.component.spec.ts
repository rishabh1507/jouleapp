import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourpostComponent } from './yourpost.component';

describe('YourpostComponent', () => {
  let component: YourpostComponent;
  let fixture: ComponentFixture<YourpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
