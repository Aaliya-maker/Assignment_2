import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {


  sharedData: any[] = [];
  allData: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.sharedData = this.dataService.sharedData;
    this.allData.push(this.sharedData);
    console.log(this.sharedData);
  }

}
