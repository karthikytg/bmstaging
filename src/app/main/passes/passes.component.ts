import { Component, OnInit } from '@angular/core';
import { Pass, PassType } from 'src/app/core/models/pass';
import { PassesService } from 'src/app/_services/passes.service';

@Component({
  selector: 'app-passes',
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.scss']
})
export class PassesComponent implements OnInit {

  imageBaseUrl: string = 'http://localhost:3001/';
  dailyPasses: Pass[];
  premiumPasses: Pass[];
  allAccessPasses: Pass[];

  constructor(private passesService: PassesService) { }

  ngOnInit(): void {
    this.passesService.getPasses().subscribe(_ => {
      let passes = _
      this.dailyPasses = passes.filter(pass => pass.pType == PassType.DAILY);
      this.premiumPasses = passes.filter(pass => pass.pType == PassType.PREMIUM);
      this.allAccessPasses = passes.filter(pass => pass.pType == PassType.ALLACCESS);
    });
  }

}
