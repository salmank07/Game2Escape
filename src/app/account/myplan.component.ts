import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myplan',
  template: `
  <ion-content>
  <ion-label>
    <h1 style="padding: 7% 0 6% 5%; font-weight: 600; font-size: 24px;">
      My Plan
    </h1>
  </ion-label>  
<ion-list lines="none">
  <ion-item>
    <ion-label>Plan Details Here</ion-label>
  </ion-item>
  </ion-list>
  <ion-list lines="none">
  <ion-item>
    <ion-label>Plan Details Here</ion-label>
  </ion-item>
  </ion-list>
</ion-content>
  `,
  
})
export class MyPlanComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
