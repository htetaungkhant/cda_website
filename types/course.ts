import { DrivingMode } from "./global";

export type CourseCategory = "intensive" | "bulk booking" | "standard";

export interface Course {
  id: string;
  name: string;
  category: CourseCategory;
  drivingMode: DrivingMode;
  descriptionList: string[];
  suitability?: string | null;
  duration?: string | null;
  timeInHours?: number | null;
  primaryPrice: number;
  secondaryPrice: number;
  experience?: string | null;
  cardColor?: "gold" | "silver" | "bronze" | "white" | null;
  createdAt: string;
  updatedAt: string;
}

export interface CoursePackage {
  id: string;
  title: string;
  courseTiming?: string | number;
  subTitle: string;
  practicalTestPrice: number | string;
  noPracticalTestPrice: number | string;
  description: string;
  courseDescription: string;
  courseRequirements: {
    title?: string;
    description: string;
  }[];
  features: {
    image: string;
    title: string;
  }[];
  color: "bronze" | "extended" | "silver" | "gold";
}
