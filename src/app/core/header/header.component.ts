import { OnInit, Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
  
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    constructor(
        private readonly navController: NavController,
        private router: Router
      ) { }
    
      ngOnInit(): void {
      }

      redirectTo(page: string):void {
        this.router.navigate([page]);
      }
  }