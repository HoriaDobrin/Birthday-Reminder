import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { TableModuleModule } from './table-module/table-module.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Services/user.service';
//import ('./table-module/table-module.module').then(m => m.TableModuleModule)
//import ('./auth-module/auth-module.module').then(m => m.AuthModuleModule)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModuleModule,
    TableModuleModule,
    HttpClientModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
