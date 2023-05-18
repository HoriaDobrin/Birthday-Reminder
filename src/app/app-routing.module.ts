import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-module/login/login.component';
import { RegisterComponent } from './auth-module/register/register.component';
import { TableComponent } from './table-module/table/table.component';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { TableModuleModule } from './table-module/table-module.module';
const routes: Routes = [
  //{ path: 'login', loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule) },
  // { path: 'register', loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule) },
  // { path: 'dashboard', loadChildren: () => import('./table-module/table-module.module').then(m => m.TableModuleModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
