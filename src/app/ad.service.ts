import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { ClassificationType } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new ClassificationType(HeroProfileComponent, {
        text: 'CUIO',
      }),
      new ClassificationType(HeroProfileComponent, {
        text: 'TOp Secret',
      }),
      new ClassificationType(HeroJobAdComponent, {
        text: 'Foreign',
      }),
      new ClassificationType(HeroJobAdComponent, {
        text: 'TSCI',
      }),
    ];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
