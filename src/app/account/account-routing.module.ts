import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-acc',
    loadChildren: () => import('./myacount/myacount.module').then(m => m.MyacountModule)
  },
  {
    path: 'per-info',
    loadChildren: () => import('./personal-info/personal-info.module').then(m => m.PersonalInfoModule)
  },
  {
    path: 'active-pass',
    loadChildren: () => import('./active-passes/active-passes.module').then(m => m.ActivePassesModule)
  },
  {
    path: 'ref-ear',
    loadChildren: () => import('./refer-and-earn/refer-and-earn.module').then(m => m.ReferAndEarnModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
