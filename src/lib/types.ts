export interface Landmark {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageId: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageId: string;
  longDescription: string;
  history: string;
  travelTips: string;
  landmarks: Landmark[];
}
