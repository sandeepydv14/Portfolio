export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "programming", label: "Programming & Data Analysis" },
    { id: "analysis", label: "Data Analysis" },
    { id: "database", label: "Database" },
    { id: "visualization", label: "Visualization & BI" },
    { id: "tools", label: "Tools & Workflow" }
  ],
  skills: [
    // Programming & Data Analysis
    {
      name: "Python",
      category: "programming",
      icon: "Code2",
      description: "Data manipulation, automated scripting, and analytical workflows"
    },
    {
      name: "Pandas",
      category: "programming",
      icon: "Table",
      description: "DataFrame operations, data aggregation, merging, and transformations"
    },
    {
      name: "NumPy",
      category: "programming",
      icon: "Binary",
      description: "Numerical computations, array indexing, and vector calculations"
    },
    {
      name: "Matplotlib",
      category: "programming",
      icon: "LineChart",
      description: "Exploratory charts, plot customizations, and statistical visual trends"
    },

    // Data Analysis
    {
      name: "Data Cleaning",
      category: "analysis",
      icon: "Sparkles",
      description: "Handling missing values, deduplication, outlier handling, & data wrangling"
    },
    {
      name: "Exploratory Data Analysis",
      category: "analysis",
      icon: "Search",
      description: "Uncovering hidden patterns, summary statistics, and metric correlations"
    },

    // Database
    {
      name: "SQL",
      category: "database",
      icon: "Database",
      description: "Writing queries, JOIN operations, GROUP BY aggregations, CTEs, & Subqueries"
    },
    {
      name: "MySQL",
      category: "database",
      icon: "Server",
      description: "Relational database schema querying, filtering, and data extraction"
    },

    // Visualization & BI
    {
      name: "Microsoft Excel",
      category: "visualization",
      icon: "FileSpreadsheet",
      description: "Pivot Tables, VLOOKUP/XLOOKUP, conditional formatting, & executive summaries"
    },
    {
      name: "Power BI",
      category: "visualization",
      icon: "BarChart3",
      description: "Interactive dashboards, DAX measures, data modeling, & business reporting"
    },
    {
      name: "Tableau",
      category: "visualization",
      icon: "PieChart",
      description: "Visual analytics dashboards, dynamic parameters, and storyboard reporting"
    },
    {
      name: "Data Visualization",
      category: "visualization",
      icon: "TrendingUp",
      description: "Designing intuitive charts, color harmony, and decision-driven visual KPIs"
    },

    // Tools
    {
      name: "Git",
      category: "tools",
      icon: "GitBranch",
      description: "Version control system, commit history management, and code branching"
    },
    {
      name: "GitHub",
      category: "tools",
      icon: "Github",
      description: "Code repository management, documentation, and portfolio hosting"
    },
    {
      name: "Jupyter Notebook",
      category: "tools",
      icon: "BookOpen",
      description: "Interactive Python execution environment for exploratory analysis & reporting"
    }
  ]
};

export default skillsData;
