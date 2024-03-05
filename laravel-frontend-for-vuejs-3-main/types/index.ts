export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date | null;
  two_factor_secret: string | null;
  two_factor_recovery_codes: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface Link {
  id: string;
  created_at: Date | null;
  updated_at: Date | null;
  short_link: string;
  full_link: string;
  views: number;
}

export interface ErrorResponse {
  message: string;
  errors: Record<string, string[]>;
}

export interface PaginateResponse<T> {
  current_number: number;
  data: T[];
  first_page_url: string | null;
  from: number;
  last_page: number;
  last_page_url: string | null;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
