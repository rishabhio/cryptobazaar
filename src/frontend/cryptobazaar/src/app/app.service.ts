import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  token:string = '';
  constructor( private http: HttpClient ) {
    this.token = '';
   }

   startAuth : any = () => {
     var self = this; 
     return new Promise((resolve, reject) => {
       var url = 'https://www.coinbase.com/oauth/authorize?client_id=YOUR_CLIENT_IDd&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=wallet%3Auser%3Aread+wallet%3Aaccounts%3Aread';
       var name = 'CryptoBazaar';
       var params = 'width=800,height=600';
       var popup = window.open(url , name , params ); 
       window.addEventListener('message' , (msg) => {
         if(msg.data) {
            self.setToken(msg.data); 
            resolve(true); 
         }
         else {
           reject(false);
         }
       })
     })
   }



  setToken = (token) => {
    this.token = token; 
  }


  getToken = () => {
    return this.token; 
  }

    getUser: any = () => {
      return new Promise( ( resolve , reject ) => {
        this.http.get('http://localhost:3000/user?token='+this.getToken()).subscribe(data => {
          console.log(data); 
          resolve(data); 
        })
      });
    }

    getAccounts: any = () => {
      return new Promise( (resolve , reject) => {
        this.http.get('http://localhost:3000/accounts?token='+this.getToken()).subscribe(data => {
          console.log(data); 
          resolve(data); 
        })
      })
    }



}
