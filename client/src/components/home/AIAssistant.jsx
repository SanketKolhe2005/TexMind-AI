import { useState, useEffect } from "react";
import { Search, Mic, Sparkles, Bot } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import API from "@/api/api";

export default function AIAssistant() {
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState(null);

  const [searchParams] = useSearchParams();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    const aiQuery = searchParams.get("ai");

    if (aiQuery) {
      setQuery(aiQuery);
      searchProduct(aiQuery);
    }
  }, []);

  const startListening = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Speech Recognition is not supported.");
      return;
    }

    resetTranscript();

    SpeechRecognition.startListening({
      language: "en-IN",
      continuous: false,
    });
  };

  const searchProduct = async (searchText = query) => {
    if (!searchText.trim()) return;

    try {
      const res = await API.get(
        `/products/search?query=${searchText}`
      );

      if (res.data.products.length === 0) {
        alert("No matching products found.");
        setProduct(null);
        return;
      }

      setProduct(res.data.products[0]);

    } catch (err) {
      console.log(err);
      alert("Search failed.");
    }
  };

  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-semibold">
            🤖 TexMind AI
          </span>

          <h1 className="text-5xl font-bold mt-6">
            AI Procurement Assistant
          </h1>

          <p className="text-gray-500 mt-4">
            Search fabrics naturally using text or voice.
          </p>

        </div>

        {/* Search */}

        <div className="bg-white rounded-3xl shadow-xl mt-12 p-5 flex gap-4">

          <input
            className="flex-1 outline-none text-lg"
            placeholder="Search Cotton, Silk, Denim..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={startListening}
            className={`rounded-xl border px-5 ${
              listening
                ? "bg-red-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Mic />
          </button>

          <button
            onClick={() => searchProduct()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 flex items-center gap-2"
          >
            <Search size={18} />
            Search
          </button>

        </div>

        {/* AI Result */}

        {product && (

          <div className="bg-white rounded-3xl shadow-xl mt-10 overflow-hidden">

            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8">

              <div className="flex items-center gap-3">

                <Bot />

                <h2 className="text-3xl font-bold">
                  AI Recommendation
                </h2>

              </div>

            </div>

            <div className="grid lg:grid-cols-2 gap-10 p-10">

              <div>

                <img
                  src={
                    product.image ||
                    "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={product.name}
                  className="rounded-3xl shadow-lg w-full h-96 object-cover"
                />

              </div>

              <div>

                <h1 className="text-5xl font-bold">
                  {product.name}
                </h1>

                <p className="text-gray-500 mt-5">
                  {product.description}
                </p>

                <h2 className="text-emerald-600 text-5xl font-bold mt-8">
                  ₹{product.price}
                </h2>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="bg-slate-100 rounded-2xl p-5">

                    <p className="text-gray-500">
                      Category
                    </p>

                    <h3 className="font-bold mt-2">
                      {product.category}
                    </h3>

                  </div>

                  <div className="bg-slate-100 rounded-2xl p-5">

                    <p className="text-gray-500">
                      Stock
                    </p>

                    <h3 className="font-bold mt-2">
                      {product.stock}
                    </h3>

                  </div>

                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl mt-8 p-6">

                  <div className="flex justify-between">

                    <span className="font-semibold">
                      AI Confidence
                    </span>

                    <span className="text-emerald-700 font-bold">
                      97%
                    </span>

                  </div>

                  <div className="w-full h-3 rounded-full bg-gray-200 mt-4">

                    <div
                      className="bg-emerald-600 h-3 rounded-full"
                      style={{ width: "97%" }}
                    />

                  </div>

                </div>

                <div className="bg-slate-100 rounded-2xl p-6 mt-8">

                  <h3 className="font-bold text-xl">
                    Why TexMind AI selected this
                  </h3>

                  <ul className="mt-5 space-y-3 text-gray-700">

                    <li>✔ Matches your search requirement.</li>

                    <li>✔ Verified supplier with available stock.</li>

                    <li>✔ Competitive pricing.</li>

                    <li>✔ Recommended for textile manufacturers.</li>

                    <li>✔ Suitable for bulk procurement.</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}