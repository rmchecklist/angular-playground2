import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from '../app.service';
import { Observable} from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [RouterModule, NgFor, AsyncPipe],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    console.log('Country component destroyed');
  }
  appService = inject(AppService);
  countries$!: Observable<any>;
  ngOnInit(): void {
    console.log('Country component initialized');
    this.countries$ = this.appService.getCountries();
  }
}
