import { Component, OnInit } from '@angular/core';
import { SafePipe } from './safePipe';
import { StoreService} from './store.service';

interface data{
  obj:Object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'web-app';
    data:string;
    placeholder = undefined;
    navbar:any = [];
    
    constructor(public store: StoreService){
      this.data = 'karlson';
  }
 

  ngOnInit(){
    // setInterval()
    this.navbar
     this.store.navdata().subscribe(
      data =>
     {
      
       this.navbar = data;
       console.log(data)
     } 
      )
  }
}
