// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Station object type
export interface Station extends CosmicObject {
  type: 'stations';
  metadata: {
    description?: string;
    theme_color?: string;
    cover_image?: {
      url: string;
      imgix_url: string;
    };
    creator?: User;
    current_track?: Track;
    listener_count?: number;
    is_active?: boolean;
    tags?: string[];
    created_date?: string;
    genre?: string;
    schedule?: string;
    is_live?: boolean;
  };
}

// User profile object type
export interface User extends CosmicObject {
  type: 'users';
  metadata: {
    bio?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    favorite_stations?: Station[];
    listening_time?: number;
    joined_date?: string;
    follower_count?: number;
    following_count?: number;
  };
}

// Track object type
export interface Track extends CosmicObject {
  type: 'tracks';
  metadata: {
    artist?: string;
    album?: string;
    album_art?: {
      url: string;
      imgix_url: string;
    };
    duration?: number;
    spotify_url?: string;
    added_by?: User;
    added_date?: string;
    play_count?: number;
  };
}

// Listening session type
export interface ListeningSession extends CosmicObject {
  type: 'sessions';
  metadata: {
    station?: Station;
    user?: User;
    track?: Track;
    started_at?: string;
    ended_at?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isStation(obj: CosmicObject): obj is Station {
  return obj.type === 'stations';
}

export function isUser(obj: CosmicObject): obj is User {
  return obj.type === 'users';
}

export function isTrack(obj: CosmicObject): obj is Track {
  return obj.type === 'tracks';
}

// Utility types
export type CreateStationData = Omit<Station, 'id' | 'created_at' | 'modified_at'>;
export type UpdateStationData = Partial<Station['metadata']>;