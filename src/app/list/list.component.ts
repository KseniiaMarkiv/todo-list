import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import { Items } from "./item.model";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatCheckboxModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  imagePath = 'assets/sheet-stick.png';

  filter: "all" | "todo" | "done" = "all";


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

  deleteTodo(todo: Items) {
    const index = this.allItems.indexOf(todo);
    if (index !== -1) {
      this.allItems.splice(index, 1);
    }
  }
}
