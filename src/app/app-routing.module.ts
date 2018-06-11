import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component'

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

export class AppRoutingModule { }
