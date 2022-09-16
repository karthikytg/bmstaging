import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'add-product/:cat/:id',
    loadChildren: () => import('./add-product/add-product.module').then(m => m.AddProductModule)
  },
  {
    path: 'up-tract-Info/:cat/:id',
    loadChildren: () => import('./update-track-info/update-track-info.module').then(m => m.UpdateTrackInfoModule)
  },
  {
    path: 'passes-admin',
    loadChildren: () => import('./passes-list/passes-list.module').then(m => m.PassesListModule)
  },
  {
    path: 'passes-manage/:cat/:id',
    loadChildren: () => import('./passes-manage/passes-manage.module').then(m => m.PassesManageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)
  },
  {
    path: 'user-info/:id',
    loadChildren: () => import('./user-info/user-info.module').then(m => m.UserInfoModule)
  },
  {
    path: 'ref-ad-list',
    loadChildren: () => import('./referrals-list/referrals-list.module').then(m => m.ReferralsListModule)
  },
  {
    path: 'ref-ad-manage/:type/:id',
    loadChildren: () => import('./referral-manage/referral-manage.module').then(m => m.ReferralManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
