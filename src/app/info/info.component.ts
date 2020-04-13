import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
