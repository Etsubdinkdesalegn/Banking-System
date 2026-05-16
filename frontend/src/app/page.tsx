import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="#">
          <div className="w-10 h-10 bg-[#0067b1] rounded-lg flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xl">CBE</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-[#0067b1] hidden sm:inline-block">Digital Banking</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#0067b1] transition-colors" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-[#0067b1] transition-colors" href="/support">
            Support
          </Link>
          <Link className="text-sm font-medium hover:text-[#0067b1] transition-colors" href="/login">
            Login
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-white via-white to-[#00a651]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-[#0067b1]">
                  Banking Reimagined for <br />
                  <span className="text-[#00a651]">Dessie Branch</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4 leading-relaxed">
                  Skip the lines. Digitalize your transactions. Experience the future of banking with Commercial Bank of Ethiopia, Piyasa Branch.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-[#0067b1] hover:bg-[#005a9b] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#0067b1]/20 group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-[#00a651] text-[#00a651] hover:bg-[#00a651]/5 px-8 py-6 text-lg rounded-full">
                  Book a Token
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-3 bg-[#0067b1]/10 rounded-full">
                  <Clock className="h-10 w-10 text-[#0067b1]" />
                </div>
                <h3 className="text-xl font-bold">Smart Queue</h3>
                <p className="text-gray-500">Book your turn online. Check live status and arrive only when it's your turn. No more 90% waiting time!</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-3 bg-[#00a651]/10 rounded-full">
                  <ShieldCheck className="h-10 w-10 text-[#00a651]" />
                </div>
                <h3 className="text-xl font-bold">Secure Transactions</h3>
                <p className="text-gray-500">End-to-end encrypted transfers, bill payments, and airtime top-ups. Bank with peace of mind.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-3 bg-red-100 rounded-full">
                  <HeartHandshake className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Guided Support</h3>
                <p className="text-gray-500">Special assistance for our elderly and first-time customers. Simple interface with voice guidance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-white border-t border-gray-100">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2024 Commercial Bank of Ethiopia. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
