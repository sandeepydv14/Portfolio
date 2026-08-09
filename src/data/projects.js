import salesImg from '../assets/projects/sales_analytics.jpg';
import netflixImg from '../assets/projects/netflix_analytics.jpg';

export const projectsData = [
  {
    id: "sales-performance-analysis",
    title: "Sales Performance & Profitability Analysis",
    type: "Intermediate Data Analytics + Business Intelligence Project",
    category: "Business Intelligence",
    shortDescription: "Comprehensive retail data analysis uncovering profit margin drivers, loss-making categories, regional sales performance, and customer lifetime value.",
    tools: ["Python", "Pandas", "NumPy", "SQL", "Microsoft Excel", "Power BI", "Matplotlib"],
    image: salesImg,
    github: "https://github.com/sandeepydv14/sales-performance-analysis",
    liveDemo: "#",
    badge: "BI & SQL Case Study",
    
    // Case Study Detailed Section
    problem: "A multi-regional retail distribution enterprise observed shrinking net profit margins despite achieving steady annual top-line revenue growth. Executive leadership lacked granular visibility into which specific product sub-categories, shipping regions, and customer segments were operating at a loss, leading to misallocated promotional discounting.",
    
    datasetInfo: "Sample retail sales transaction dataset comprising 9,994 records with 21 feature attributes including Order ID, Order Date, Ship Mode, Customer ID, Segment, Country, City, State, Region, Category, Sub-Category, Sales, Quantity, Discount, and Profit.",
    isSampleData: true,

    dataCleaning: [
      "Converted Order Date and Ship Date strings to ISO Datetime objects for temporal trend aggregation.",
      "Identified zero missing values in primary key columns; normalized city and state string formatting.",
      "Engineered derived features: Unit Price = Sales / Quantity, Profit Margin % = (Profit / Sales) * 100.",
      "Audited negative profit transactions to distinguish legitimate product returns/discounts from data entry anomalies."
    ],

    edaSummary: "Exploratory analysis revealed that while Technology and Office Supplies generated consistent ~17% profit margins, the Furniture category suffered an alarming 2.5% net margin overall, with Tables and Bookcases incurring heavy net losses across Central and Southern sales territories.",

    sqlAnalysis: [
      {
        title: "Monthly Revenue & Net Profit Trend",
        query: `SELECT 
  DATE_FORMAT(order_date, '%Y-%m') AS month,
  ROUND(SUM(sales), 2) AS total_sales,
  ROUND(SUM(profit), 2) AS total_profit,
  ROUND((SUM(profit) / SUM(sales)) * 100, 2) AS profit_margin_pct
FROM sales_data
GROUP BY month
ORDER BY month ASC;`
      },
      {
        title: "Top 5 Most Loss-Making Sub-Categories",
        query: `SELECT 
  category,
  sub_category,
  ROUND(SUM(sales), 2) AS total_sales,
  ROUND(SUM(profit), 2) AS net_profit,
  ROUND(AVG(discount) * 100, 1) AS avg_discount_pct
FROM sales_data
GROUP BY category, sub_category
HAVING net_profit < 0
ORDER BY net_profit ASC
LIMIT 5;`
      },
      {
        title: "Regional Sales & Profitability Breakdown",
        query: `SELECT 
  region,
  COUNT(DISTINCT order_id) AS total_orders,
  ROUND(SUM(sales), 2) AS total_sales,
  ROUND(SUM(profit), 2) AS total_profit
FROM sales_data
GROUP BY region
ORDER BY total_profit DESC;`
      }
    ],

    kpis: [
      { label: "Total Sales", value: "$2,297,201", note: "Gross Revenue" },
      { label: "Total Profit", value: "$286,397", note: "Net Earnings" },
      { label: "Total Orders", value: "9,994", note: "Unique Transactions" },
      { label: "Avg Profit Margin", value: "12.47%", note: "Overall Return" }
    ],

    chartData: {
      monthlyTrend: [
        { month: "Jan", sales: 142000, profit: 18500 },
        { month: "Feb", sales: 130000, profit: 16200 },
        { month: "Mar", sales: 185000, profit: 24100 },
        { month: "Apr", sales: 160000, profit: 19800 },
        { month: "May", sales: 210000, profit: 28400 },
        { month: "Jun", sales: 245000, profit: 32100 },
        { month: "Jul", sales: 220000, profit: 27500 },
        { month: "Aug", sales: 260000, profit: 34800 },
        { month: "Sep", sales: 295000, profit: 39200 },
        { month: "Oct", sales: 280000, profit: 36100 },
        { month: "Nov", sales: 340000, profit: 44500 },
        { month: "Dec", sales: 390000, profit: 51200 }
      ],
      regional: [
        { region: "West", sales: 725450, profit: 108418 },
        { region: "East", sales: 678781, profit: 91522 },
        { region: "Central", sales: 501239, profit: 39706 },
        { region: "South", sales: 391721, profit: 46749 }
      ],
      categories: [
        { category: "Technology", sales: 836154, profit: 145454, margin: 17.4 },
        { category: "Office Supplies", sales: 719047, profit: 122490, margin: 17.0 },
        { category: "Furniture", sales: 741999, profit: 18451, margin: 2.5 }
      ]
    },

    insights: [
      "Technology generated the highest net profit ($145.4K) with a healthy 17.4% margin, heavily propelled by Copiers and Phones.",
      "Tables sub-category incurred a net loss of -$17,725 despite generating over $200K in top-line sales due to average discounts exceeding 30%.",
      "Central Region experienced severe margin erosion (only 7.9% net margin) caused by aggressive promotional discounting in Texas and Illinois.",
      "The top 10% of high-volume enterprise customers generated over 40% of cumulative revenue."
    ],

    recommendations: [
      "Cap discount rates on Furniture (specifically Tables and Bookcases) at a maximum threshold of 15%.",
      "Restructure regional promotional tactics in Central Region states to prevent selling below cost.",
      "Prioritize inventory allocation toward high-margin Technology accessories during Q4 peak demand periods."
    ]
  },

  {
    id: "netflix-content-trend-analysis",
    title: "Netflix Content & Trend Analysis",
    type: "Intermediate Exploratory Data Analysis Project",
    category: "Exploratory Data Analysis",
    shortDescription: "Data-driven investigation of Netflix's content library shifts, analyzing Movie vs TV Show ratios, global production hubs, genre growth, and rating distributions.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Microsoft Excel", "Power BI", "Tableau"],
    image: netflixImg,
    github: "https://github.com/sandeepydv14/netflix-content-trend-analysis",
    liveDemo: "#",
    badge: "Python & EDA Case Study",

    // Case Study Detailed Section
    problem: "Understanding streaming video-on-demand platform strategy requires analyzing historical library evolution, production country shifts, content maturity distributions, and category emphasis to decipher how platforms target diverse international subscriber segments.",

    datasetInfo: "Kaggle Netflix Movies & TV Shows public dataset comprising 8,807 title records with metadata attributes: show_id, type, title, director, cast, country, date_added, release_year, rating, duration, and listed_in.",
    isSampleData: true,

    dataCleaning: [
      "Imputed null values in Director feature with 'Unknown Director' and missing Country with 'Unknown Country'.",
      "Parsed string-formatted date_added into ISO Datetime to extract added_year and added_month.",
      "Separated runtime metrics into distinct numerical variables: movie duration in minutes vs TV show duration in number of seasons.",
      "Unnested pipe/comma-separated strings in the listed_in column to count individual genre appearances."
    ],

    edaSummary: "Analysis demonstrated a massive expansion in content acquisition between 2016 and 2019. Movies represent 69.6% of total catalog titles, while TV Shows comprise 30.4%. TV-MA and TV-14 ratings constitute over 60% of all titles.",

    sqlAnalysis: [
      {
        title: "Movie vs TV Show Distribution",
        query: `SELECT 
  type, 
  COUNT(*) AS total_titles,
  ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM netflix_catalog), 2) AS pct_share
FROM netflix_catalog
GROUP BY type;`
      },
      {
        title: "Top Content Producing Countries",
        query: `SELECT 
  country, 
  COUNT(*) AS title_count
FROM netflix_catalog
WHERE country IS NOT NULL AND country != 'Unknown Country'
GROUP BY country
ORDER BY title_count DESC
LIMIT 5;`
      },
      {
        title: "Annual Catalog Additions Evolution",
        query: `SELECT 
  EXTRACT(YEAR FROM date_added) AS year_added,
  SUM(CASE WHEN type = 'Movie' THEN 1 ELSE 0 END) AS movies_added,
  SUM(CASE WHEN type = 'TV Show' THEN 1 ELSE 0 END) AS tv_shows_added,
  COUNT(*) AS total_added
FROM netflix_catalog
WHERE date_added IS NOT NULL
GROUP BY year_added
ORDER BY year_added ASC;`
      }
    ],

    kpis: [
      { label: "Total Titles", value: "8,807", note: "Catalog Count" },
      { label: "Movies", value: "6,131", note: "69.6% Share" },
      { label: "TV Shows", value: "2,676", note: "30.4% Share" },
      { label: "Top Origin", value: "United States", note: "3,689 Titles" }
    ],

    chartData: {
      typeDistribution: [
        { name: "Movies", value: 6131, color: "#ef4444" },
        { name: "TV Shows", value: 2676, color: "#38bdf8" }
      ],
      yearlyAdditions: [
        { year: "2015", movies: 82, tvShows: 26, total: 108 },
        { year: "2016", movies: 258, tvShows: 176, total: 434 },
        { year: "2017", movies: 839, tvShows: 349, total: 1188 },
        { year: "2018", movies: 1237, tvShows: 412, total: 1649 },
        { year: "2019", movies: 1424, tvShows: 592, total: 2016 },
        { year: "2020", movies: 1284, tvShows: 595, total: 1879 },
        { year: "2021", movies: 993, tvShows: 505, total: 1498 }
      ],
      topGenres: [
        { genre: "International Movies", count: 2752 },
        { genre: "Dramas", count: 2427 },
        { genre: "Comedies", count: 1674 },
        { genre: "International TV", count: 1351 },
        { genre: "Documentaries", count: 869 },
        { genre: "Action & Adventure", count: 859 }
      ],
      ratings: [
        { rating: "TV-MA", count: 3207 },
        { rating: "TV-14", count: 2160 },
        { rating: "TV-PG", count: 863 },
        { rating: "R", count: 799 },
        { rating: "PG-13", count: 490 }
      ]
    },

    insights: [
      "Netflix catalog additions spiked exponentially between 2016 and 2019, peaking in 2019 with 2,016 title additions in a single year.",
      "International Movies and International TV represent the largest single genre classifications, highlighting a strategic shift toward localized regional content.",
      "Mature content (TV-MA and R ratings) accounts for over 45% of total offerings, reflecting focus on adult demographic retention.",
      "India ranks as the #2 country of content origin, dominated by single-installment feature films rather than multi-season TV shows."
    ],

    recommendations: [
      "Expand original TV series production in high-performing Asian markets to improve subscriber retention metrics.",
      "Leverage targeted genre recommendations for International Dramas to increase viewer engagement across non-native language markets."
    ]
  }
];

export default projectsData;
