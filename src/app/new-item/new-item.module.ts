import { newItemRouting } from './new-item.routing';
import { MediaItemFormComponent } from './media-item-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MediaItemFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    newItemRouting
  ]
})
export class NewItemModule { }
