import { Component, OnInit } from '@angular/core';

import * as mixes from './mixes.json';

@Component({
  selector: 'app-mixes',
  templateUrl: './mixes.component.html',
  styleUrls: ['./mixes.component.scss'],
})
export class MixesComponent implements OnInit {
  mixes: any = (mixes as any).default;
  isLoading = false;

  constructor() {}

  ngOnInit() {}
}
