import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  postData:any;
  search='';
  constructor(private http:ProductService){ }

  ngOnInit(): void {
    
    this.http.getAllProduct()
    .subscribe((res:any)=>{
        console.log(res);
        this.postData=res;
    })
  }
}