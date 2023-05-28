import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router'; // Add this line
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [ // Add this line
  { path: 'create', component: CreateComponent }, // Add this line
  { path: 'view', component: ViewComponent } // Add this line
]; // Add this line


@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CreateComponent,
    ViewComponent
  ]
})
export class UsersModule { }
