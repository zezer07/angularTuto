import { Subject } from 'rxjs/Subject';
import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();
  static val : number =0

   private appareils = [];

constructor(private httpClient: HttpClient) { }



saveAppareilsToServer() {
  this.httpClient
    .put('https://ecstatic-effort-316713-default-rtdb.firebaseio.com/appareils.json', this.appareils)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

getAppareilsFromServer() {
  this.httpClient
    .get<any[]>('https://ecstatic-effort-316713-default-rtdb.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        AppareilService.val = response.length;
        this.emitAppareilSubject();

      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

addAppareil(name: string, status: string) {

  
  const appareilObject = {
    id: 0 ,
    name: '',
    status: ''
  };

  appareilObject.id = AppareilService.val
  appareilObject.name = name;
  appareilObject.status = status;
  this.appareils.push(appareilObject);
  this.emitAppareilSubject();
}

emitAppareilSubject() {
  this.appareilsSubject.next(this.appareils.slice());
}

getAppareilById(id: number) {
  const appareil = this.appareils.find(ap=>ap.id===id)
  return appareil;
    
}

      switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
        }

        this.emitAppareilSubject();
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }

        this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
    }
    
    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();
    }
    

}