import { Component, OnInit } from '@angular/core';
import { ShopBService } from 'src/app/shared/shop-b.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop-b',
  templateUrl: './shop-b.component.html',
  styleUrls: ['./shop-b.component.css']
})
export class ShopBComponent implements OnInit {

  constructor(private service : ShopBService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

resetForm(form? : NgForm){
  if(form!=null)
  form.resetForm();
  this.service.formData={
    Name:'',
    Description:'',
    Price:null
  }
}

onSubmit(form: NgForm) { 
  this.insertRecord(form);
}

insertRecord(form: NgForm) {
  this.service.postShop(form.value).subscribe(res => {
    this.toastr.success('Inserted successfully', 'Items. added');
    this.resetForm(form);
    this.service.refreshList();
  });
}
updateRecord(form: NgForm) {
  this.service.putShop(form.value).subscribe(res => {
    this.toastr.info('Updated successfully', 'Items. updated');
    this.resetForm(form);
    this.service.refreshList();

  });
}
}
