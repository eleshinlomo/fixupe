export interface TestimonialProps {
  id: number;
  name: string;
  designation: string;
  content: string;
  image: string;
  star: number;
}

export const testimonialData: TestimonialProps[] = [
{
  id: 1,
  name: "Peters Shrobs",
  designation: "Nurse",
  content:
    "Finally a solution to keep track of our patients.This is an essential tool for every keeper",
  image: "/images/testimonials/auth-01.png",
  star: 5,
},
{
  id: 2,
  name: "Fiji Yita",
  designation: "Software Engineer",
  content:
    "I connected this to my home camera and was able to detect a hidden fox in my yard.",
  image: "/images/testimonials/auth-02.png",
  star: 5,
},
{
  id: 3,
  name: "Paul Shan",
  designation: "Petroleum Engineer",
  content:
    "Camsecure object detector will save your life. Highly recommended. It is also affordable",
  image: "/images/testimonials/auth-03.png",
  star: 5,
},
];