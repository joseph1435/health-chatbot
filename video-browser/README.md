# Video Browser 🎬

A responsive single-page application (SPA) for browsing and playing videos, built with React, TypeScript, and TailwindCSS.

## 🌟 Features

### Core Features
- **Grid Layout**: Display video thumbnails, titles, and durations in a responsive grid
- **Search Functionality**: Filter videos by title or genre with real-time search
- **Video Details Page**: Dedicated page with video player, title, and description
- **Like Feature**: Like/unlike videos with state persisted to localStorage
- **Responsive Design**: Fully responsive layout for mobile and desktop devices

### Bonus Features
- **Pagination**: "Load More" button to load videos incrementally (8 at a time)
- **Accessibility**: 
  - Keyboard navigation support
  - ARIA roles and labels
  - Semantic HTML elements
  - Focus management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd video-browser
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
video-browser/
├── public/
│   └── videos.json          # Mock video data
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx    # Search input component
│   │   ├── VideoCard.tsx    # Individual video card
│   │   ├── VideoGrid.tsx    # Grid layout for videos
│   │   └── VideoDetails.tsx # Video player page
│   ├── types/
│   │   └── video.ts         # TypeScript interfaces
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles (Tailwind)
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Technologies Used

- **React 18**: Modern UI library
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **localStorage**: Client-side state persistence

## 🔧 Key Functionalities

### 1. Video Browsing
- Videos are displayed in a responsive grid (1-4 columns based on screen size)
- Each card shows thumbnail, title, duration, and genre
- Pagination with "Load More" button (loads 8 videos at a time)

### 2. Search
- Real-time search filtering by title or genre
- Case-insensitive search
- Results update automatically as you type

### 3. Video Details
- Click any video to view full details
- Embedded video player (YouTube iframe)
- Back button to return to grid view
- Like/Unlike functionality

### 4. Like System
- Click heart icon to like/unlike videos
- Visual feedback with color change
- State persisted in localStorage
- Likes persist across page refreshes

### 5. Accessibility Features
- Semantic HTML (header, main, footer, article)
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus indicators

## 📱 Responsive Breakpoints

- Mobile: 1 column (< 640px)
- Tablet: 2 columns (640px - 1024px)
- Desktop: 3 columns (1024px - 1280px)
- Large Desktop: 4 columns (> 1280px)

## 🎯 Mock Data

The application uses a mock API (JSON file) located at `/public/videos.json` containing 12 sample videos with various genres:
- Programming
- Web Design
- Backend
- Database
- DevOps
- Tools

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is part of a technical assessment.

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Vite for fast development and building

## 🔮 Future Enhancements

Potential improvements that could be added:
- Video categories/filters sidebar
- Sort options (by date, duration, title)
- Dark mode toggle
- Video playlists
- Comments section
- Share functionality
- Improved video player controls
- Backend integration for real video storage

## 📸 Screenshots

### Desktop View
![Desktop View](https://github.com/user-attachments/assets/b1108a26-9ba8-4324-bac5-e9a0b459d062)

### Search Functionality
![Search](https://github.com/user-attachments/assets/227beb31-359a-4cec-bd49-9fd69e1c2e3f)

### Video Details Page
![Video Details](https://github.com/user-attachments/assets/d4613106-cfc4-43ba-86ae-585842140836)

### Mobile Responsive
![Mobile View](https://github.com/user-attachments/assets/cde45368-ab15-463c-a973-983a8835ce7c)

---

Built with ❤️ using React + TypeScript + TailwindCSS

