import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-progress-bar',
  templateUrl: './stacked-progress-bar.component.html',
  styleUrls: ['./stacked-progress-bar.component.scss']
})
export class StackedProgressBarComponent implements OnInit {

  constructor() { }
  infoprogress:any;
  target:any;    
  completed:any;
  ngOnInit() {
    this.target=100;
    this.infoprogress={
      'label1':10.57,
      'label2':10.50,
      'label3':45.15
    }
    this.completed=this.infoprogress.label1+this.infoprogress.label2+this.infoprogress.label3;
  }

}
