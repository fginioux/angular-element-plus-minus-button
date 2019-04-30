import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { PlusMinusButtonComponent } from './plus-minus-button/plus-minus-button.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PlusMinusButtonComponent],
  imports: [BrowserModule],
  entryComponents: [PlusMinusButtonComponent]
})
export class AppModule { 
  constructor (private injector: Injector) {}

  ngDoBootstrap() {
    const cpn = createCustomElement(PlusMinusButtonComponent, { injector: this.injector });
    customElements.define('plus-minus-button-component', cpn);
  }
}
