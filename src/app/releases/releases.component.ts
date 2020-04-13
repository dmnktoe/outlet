import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ReleasesService } from './releases.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss'],
})
export class ReleasesComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private releasesService: ReleasesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.releasesService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
