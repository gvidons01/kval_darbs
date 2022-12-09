import { Component, OnInit } from '@angular/core';
import { AdService } from '../services/ad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  category = null;
  subcategories = null;

  constructor(
    public router: Router, 
    private adService: AdService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.adService.listSubcategories(id).subscribe((categories) => {
      console.log(categories);
      this.category = categories[0];
      this.subcategories = categories[1];
    });
  }

}
