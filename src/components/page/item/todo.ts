import { BaseComponent } from '../../component.js';

// BaseComponent를 상속하고, 사용하고 싶은 HTMLString을 constructor에 전달할 수 있고
// 필요한 title과 body를 업데이트 해줌
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
            <h2 class="todo__title"></h2>
            <input type="checkbox" class="todo-checkbox">
          </section>`)
    
    // 생성자를 통해 부모클래스에서 this.element를 만들면
    // 만들어진 다음에 밑에서 필요한 data를 update
    const titleElement = this.element.querySelector('.todo__title')! as HTMLHeadElement
    titleElement.textContent = title;
    
    const todoElement = this.element.querySelector('.todo-checkbox')! as HTMLInputElement
    todoElement.insertAdjacentText('afterend', todo)
  }
}