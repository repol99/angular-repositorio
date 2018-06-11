import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Http, Response} from '@angular/http'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}export class AppComponent {
  title = 'Indicadores economico en chile';
  dateInspect = '';
  valueUF = '';

  constructor(private http : Http){}

  seachIndicator(){
    this.http.get('https://mindicador.cl/api/uf/' + this.dateInspect)
    .subscribe(
      (res: Response)=> {
        const valueIndicator = res.json();
        console.log(valueIndicator);

        this.valueUF = valueIndicator['serie'][0]['valor'];
      }, err => {
        console.log('UPS!');
        console.log(err);
      }, () => {
        console.log('¡Servicio Finalizado!');
      }
    )
  }

}