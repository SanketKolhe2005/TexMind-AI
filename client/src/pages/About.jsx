import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Brain,
  Factory,
  ShieldCheck,
  Users,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-slate-50">

        {/* Hero */}

        <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-24">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <h1 className="text-6xl font-bold">
              About TexMind AI
            </h1>

            <p className="mt-8 text-xl max-w-4xl mx-auto leading-8 text-emerald-100">
              TexMind AI is an AI-powered B2B textile marketplace
              connecting buyers with verified suppliers through
              intelligent fabric recommendations and smart procurement.
            </p>

          </div>

        </section>

        {/* Features */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <h2 className="text-4xl font-bold text-center">
            Why Choose TexMind AI?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <Brain className="mx-auto text-emerald-600" size={50} />

              <h3 className="text-2xl font-bold mt-5">
                AI Matching
              </h3>

              <p className="text-gray-500 mt-3">
                Intelligent fabric recommendations.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <Factory className="mx-auto text-emerald-600" size={50} />

              <h3 className="text-2xl font-bold mt-5">
                Verified Suppliers
              </h3>

              <p className="text-gray-500 mt-3">
                Trusted manufacturers worldwide.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <ShieldCheck className="mx-auto text-emerald-600" size={50} />

              <h3 className="text-2xl font-bold mt-5">
                Secure Procurement
              </h3>

              <p className="text-gray-500 mt-3">
                Safe and transparent transactions.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <TrendingUp className="mx-auto text-emerald-600" size={50} />

              <h3 className="text-2xl font-bold mt-5">
                Analytics
              </h3>

              <p className="text-gray-500 mt-3">
                Real-time inventory insights.
              </p>

            </div>

          </div>

        </section>

        {/* Stats */}

        <section className="bg-white py-20">

          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

            <div>

              <h2 className="text-5xl font-bold text-emerald-600">
                1500+
              </h2>

              <p className="mt-3 text-gray-500">
                Suppliers
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-emerald-600">
                12000+
              </h2>

              <p className="mt-3 text-gray-500">
                Products
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-emerald-600">
                96%
              </h2>

              <p className="mt-3 text-gray-500">
                AI Accuracy
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-emerald-600">
                24/7
              </h2>

              <p className="mt-3 text-gray-500">
                Support
              </p>

            </div>

          </div>

        </section>

        {/* Mission */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <Sparkles className="text-emerald-600" size={45} />

              <h2 className="text-3xl font-bold mt-5">
                Mission
              </h2>

              <p className="mt-5 text-gray-500 leading-7">
                Simplify textile sourcing using Artificial Intelligence.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <Users className="text-emerald-600" size={45} />

              <h2 className="text-3xl font-bold mt-5">
                Vision
              </h2>

              <p className="mt-5 text-gray-500 leading-7">
                Build the world's smartest textile marketplace.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <Brain className="text-emerald-600" size={45} />

              <h2 className="text-3xl font-bold mt-5">
                Technology
              </h2>

              <p className="mt-5 text-gray-500 leading-7">
                React, AI, Machine Learning, Analytics and Cloud.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}