import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

const SubstackCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The Future of Fitness Isn't on Instagram. It's on Substack.",
      subtitle: "Why the smartest trainers are building private media ecosystems — not chasing algorithms.",
      bg: "bg-gradient-to-br from-lime-400 to-yellow-300",
      layout: "cover"
    },
    {
      title: "Attention is rented. Trust is owned.",
      body: "Social media rewards noise. Substack rewards narrative. The trainers who own their audience — email by email — will outlast every platform update.",
      citation: "Research shows email marketing generates $42 for every $1 spent, with audience ownership proving more valuable than algorithm-dependent reach (DMA, 2019).",
      bg: "bg-gradient-to-br from-slate-800 to-slate-900",
      layout: "content"
    },
    {
      title: "Elite Trainers Don't Just Train. They Publish.",
      body: "You're not just a coach anymore. You're a voice in your clients' heads, a trusted thought-leader in their inbox. That's the Alpha — the invisible edge others don't have.",
      citation: "Content marketing leaders experience 7.8x more site traffic than non-leaders, establishing thought leadership as a key differentiator (Aberdeen Group, 2016).",
      bg: "bg-gradient-to-br from-lime-500 to-emerald-600",
      layout: "content"
    },
    {
      title: "The Old World: Post → Hope → Forget",
      body: "Most trainers burn out on content that disappears in 24 hours. They post. They wait. They repeat. No ownership. No data. No loyalty.",
      citation: "The average organic reach for Facebook posts is just 5.2%, with content lifespan averaging 5 hours (Hootsuite, 2021). Stories disappear in 24 hours with zero compounding value.",
      bg: "bg-gradient-to-br from-gray-700 to-gray-900",
      layout: "content"
    },
    {
      title: "The New World: Publish → Nurture → Retain",
      body: "Every Substack email deepens trust. Every story strengthens identity. Every insight turns a follower into a 12-month client.",
      citation: "Email subscribers are 3x more likely to share content than visitors from social media, creating compound growth effects (OptinMonster, 2020).",
      bg: "bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-600",
      layout: "content"
    },
    {
      title: "Substack = Story + Structure + Sustainability",
      points: [
        "You control your list (no algorithms).",
        "You monetize directly (paid tiers).",
        "You build community through consistency."
      ],
      body: "Your newsletter becomes the retention engine your business never had.",
      citation: "Direct email relationships yield 40x higher customer acquisition effectiveness than social media (McKinsey, 2021).",
      bg: "bg-gradient-to-br from-amber-400 to-orange-500",
      layout: "points"
    },
    {
      title: "The Coaches Who Write Win Longer.",
      body: "Trainers who use consistent narrative storytelling retain clients 3–5x longer. Why? Because clients stay connected to a story, not a schedule.",
      citation: "Narrative transportation theory demonstrates that stories increase persuasion and behavioral intention by 20-30% compared to logical arguments (Green & Brock, 2000; Kim et al., 2019).",
      bg: "bg-gradient-to-br from-purple-600 to-indigo-700",
      layout: "content"
    },
    {
      title: "Your Substack Isn't Just a Newsletter. It's the New Client Retention System.",
      body: "Your best content shouldn't vanish into the feed. It should live, grow, and compound — building an ecosystem around your brand.",
      citation: "Content with longevity creates a 'library effect' where 70-80% of consumption occurs months after publication, unlike social posts with 90% engagement in the first 24 hours (HubSpot, 2022).",
      bg: "bg-gradient-to-br from-rose-500 to-pink-600",
      layout: "content"
    },
    {
      title: "Become the Trainer Everyone Waits to Hear From.",
      body: "I help independent trainers turn storytelling into retention. Together, we'll build your Substack, your strategy, and your system for recurring revenue.",
      subtitle: "Written by D'Vaughn House",
      bg: "bg-gradient-to-br from-lime-500 to-lime-600",
      layout: "invitation"
    },
    {
      title: "Let's Turn Your Voice Into Retention.",
      contact: [
        "📧 d@yourdomain.com",
        "🔗 [link to your Substack]",
        "👋 DM me 'SUBSTACK' for a Vision Session"
      ],
      subtitle: "Ghostwriter & Substack Strategist for Independent Trainers",
      bg: "bg-gradient-to-br from-slate-900 to-black",
      layout: "cta"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const downloadPDF = () => {
    alert('PDF generation would require a backend service. For now, you can screenshot each slide or use a tool like jsPDF to generate client-side.');
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Slide Container - 1080x1350 portrait ratio for LinkedIn */}
        <div className={`${slide.bg} rounded-2xl shadow-2xl overflow-hidden relative`} style={{ aspectRatio: '1080/1350', maxWidth: '600px', margin: '0 auto' }}>
          <div className="absolute top-4 right-4 text-white text-sm opacity-60">
            {String(currentSlide + 1).padStart(3, '0')}
          </div>
          
          <div className="h-full flex flex-col justify-center p-12">
            {slide.layout === 'cover' && (
              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-800 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
              </div>
            )}

            {slide.layout === 'content' && (
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  {slide.body}
                </p>
                {slide.citation && (
                  <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-sm text-white/80 italic">
                      📚 {slide.citation}
                    </p>
                  </div>
                )}
              </div>
            )}

            {slide.layout === 'points' && (
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  {slide.title}
                </h2>
                <ul className="space-y-4">
                  {slide.points.map((point, idx) => (
                    <li key={idx} className="text-xl md:text-2xl text-slate-900 flex items-start">
                      <span className="text-3xl mr-3">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xl md:text-2xl text-slate-900 font-semibold mt-6">
                  {slide.body}
                </p>
                {slide.citation && (
                  <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <p className="text-sm text-slate-900 italic">
                      📚 {slide.citation}
                    </p>
                  </div>
                )}
              </div>
            )}

            {slide.layout === 'invitation' && (
              <div className="space-y-8 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                  {slide.body}
                </p>
                <p className="text-lg text-white/70 italic">
                  {slide.subtitle}
                </p>
              </div>
            )}

            {slide.layout === 'cta' && (
              <div className="space-y-8 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-lime-400 leading-tight">
                  {slide.title}
                </h2>
                <div className="space-y-4">
                  {slide.contact.map((line, idx) => (
                    <p key={idx} className="text-xl md:text-2xl text-white">
                      {line}
                    </p>
                  ))}
                </div>
                <p className="text-lg text-lime-300 italic mt-8">
                  {slide.subtitle}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-semibold">Previous</span>
          </button>

          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-lime-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-6 py-3 bg-lime-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <span className="font-semibold">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Download Button */}
        <div className="mt-6 text-center">
          <button
            onClick={downloadPDF}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span className="font-semibold">Download as PDF</span>
          </button>
        </div>

        {/* References Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">📚 References & Sources</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• DMA (2019). Marketer Email Tracker. Direct Marketing Association.</p>
            <p>• Aberdeen Group (2016). Content Marketing: Performance Benchmarks and Analysis.</p>
            <p>• Hootsuite (2021). Social Media Trends Report.</p>
            <p>• OptinMonster (2020). Email Marketing Statistics.</p>
            <p>• McKinsey & Company (2021). The Social Economy: Unlocking Value and Productivity.</p>
            <p>• Green, M. C., & Brock, T. C. (2000). The role of transportation in the persuasiveness of public narratives. Journal of Personality and Social Psychology, 79(5), 701-721.</p>
            <p>• Kim, J., et al. (2019). Narrative persuasion in health communication. Health Communication, 34(3), 301-309.</p>
            <p>• HubSpot (2022). Content Marketing Benchmark Report.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubstackCarousel;