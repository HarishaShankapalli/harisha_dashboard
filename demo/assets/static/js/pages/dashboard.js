// ===== Profile Visit Bar Chart (from JSON) =====
fetch("/assets/static/data/data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load data.json");
    return response.json();
  })
  .then((data) => {
    let optionsProfileVisit = {
      annotations: { position: "back" },
      dataLabels: { enabled: false },
      chart: {
        type: "bar",
        height: 300,
        toolbar: { show: false },
        background: "#ffe6f0",   // 🌸 pastel pink background
        foreColor: "#495057",
        animations: { enabled: true, easing: 'easeinout', speed: 800 },
      },
      fill: { opacity: 0.9, colors: ["#f06292"] }, // deep pastel pink bars
      plotOptions: { bar: { borderRadius: 12, columnWidth: "50%" } },
      series: [{ name: "Sales", data: data.sales }],
      colors: ["#f06292"],
      xaxis: { categories: data.months, axisBorder: { show: false }, axisTicks: { show: false } },
      tooltip: { theme: "dark" },
    };

    new ApexCharts(document.querySelector("#chart-profile-visit"), optionsProfileVisit).render();
  })
  .catch((err) => console.error("Error loading bar chart JSON:", err));

// ===== Visitors Donut Chart =====
let optionsVisitorsProfile = {
  series: [70, 30],
  labels: ["Male", "Female"],
  colors: ["#f48fb1", "#fcd5ce"], // pastel pink + peach
  chart: { type: "donut", width: "100%", height: 350, background: "#fff0f5" },
  legend: { position: "bottom" },
  plotOptions: { pie: { donut: { size: "30%", labels: { show: true, name: { fontSize: '16px', fontWeight: 'bold' }, value: { fontSize: '14px' } } } } },
  dataLabels: { enabled: false },
  tooltip: { theme: "dark" },
};
new ApexCharts(document.querySelector("#chart-visitors-profile"), optionsVisitorsProfile).render();

// ===== Region Area Charts Base =====
var baseOptionsArea = {
  chart: { height: 80, type: "area", toolbar: { show: false }, sparkline: { enabled: true }, background: "#fff5f8", animations: { enabled: true } },
  stroke: { width: 2, curve: "smooth" },
  grid: { show: false },
  dataLabels: { enabled: false },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z","2018-09-19T07:30:00.000Z","2018-09-19T08:30:00.000Z",
      "2018-09-19T09:30:00.000Z","2018-09-19T10:30:00.000Z","2018-09-19T11:30:00.000Z",
    ],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { labels: { show: false } },
  tooltip: { x: { format: "dd/MM/yy HH:mm" }, theme: "dark" },
  series: [{ name: "Series 1", data: [310,800,600,430,540,340,605,805,430,540,340,605] }],
  fill: { type: "gradient", gradient: { shade: "light", type: "vertical", opacityFrom: 0.5, opacityTo: 0 } },
};

// ===== Custom Pastel Options per Region =====
let optionsEurope = { ...baseOptionsArea, colors: ["#ffb7c5"] };    // light pink
let optionsAmerica = { ...baseOptionsArea, colors: ["#ff99cc"] };   // pastel rose
let optionsIndia = { ...baseOptionsArea, colors: ["#ffb347"] };     // soft orange
let optionsIndonesia = { ...baseOptionsArea, colors: ["#ba55d3"] }; // orchid purple

// ===== Render Regional Charts =====
new ApexCharts(document.querySelector("#chart-europe"), optionsEurope).render();
new ApexCharts(document.querySelector("#chart-america"), optionsAmerica).render();
new ApexCharts(document.querySelector("#chart-india"), optionsIndia).render();
new ApexCharts(document.querySelector("#chart-indonesia"), optionsIndonesia).render();
