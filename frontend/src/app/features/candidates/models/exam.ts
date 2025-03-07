export interface Exam {
  id: number;
  candidate: string;
  location: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'to-organize';
}
