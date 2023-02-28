export interface User {
  id: number;
  name: string;
  age: number;
  city: string;
  language: string;
  instagramLink: string;
  profilePicture: string;
  interests: string[];
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}
