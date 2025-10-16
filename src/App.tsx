import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Sparkles, ChevronRight } from 'lucide-react';
import Schedule from './pages/Schedule';
import RSVP from './pages/RSVP';

type Page = 'home' | 'schedule' | 'rsvp';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'schedule':
        return <Schedule onNavigate={setCurrentPage} />;
      case 'rsvp':
        return <RSVP onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
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
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ACM Events
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
            Join us for an exclusive insight into the rapidly evolving world of artificial intelligence and discover the pathways to launching your career in this transformative field
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <Calendar className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Date & Time</h3>
            <p className="text-gray-400">Friday, November 15, 2024</p>
            <p className="text-gray-400">6:00 PM - 8:30 PM EST</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <MapPin className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400">Engineering Building, Room 301</p>
            <p className="text-gray-400">Main Campus</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <Users className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Capacity</h3>
            <p className="text-gray-400">Limited to 150 attendees</p>
            <p className="text-cyan-400 font-medium">85 spots remaining</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-12 mb-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About This Event
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              The AI revolution is here, and the opportunities are limitless. Whether you're a student exploring career options, a developer looking to transition into AI, or simply curious about the field, this tech talk will provide you with the insights and connections you need to succeed.
            </p>
            <p>
              Our distinguished panel of industry experts from leading tech companies will share their journeys, discuss current trends in AI development, and provide actionable advice on breaking into this exciting field. From machine learning engineering to AI research, product management to AI ethics, we'll cover the full spectrum of career paths available.
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
                <h3 className="text-xl font-semibold mb-2">Essential Skills & Technologies</h3>
                <p className="text-gray-400">
                  Discover the programming languages, frameworks, and tools that AI professionals use daily, and learn which skills to prioritize in your learning journey.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Pathways</h3>
                <p className="text-gray-400">
                  Explore diverse roles in AI - from research scientist to ML engineer, data scientist to AI product manager - and find the path that aligns with your interests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
                <p className="text-gray-400">
                  Hear firsthand stories from professionals working at the forefront of AI innovation, including challenges they've faced and how they overcame them.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
                <p className="text-gray-400">
                  Connect with industry professionals, meet potential mentors, and build relationships with peers who share your passion for AI technology.
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
                  Featuring senior engineers and researchers from top AI companies including Google DeepMind, OpenAI, and leading AI startups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive Q&A Session</h3>
                <p className="text-gray-400">
                  Get your burning questions answered directly by industry professionals. No question is too basic or too advanced.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Networking Reception</h3>
                <p className="text-gray-400">
                  Enjoy refreshments while connecting with speakers, sponsors, and fellow attendees in an informal setting after the main presentation.
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
            Don't miss this opportunity to accelerate your AI career
          </p>
        </div>
      </main>

      <footer className="relative z-10 border-t border-cyan-500/20 bg-gray-900/50 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>© 2024 ACM Student Chapter. All rights reserved.</p>
            <p className="mt-2 text-sm">Questions? Contact us at events@acm.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
