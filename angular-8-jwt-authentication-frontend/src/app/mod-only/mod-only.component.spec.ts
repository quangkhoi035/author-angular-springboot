import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModOnlyComponent } from './mod-only.component';

describe('ModOnlyComponent', () => {
  let component: ModOnlyComponent;
  let fixture: ComponentFixture<ModOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
