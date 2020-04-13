import { Component, OnInit } from '@angular/core';

import * as releases from './releases.json';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss'],
})
export class ReleasesComponent implements OnInit {
  releases: any = (releases as any).default;
  isLoading = false;

  constructor() {}

  ngOnInit() {}
}
