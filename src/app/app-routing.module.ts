import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';


const routes: Routes = [
  { path: 'list', component: DeviceListComponent, pathMatch: 'full' },
  { path: 'add', component: TemplateFormComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
