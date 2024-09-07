# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App)
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

# Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Project Setup

- Before starting the project please add .env file and add TMDB and OPENAI KEY into it.

# -------------------------------------------------------------------------------------------------

# -------------------------------------------------------------------------------------------------

# -------------------------------------------------------------------------------------------------

# Netflix GPT Documentation

## Overview

Netflix GPT is a movie recommendation web app built with React, Tailwind CSS, Firebase, and OpenAI APIs. The app integrates TMDB (The Movie Database) API to fetch movie data and OpenAI to enhance the search experience using GPT-powered suggestions. It includes user authentication, movie browsing, search functionality, and multi-language support.

## Features

### Authentication

- **Sign Up/Sign In Forms**: Users can create an account or log in to an existing one.
- **Form Validation**: Ensures correct input on login and sign-up forms.
- **Sign Out**: Allows users to log out of the application.
- **Redirects**: Added functionality to redirect users who aren't logged in to the login page when trying to access
  `/browse` and vice versa.

### Movie Browsing (Post Authentication)

- **Main Movie Section**: Displays a featured movie with a trailer playing in the background, title, and description.
- **Movie Suggestions**: Provides recommendations of movies using the TMDB API.

### Netflix GPT

- **Search Bar**: The app features two types of search inputs:
  1. **Search by Name in TMDB**: Allows users to search for movies by name using TMDB.
  2. **Search by Prompt using GPT AI**: Uses OpenAI to generate movie suggestions based on user prompts.

### Multi-language Support

- The app offers multi-language support, allowing users to interact with the app in various languages.

### Responsive Design

- The application is fully responsive and optimized for different screen sizes, thanks to Tailwind CSS.

## Project Setup

### Prerequisites

- Install [Node.js](https://nodejs.org/) (version 14.x or later).
- Install [Firebase CLI](https://firebase.google.com/docs/cli).
- Obtain API keys for:
  - TMDB (The Movie Database)
  - OpenAI (for GPT functionality)

### Installation Steps

1. **Clone the Repository**:

   ```bash
      git clone <repository-url>
      cd netflix-gpt
   ```

2. **Install Dependencies**:

   ```bash
      npm install
   ```

3. **Configure Environment Variables**:

   - Create a `.env` file in the root of the project.
   - Add your TMDB and OpenAI API keys:
     ```
     REACT_APP_TMDB_API_KEY=<your-tmdb-api-key>
     REACT_APP_OPENAI_API_KEY=<your-openai-api-key>
     ```

4. **Tailwind CSS Configuration**:

   - Tailwind CSS has been pre-configured. Ensure that your environment supports PostCSS.

5. **Firebase Setup**:

   - Configure Firebase in the project by adding your Firebase credentials.
   - Set up authentication, Firestore (if necessary), and hosting (if deploying to Firebase).

6. **Run the Project Locally**:

   ```bash
   npm start
   ```

7. **Deployment**:
   - For deployment, you can use Firebase Hosting:
     ```bash
     firebase deploy
     ```

## Key Components

### Header

- Provides navigation links and displays the user's profile details.

### Routing

- The app uses React Router for handling navigation. The routes include:
  - **Login**: `/login`
  - **Browse**: `/browse`

### Forms

- **Login Form**: Handles user login with validation.
- **Sign Up Form**: Allows new users to create an account, with validation and error handling.

### Firebase Authentication

- The app uses Firebase for user authentication.
- **Sign Up/Sign In** APIs are implemented to handle user authentication.

### Redux Store

- The app uses Redux for state management. Key slices include:
  - `userSlice`: Handles user-related state (e.g., authentication).
  - `movieSlice`: Stores movie data fetched from TMDB.
  - `gptSlice`: Manages GPT-generated movie suggestions.

### Movie Data Fetching

- **TMDB API Integration**: The app fetches data like "Now Playing" movies using TMDB APIs.
- **Custom Hooks**:
  - `useMovieTrailer`: Fetches movie trailer data from TMDB.
  - `useNowPlayingMovies`: Fetches now-playing movies.
  - `usePopularMovies`: Fetches popular movies.
  - `useTopRatedMovies`: Fetches top-rated movies.
  - `useUpcomingMovies`: Fetches upcoming movies.

### Video Playback

- The main movie section includes an embedded YouTube video that auto-plays and is muted by default.

### Search Functionality

- **Two Search Inputs**:
  1. **Search by Name**: Uses TMDB API to search movies by title.
  2. **Search by Prompt**: Uses OpenAI GPT to generate movie recommendations based on user input.

## Constants

- All hardcoded values are stored in a separate constants file for easier management and updates.

## Enhancements

- **Memoization**: Optimized performance by memoizing expensive operations and component rendering.
- **Environment Variables**: Sensitive data (API keys) are stored in `.env` files and excluded from version control using `.gitignore`.

## Future Enhancements

- Improved recommendation algorithms.
- Enhanced user profile customization.
- More robust error handling and user feedback.

### Contact and Support

For any questions or support, feel free to reach out to me.

---
