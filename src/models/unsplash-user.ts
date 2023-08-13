interface ImageUrls {
  small: string;
  medium?: string;
  large?: string;
}

export interface UnsplashUser {
  username: string;
  first_name: string;
  last_name: string;
  profile_image: ImageUrls ;
}
