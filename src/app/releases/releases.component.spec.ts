import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { ReleasesComponent } from './releases.component';
import { ReleasesService } from './releases.service';

describe('HomeComponent', () => {
  let component: ReleasesComponent;
  let fixture: ComponentFixture<ReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, Angulartics2Module.forRoot(), CoreModule, SharedModule, HttpClientTestingModule],
      declarations: [ReleasesComponent],
      providers: [ReleasesService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
