import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Olympics } from 'src/app/core/models/Olympics';
import { Participations } from 'src/app/core/models/Participations';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<any> = of(null);

  public totalCountries!:number;

  public totalMedals!:any[];

  public items = ["java", "angular", "html", "css"];

  public ItemsObjects = [
    {
      "id" : 1,
      "colors" : "red",
    },
    {
      "id" : 2,
      "colors" : "green",
    }
  ]

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.olympicService.getOlympics().subscribe ((datas:Olympics[])=>{
      this.totalCountries=datas.length;
      datas.map((olympic:Olympics)=>{
        {
          name:olympic.country;
          value:1
        }
      })
    })

  }
  private calcMedals(olympic:Olympics):number{
    return 0;
  }
}
