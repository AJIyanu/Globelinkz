export type BookingPayload = {
  name: string;
  phone: string;
  email: string;
  businessType: string;
  location?: string;
  challenge?: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  win: string;
  image: string;
  alt: string;
};

export type Review = {
  initial: string;
  name: string;
  source: string;
  text: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  micro: string;
};
