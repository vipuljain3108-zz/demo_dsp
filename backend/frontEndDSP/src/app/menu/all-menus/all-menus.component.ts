import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';

export interface MenuData {
  name: string;
  url: string;
  sequence: string;
  active: Number
}

@Component({
  selector: 'app-all-menus',
  templateUrl: './all-menus.component.html',
  styleUrls: ['./all-menus.component.css']
})
export class AllMenusComponent implements OnInit {
  public roles = [
    { name: 'Admin' },
    { name: 'Employee' }
  ]

  id
  addMenu: FormGroup;
  submitted: boolean = false
  constructor(private fb: FormBuilder, private service: ServicesService) { }
  menuss
  ngOnInit() {
    this.addMenu = this.fb.group({
      menu_name: ['', Validators.required],
      url: ['', Validators.required],
      sequence: ['', Validators.required],
      role: ['', Validators.required],
      toggle: [false, Validators.required],
    })

    this.getAllMenus()
  }

  displayedColumns: string[] = ['name', 'url', 'sequence', 'active', 'Action'];
  dataSource: MatTableDataSource<MenuData>

  getAllMenus() {
    this.menuss = []
    this.service.getReq('admin/getAllMenus').subscribe((res) => {
      console.log(res['data'])
      this.menuss = res['data']
      this.menuss.map((val) => {
        if (val['isActive'] == 1) val['checked'] = true
        else val['checked'] = false
      })

      console.log(this.menuss);

      this.dataSource = new MatTableDataSource(this.menuss)
    })
  }


  toggleButton(id, toggle) {
    if(!toggle) toggle = 0
    let data = {
      id : id,
      tab_button : toggle
    }

    console.log(data);
    
    this.service.postReq('admin/editStatus', data).subscribe((values)=>{
      console.log(values)
    })
  }

  resetButton() {
    this.id = undefined
    this.addMenu.reset()
  }

  editMenu(id) {

    this.id = id
    let filteredValue = this.menuss.filter(data => {
      return data.id == id
    })[0]

    console.log(filteredValue);

    this.addMenu.patchValue({
      menu_name: filteredValue['menu_name'],
      url: filteredValue['url'],
      sequence: filteredValue['sequence'],
      role: filteredValue['role'],
      toggle: filteredValue['isActive'] || 0,
    })
  }

  Submit() {
    this.submitted = true
    console.log(this.addMenu.controls)
    if (this.addMenu.invalid) {
      return;
    }
    this.saveDetails(this.addMenu.value)
  }

  saveDetails(values) {
    let data = {
      menu_name: values.menu_name,
      url: values.url,
      sequence: values.sequence,
      role: values.role,
    }

    if (values.toggle) data['isActive'] = 1
    else data['isActive'] = 0

    if (this.id) data['id'] = this.id

    console.log(data);

    this.service.postReq('admin/createMenu', data).subscribe((res) => {
      console.log(res)
      this.ngOnInit()
    })
  }
}

