import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';


import { Items } from "./item.model";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatCheckboxModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
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

}
