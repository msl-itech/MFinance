export interface Testimonial {
  id: string;
  client_name: string;
  client_company?: string;
  client_email: string;
  client_phone?: string;
  testimonial_type: 'text' | 'audio' | 'video';
  content?: string;
  media_url?: string;
  image_url?: string;
  rating: number;
  allow_website_publication: boolean;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}