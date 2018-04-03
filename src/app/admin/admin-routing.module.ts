import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "@admin/admin/admin.component";
import {AuthGuard} from "@auth/auth.guard"; //uso del guardian

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

