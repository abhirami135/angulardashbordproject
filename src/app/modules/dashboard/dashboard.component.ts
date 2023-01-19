import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
title1="New user"
title2="user Engagement"
title3="user Referals"
  constructor() { }

  ngOnInit(): void {
  }

}
