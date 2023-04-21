// User.ts
export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  events: Event[];
  registrations: Registration[];
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  ORGANIZER = 'ORGANIZER',
  USER = 'USER',
}

// Event.ts
export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  coverImage: string | null;
  organizerId: string;
  organizer: User;
  tickets: Ticket[];
  createdAt: Date;
  updatedAt: Date;
}

// Ticket.ts
export interface Ticket {
  id: string;
  type: string;
  price: number;
  quantity: number;
  eventId: string;
  event: Event;
  createdAt: Date;
  updatedAt: Date;
  Registration: Registration[];
}

// Registration.ts
export interface Registration {
  id: string;
  attendeeId: string;
  attendee: User;
  ticket: Ticket;
  ticketId: string;
  createdAt: Date;
  updatedAt: Date;
}
