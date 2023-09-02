import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ItemsComponent } from './items.component';

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ItemsComponent],
})
export class ItemsModule {}
