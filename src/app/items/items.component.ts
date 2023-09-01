import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { Items } from "../list/item.model";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatIconModule, MatButtonModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  editable = false;
  showMessage: boolean = false;
  messageText: string = '';

  @Input() item: Items;
  @Input() itemsList!: Items[];
  @Output() deleteItem = new EventEmitter<Items>();
  @Output() selectTodo = new EventEmitter<Items>();
  
  showMessageForDuration(message: string, duration: number) {
    this.showMessage = true;
    this.messageText = message;

    setTimeout(() => {
      this.closeMessage();
    }, duration);
  }
  closeMessage() {
    this.showMessage = false;
    this.messageText = '';
  }

  constructor() {
    this.item = {} as Items; 
  } 

  saveItem(newTodoName: string, indexToUpdate: number) {
    if (!newTodoName || newTodoName.trim() === '') {
      this.showMessageForDuration("Todo name cannot be empty.", 5000);
      return;
    }

    if (newTodoName.length > 38) {
      this.showMessageForDuration("Todo name should be 38 characters or less.", 5000);
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
