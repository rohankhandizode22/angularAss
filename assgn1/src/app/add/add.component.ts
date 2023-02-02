import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  addForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
    price:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
    desc:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required])
})
  myData: any = { name: '', quantity: '',price:'',img:'',desc:'' }
  userData: any;
  flag: boolean = true;
  upid: string = '';
  constructor(private pser: ProductService,route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.pser.getAllProduct()
      .subscribe((res: any) => {
        console.log(res);
        this.userData = res;
      })

  }

  postdata() {

    this.pser.postData(this.myData)
      .subscribe(res => {
        if (res) {
          this.myData = { name: '', quantity: '' }
          alert("Data added");
          this.router.navigate(['/']);
          this.pser.getAllProduct()
            .subscribe((res: any) => {
              this.userData = res;
            })
        }
      })
  }
  get fdata(){
    return this.addForm.controls; //getter
  }
  
  postData(){
    console.log(this.addForm.getRawValue())
  }
}

