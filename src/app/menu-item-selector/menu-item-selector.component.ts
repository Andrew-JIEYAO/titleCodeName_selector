import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeName, Menu } from './menu';

@Component({
  selector: 'his-menu-item-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-selector.component.html',
  styleUrls: ['./menu-item-selector.component.scss']
})
export class MenuItemSelectorComponent implements OnInit {

  @Input() menu = {} as Menu;
  // originTitleCodeNames = {} as TitleCodeName[];
  title!: string;
  subTitle!: string;
  selectedTitle: string = '';
  selectedCode?: string;

  ngOnInit(): void {
    // this.originTitleCodeNames = this.menu.titleCodeNames.concat([]);
    this.title = this.menu.title || 'Main';
    this.subTitle = this.menu.subTitle || 'List';
  }

  onSelectTitle(title: string) {
    this.selectedTitle = title;
    this.selectedCode = '';
  }

  getCodeNamesByTitle(title: string): CodeName[] {
    const codeName = this.menu.titleCodeNames.find(i => i.title === title) || this.menu.titleCodeNames[0];
    return codeName ? codeName.codeNames : [];
  }

  onSelectCodeName(codeName: CodeName) {
    this.selectedCode = codeName.code;
  }
}
