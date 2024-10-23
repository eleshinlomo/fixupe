import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We like reading from people. Please drop us a message."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
