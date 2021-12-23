import { Component, OnInit,Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service'

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //permet de definir des proprietes personalisees
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;

  
  constructor(private appareilService: AppareilService) { }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}
  
  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
}

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

}
