import { createBucketClient } from '@cosmicjs/sdk'
import type { Station, User, Track, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all active radio stations
export async function getStations(): Promise<Station[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'stations' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const stations = response.objects as Station[];
    
    // Manual sorting by listener count (descending)
    return stations.sort((a, b) => {
      const countA = a.metadata?.listener_count || 0;
      const countB = b.metadata?.listener_count || 0;
      return countB - countA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch stations');
  }
}

// Get single station by slug
export async function getStation(slug: string): Promise<Station | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'stations', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const station = response.object as Station;
    
    if (!station || !station.metadata) {
      return null;
    }
    
    return station;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch station');
  }
}

// Get user profile
export async function getUserProfile(userId: string): Promise<User | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'users', id: userId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const user = response.object as User;
    
    if (!user || !user.metadata) {
      return null;
    }
    
    return user;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch user profile');
  }
}

// Get featured/trending stations
export async function getFeaturedStations(limit: number = 6): Promise<Station[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'stations',
        'metadata.is_active': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const stations = response.objects as Station[];
    
    // If no stations found, return empty array
    if (!stations || stations.length === 0) {
      return [];
    }
    
    // Manual sorting by listener count and return limited results
    return stations
      .sort((a, b) => {
        const countA = a.metadata?.listener_count || 0;
        const countB = b.metadata?.listener_count || 0;
        return countB - countA;
      })
      .slice(0, limit);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    // Log the error but return empty array instead of throwing
    console.error('Error fetching featured stations:', error);
    return [];
  }
}

// Get stations by genre
export async function getStationsByGenre(genre: string): Promise<Station[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'stations',
        'metadata.genre': genre,
        'metadata.is_active': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const stations = response.objects as Station[];
    
    if (!stations || stations.length === 0) {
      return [];
    }
    
    return stations.sort((a, b) => {
      const countA = a.metadata?.listener_count || 0;
      const countB = b.metadata?.listener_count || 0;
      return countB - countA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching stations by genre:', error);
    return [];
  }
}

// Create new station
export async function createStation(data: {
  title: string;
  description: string;
  theme_color: string;
  creator_id: string;
  tags?: string[];
}): Promise<Station> {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'stations',
      title: data.title,
      slug: data.title.toLowerCase().replace(/\s+/g, '-'),
      metadata: {
        description: data.description,
        theme_color: data.theme_color,
        creator: data.creator_id,
        listener_count: 0,
        is_active: true,
        tags: data.tags || [],
        created_date: new Date().toISOString(),
      }
    });
    
    return response.object as Station;
  } catch (error) {
    console.error('Error creating station:', error);
    throw new Error('Failed to create station');
  }
}

// Update station's current track
export async function updateStationTrack(
  stationId: string, 
  trackId: string | null
): Promise<void> {
  try {
    await cosmic.objects.updateOne(stationId, {
      metadata: {
        current_track: trackId,
        last_updated: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error updating station track:', error);
    throw new Error('Failed to update station track');
  }
}

// Update listener count
export async function updateListenerCount(
  stationId: string,
  count: number
): Promise<void> {
  try {
    await cosmic.objects.updateOne(stationId, {
      metadata: {
        listener_count: count
      }
    });
  } catch (error) {
    console.error('Error updating listener count:', error);
    throw new Error('Failed to update listener count');
  }
}