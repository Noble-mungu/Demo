import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/core';

import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule],
  exports:[CustomerComponent]
})
export class CustomerModule { }
