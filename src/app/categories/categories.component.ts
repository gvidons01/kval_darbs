import { Component, OnInit } from '@angular/core';
import { AdService } from '../services/ad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  groupInfo = null;
  groupCategories = null;

  constructor(
    public router: Router,
    private adService: AdService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.adService.listCategories(id).subscribe((categories) => {
      console.log(categories);
      this.groupInfo = categories[0];
      console.log(this.groupInfo);
      this.groupCategories = categories[1];
    });
  }
}
