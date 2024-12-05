import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  standalone:true
})
export class BarChartComponent implements OnInit, AfterViewInit {
  private data = [30, 86, 168, 281, 303, 365];

  private margin = { top: 20, right: 30, bottom: 30, left: 40 };
  private width = 500 - this.margin.left - this.margin.right;
  private height = 300 - this.margin.top - this.margin.bottom;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createBarChart();
  }

  private createBarChart(): void {
    const svg = d3
      .select('#barChart')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // X scale
    const x = d3
      .scaleBand()
      .domain(this.data.map((d, i) => i.toString())) // Map indices to categories
      .range([0, this.width])
      .padding(0.1);

    // Y scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.data)!])
      .nice()
      .range([this.height, 0]);

    // Add X axis
    svg
      .append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    svg.append('g').attr('class', 'axis axis-y').call(d3.axisLeft(y));

    // Add bars
    svg
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => x(i.toString())!)
      .attr('y', d => y(d))
      .attr('width', x.bandwidth())
      .attr('height', d => this.height - y(d));
  }
}
