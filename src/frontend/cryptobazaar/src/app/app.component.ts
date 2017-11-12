import { Component } from '@angular/core';
// import the service class 
import { AppService } from './app.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [ AppService ]
})
export class AppComponent {
  title = 'crypto bazaar';
  
  isClassVisible = false; 
  name = '';
  account_id = '';
  account_name = '';
  constructor(private appService : AppService ) {
    
  }
  startAuth = () => {
    this.appService.startAuth()
      .then( ( args ) => {
        if(args == true) {
          
          this.isClassVisible = true; 
          this.renderHome(); 
        }
      })
 }



  renderHome = () => {
    this.appService.getUser()
      .then( (args) => {
        this.appService.getAccounts()
        .then( ( account ) => {
            this.name = args.data.name; 
            this.account_id = account.data[0].id;
            this.account_name = account.data[0].name;
        })
        
      })
  }

  logout = () => {
    this.isClassVisible = false; 
  }

}
