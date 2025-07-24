export interface Instructor {
  id: string;
  image: string;
  name: string;
  type: "manual" | "automatic";
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
