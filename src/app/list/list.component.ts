import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Items } from "./item.model";
import { ItemsComponent } from '../items/items.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  imagePath = 'assets/sheet-stick.png';

  constructor(public dialog: MatDialog) {}

  @Output() showMessageEvent = new EventEmitter<string>();
  @Output() closeMessageEvent = new EventEmitter<void>();

  filter: "all" | "todo" | "done" = "todo";

  newTodoName: string = '';
  showMessage: boolean = false;
  messageText: string = '';
  showInputField: boolean = false;

  allItems: Items[] = [
    { todoName: "Grocery Shopping", filter: 'all' && 'todo' },
    { todoName: "Work Tasks", filter: 'all' && 'todo' },
    { todoName: "Home Improvement", filter: 'all' && 'todo' },
    { todoName: "Self-Care and Health", filter: 'all' && 'todo' },
  ];
  maxItemsToShow = 4; 

  getDisplayedFilteredItems(): Items[] {
    if (this.filter === 'all') {
      return this.allItems.slice(0, this.maxItemsToShow);
    } else {
      return this.allItems.filter(item => item.filter === this.filter).slice(0, this.maxItemsToShow);
    }
  }
  getLenghtItems(): Items[] {
    return this.allItems.filter(item => item.filter === 'todo');
  }

  filteredItems(): Items[] {
    if (this.filter === 'all') {
      return this.allItems;
    } else {
      return this.allItems.filter(item => item.filter === this.filter);
    }
  }
  addTodo(newTodoName: string) {
    if (newTodoName.trim() !== '') {
      if (newTodoName.length > 33) {
        this.showMessageForDuration("Todo name should be 33 characters or less.", 5000);
      } else {
        const newItem: Items = { todoName: newTodoName, filter: 'all' && 'todo' };
        this.allItems.push(newItem);
      }
    } else {
      this.showMessageForDuration("Todo name cannot be empty.", 5000); 
    }
  }
  
  selectItem(item: Items) {  
    const index = this.allItems.indexOf(item);
    if (index !== -1) {
      if (this.filter === 'all' || this.filter === 'done') {
        const dialogRef = this.dialog.open(DialogContentExampleDialog, {
          width: '450px',
        });
  
        dialogRef.afterClosed().subscribe(result => {
          if (result === true) {
            this.deleteTodo(item);
          }
        });
      } else {
        this.allItems[index].filter = 'done';
      }
    }
  }

  deleteTodo(item: Items) {
    const index = this.allItems.indexOf(item);
    if (index !== -1) {
      this.allItems.splice(index, 1);
    }
  }

  showMessageForDuration(message: string, duration?: number) {
    this.showMessage = true;
    this.messageText = message;

    if (duration !== undefined) {
      setTimeout(() => {
        this.closeMessage();
      }, duration);
    }
  }

  closeMessage() {
    this.showMessage = false;
    this.messageText = '';
  }

  toggleInputField() {
    this.showInputField = !this.showInputField;
    if (!this.showInputField) {
      this.newTodoName = '';
    }
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

