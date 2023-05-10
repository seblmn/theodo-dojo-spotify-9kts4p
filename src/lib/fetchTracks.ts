import { SavedTrack } from 'spotify-types';

const apiToken: string = 'BQAF8ugqUl0p-DctNrJn5phB29H96ofbLZ68ZKczkYtCHAirUuNldXlBfHR0s9pZ6fqzHPTZD__nR5L3WgVNZz4lsH0vduMXnjam0-CBzsYf0JoI2Sg0q2UMJbqCo6b1zyVa-a1vnVZIjIkynyB_-vXLqM2WyqGLamFMZsK-EVi9rkw7EffF1KNuw9b2nOGcg0S6CeVusfvyhBH2rb0';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};
