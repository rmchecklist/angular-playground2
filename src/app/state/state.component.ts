import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-state',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent implements OnInit, OnDestroy {

  appService = inject(AppService);
  countries$!: Observable<any>;
  
  ngOnInit(): void {
    console.log('State component initialized');
    this.countries$ = this.appService.getCountries();
  }

  ngOnDestroy(): void {
    console.log('State component destroyed');
  }
}
