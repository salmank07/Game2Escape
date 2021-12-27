import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { Fullview1Component } from './fullview1/fullview1.component';
import { Fullview2Component } from './fullview2/fullview2.component';
import { MyprofileComponent } from '../account/myprofile/myprofile.component';
import { AccountComponent } from '../account/account.component';
import { SubscriptionComponent } from '../account/subscription/subscription.component';
import { MyPlanComponent } from '../account/myplan.component';
import { Fullview3Component } from './fullview2/fullview3.component';
import { LeaderBComponent } from '../account/myprofile/leaderb.component';
import { SearchscreenComponent } from '../searchscreen/searchscreen.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
    
    
  ],
  
  declarations: [
    FolderPage,
    Fullview1Component,
    Fullview2Component,
    MyprofileComponent,
    AccountComponent,
    SubscriptionComponent,
    MyPlanComponent,
    Fullview3Component,
    LeaderBComponent,
    SearchscreenComponent
    
  ]
})
export class FolderPageModule {}
