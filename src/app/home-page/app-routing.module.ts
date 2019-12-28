import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessoriesComponent } from './accessories/accessories.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { OutletComponent } from './outlet/outlet.component';

const appRoutes: Routes = [
  {path: 'Accessories', component: AccessoriesComponent },
  {path: 'cars', component: GiftCardComponent},
  {path: 'not-found', component: OutletComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }