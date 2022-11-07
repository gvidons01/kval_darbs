import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  constructor(private adService: AdService){}

  ngOnInit() {
    this.adService.listAds().subscribe((res) => {
      console.log(res);
    });
  }
}
