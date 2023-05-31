import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  events: any[];
  events2 :any[];
  constructor() {
      this.events = [
          { status: 'Special schools - Edison Schools', date: '2008 - 2009', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
          { status: 'Technical schools - Jules E. Mastbaum Technical High School', date: '2007 - 2008', icon: 'pi pi-cog', color: '#673AB7' },
          { status: 'High schools - Benjamin Franklin High School', date: '2005 - 2007', icon: 'pi pi-shopping-cart', color: '#FF9800' },
          { status: 'Middle schools - Bethune, Mary Mcleod School', date: '1996 - 2004', icon: 'pi pi-check', color: '#607D8B' }
      ];
      this.events2 = [
        { status: 'UI/UX Designer - IronSketch', date: '2017 - 2018', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Art & Multimedia From - Oxford University', date: '2015 - 2017', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Web Designer - WebDev Company', date: '2013 - 2015', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'UI/UX Designer - Design ArtData', date: '2009 - 2013', icon: 'pi pi-check', color: '#607D8B' }
    ];
  }

}
