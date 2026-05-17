import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, ShieldCheck, Clock, HeartHandshake, 
  TrendingUp, Users, Smartphone, MapPin, 
  CheckCircle2, Briefcase, Landmark, Info
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-32 bg-gradient-to-br from-white via-white to-cbe-green/10 relative">
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-cbe-blue/10 text-cbe-blue border border-cbe-blue/20">
                <span className="flex h-2 w-2 rounded-full bg-cbe-blue mr-2 animate-pulse" />
                CBE Dessie Branch - Digital Evolution
              </div>
              <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl text-cbe-blue leading-tight">
                Secure Banking <br />
                <span className="text-cbe-green">Built for You</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl lg:text-2xl leading-relaxed">
                Empowering the Dessie community with world-class digital banking solutions. 
                Skip the queues, digitalize your transactions, and bank with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/signup">
                  <Button className="bg-cbe-blue hover:bg-cbe-blueHover text-white px-10 py-7 text-lg rounded-full shadow-2xl shadow-cbe-blue/30 group transition-all">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/queue">
                  <Button variant="outline" className="border-2 border-cbe-green text-cbe-green hover:bg-cbe-green/5 px-10 py-7 text-lg rounded-full transition-all">
                    Book Queuing Token
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 md:py-32 bg-white border-y border-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block p-3 bg-cbe-blue/10 rounded-2xl">
                  <Info className="h-8 w-8 text-cbe-blue" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  About CBE Dessie <br />Branch (Piyasa)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Located in the heart of Dessie, our Piyasa branch has been a cornerstone of the community for decades. 
                  We are now evolving into a digital-first hub to solve the long-standing challenges of physical banking.
                </p>
                <ul className="space-y-4">
                  {[
                    "Decades of trusted community service",
                    "Dedicated support for the Dessie trade market",
                    "Pivoting to modern, customer-centric digital solutions",
                    "Committed to financial inclusion for all sectors"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
                      <CheckCircle2 className="h-5 w-5 text-cbe-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="bg-cbe-blue p-8 rounded-3xl text-white shadow-xl">
                    <h4 className="text-4xl font-black">80+</h4>
                    <p className="text-sm opacity-80 mt-1">Years of Legacy</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h4 className="text-4xl font-black text-cbe-green">24/7</h4>
                    <p className="text-sm text-gray-600 mt-1">Digital Support</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h4 className="text-4xl font-black text-cbe-blue">99%</h4>
                    <p className="text-sm text-gray-600 mt-1">Uptime Secure</p>
                  </div>
                  <div className="bg-cbe-green p-8 rounded-3xl text-white shadow-xl">
                    <h4 className="text-4xl font-black">1M+</h4>
                    <p className="text-sm opacity-80 mt-1">Active Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Comprehensive Banking Services</h2>
              <p className="text-lg text-gray-700">Tailored solutions for every financial need, from personal accounts to large-scale business operations.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Landmark, title: "Personal Banking", desc: "Savings, current accounts, and tailored fixed deposits." },
                { icon: Briefcase, title: "Business Banking", desc: "Commercial loans, trade finance, and payroll services." },
                { icon: Smartphone, title: "Mobile Banking", desc: "Instant transfers and bill payments via CBE Birr." },
                { icon: TrendingUp, title: "Loan Services", desc: "Competitive rates for homes, cars, and investments." }
              ].map((service, i) => (
                <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-cbe-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cbe-blue transition-colors">
                    <service.icon className="h-6 w-6 text-cbe-blue group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 font-bold">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-32 bg-white overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center gap-16">
              <div className="text-center max-w-3xl">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose CBE Digital?</h2>
                <p className="text-lg text-gray-700">We combine the strength of Ethiopia's largest bank with cutting-edge technology to solve real-world problems.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-5 bg-blue-50 rounded-full">
                    <ShieldCheck className="h-10 w-10 text-cbe-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Unmatched Security</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">Bank-grade encryption and multi-factor authentication protect your assets 24/7.</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-5 bg-green-50 rounded-full">
                    <Clock className="h-10 w-10 text-cbe-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Zero Wait Time</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">Digitalize your walk-ins with our smart queue management system.</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-5 bg-red-50 rounded-full">
                    <HeartHandshake className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Inclusion First</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">Simple, Amharic-supported UI designed for the elderly and first-time users.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-32 bg-cbe-blue relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10 text-center mx-auto">
            <h2 className="text-4xl font-black text-white mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of customers in Dessie who are already enjoying the speed and security of CBE Digital Banking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button className="bg-white text-cbe-blue hover:bg-gray-100 px-10 py-7 text-lg rounded-full font-bold shadow-xl">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/support">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-7 text-lg rounded-full font-bold">
                  Contact Branch Staff
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Branch Info Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <MapPin className="h-6 w-6 text-cbe-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Visit Us</h4>
                  <p className="text-sm text-gray-700">Piyasa, Dessie, Wollo, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <Users className="h-6 w-6 text-cbe-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Staff Working Hours</h4>
                  <p className="text-sm text-gray-700">Mon - Sat: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="text-xs text-gray-400 font-medium">Licensed by National Bank of Ethiopia</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
