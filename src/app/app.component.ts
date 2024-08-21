import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';


// https://datausa.io/profile/naics/manufacturing#monthly-employment

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dominix-front';

  chartOption : EChartsOption = {
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: 'nodeA',
            value: 10,
            children: [
              {
                name: 'nodeAa',
                value: 4
              },
              {
                name: 'nodeAb',
                value: 6
              }
            ]
          },
          {
            name: 'nodeB',
            value: 20,
            children: [
              {
                name: 'nodeBa',
                value: 20,
                children: [
                  {
                    name: 'nodeBa1',
                    value: 20
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  //
  // chartOption: EChartsOption = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //   },
  //   yAxis: {
  //     type: 'value',
  //   },
  //   series: [
  //     {
  //       data: [820, 932, 901, 934, 1290, 1330, 1320],
  //       type: 'line',
  //     },
  //   ],
  // };
}
