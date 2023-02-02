import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  addForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
    price:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
    desc:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required])
})

  myData={name:'',quantity:'',price:'',img:'',desc:''}
  id:any;
  constructor(private pser:ProductService,private route:ActivatedRoute,private router:Router){}
 ngOnInit(): void {
  this.route.params.subscribe(par=>{
    this.id=par['id'];
    this.pser.getProductById(this.id)
    .subscribe(res=>{
       if(res){     
        console.log(res);
        
         this.myData={name:res.name, quantity:res.quantity, price:res.price, img:res.img, desc:res.desc,}
         console.log(this.myData);
         
       }
    })
  })
 }

 updatedata(){
  this.pser.UpdateData(this.myData,this.id)
  .subscribe(res=>{
    if(res){
      alert("Product Updated");
      this.router.navigate(['/']);
    }
  })
}
}
