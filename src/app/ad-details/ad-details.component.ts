import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {

  ad = null;
  images = null;
  userInfo = null;

  constructor(
    public router: Router, 
    private adService: AdService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.adService.seeAdDetails(id).subscribe((adInfo) => {
      console.log(adInfo);
      this.ad = adInfo[0];
      this.images = adInfo[1];
      this.userInfo = adInfo[2];
    });
  }

}
