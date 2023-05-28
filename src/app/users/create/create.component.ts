import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  inpName = '';
  email = '';
  mobile = '';
  gender = '';
  checkedTechnologies: string[] = [];
  category: string = '';
  fileData = '';
  // dataService: any;

  sharedData: any[] = [
    this.inpName,
    this.email,
    this.mobile,
    this.gender,
    this.category,
    this.checkedTechnologies,
    this.fileData,
  ];

  constructor(
    private modalService: NgbModal,
    private dataService: DataService
  ) {}

  updateSharedData() {
    this.dataService.sharedData = this.sharedData;
    console.log(this.sharedData);
  }

  open(content: any) {
    const modalRef = this.modalService.open(content, { backdrop: 'static' });
    modalRef.componentInstance.inpName = this.inpName;
    modalRef.componentInstance.email = this.email;
    modalRef.componentInstance.mobile = this.mobile;
    modalRef.componentInstance.gender = this.gender;
    modalRef.componentInstance.category = this.category;
    modalRef.componentInstance.technologies = this.checkedTechnologies;
    modalRef.componentInstance.fileData = this.fileData;
  }
}
