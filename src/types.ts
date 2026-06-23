export interface Artwork {
  id: string | number;
  title: string;
  category: 'Home' | 'Entertainment' | 'Gaming' | 'Nature' | 'Art';
  subcategory?: string;
  imgUrl: string;
  description: string;
  author?: string;
  authorAvatar?: string;
  year?: string | number;
  cameraInfo?: {
    model: string;
    exposure: string;
  };
  tags?: string[];
  trendingRank?: number;
  featured?: boolean;
}

export type PresetFilter = 'filter-normal' | 'filter-warm' | 'filter-cool' | 'filter-bw' | 'filter-vintage';
