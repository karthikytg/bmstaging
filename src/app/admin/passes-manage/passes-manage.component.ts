import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PassType } from 'src/app/core/models/pass';
import { HomeService } from 'src/app/_services/home.service';
import { PassesService } from 'src/app/_services/passes.service';

@Component({
  selector: 'app-passes-manage',
  templateUrl: './passes-manage.component.html',
  styleUrls: ['./passes-manage.component.scss']
})
export class PassesManageComponent implements OnInit {
  PassType = PassType;

  pImage: any;
  prodForm!: FormGroup;
  title: PassType | string;
  passObj: any = {};
  isUp = false;

  constructor(private hService: HomeService,
    private formBuilder: FormBuilder,
    private passesService: PassesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.hService.hideNav();
    this.title = this.getPassType();

    // alert(this.title)
    this.prodForm = this.formBuilder.group({
      pname: ['', [Validators.required]],
      description: [''],
      color: [''],
      amount: [''],
      daysValid: [''],
      availProd: [''],
      discPer1: [null],
      discPer2: [null],
      pImage: [''],
      pType: [this.title],
      status: [''],
      id: ['']
    });
    const id = this.activatedRoute.snapshot.params['id'];
    if (id !== '+') {
      this.isUp = true;
      this.passesService.getPassesById(id).subscribe(res => {
        this.prodForm = this.formBuilder.group({
          pname: [res.rows.pname, [Validators.required]],
          description: [res.rows.description],
          color: [res.rows.color],
          amount: [res.rows.amount],
          daysValid: [res.rows.daysValid],
          availProd: [res.rows.availProd],
          discPer1: [res.rows.discPer1],
          discPer2: [res.rows.discPer2],
          pImage: [res.rows.pImage],
          pType: [res.rows.pType],
          status: [res.rows.status],
          id: [res.rows.id]
        });
        this.pImage = res.rows.pImage;
        this.passObj = res.rows;
        const date1 = new Date(this.passObj.createdAt);
        const date2 = new Date();

        // To calculate the time difference of two dates
        const Difference_In_Time = date2.getTime() - date1.getTime();

        // To calculate the no. of days between two dates
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        this.passObj.days = Math.round(Difference_In_Days);
      });
    }
  }

  getPassType(): PassType {
    let param = this.activatedRoute.snapshot.params['cat'];
    let passCategory = param;
    switch (param) {
      case 'daily': passCategory = PassType.DAILY;
        break;
      case 'pre': passCategory = PassType.PREMIUM;
        break;
      case 'spec': passCategory = PassType.SPECIAL;
        break;
      case 'combo': passCategory = PassType.COMBO;
        break;
      case 'all': passCategory = PassType.ALLACCESS;
        break;
      default:
        break;
    }
    return passCategory;
  }

  passImageFile(files: any) {
    this.pImage = files.target.files[0];
    // this.prodForm.patchValue({pImage: this.pImage});
  }
  async submitForm(a: any) {
    const formData = new FormData();
    formData.append('pImage', this.pImage);
    const upload1 = await this.passesService.uploadPass(formData, 1).toPromise();
    if (a === '1') {
      this.prodForm.value.status = 'ACTIVE';
    } else {
      this.prodForm.value.status = 'DRAFT';
    }
    this.prodForm.value.pImage = upload1.path;
    this.passesService.addPasses(this.prodForm.value).subscribe(res => {
      alert(res.message);
      window.location.reload();
    }, err => {
      console.log(err.message);
    })
  }
  async updateForm() {
    if (typeof this.pImage !== 'string') {
      const formData = new FormData();
      formData.append('pImage', this.pImage);
      const upload1 = await this.passesService.uploadPass(formData, 1).toPromise();
      this.prodForm.value.pImage = upload1.path;
    } else {
      this.prodForm.value.pImage = this.pImage;
    }
    this.passesService.updatePass(this.prodForm.value).subscribe(res => {
      alert(res.message);
      window.location.reload();
    }, err => {
      console.log(err.message);
    })
  }
}
