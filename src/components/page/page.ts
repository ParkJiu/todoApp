import { BaseComponent,Component } from './../component.js';

// Composable: 여러가지를 모아서 조립하고 묶을 수 있는 아이템 -> 다른 요소들을 함께 조립할 수 있음
export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new(): SectionContainer;
}
// 무조건 close가 가능하도록 규격하는 class
export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body">
              <div class="page-item__controls">
                <button class="close">X</button>
              </div>
            </section>
          </li>`)
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement; // type assertion
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    }

  }
    // 외부에서 어떤 아이템을 전달하냐에 따라 섹션 안에 추가해줄 수 있는 api
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container)
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>')
  }
  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    })
  }
}
