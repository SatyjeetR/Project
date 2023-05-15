import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');


    //   second 
      // const documentStyle = getComputedStyle(document.documentElement);
      // const textColor = documentStyle.getPropertyValue('--text-color');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['v','2019-1', 'February', 'March', 'April', 'May', 'June', 'July'],
          // labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
              },
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                tension: 0.4,
                borderColor: documentStyle.getPropertyValue('--blue-500')
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderDash: [5, 5],
                tension: 0.4,
                borderColor: documentStyle.getPropertyValue('--teal-500')
            },
            {
                label: 'Third Dataset',
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--orange-500'),
                tension: 0.4,
                backgroundColor: 'rgba(255,167,38,0.2)'
            }
          ],
        
      };
      
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          cutout: '60%',
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
          },
        //   plugins: {
        //     legend: {
        //         labels: {
        //             color: textColor
        //         }
        //     }
        // };

         
      };
  }


//   data: any;

//   options: any;

//   ngOnInit() {

//     //   this.data = {
         
//     //   };


//       this.options = {
         
//       };
//   }
}
