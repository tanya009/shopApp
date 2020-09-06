import { Component, OnInit } from '@angular/core';
import { ShopBService } from 'src/app/shared/shop-b.service';
import { ShopB } from 'src/app/shared/shop-b.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop-b-list',
  templateUrl: './shop-b-list.component.html',
  styleUrls: ['./shop-b-list.component.css']
})
export class ShopBListComponent implements OnInit {

  constructor(private service : ShopBService, private toastr : ToastrService) { }

  ngOnInit(){
    this.service.refreshList();
  }

  
  populateForm(shop: ShopB) {
    this.service.formData = Object.assign({}, shop );
  }
  onDelete(id: number){
    if(confirm("Are you sure to delete")){
    this.service.deleteShop(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted successfully', 'Items. updated');
    })
  }
  

  }
}
