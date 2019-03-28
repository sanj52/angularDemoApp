import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { DemoComponent } from './demo/demo.component';
import { ModulesComponent } from './demo/modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    DemoComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
