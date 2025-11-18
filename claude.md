# Life Calendar: Your Life in Weeks

## Project Overview

This is a React-based web application that visualizes a person's life in weeks, inspired by [Tim Urban's "Your Life in Weeks" article](https://waitbutwhy.com/2014/05/life-weeks.html). Each box represents one week of life, and users can add events to mark important moments with different colors representing emotions from sad to happy.

## Tech Stack

- **React** 18.3.1 with TypeScript
- **Recoil** 0.7.7 - State management
- **Chakra UI** 2.10.3 - Component library
- **date-fns** 4.1.0 - Date manipulation
- **Framer Motion** - Animations (via Chakra UI dependency)
- **Create React App** 5.0.1 - Build tooling
- **LocalStorage** - Data persistence

## Project Structure

```
life-in-weeks/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── DataModal/   # Modal for managing events data (JSON editor)
│   │   ├── EventModal/  # Modal for adding/editing individual events
│   │   ├── OptionModal/ # Settings/options modal
│   │   └── WeekTimeline/# Main timeline visualization component
│   ├── utils/
│   │   └── AppState.ts  # Recoil atom definitions
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # Application entry point
│   └── reportWebVitals.ts
├── docs/
│   └── TODO.md          # Project roadmap and todos
└── package.json
```

## Key Concepts

### Event Data Structure

Events are stored as JSON objects with the following structure:

```json
{
  "options": {
    "highlightYears": false,
    "showEveryYears": 5,
    "oneRowOneYear": false
  },
  "events": [
    {
      "type": 3,
      "date": "1982-01-01",
      "title": "👶 I was born"
    }
  ]
}
```

- **type**: Integer from -3 to 3 representing emotion (sad to happy)
  - Each type has a different color
  - -3, -2, -1 (sad colors), 0 (neutral), 1, 2, 3 (happy colors)
- **date**: String in `yyyy-mm-dd` format
- **title**: Event title (can include emojis)

### State Management

The app uses Recoil for state management with the main atom defined in `src/utils/AppState.ts`:

```typescript
appState = {
  options: {
    highlightYears: boolean,
    showEveryYears: number,
    oneRowOneYear: boolean
  },
  events: Event[]
}
```

### Data Persistence

- Uses `localStorage` to persist event data and user preferences
- Tracks visits count in localStorage
- Shows welcome toast on first visit

## Available Scripts

- `npm start` - Run development server on http://localhost:3000
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Build the app (alias for build)

## Development Conventions

1. **TypeScript**: All components use TypeScript with proper typing
2. **Component Structure**: Each component has its own directory under `src/components/`
3. **Styling**: Uses Chakra UI components and emotion for styling
4. **Date Handling**: Use `date-fns` for all date operations
5. **State**: Use Recoil atoms/selectors for shared state
6. **Testing**: Jest + React Testing Library setup available

## Current Roadmap

### Todo
- Customizable colors and themes
- Multiple events in one box
- Edit existing events functionality
- Handle event descriptions
- Mobile optimization

### Completed Features
- Share link with data in URL
- New layout: one row per year option
- Click on box to add events
- localStorage persistence
- Emoji icon support

## Important Files

- `src/App.tsx` - Main app component, handles data state and modals
- `src/components/WeekTimeline/WeekTimeline.tsx` - Core visualization component
- `src/components/DataModal/DataModal.tsx` - JSON editor for bulk event management
- `src/components/EventModal/EventModal.tsx` - Form for adding individual events
- `src/components/OptionModal/OptionModal.tsx` - Settings/preferences UI
- `src/utils/AppState.ts` - Recoil state definitions

## Testing & Building

- Run `npm test` to execute the test suite
- Run `npm run build` before deploying
- The app is optimized for desktop but mobile support is on the roadmap

## Notes for AI Assistant

- When adding new features, follow the existing component structure
- Maintain TypeScript strict typing
- Use Chakra UI components for consistency
- Consider mobile responsiveness (currently optimized for desktop)
- Event types range from -3 to 3 (inclusive)
- Date format must always be `yyyy-mm-dd`
- localStorage is the primary persistence mechanism
