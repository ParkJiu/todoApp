import { TodoComponent } from './components/page/item/todo.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { Component } from './components/component.js';
import { InputDialog, TextData } from './components/dialog/dialog.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';

type InputComponentConstructor<T = TextData & Component> = {
  new(): T;
}
class App {
  private readonly page: Component & Composable; //component이면서 addChild를 할 수 있는 요소
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<TextSectionInput>(
      '#new-todo',
      TextSectionInput,
      (input: TextSectionInput) =>
        new TodoComponent(input.title, input.body)
    )
  }
  // 나중에 다른 input을 만들 수도 있으므로 여기서 coupling 방지
  // MediaData | TextData 를 규격하고, Component를 구현한 아이를 받음
  private bindElementToDialog<T extends TextData & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>, 
    makeSection: (input: T) => Component // TextSectionInput 를 인자로 받아 Component를 만듦
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
      element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가 해준다
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      })
      
    })
  }
  
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
