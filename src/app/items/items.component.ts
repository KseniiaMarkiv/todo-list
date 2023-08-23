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
  @Input() item: Items;
  @Output() deleteItem = new EventEmitter<Items>();

  constructor() {
    this.item = {} as Items; // Initialize with an empty object or an appropriate default value
  }
}
