import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedsTabComponent } from './user-feeds-tab.component';

describe('UserFeedsTabComponent', () => {
  let component: UserFeedsTabComponent;
  let fixture: ComponentFixture<UserFeedsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFeedsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
