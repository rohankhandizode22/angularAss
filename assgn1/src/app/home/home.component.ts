import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postData: any;
  search = '';
  userData: any;
  myData:any = { name: '', city: '',price:'',img:'' };
  flag: boolean = true;
  upid: string = '';
  constructor(private pser: ProductService,) { }

  ngOnInit(): void {

    this.pser.getAllProduct()
      .subscribe((res: any) => {
        console.log(res);
        this.postData = res;
      })

  }

  delPro(id: any) {
    if (confirm("Do u want to delete?")) {
      this.pser.deleteData(id)
        .subscribe(res => {
          if (res) {
            alert("Data Deleted");
            let data = this.userData.filter((user: any) => user._id != id);
            this.userData = data;
            this.ngOnInit();

          }
        })
    }
  }


  // editPro(id: any) {
  //   this.pser.getProductById(id)
  //     .subscribe(res => {
  //       console.log(res)
  //       this.myData = { name: res.name, city: res.city };
  //       this.flag = false;
  //       this.upid = id;
  //     })
  // }

}