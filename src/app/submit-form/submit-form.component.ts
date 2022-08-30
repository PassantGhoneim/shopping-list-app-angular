import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(element:ElementRef){
    alert("your order is Confirmed!")
    console.log(element);
    

  }

}
