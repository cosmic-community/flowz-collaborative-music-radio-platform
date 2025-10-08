# FlowZ - Collaborative Music Radio Platform

![App Preview](https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=300&fit=crop&auto=format)

A modern music sharing platform built with Next.js 15 and Cosmic CMS that enables users to create collaborative "radio stations" where people can share and discover music together in real-time.

## Features

- 🎵 **Radio Station Creation**: Create custom music stations with themes and descriptions
- 👥 **Collaborative Listening**: Join stations and contribute to shared playlists
- 💫 **Real-time Updates**: See when songs change and users join/leave stations
- 🎨 **Beautiful UI**: Modern dark theme with gradient overlays and smooth animations
- 👤 **User Profiles**: Personalized profiles with listening history and favorites
- 🔍 **Discovery**: Browse trending stations and find new music through community curation
- ❤️ **Social Features**: Follow users, like stations, and see friend activity
- 📊 **Statistics**: Track listening habits and popular stations

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68e5c6e339d1c0696daa5aa1&clone_repository=68e5cb8a39d1c0696daa5ab1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> a music sharing platform using "radios" or "radio stations" as ways to have rooms for people to collaboratively share music

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React Icons** - Icon library
- **Lucide React** - Additional icon set

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Cosmic SDK Examples

### Fetching Radio Stations

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all stations
const stations = await cosmic.objects
  .find({ type: 'stations' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get single station with current track
const station = await cosmic.objects
  .findOne({ type: 'stations', slug: 'chill-vibes' })
  .depth(1)
```

### Creating a New Station

```typescript
const newStation = await cosmic.objects.insertOne({
  type: 'stations',
  title: 'Late Night Jazz',
  slug: 'late-night-jazz',
  metadata: {
    description: 'Smooth jazz for late night listening',
    theme_color: '#4A90E2',
    creator: userId,
    current_track: null,
    listener_count: 0,
    is_active: true
  }
})
```

### Updating Now Playing

```typescript
await cosmic.objects.updateOne(stationId, {
  metadata: {
    current_track: trackId,
    last_updated: new Date().toISOString()
  }
})
```

## Cosmic CMS Integration

### Content Model Structure

**Stations Object Type**
- `title` (text) - Station name
- `description` (textarea) - Station description
- `theme_color` (text) - Hex color code
- `cover_image` (file) - Station artwork
- `creator` (object) - Reference to user profile
- `current_track` (object) - Reference to current track
- `listener_count` (number) - Active listeners
- `is_active` (boolean) - Station status
- `tags` (text) - Genre tags

**Users Object Type**
- `title` (text) - Username
- `bio` (textarea) - User bio
- `avatar` (file) - Profile picture
- `favorite_stations` (objects) - Array of station references
- `listening_time` (number) - Total minutes listened
- `joined_date` (text) - ISO date string

**Tracks Object Type**
- `title` (text) - Song title
- `artist` (text) - Artist name
- `album` (text) - Album name
- `album_art` (file) - Album artwork
- `duration` (number) - Track length in seconds
- `spotify_url` (text) - External link
- `added_by` (object) - User reference

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy

### Deploy to Netlify

1. Connect your repository
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy

## Environment Variables

The application requires these Cosmic CMS credentials:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket identifier
- `COSMIC_READ_KEY` - Read access key
- `COSMIC_WRITE_KEY` - Write access key (for creating/updating content)

<!-- README_END -->