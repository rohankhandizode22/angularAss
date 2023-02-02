import { Component,OnInit } from '@angular/core';
import { ProductService, } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  postData: any;
  id:any;
  myData={name:'',quantity:'',price:'',img:'',desc:''}
  constructor(private pser: ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(par=>{
      this.id=par['id'];
      this.pser.getProductById(this.id)
      .subscribe(res=>{
         if(res){     
          console.log(res);
          
           this.myData={name:res.name,quantity:res.quantity,price:res.price,img:res.img,desc:res.desc}
           console.log(this.myData);
           
         }
      })
    })

  }
}
