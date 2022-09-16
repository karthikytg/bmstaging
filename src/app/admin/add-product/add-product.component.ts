import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private hService: HomeService, 
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private prodService: ProductService) { }

  public prodForm!: FormGroup;
  public title = '';
  public pImage: any = null;
  public suppImage: any = null;
  public suppVid: any = null;
  public viewInfo: any = {};
  private datePipe = new DatePipe('en-US');
  public file1 = '';
  public file2 = '';
  public file3 = '';
  ngOnInit(): void {
    this.hService.hideNav();
    this.title = this.activatedRoute.snapshot.params['cat'];
    // alert(this.title)
    this.prodForm = this.formBuilder.group({
      pname: ['', [Validators.required]],
      description: [''],
      heroTitle: [''],
      releaseDate: [''],
      bidPrice: [''],
      bidInc: ['10'],
      bidStartDate: [''],
      bidEndDate: [''],
      bidStartTime: ['12:00'],
      bidEndTime: [''],
      prodFeature: [''],
      prodSpec: [''],
      learnLink: [''],
      pImage: [null],
      suppImage: [null],
      suppVid: [null],
      pType: [this.title],
      status: ['DRAFT'],
      id: ['']
    })
    if (this.title === 'bidInfo' || this.title === 'view') {
      const id = this.activatedRoute.snapshot.params['id'];
      this.prodService.getProductById(id).subscribe(res => {
        // console.log('Res : ', res);
        this.viewInfo.pname = res.rows.pname;
        this.viewInfo.sts = res.rows.status;
        this.viewInfo.pid = res.rows.uuid;
        this.viewInfo.bidPrice = res.rows.bidPrice;
        this.viewInfo.cBidPrice = res.rows.cBidPrice;
        this.viewInfo.bidInc = res.rows.bidInc;
        this.viewInfo.bidStartDate = res.rows.bidStartDate;
        this.viewInfo.bidStartTime = res.rows.bidStartTime;
        this.viewInfo.bidEndDate = res.rows.bidEndDate;
        this.viewInfo.bidEndTime = res.rows.bidEndTime;
        this.viewInfo.hbp = 'Not Announced';
        this.viewInfo.ap = 'Not Announced';
        this.viewInfo.hb = 'Not Announced';
        // Additional info 
        this.pImage = res.rows.pImage;
        this.viewInfo.description = res.rows.description;
        this.viewInfo.heroTitle = res.rows.heroTitle;
        this.viewInfo.learnLink = res.rows.learnLink;
        this.viewInfo.pType = res.rows.pType;
        this.viewInfo.prodFeature = res.rows.prodFeature;
        this.viewInfo.prodSpec = res.rows.prodSpec;
        this.viewInfo.releaseDate = res.rows.releaseDate;
        this.viewInfo.suppImage = res.rows.suppImage;
        this.viewInfo.suppVid = res.rows.suppVid;
        console.log(' >>> ', this.viewInfo)
        this.prodForm = this.formBuilder.group({
          pname: [this.viewInfo.pname, [Validators.required]],
          description: [this.viewInfo.description],
          heroTitle: [this.viewInfo.heroTitle],
          releaseDate: [this.viewInfo.releaseDate = this.datePipe.transform(this.viewInfo.releaseDate, 'yyyy-MM-dd')],
          bidPrice: [this.viewInfo.bidPrice],
          bidInc: [this.viewInfo.bidInc],
          bidStartDate: [this.viewInfo.bidStartDate = this.datePipe.transform(this.viewInfo.bidStartDate, 'yyyy-MM-dd')],
          bidEndDate: [this.viewInfo.bidEndDate = this.datePipe.transform(this.viewInfo.bidEndDate, 'yyyy-MM-dd')],
          bidStartTime: [this.viewInfo.bidStartTime],
          bidEndTime: [this.viewInfo.bidEndTime],
          prodFeature: [this.viewInfo.prodFeature],
          prodSpec: [this.viewInfo.prodSpec],
          learnLink: [this.viewInfo.learnLink],
          pImage: [this.pImage],
          suppImage: [this.viewInfo.suppImage],
          suppVid: [this.viewInfo.suppVid],
          pType: [this.viewInfo.pType],
          status: [this.viewInfo.sts],
          id: [id]
        })
      }, err => {
        console.log(err.message)
      })
    }
    
  }
  setDates() {

  }
  prodImageFile(files: any) {
    this.pImage = files.target.files[0];
    this.file1 = files.target.files[0].name;
    // this.prodForm.patchValue({pImage: this.pImage});
  }
  supportFiles(files: any) {
    this.suppImage = files.target.files[0];
    this.file2 = files.target.files[0].name;
    // this.prodForm.patchValue({suppImage: this.suppImage});
  }
  supportVid(files: any) {
    this.suppVid = files.target.files[0];
    this.file3 = files.target.files[0].name;
    // this.prodForm.patchValue({suppVid: this.suppVid});
  }
  dataURItoBlob(dataURI: any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }
  async submitForm(i: any) {
    console.log(this.prodForm.value);
    const formData = new FormData();
    formData.append('pImage', this.pImage);
    const upload1 = await this.prodService.uploadProduct(formData, 1).toPromise();
    this.prodForm.value.pImage = upload1.path;
    const formData2 = new FormData();
    formData2.append('suppImage', this.suppImage);
    const upload2 = await this.prodService.uploadProduct(formData2, 2).toPromise();
    this.prodForm.value.suppImage = upload2.path;
    const formData3 = new FormData();
    formData3.append('suppVid', this.suppVid);
    const upload3 = await this.prodService.uploadProduct(formData3, 3).toPromise();
    this.prodForm.value.suppVid = upload3.path;
    if (i === '1') {
      this.prodForm.value.status = 'SITE';
    }
    this.prodService.addProduct(this.prodForm.value).subscribe(res => {
      alert(res.message);
      window.location.reload();
    }, err => {
      console.log(err.message);
    })
  }
  async updateForm() {
    console.log(this.prodForm.value);
    console.log(typeof this.pImage, ' : type of')
    
    if (typeof this.pImage !== 'string') {
      const formData = new FormData();
      formData.append('pImage', this.pImage);
      const upload1 = await this.prodService.uploadProduct(formData, 1).toPromise();
      this.prodForm.value.pImage = upload1.path;      
    } else {
      this.prodForm.value.pImage = this.pImage;      
    }
    if (typeof this.suppImage !== 'string') {
      const formData2 = new FormData();
      formData2.append('suppImage', this.suppImage);
      const upload2 = await this.prodService.uploadProduct(formData2, 2).toPromise();
      this.prodForm.value.suppImage = upload2.path;
    } else {
      this.prodForm.value.suppImage = this.pImage;      
    }
    if (typeof this.suppVid !== 'string') {
      const formData3 = new FormData();
      formData3.append('suppVid', this.suppVid);
      const upload3 = await this.prodService.uploadProduct(formData3, 3).toPromise();
      this.prodForm.value.suppVid = upload3.path;
    } else {
      this.prodForm.value.suppVid = this.pImage;      
    }
    
    this.prodService.updateProduct(this.prodForm.value).subscribe(res => {
      alert(res.message);
      window.location.reload();
    }, err => {
      console.log(err.message);
    })
  }
}
