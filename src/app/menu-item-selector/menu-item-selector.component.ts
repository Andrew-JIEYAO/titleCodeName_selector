import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from './menuitem.interface';

// interface CodeName {
//   code: string;
//   name: string;
// }

// interface DataItem {
//   title: string;
//   codeName: CodeName[];
// }

@Component({
  selector: 'his-menu-item-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-selector.component.html',
  styleUrls: ['./menu-item-selector.component.scss']
})
export class MenuItemSelectorComponent implements OnInit {

  @Input() menuItems = {} as MenuItem[];
  processedMenuItems = {} as MenuItem[];

  selectedMenu?: string;
  selectedCode?: string | null;

  ngOnInit(): void {
    this.processedMenuItems = this.menuItems;
  }

  onSelectMenu(menu?: string) {
    this.selectedMenu = menu;
    this.selectedCode = null; // Reset the selected code when a new title is selected
  }

  onSelectItem(item?: any) {
    this.selectedCode = item.code;
  }

  getItemsByMenu(menu?: string): any {
    const menuItem = this.processedMenuItems.find(menuItem => menuItem.menu== menu) || this.processedMenuItems[0];
    return menuItem ? menuItem.items : [];
  }
}
