import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  title = 'Sludinājumi';
  groupData = null;

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.listGroups().subscribe((groups) => {
      console.log(groups);
      this.groupData = groups;
    });
  }

}
