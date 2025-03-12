export interface Address {
  zipCode: string;
  street: string;
  city: string;
  state: string;
  country: string;
}

export interface User {
  id: string;
  name: string;
  profileImageUrl: string;
  email: string;
  isOnline: boolean;
  phoneNumber?: string;
}
