// types.ts

// Define interfaces for different types of content

export interface Subheading {
    _type: 'subheading';
    value: string;
    color?: string;
    fontSize?: number;
  }
  
  export interface TextContent {
    _type: 'textContent';
    value: any[]; // Adjust the type according to your rich text structure in Sanity
    color?: string;
    fontSize?: number;
  }
  
  export interface ImageWithCaption {
    _type: 'imageWithCaption';
    image: { asset: { url: string } };
    caption: string;
    borderColor?: string;
    borderWidth?: number;
  }
  
  // Define a union type for all content types
  export type ContentItem = Subheading | TextContent | ImageWithCaption;
  
  // Define interface for report content
  export interface ReportContent {
    heading: string;
    content: ContentItem[];
  }
  