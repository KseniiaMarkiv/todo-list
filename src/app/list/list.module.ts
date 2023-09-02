import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, DialogContentExampleDialog } from './list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ItemsModule } from "../items/items.module";

@NgModule({
    declarations: [ListComponent, DialogContentExampleDialog],
    exports: [ListComponent, DialogContentExampleDialog],
    imports: [CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule, 
        ItemsModule]
})
export class ListModule {}

  