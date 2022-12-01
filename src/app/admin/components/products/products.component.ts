import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {


  constructor(private htttClientService: HttpClientService) {
    super();
  }

  override ngOnInit(): void {
    // this.htttClientService.get<Create_Product[]>({
    //   controller: "products"

    // }).subscribe(data=>console.log(data));

    // post işlemin deneme alanı
    // this.htttClientService.post({
    //   controller: "Products"
    // },{
    //   name: "Kalem",
    //   stock: 120,
    //   price: 27
    // put işlemin deneme alanı aşağıdaki gibidir
    // this.htttClientService.put({
    //   controller: "products"
    // },{
    //   id: "355502ec-999d-417a-86c4-3a648d90ea4c",
    //   name: "Samsung Tv",
    //   stock: 121,
    //   price: 32745
    // }).subscribe();
    // delete işleminin alanı aşağıdaki gibidir.
    // this.htttClientService.delete({
    //   controller: "products"
    // },
    // "a8f57532-ab0f-45bd-b2eb-9f532745f497"

    // ).subscribe();




  }

}
