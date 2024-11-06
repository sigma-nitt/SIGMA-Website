export interface Subheading {
    _type: 'subheading';
    value: string;
    color?: string;
    fontSize?: number;
  }
  
  export interface TextContent {
    _type: 'textContent';
    value: any[];
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
  
export type ContentItem = Subheading | TextContent | ImageWithCaption;

export interface ReportContent {
  heading: string;
  content: ContentItem[];
}
  