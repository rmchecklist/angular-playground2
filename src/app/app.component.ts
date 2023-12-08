import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy, RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, HttpClientModule, RouterModule
  ],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  appService = inject(AppService);
  countries$!: Observable<any>;
  ngOnInit(): void {
    console.log('App component initialized');
    this.countries$ = this.appService.getCountries();
  }
  ngOnDestroy(): void {
    console.log('App component Destroyed');
  }
  title = 'angular-playground';
}
 