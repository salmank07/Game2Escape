import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LeaderBComponent } from './account/myprofile/leaderb.component';
import { FolderPage } from './folder/folder.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Mypage',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'account',
    component: AccountComponent,
    pathMatch: 'full'
  },
  {
    path: 'game',
    component: FolderPage,
    pathMatch: 'full'
  },  
  {
    path: 'leaderb',
    component: LeaderBComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
