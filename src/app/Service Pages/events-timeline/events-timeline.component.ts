import { Component } from '@angular/core';

@Component({
  selector: 'app-events-timeline',
  templateUrl: './events-timeline.component.html',
  styleUrls: ['./events-timeline.component.css']
})
export class EventsTimelineComponent {
  data: any;
  // tableData:any;
  options: any;


  tableData1 = [
    {
      PhotoUrl: 'assets/img/user-40-1.jpg',
      Name: 'Liam',
      Date: '18 Feb 2019',

    },
    {
      PhotoUrl: 'assets/img/user-40-2.jpg',
      Name: 'Emma',
      Date: '18 Feb 2019',
    },
    {
      PhotoUrl: 'assets/img/user-40-3.jpg',
      Name: 'Olivia',
      Date: '18 Feb 2019',

    },
    {
      PhotoUrl: 'assets/img/user-40-4.jpg',
      Name: 'Ava',
      Date: '18 Feb 2019',

    },
  ];
  tableData2 = [
    {
      Date: '18 Feb 2019',
      badge: "$155"
    },
    {
      Date: '18 Feb 2019',
      badge: "$365"
    },
    {
      Date: '18 Feb 2019',
      badge: "$234"
    },
    {
      Date: '18 Feb 2019',
      badge: "$190"
    },

  ];

  events2: any[];
  constructor() {

    this.events2 = [
      { status: 'Appointment', date: '2m ago', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'assets/svg/icon-1.png', Para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.' },
      { status: 'Medication', date: '2hr ago', icon: 'pi pi-bolt', color: '#9C27B0', image: 'game-controller.jpg', Para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.' },
     
      { status: 'Appointment', date: 'Feb 25', icon: 'pi pi-bitcoin', color: '#9C27B0', image: 'game-controller.jpg', Para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.' },
      { status: 'Medication', date: 'Feb 20', icon: 'pi pi-car', color: '#9C27B0', image: 'game-controller.jpg', Para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.' },
      { status: 'New patient', date: 'Feb 15', icon: 'pi pi-compass', color: '#9C27B0', image: 'game-controller.jpg', Para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.' },
      { status: 'Examination', date: 'Feb 14', icon: 'pi pi-discord', color: '#9C27B0', image: 'game-controller.jpg', Para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.' }, 
      { status: 'New patient', date: 'Feb 13', icon: 'pi pi-copy', color: '#9C27B0', image: 'game-controller.jpg', Para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.' },
     
    ];
  };






  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['', '', '', '', '', '', ''],
      // 'January', 'February', 'March', 'April', 'May', 'June', 'July'
      datasets: [

        {
          label: 'Third Dataset',
          data: [1, 2, 3, 10, 15, 17, 5],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
          backgroundColor: 'rgba(23, 88, 200, 0.3)'
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.9,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
}
