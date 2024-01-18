import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { FormsModule } from '@angular/forms';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PlotlyModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plot-test';

  number_y: any = 50;
  number_x: any = 10;
  graph = this.getNewValues();

  refresh() {
    this.graph = this.getNewValues();
  }

  getNewValues() {
    if (this.number_x <= 100 && this.number_y <= 100 && this.number_x >= 2 && this.number_y >= 2) {
      return {
        data: [
            { z: getPointsArray(this.number_x, this.number_y), type: 'surface' },
        ],
        layout: {width: 600, height: 600, title: 'Test Surface Plot'},
  
      }
    }
    return {};
  }
}

function getRandomPoint(x: number): number[] {
  let array = [];
  for (let i = 0; i < x; i++) {
    array.push(Math.random() * 200)
  }
    return array;
}

function getPointsArray(x: number, y: number) {
  let array = [];
  for(let i = 0; i < y; i++) {
    array.push(getRandomPoint(x));
  }
  return array;
}