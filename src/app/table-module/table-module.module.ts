import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UpdateUserComponent } from './table/update-user/update-user.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AddUserComponent } from './table/add-user/add-user.component';
import { UserDetailsComponent } from './table/user-details/user-details.component';
@NgModule({
  declarations: [
  
    TableComponent,
    UpdateUserComponent,
    AddUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class TableModuleModule { }
