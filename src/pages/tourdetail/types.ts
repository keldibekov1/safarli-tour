export interface Agency {
  name: string;
  logo: string;
  isVerified: boolean;
  phone: string;
  telegram: string;
}

export interface Tour {
  id: string;
  images: string[];
  title: string;
  destination: string;
  duration: string;
  dates: string;
  price: number;
  availableSeats: number;
  description: string;
  included: string[];
  notIncluded: string[];
  agency: Agency;
}
