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
  name: "Adetoun Waters",
  designation: "Nurse",
  content:
    "Petrolage played a crucial role in securing my current position. Their recruiters demonstrated unparalleled professionalism throughout the process.",
  image: "/images/testimonials/auth-01.png",
  star: 5,
},
{
  id: 2,
  name: "Emilia Tokunbo",
  designation: "Software Engineer",
  content:
    "I found my current job on the petrolage's website. I recommend this platform to anyone looking for opportunities in the Nigerian tech. Big thanks to the team.",
  image: "/images/testimonials/auth-02.png",
  star: 5,
},
{
  id: 3,
  name: "Shane Okoro",
  designation: "Petroleum Engineer",
  content:
    "After finishing my masters in Petroleum Engineering, I started applying for jobs on this platform. Today I work with a company I love. Grateful to the Petrolage team.",
  image: "/images/testimonials/auth-03.png",
  star: 5,
},
];