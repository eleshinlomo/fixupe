import { Button } from "@/components/ui/button"
import Link from 'next/link'

const TermsPage = () => {
    return (
      <div className="container mx-auto p-8 bg-white text-black ">

      <Button className="my-3 bg-blue-500 hover:bg-blue-500 text-white rounded-2xl" asChild>
          <Link href='/'>Back to Home</Link>
        </Button>

      <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
      <p className="mb-4">Last updated: October 24, 2023</p>

      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using MyAfros, you agree to these Terms of Service. If you do not agree with these terms, please do not use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. User Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years old or the legal age in your jurisdiction to use our services. By using our services, you represent and warrant that you are eligible to do so.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
      <p className="mb-4">
        You may be required to create an account. You agree to provide accurate and complete information during registration and to keep your credentials secure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
      <p className="mb-4">
        Users are responsible for their content and activities on MyAfros. You may not post harmful, infringing, or inappropriate content.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data</h2>
      <p className="mb-4">
        Our Privacy Policy governs the collection and use of your personal data. By using MyAfros, you consent to the practices described in the Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
      <p className="mb-4">
        MyAfros retains ownership of its intellectual property. You may not use our trademarks, content, or services without prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
      <p className="mb-4">
        MyAfros and its affiliates shall not be liable for any indirect, incidental, or consequential damages. Your sole remedy is to discontinue using our services.
      </p>

      

      <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
      <p className="mb-4">
        For any questions or concerns regarding these Terms of Service, please contact us at:
        support@myafros.com
      </p>
      <Button className="my-3 bg-blue-500 hover:bg-blue-500 text-white rounded-2xl" asChild>
          <Link href='/'>Back to Home</Link>
        </Button>
    </div>
    )
  }
  
  export default TermsPage