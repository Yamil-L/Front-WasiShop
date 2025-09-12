export interface UserDto {
  id: string;
  name: string;
  lastname: string;
  email: string;
  gender: 'Male' | 'Female' | 'Other';
  birthdate: Date | null;
  phone_number: string | null;
  newsletter_subscribed: boolean;
}
