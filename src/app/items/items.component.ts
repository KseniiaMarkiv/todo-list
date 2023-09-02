import { Component, Input, EventEmitter, Output  } from '@angular/core';

import { Items } from "../list/item.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  editable = false;
  showMessage: boolean = false;
  messageText: string = '';

  @Input() item!: Items;
  @Input() itemsList!: Items[];
  @Output() deleteItem = new EventEmitter<Items>();
  @Output() selectTodo = new EventEmitter<Items>();
  @Output() showMessageForDurationEvent = new EventEmitter<{ message: string, duration?: number }>();
  @Output() closeMessageEvent = new EventEmitter<void>();


  saveItem(newTodoName: string, indexToUpdate: number) {
    if (!newTodoName || newTodoName.trim() === '') {
      this.showMessageForDurationEvent.emit({message: "Todo name cannot be empty.", duration: 5000});
      return;
    }

    if (newTodoName.length > 38) {
      this.showMessageForDurationEvent.emit({ message: "Todo name should be 38 characters or less.", duration: 5000});
      return;
    }

    if (indexToUpdate >= 0 && indexToUpdate < this.itemsList.length) {
      this.itemsList[indexToUpdate].todoName = newTodoName;
      this.editable = false;
    } else {
      console.error("Invalid indexToUpdate.");
    }
  }

  deleteTodo() {
    this.deleteItem.emit(this.item);
  }

}
