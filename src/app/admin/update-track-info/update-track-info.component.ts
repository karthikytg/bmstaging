import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-update-track-info',
  templateUrl: './update-track-info.component.html',
  styleUrls: ['./update-track-info.component.scss']
})
export class UpdateTrackInfoComponent implements OnInit {

  public pname = '';
  public sts = '';
  public pid = '';
  public trackNo ='';
  public trackLink ='';
  constructor(private hService: HomeService, private pService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.hService.hideNav();
    const id = this.activatedRoute.snapshot.params['id'];
    this.pService.getProductById(id).subscribe(res => {
      // console.log('Res : ', res);
      this.pname = res.rows.pname;
      this.sts = res.rows.status;
      this.pid = res.rows.uuid;
    }, err => {
      console.log(err.message)
    })
    // alert('id: '+ id)
  }

}
