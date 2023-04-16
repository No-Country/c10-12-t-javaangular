import { Component, OnInit } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  isLogged$: Observable< User | null> = this.auth.user$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.setUser();
  }

}
