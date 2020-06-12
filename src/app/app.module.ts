import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomersModule} from './customers/customer.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
