export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-[#0067b1] mb-8">Terms of Service</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="text-lg font-medium text-gray-900">Effective Date: May 16, 2024</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p>By accessing or using the CBE Digital Banking platform, you agree to be bound by these Terms of Service and all applicable laws and regulations in Ethiopia.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">2. Eligibility</h2>
            <p>You must be at least 18 years old and a customer of the Commercial Bank of Ethiopia to use this platform. Some features may require physical verification at the Dessie branch.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">3. User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account information, including your password. Any activity conducted through your account is your responsibility.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">4. Prohibited Conduct</h2>
            <p>You agree not to use the platform for any illegal activities, including fraud, money laundering, or unauthorized access to other accounts.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">5. Termination</h2>
            <p>CBE reserves the right to suspend or terminate your account at any time if you violate these terms or for security reasons.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
