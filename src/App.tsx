import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, Sparkles, ChevronRight } from 'lucide-react';
import Schedule from './pages/Schedule';
import RSVP from './pages/RSVP';
import Hackathon from './pages/Hackathon';
import acmLogo from './images/ACM_USD_logo_transparent.png';

type Page = 'home' | 'schedule' | 'rsvp' | 'hackathon';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Small delay to allow smooth scroll to start before page change
    setTimeout(() => {
      setCurrentPage(page);
    }, 100);
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'schedule':
        return <Schedule onNavigate={handleNavigate} />;
      case 'rsvp':
        return <RSVP onNavigate={handleNavigate} />;
      case 'hackathon':
        return <Hackathon onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return renderPage();
}

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <nav className="relative z-10 border-b border-cyan-500/20 bg-gray-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={acmLogo} alt="ACM USD Logo" className="w-16 h-16" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Events
              </span>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate('home')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('schedule')}
                className="text-gray-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Schedule
              </button>
              <button
                onClick={() => onNavigate('hackathon')}
                className="text-gray-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Hackathon
              </button>
              <button
                onClick={() => onNavigate('rsvp')}
                className="text-gray-400 hover:text-cyan-300 transition-colors font-medium"
              >
                RSVP
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="mb-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">UPCOMING EVENT</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
              ACM Tech Talk:
            </span>
            <br />
            <span className="text-white">Breaking Into</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Industry
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore how professionals are integrating AI into their work, building successful AI startups, and using hackathons as launchpads for innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <Calendar className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Date & Time</h3>
            <p className="text-gray-400">Saturday, November 22, 2025</p>
            <p className="text-gray-400">10:00 AM - 7:30 PM</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <MapPin className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400">University of San Diego</p>
            <p className="text-gray-400">UC Forum ABC</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <Users className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Capacity</h3>
            <p className="text-gray-400">Limited to 200 attendees</p>
            <p className="text-cyan-400 font-medium">185 spots remaining</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-12 mb-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About This Event
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              The AI revolution is here, and the opportunities are limitless. Whether you're a student exploring career options, a developer looking into AI, or simply curious about the field, this tech talk will provide you with the insights and connections you need to succeed.
            </p>
            <p>
              Our distinguished panel of industry experts from leading tech companies will share their journeys, discuss current trends in AI, and provide advice on breaking into this exciting field. From AI ethics to vibe coding, product management to startups, we'll cover the full spectrum of career paths available.
            </p>
            <p>
              This isn't just another lecture - it's an interactive experience. You'll have the opportunity to ask questions, network with professionals, and connect with fellow attendees who share your passion for AI technology.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-12 mb-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
                <p className="text-gray-400">
                  Explore how artificial intelligence is being applied across industries and how professionals are adapting to its rapid growth in the workplace.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">From Idea to AI Startup</h3>
                <p className="text-gray-400">
                  Hear from founders about the journey of turning an AI concept into a successful startup, from identifying a need to developing real-world solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Hands-On Innovation</h3>
                <p className="text-gray-400">
                  Collaborate in the Create-A-Thon hackathon to design and present creative projects that bring AI ideas to life through teamwork and problem-solving.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Growth in AI</h3>
                <p className="text-gray-400">
                  Learn how to begin your career in AI through mentorship, networking, and exposure to professionals shaping the future of technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Event Highlights
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Panel Discussion</h3>
                <p className="text-gray-400">
                  Engage with AI industry professionals and startup founders as they share insights about careers, innovation, and real-world applications of AI. Each session includes a Q&A so you can ask your own questions.                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive Workshops & Demos</h3>
                <p className="text-gray-400">
                  Get hands-on experience with AI tools and projects through live demos and workshops. Learn practical skills and see concepts in action.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Create-A-Thon Hackathon</h3>
                <p className="text-gray-400">
                  Collaborate with peers to design and present innovative AI products. Experience the full cycle of problem-solving, teamwork, and presentation, culminating in a showcase judged by industry professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => onNavigate('rsvp')}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
          >
            <span>Reserve Your Spot</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-gray-400">
            Don't miss this opportunity to accelerate your AI career + get free tokens and access codes!
          </p>

          <div className="mt-8">
            <button
              onClick={() => onNavigate('hackathon')}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-lg font-semibold hover:from-pink-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]"
            >
              <span>Learn About the Hackathon</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-gray-400">
              Join the Create-A-Thon and compete for prizes!
            </p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-cyan-500/20 bg-gray-900/50 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>© 2025 ACM Student Chapter. All rights reserved.</p>
            <p className="mt-2 text-sm">Questions? Contact us at acm.usdchapter@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
