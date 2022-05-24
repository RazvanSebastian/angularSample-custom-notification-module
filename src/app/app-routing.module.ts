import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstDummyComponent } from './first-dummy/first-dummy.component';
import { SecondDummyComponent } from './second-dummy/second-dummy.component';

const ROUTES: Routes = [

  {
    path: 'first-dummy',
    component: FirstDummyComponent
  },
  {
    path: 'second-dummy',
    component: SecondDummyComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "first-dummy"
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
