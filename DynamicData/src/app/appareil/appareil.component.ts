import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //permet de definir des proprietes personalisees
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }
  

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

}
