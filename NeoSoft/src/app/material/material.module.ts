import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
   Material.MatButtonModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
  ],
  exports: [
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatButtonModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
  ]
})
export class MaterialModule { }
