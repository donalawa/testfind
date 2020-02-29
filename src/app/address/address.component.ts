import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {
  isLinear = true;
  lat = 40.730610;
  lng = -73.935242;
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: any;

  labelPosition: 'before' | 'after' = 'after';
  single_floor: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
 

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
     console.log(this.labelPosition);
     this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  floor_level() {
    this.single_floor = !this.single_floor;
    console.log(this.single_floor);
  }

  getCoordinates(){
    function locate(){
      navigator.geolocation.getCurrentPosition(location =>{
        console.log(location)
     })   
    }
    
    
  }

}
