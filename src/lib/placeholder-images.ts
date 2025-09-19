import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrls: string[];
  imageHints: string[];
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
