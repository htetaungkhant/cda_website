import { DrivingMode } from "./global";

export interface InstructorImage {
  id: string;
  image: string;
  thumbnail: string;
}

export interface Instructor {
  id: string;
  image: InstructorImage;
  name: string;
  drivingMode: DrivingMode;
  description: string;
  link?: string;
  totalDriveUrl: string;
  noOfBookings: number;
  createdAt: string;
  updatedAt: string;
}
