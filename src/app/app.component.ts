import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemSelectorComponent } from "./menu-item-selector/menu-item-selector.component";
import { MenuItem } from './menu-item-selector/menuitem.interface';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, MenuItemSelectorComponent]
})
export class AppComponent {
  title = 'hisSelector';

  items: MenuItem[] = [
    {
      menu: "王",
      items: [
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
      menu: "林",
      items: [
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
      menu: "陳",
      items: [
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
      menu: "張",
      items: [
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
      menu: "李",
      items: [
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
      menu: "黃",
      items: [
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
      menu: "劉",
      items: [
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
      menu: "吳",
      items: [
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
      menu: "蔡",
      items: [
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
      menu: "楊",
      items: [
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
  ];
}
