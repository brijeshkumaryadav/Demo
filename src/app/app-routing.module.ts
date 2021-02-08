import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { AftersaleComponent } from './aftersale/aftersale.component';
import { NewcomplaintComponent } from './newcomplaint/newcomplaint.component';
import { CostComponent } from './cost/cost.component';
import { NewinstallationComponent } from './newinstallation/newinstallation.component';

const routes: Routes = [
  {path:'basic',component:BasicdetailComponent},
  {path:'after',component:AftersaleComponent},
  {path:'new',component:NewcomplaintComponent},
  {path:'cost',component:CostComponent},
  {path:'installation',component:NewinstallationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent =[BasicdetailComponent, AftersaleComponent,NewcomplaintComponent,CostComponent,NewinstallationComponent]
