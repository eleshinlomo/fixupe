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
  name: "Filipe Perez",
  designation: "Business Owner",
  content:
    "Fixupe is the real deal. We got 500 users in just one week. Recommended for all Product Managers.",
  image: "/images/testimonials/auth-01.png",
  star: 5,
},
{
  id: 2,
  name: "Evans Chuks",
  designation: "MD, Peso",
  content:
    "I love the dashboard. It feels like we are already in business with all the tools we had access to.",
  image: "/images/testimonials/auth-02.png",
  star: 5,
},
{
  id: 3,
  name: "Tyler Combs",
  designation: "Former Truck Driver",
  content:
    "I never knew my idea was worth a couple of thousands until I put out a landing page.",
  image: "/images/testimonials/auth-03.png",
  star: 5,
},
];