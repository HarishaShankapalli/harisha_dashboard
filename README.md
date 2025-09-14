# Harisha Shankapalli Dashboard

A modern, responsive dashboard built with **Vite + Vanilla JS** featuring soft pastel gradients, dynamic data visualization, and clean UI aesthetics.

## 🚀 Overview

This project is a customized fork of the original Mazer template (MIT-licensed), enhanced with:
- Soft pastel gradients and subtle color schemes
- Dynamic dashboard components powered by JSON data
- Interactive charts and data visualizations
- Fully responsive Bootstrap 5 layout
- Clean, modern UI/UX design

## ✨ Features

### 📊 Dashboard Cards (Dynamic)
- **Profile Views**, **Followers**, **Following**, **Saved Posts**
- Cards dynamically populated from `data.json`
- Progress bars with gradient fills for visual feedback
- Real-time data updates

### 📈 Profile Visit Chart
- Interactive bar chart showing profile visit trends
- Populated dynamically using `data.json`
- Smooth animations and hover effects

### 🌍 Regional Visits
- Line charts for **Europe**, **America**, **India**, **Indonesia**
- Sparkline area charts with trend visualization
- Pastel color scheme for professional appearance
- Clear labels and data points

### 👥 Visitors Profile
- Donut chart showing **Male vs Female** distribution
- Consistent pastel color theming
- Interactive legends and tooltips

### 💬 Latest Comments & Messages
- Avatar + comment bubbles for user interactions
- Rounded comment bubbles with soft backgrounds
- Messages section with avatars, names, and usernames
- Real-time updates capability

### 🎨 UI/UX Customizations
- Gradient welcome heading
- Gradient icons in stats cards
- Smooth hover effects for cards and buttons
- Avatar glow effects
- Rounded buttons and badges
- Clean typography (Poppins font)
- Fully responsive layout across all devices

## 🛠️ Technologies Used

- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript (ES6+)** - Modern JavaScript without frameworks
- **HTML5** - Semantic markup
- **CSS3/SCSS** - Custom styles and Bootstrap overrides
- **Bootstrap 5** - Responsive layout & components
- **ApexCharts** - Interactive charts (line, bar, donut)
- **JSON** - Dynamic data management

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/harisha-dashboard.git
   cd harisha-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## 📊 Data Configuration

All dynamic components use `src/assets/static/data/data.json`:

```json
{
  "profileVisits": [
    { "month": "Jan", "visits": 1200 },
    { "month": "Feb", "visits": 1500 }
  ],
  "regionalVisits": {
    "europe": [100, 120, 140, 110],
    "america": [80, 90, 100, 95],
    "india": [200, 250, 300, 280],
    "indonesia": [150, 160, 180, 170]
  },
  "visitorsProfile": {
    "male": 65,
    "female": 35
  }
}
```

### Data Binding

- `profileVisits` → Profile Visit Bar Chart
- `regionalVisits` → Regional Line Charts  
- `visitorsProfile` → Donut chart for Male/Female distribution

JavaScript (`dashboard.js`) reads this JSON and updates HTML elements dynamically.

## 🎨 Customizations Made

### Design Changes
- ✅ Removed Mazer logo from sidebar
- ✅ Updated color theme to soft pastel gradients
- ✅ Added hover effects for cards and buttons
- ✅ Added gradient heading for welcome message
- ✅ Rounded progress bars and avatars
- ✅ Sparkline charts for regional trends
- ✅ Labels added for clarity on regional charts

### Technical Enhancements
- ✅ Fully integrated JSON-driven data (no hard-coded values)
- ✅ Responsive design across all components
- ✅ Modern ES6+ JavaScript
- ✅ Vite build optimization
- ✅ SCSS modular styling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is based on the **Mazer template** (MIT License). See [LICENSE](LICENSE) for more information.

## 🙏 Acknowledgments

- [Mazer Template](https://github.com/zuramai/mazer) - Original MIT-licensed template
- [ApexCharts](https://apexcharts.com/) - Beautiful charts library
- [Bootstrap 5](https://getbootstrap.com/) - Responsive framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

---

**Built with ❤️ by [Harisha Shankapalli](https://github.com/your-username)**
