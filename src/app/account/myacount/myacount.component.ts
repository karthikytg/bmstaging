import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-myacount',
  templateUrl: './myacount.component.html',
  styleUrls: ['./myacount.component.scss']
})
export class MyacountComponent implements OnInit {

  constructor(private hService: HomeService) { }

  ngOnInit(): void {
    this.hService.makeYellow();
  }

}
