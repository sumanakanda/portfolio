import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  allProjects = [
    {
      title: ' Bank Customer Churn Analysis and Prediction Model ',
      description: ' Developed a Python-based predictive model to analyze factors influencing bank customer churn and provide actionable retention insights.',
      link: 'https://github.com/sumanakanda/Bank-Churn-Customer-Project-using-Python',
      live: '',
    },
    {
      title: 'RFM Segmentation: Enhancing Customer Insights Through SQL',
      description: 'Built an SQL-driven RFM model to segment customers and enable data-driven marketing initiatives. ',
      link: 'https://github.com/sumanakanda/RFM-Segmentation-using-SQL',
      live: '',
    },
    {
      title: 'Adventure Works Sales Data Analysis ',
      description: 'Developed an interactive Power BI dashboard to analyze and visualize sales performance, leveraging data cleaning, transformation, and KPI generation for actionable business insights. ',
      link: 'https://github.com/sumanakanda/Adventure-Works-Sales-Dashboard',
      live: '',
    },
    {
      title: 'Stylometry Based Author Profiling on Bangla Text Using Text Clustering',
      description: 'Designed and implemented a capstone project that leverages stylometry and text clustering \n' +
        'techniques to analyze Bangla text, identify writing styles, and profile authors using advanced machine learning \n' +
        'algorithms.',
      link: 'https://github.com/sumanakanda/Stylometry-Based-Author-Profiling-on-Bangla-Text-Using-Text-Clustering',
      live: '',
    },
    {
      title: 'Comprehensive Coffee Sales and Customer Analysis',
      description: 'Utilized Excel to create dashboards and perform data analysis on coffee sales, customer trends, and key \n' +
        'performance indicators. ',
      link: 'https://github.com/sumanakanda/Coffee-sales-project-using-excel',
      live: '',
    },

  ];
  constructor() {
  }

}
