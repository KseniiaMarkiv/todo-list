import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


import { Items } from "./item.model";
import { ItemsComponent } from '../items/items.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCheckboxModule, MatButtonModule, MatChipsModule, MatIconModule, FormsModule, ReactiveFormsModule, ItemsComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  imagePath = 'assets/sheet-stick.png';

  filter: "all" | "todo" | "done" = "all";

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
    return this.allItems.filter(item => item.filter === 'todo').slice(0, this.maxItemsToShow);
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
      if (newTodoName.length > 38) {
        this.showMessageForDuration("Todo name should be 38 characters or less.", 5000);
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
      this.allItems[index].filter = 'done';
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
