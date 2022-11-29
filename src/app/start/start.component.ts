import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { Router } from '@angular/router';
import { Group } from '../group';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  title = 'Sludinājumi';
  groupData: Group[] = [];

  constructor(public router:Router, private adService:AdService) { }

  ngOnInit() {
    this.adService.listGroups().subscribe((groups) => {
      console.log(groups);
      this.groupData = groups;
    });
  }

}
