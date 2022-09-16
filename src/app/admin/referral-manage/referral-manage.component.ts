import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { ReferralsService } from 'src/app/_services/referrals.service';

@Component({
  selector: 'app-referral-manage',
  templateUrl: './referral-manage.component.html',
  styleUrls: ['./referral-manage.component.scss']
})
export class ReferralManageComponent implements OnInit {

  constructor(private hService: HomeService, 
    private formBuilder: FormBuilder,
    private refSer: ReferralsService,
    private activatedRoute: ActivatedRoute) { }

  public prodForm!: FormGroup;
  public title = '';
  public cId = '';
  public sts = '';
  public dt = '';
  ngOnInit(): void {
    this.hService.hideNav();
    this.title = this.activatedRoute.snapshot.params['type'];
    const id = this.activatedRoute.snapshot.params['id'];
    this.prodForm = this.formBuilder.group({
      campaignName: ['', [Validators.required]],
      discPer: [''],
      status: ['ACTIVE'],
      id: ['']
    });
    if (this.title !== 'add') {
      this.refSer.getReferralById(id).subscribe(res => {
        this.prodForm = this.formBuilder.group({
          campaignName: [res.rows.campaignName, [Validators.required]],
          discPer: [res.rows.discPer],
          status: [res.rows.status],
          id: [res.rows.id]
        });
        this.cId = res.rows.uuid;
        this.sts = res.rows.status;
        this.dt = res.rows.createdAt;
      }, err => {
        console.log(err.message);
      })
    }
  }
  saveReferral() {
    this.refSer.addReferrals(this.prodForm.value).subscribe(res => {
      alert(res.message);
      window.location.reload();
    }, err => {
      alert(err.message);
    })
  }
  upReferral() {
    this.refSer.updateRefer(this.prodForm.value).subscribe(res => {
      alert(res.message);
      window.location.reload();
    }, err => {
      alert(err.message);
    })
  }
}
