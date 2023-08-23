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
    { todoName: "Grocery Shopping", filter: 'todo' },
    { todoName: "Work Tasks", filter: 'all' },
    { todoName: "Home Improvement", filter: 'done' },
    { todoName: "Self-Care and Health", filter: 'all' },
  ];
  
  filteredItems(): Items[] {
    if (this.filter === 'all') {
      return this.allItems;
    } else {
      return this.allItems.filter(item => item.filter === this.filter);
    }
  }
  addTodo(newTodoName: string) {
    if (newTodoName.trim() !== '') {
      const newItem: Items = { todoName: newTodoName, filter: 'all' };
      this.allItems.push(newItem);
    } else {
      this.showMessageForDuration("Todo name cannot be empty.", 5000); 
    }
  }
  deleteTodo(todo: Items) {
    const index = this.allItems.indexOf(todo);
    if (index !== -1) {
      this.allItems.splice(index, 1);
    }
  }

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

  toggleInputField() {
    this.showInputField = !this.showInputField;
    if (!this.showInputField) {
      this.newTodoName = '';
    }
  }
}
