import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBlocksComponent } from './auth-blocks.component';

describe('AuthBlocksComponent', () => {
  let component: AuthBlocksComponent;
  let fixture: ComponentFixture<AuthBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
