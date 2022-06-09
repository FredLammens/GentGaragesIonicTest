import { GarageFacade } from './../+state/garage.facade';
import { Record } from '../+state/garage.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-garage-detail',
  templateUrl: './garage-detail.page.html',
  styleUrls: ['./garage-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GarageDetailPage implements OnInit {
  public garage$: Observable<Record>;
  constructor(private activatedRoute: ActivatedRoute, private garages: GarageFacade) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(take(1)).subscribe((paramMap) => {
      if(paramMap.has('garageId')) {
        const recipeId = paramMap.get('garageId');
        this.garage$ = this.garages.getGarageById(recipeId);
      }
    });
  }

}
