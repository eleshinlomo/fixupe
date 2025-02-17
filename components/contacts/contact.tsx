import FeedbackPage from '@/app/(allroutes)/(publicroutes)/feedbackpage/page';
import Image from 'next/image';

export const Contact = () => {
  return (
    <div className="mt-12 text-center flex flex-col justify-center items-center px-6 text-black">
      <p className="font-extrabold py-8">CONTACT PAGE</p>

      <p className="flex flex-wrap text-muted-foreground">
        Thanks for wanting to reach out.
      </p>
      <p className="flex flex-wrap">
        Please send a mail to <a href="mailto:mgrsconcept@gmail.com" className="text-blue-500 hover:underline">mgrsconcept@gmail.com</a>
      </p>

      <p className="my-4">or</p>

      <FeedbackPage />
    </div>
  );
};