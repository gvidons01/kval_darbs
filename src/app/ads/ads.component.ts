import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  subcat = null;
  adsList = null;

  constructor(
    public router: Router, 
    private adService: AdService,
    private route: ActivatedRoute
    ){ }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.adService.listAds(id).subscribe((ads) => {
      console.log(ads);
      this.subcat = ads[0];
      this.adsList = ads[1];
    });
  }
}
