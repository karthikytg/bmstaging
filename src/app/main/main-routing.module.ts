import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'launch',
    loadChildren: () => import('./launch/launch.module').then(m => m.LaunchModule)
  },
  {
    path: 'bid-place',
    loadChildren: () => import('./bidplace/bidplace.module').then(m => m.BidplaceModule)
  },
  {
    path: 'bid-daily',
    loadChildren: () => import('./daily/daily.module').then(m => m.DailyModule)
  },
  {
    path: 'bid-getin',
    loadChildren: () => import('./bid-getin/bid-getin.module').then(m => m.BidGetinModule)
  },
  {
    path: 'bid-premium',
    loadChildren: () => import('./premium/premium.module').then(m => m.PremiumModule)
  },
  {
    path: 'bid-premium-prod',
    loadChildren: () => import('./premium-product/premium-product.module').then(m => m.PremiumProductModule)
  },
  {
    path: 'passes',
    loadChildren: () => import('./passes/passes.module').then(m => m.PassesModule)
  },
  {
    path: 'winner',
    loadChildren: () => import('./winner/winner.module').then(m => m.WinnerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
