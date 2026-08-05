import { useState } from "react";
import { Bot, Send } from "lucide-react";
import API from "@/api/api";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const res = await API.post("/ai/chat", {
        prompt: question,
      });

      setAnswer(res.data.answer);

    } catch (err) {
      console.log(err);

      setAnswer("AI service unavailable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          AI Textile Assistant
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Ask anything about fabrics, suppliers or recommendations.
        </p>

        <div className="mt-10 flex gap-4">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: Best fabric for office shirts"
            className="flex-1 border rounded-xl p-4"
          />

          <button
            onClick={askAI}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-xl"
          >
            <Send />
          </button>

        </div>

        <div className="bg-slate-100 rounded-3xl p-8 mt-10 min-h-[220px]">

          <div className="flex items-center gap-3 mb-5">

            <Bot
              size={32}
              className="text-emerald-600"
            />

            <h3 className="text-2xl font-bold">
              TexMind AI
            </h3>

          </div>

          {loading ? (

            <p className="text-xl animate-pulse">
              Thinking...
            </p>

          ) : (

            <p className="leading-8 whitespace-pre-wrap">
              {answer || "Ask your first question."}
            </p>

          )}

        </div>

      </div>

    </section>
  );
}