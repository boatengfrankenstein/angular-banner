import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { ClassificationType } from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <banner [classification]="ads"></banner>
      Hello EveryOne
      <banner [classification]="ads"></banner>
    </div>
  `,
})
export class AppComponent implements OnInit {
  ads: ClassificationType[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
