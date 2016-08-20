import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, RouterConfig } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ANGULARCLASS_FORM_VALIDATOR_DIRECTIVES } from '@angularclass/form-validators';

import { About } from './about';

export const ROUTER_CONFIG = [
  { path: '', component: About, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    About,
    ...ANGULARCLASS_FORM_VALIDATOR_DIRECTIVES
  ],
  imports: [
    // Components / Directives/ Pipes
    RouterModule.forChild(ROUTER_CONFIG),
    FormsModule,
    BrowserModule
  ]
})
export default class AboutModule {
  static routes = ROUTER_CONFIG;
}

