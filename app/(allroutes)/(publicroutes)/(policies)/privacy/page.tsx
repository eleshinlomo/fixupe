import { Button } from "@/components/ui/button"
import Link from 'next/link' 



const PrivacyPage = () => {
  return (
    <div className="container mx-auto p-8 bg-white text-black">
        <Button className="my-3" asChild>
          <Link href='/'>Back to Home</Link>
        </Button>
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: October 24, 2023</p>

      <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
      <p className="mb-4">
        Welcome to MyAfros, a platform offering AI services. 
        This Privacy Policy explains how we collect, use, 
        and protect your personal information. By accessing or using our services,
         you consent to the practices described in this policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
      <p className="mb-4">
        MyAfros may collect various types of information to provide and improve our services. This may include personal data (e.g., name, email, billing information), usage data, and technical information (e.g., IP address, device information, cookies).
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
      <p className="mb-4">
        We use the collected information to:
        <ul className="list-disc list-inside mb-2">
          <li>Deliver and personalize our services.</li>
          <li>Communicate with you.</li>
          <li>Improve our services and develop new features.</li>
          <li>Ensure security and investigate violations.</li>
          <li>Comply with legal requirements.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
      <p className="mb-4">
        MyAfros takes data security seriously. We implement technical and organizational 
        measures to safeguard your information, including encryption, access controls, 
        and regular security assessments.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
      <p className="mb-4">
        You have choices regarding your data, including the right to:
        <ul className="list-disc list-inside mb-2">
          <li>Access, update, or delete your data.</li>
          <li>Opt out of certain data processing.</li>
          <li>Withdraw consent where applicable.</li>
        </ul>
        To exercise your rights, please contact us using the information 
        provided in the Contact Us section below.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Sharing Your Information</h2>
      <p className="mb-4">
        MyAfros may share your information with third parties, including service 
        providers, affiliates, 
        and legal authorities when required. We do not sell your data to third parties.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
      <p className="mb-4">
        For any questions or concerns regarding this Privacy 
        Policy or your personal information, please contact us at:
        support@myafros.com
      </p>

      <Button className="my-3" asChild>
          <Link href='/'>Back to Home</Link>
        </Button>
    </div>
  )
}

export default PrivacyPage