# 🌍 World Clock

A beautiful digital clock application that displays the current time in multiple time zones around the world with both digital and analog clock displays.

## ✨ Features

- 🕐 **Digital Clock Display** - Easy-to-read digital time format
- 🎯 **Analog Clock** - Traditional analog clock face with moving hands
- 🌐 **Multiple Timezones** - Display time for cities across the globe
- ➕ **Add Custom Timezones** - Add any timezone from a curated list
- 🎨 **Colorful Themes** - Choose from 10 different colors for each clock
- 🗑️ **Remove Timezones** - Delete clocks you no longer need
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⏱️ **Real-time Updates** - Updates every second for accurate time display
- 📍 **UTC Offset Display** - Shows the UTC offset for each timezone

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Fast build tool
- **Day.js** - Lightweight date library with timezone support
- **Lucide React** - Beautiful icon library
- **CSS3** - Modern styling with gradients and animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jerome0930/world-clock.git
   cd world-clock
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app will automatically open at `http://localhost:3000`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

Preview the production build:

```bash
npm run preview
```

## 📖 How to Use

1. **View Default Clocks** - The app starts with 4 pre-configured timezones (New York, London, Tokyo, Sydney)
2. **Add New Timezone** - Click the blue circular button in the bottom-right corner
3. **Choose Details** - Select a city name, timezone, and color
4. **View Time** - See both digital and analog representations of the time
5. **Remove Clock** - Click the trash icon on any clock card to remove it

## 🎨 Available Timezones

The app includes support for 20 major timezones:
- North America (New York, Chicago, Denver, Los Angeles, Anchorage, Honolulu)
- Europe (London, Paris, Berlin, Moscow)
- Asia (Dubai, Kolkata, Bangkok, Singapore, Hong Kong, Shanghai, Tokyo)
- Oceania (Sydney, Melbourne, Auckland)

## 🎨 Color Options

Choose from 10 beautiful gradient colors:
- Purple (#667eea)
- Deep Purple (#764ba2)
- Pink (#f093fb)
- Blue (#4facfe)
- Cyan (#00f2fe)
- Green (#43e97b)
- Rose (#fa709a)
- Yellow (#feca57)
- Orange (#ff9800)
- Red (#e74c3c)

## 📁 Project Structure

```
world-clock/
├── src/
│   ├── components/
│   │   ├── ClockCard.jsx          # Individual clock display
│   │   ├── ClockGrid.jsx          # Grid layout for clocks
│   │   └── AddTimezoneModal.jsx   # Modal for adding timezones
│   ├── styles/
│   │   ├── index.css              # Global styles
│   │   ├── App.css                # App component styles
│   │   ├── ClockCard.css          # Clock card styles
│   │   ├── ClockGrid.css          # Grid styles
│   │   └── AddTimezoneModal.css   # Modal styles
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # React entry point
├── index.html                      # HTML template
├── package.json                    # Project dependencies
├── vite.config.js                 # Vite configuration
└── README.md                       # Documentation
```

## ⌚ Clock Features Explained

### Digital Display
- Shows time in HH:MM:SS format
- Colored based on selected theme
- Displays AM/PM indicator

### Analog Clock
- Traditional clock face with numbers
- Hour, minute, and second hands
- Smooth hand movement
- Clean, minimalist design

### Clock Information
- Full date in readable format
- UTC offset for reference
- City name and timezone identifier

## 🎯 Responsive Breakpoints

- **Desktop** - Multiple clocks per row with full features
- **Tablet** - 2-column grid layout
- **Mobile** - Single column layout optimized for touch

## 🚀 Future Enhancements

- [ ] Alarm functionality
- [ ] Stopwatch timer
- [ ] World map visualization
- [ ] Clock face customization (12/24 hour)
- [ ] Favorite timezones persistence
- [ ] Dark mode
- [ ] Sound notifications
- [ ] Analog clock hand animation improvements

## 📝 License

MIT - Feel free to use this project for learning and development.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 🌟 Credits

- Icons from [Lucide React](https://lucide.dev/)
- Timezone data from [Day.js Timezone Plugin](https://day.js.org/)

Enjoy exploring time zones! ⏰🌍
