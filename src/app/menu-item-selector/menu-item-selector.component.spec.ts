import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemSelectorComponent } from './menu-item-selector.component';

describe('MenuItemSelectorComponent', () => {
  let component: MenuItemSelectorComponent;
  let fixture: ComponentFixture<MenuItemSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenuItemSelectorComponent]
    });
    fixture = TestBed.createComponent(MenuItemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
