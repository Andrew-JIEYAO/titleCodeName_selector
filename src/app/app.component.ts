import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemSelectorComponent } from "./menu-item-selector/menu-item-selector.component";
import { Menu } from './menu-item-selector/menu';
import { ButtonModule } from 'primeng/button';

import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, MenuItemSelectorComponent, ButtonModule, DialogModule]
})
export class AppComponent {
  title = 'hisSelector';
  visible: boolean = false;

  menu: Menu = {
    title: '醫生姓氏',
    subTitle: '醫生',
    titleCodeNames: [
      {
        title: "王",
        codeNames: [
          {
            code: "123",
            name: "王小華"
          },
          {
            code: "765",
            name: "王小明"
          }
        ]
      },
      {
        title: "林",
        codeNames: [
          {
            code: "872",
            name: "林阿花"
          },
          {
            code: "449",
            name: "林小美"
          }
        ]
      },
      {
        title: "陳",
        codeNames: [
          {
            code: "546",
            name: "陳大鵬"
          },
          {
            code: "234",
            name: "陳小蓮"
          }
        ]
      },
      {
        title: "張",
        codeNames: [
          {
            code: "987",
            name: "張大明"
          },
          {
            code: "456",
            name: "張小芳"
          }
        ]
      },
      {
        title: "李",
        codeNames: [
          {
            code: "346",
            name: "李大山"
          },
          {
            code: "756",
            name: "李小強"
          }
        ]
      },
      {
        title: "黃",
        codeNames: [
          {
            code: "187",
            name: "黃小雯"
          },
          {
            code: "567",
            name: "黃阿忠"
          }
        ]
      },
      {
        title: "劉",
        codeNames: [
          {
            code: "198",
            name: "劉小娟"
          },
          {
            code: "312",
            name: "劉阿輝"
          }
        ]
      },
      {
        title: "吳",
        codeNames: [
          {
            code: "453",
            name: "吳小芬"
          },
          {
            code: "756",
            name: "吳阿偉"
          }
        ]
      },
      {
        title: "蔡",
        codeNames: [
          {
            code: "234",
            name: "蔡小英"
          },
          {
            code: "768",
            name: "蔡大翔"
          }
        ]
      },
      {
        title: "楊",
        codeNames: [
          {
            code: "876",
            name: "楊小琳"
          },
          {
            code: "234",
            name: "楊阿福"
          }
        ]
      }
    ]
  }

  showDialog() {
    this.visible = true;
  }
}
