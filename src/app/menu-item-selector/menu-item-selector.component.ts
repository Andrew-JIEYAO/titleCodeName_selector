import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeName, Menu } from './menu';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'his-menu-item-selector',
  standalone: true,
  imports: [CommonModule, CardModule, SplitterModule, ButtonModule],
  templateUrl: './menu-item-selector.component.html',
  styleUrls: ['./menu-item-selector.component.scss']
})
export class MenuItemSelectorComponent {

  @Input() menu = {} as Menu;
  @Output() hide = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<string>();

  selectedTitle: string = '';
  selectedCode?: string;

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

  doConfirm() {
    const code = this.selectedCode;
    this.confirm.emit(code);
    this.doHide();
  }

  doCancelClick() {
    this.#cleanTitleCodeName();
    this.doHide();
  }

  doHide() {
    this.hide.emit();
  }

  #cleanTitleCodeName() {
    this.selectedTitle = '';
    this.selectedCode = undefined;
  }
}
