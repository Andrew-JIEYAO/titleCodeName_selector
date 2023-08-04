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
  visible1: boolean = false;
  visible2: boolean = false;

  menu1: Menu = {
    title: '醫生姓氏',
    subTitle: '醫生',
    titleCodeNames: [
      {
        "title": "王",
        "codeNames": [
          {
            "code": "456",
            "name": "王大勇"
          },
          {
            "code": "234",
            "name": "王小華"
          }
        ]
      },
      {
        "title": "李",
        "codeNames": [
          {
            "code": "987",
            "name": "李小蓮"
          },
          {
            "code": "654",
            "name": "李大雄"
          }
        ]
      },
      {
        "title": "張",
        "codeNames": [
          {
            "code": "345",
            "name": "張小芳"
          },
          {
            "code": "876",
            "name": "張大明"
          }
        ]
      },
      {
        "title": "陳",
        "codeNames": [
          {
            "code": "876",
            "name": "陳小蓮"
          },
          {
            "code": "987",
            "name": "陳大鵬"
          }
        ]
      },
      {
        "title": "林",
        "codeNames": [
          {
            "code": "567",
            "name": "林小紅"
          },
          {
            "code": "543",
            "name": "林阿豪"
          }
        ]
      },
      {
        "title": "吳",
        "codeNames": [
          {
            "code": "654",
            "name": "吳小薇"
          },
          {
            "code": "234",
            "name": "吳大山"
          }
        ]
      },
      {
        "title": "周",
        "codeNames": [
          {
            "code": "654",
            "name": "周大島"
          },
          {
            "code": "987",
            "name": "周小倩"
          }
        ]
      },
      {
        "title": "蔡",
        "codeNames": [
          {
            "code": "543",
            "name": "蔡小華"
          },
          {
            "code": "654",
            "name": "蔡大勇"
          }
        ]
      },
      {
        "title": "楊",
        "codeNames": [
          {
            "code": "987",
            "name": "楊大雄"
          },
          {
            "code": "234",
            "name": "楊小蓮"
          }
        ]
      },
      {
        "title": "劉",
        "codeNames": [
          {
            "code": "234",
            "name": "劉小芳"
          },
          {
            "code": "876",
            "name": "劉大明"
          }
        ]
      },
      {
        "title": "葉",
        "codeNames": [
          {
            "code": "876",
            "name": "葉小芳"
          },
          {
            "code": "234",
            "name": "葉大明"
          }
        ]
      },
      {
        "title": "呂",
        "codeNames": [
          {
            "code": "567",
            "name": "呂大島"
          },
          {
            "code": "543",
            "name": "呂小琳"
          }
        ]
      },
      {
        "title": "江",
        "codeNames": [
          {
            "code": "234",
            "name": "江大勇"
          },
          {
            "code": "876",
            "name": "江小薇"
          }
        ]
      },
      {
        "title": "許",
        "codeNames": [
          {
            "code": "987",
            "name": "許小島"
          },
          {
            "code": "234",
            "name": "許大琳"
          }
        ]
      },
      {
        "title": "徐",
        "codeNames": [
          {
            "code": "654",
            "name": "徐小山"
          },
          {
            "code": "234",
            "name": "徐大紅"
          }
        ]
      },
      {
        "title": "鄭",
        "codeNames": [
          {
            "code": "876",
            "name": "鄭小蓮"
          },
          {
            "code": "543",
            "name": "鄭大山"
          }
        ]
      },
      {
        "title": "黃",
        "codeNames": [
          {
            "code": "654",
            "name": "黃小芳"
          },
          {
            "code": "987",
            "name": "黃大雄"
          }
        ]
      }
    ]
  }

  menu2: Menu = {
    title: '科別',
    subTitle: '醫師',
    titleCodeNames: [
      {
        "title": "泌尿科",
        "codeNames": [
          {
            "code": "654",
            "name": "徐小山"
          },
          {
            "code": "234",
            "name": "林榮山"
          },
          {
            "code": "673",
            "name": "李翊豪"
          },
          {
            "code": "897",
            "name": "黃英修"
          },
          {
            "code": "222",
            "name": "許文鈺"
          },
          {
            "code": "436",
            "name": "孫一民"
          }
        ]
      },
      {
        "title": "骨科",
        "codeNames": [
          {
            "code": "876",
            "name": "鄭小蓮"
          },
          {
            "code": "654",
            "name": "黃小芳"
          },
          {
            "code": "543",
            "name": "宋一心"
          },
          {
            "code": "987",
            "name": "黃世雄"
          }
        ]
      },
      {
        "title": "內科",
        "codeNames": [
          {
            "code": "234",
            "name": "張小明"
          },
          {
            "code": "876",
            "name": "吳大華"
          },
          {
            "code": "345",
            "name": "李小蓮"
          },
          {
            "code": "987",
            "name": "王大勇"
          },
          {
            "code": "543",
            "name": "林小芳"
          },
          {
            "code": "234",
            "name": "陳阿飛"
          }
        ]
      },
      {
        "title": "眼科",
        "codeNames": [
          {
            "code": "567",
            "name": "許小芳"
          },
          {
            "code": "234",
            "name": "李大勇"
          },
          {
            "code": "543",
            "name": "黃小蓮"
          },
          {
            "code": "654",
            "name": "徐大明"
          },
          {
            "code": "876",
            "name": "鄭小明"
          },
          {
            "code": "987",
            "name": "劉小華"
          }
        ]
      },
      {
        "title": "耳鼻喉科",
        "codeNames": [
          {
            "code": "234",
            "name": "陳小明"
          },
          {
            "code": "567",
            "name": "葉小芳"
          },
          {
            "code": "234",
            "name": "黃大明"
          },
          {
            "code": "654",
            "name": "蔡小蓮"
          },
          {
            "code": "543",
            "name": "楊大雄"
          },
          {
            "code": "876",
            "name": "李小芳"
          }
        ]
      },
      {
        "title": "外科",
        "codeNames": [
          {
            "code": "654",
            "name": "黃大華"
          },
          {
            "code": "234",
            "name": "王小明"
          },
          {
            "code": "543",
            "name": "林小蓮"
          },
          {
            "code": "876",
            "name": "吳大勇"
          },
          {
            "code": "234",
            "name": "張小芳"
          },
          {
            "code": "987",
            "name": "陳大明"
          }
        ]
      },
      {
        "title": "心臟科",
        "codeNames": [
          {
            "code": "234",
            "name": "陳小華"
          },
          {
            "code": "567",
            "name": "蔡大勇"
          },
          {
            "code": "234",
            "name": "黃小明"
          },
          {
            "code": "654",
            "name": "劉小芳"
          },
          {
            "code": "543",
            "name": "楊大華"
          },
          {
            "code": "876",
            "name": "李小蓮"
          }
        ]
      },
      {
        "title": "口腔科",
        "codeNames": [
          {
            "code": "654",
            "name": "蔡大明"
          },
          {
            "code": "234",
            "name": "陳小蓮"
          },
          {
            "code": "876",
            "name": "鄭小芳"
          },
          {
            "code": "543",
            "name": "楊大勇"
          },
          {
            "code": "654",
            "name": "葉小明"
          },
          {
            "code": "234",
            "name": "黃大雄"
          }
        ]
      },
      {
        "title": "皮膚科",
        "codeNames": [
          {
            "code": "654",
            "name": "劉小華"
          },
          {
            "code": "234",
            "name": "陳小明"
          },
          {
            "code": "543",
            "name": "楊大雄"
          },
          {
            "code": "234",
            "name": "黃小蓮"
          },
          {
            "code": "876",
            "name": "鄭小明"
          },
          {
            "code": "987",
            "name": "黃小華"
          }
        ]
      },
      {
        "title": "婦產科",
        "codeNames": [
          {
            "code": "234",
            "name": "陳小華"
          },
          {
            "code": "567",
            "name": "葉大勇"
          },
          {
            "code": "234",
            "name": "黃小蓮"
          },
          {
            "code": "654",
            "name": "徐大雄"
          },
          {
            "code": "543",
            "name": "宋小華"
          },
          {
            "code": "876",
            "name": "鄭小蓮"
          }
        ]
      },
      {
        "title": "精神科",
        "codeNames": [
          {
            "code": "876",
            "name": "鄭小華"
          },
          {
            "code": "234",
            "name": "陳小蓮"
          },
          {
            "code": "543",
            "name": "宋小華"
          },
          {
            "code": "234",
            "name": "黃小蓮"
          },
          {
            "code": "654",
            "name": "徐大雄"
          },
          {
            "code": "876",
            "name": "李小芳"
          }
        ]
      }
    ]
  }

  showDialog1() {
    this.visible1 = true;
    this.visible2 = false;
  }
  showDialog2() {
    this.visible1 = false;
    this.visible2 = true;
  }
}
