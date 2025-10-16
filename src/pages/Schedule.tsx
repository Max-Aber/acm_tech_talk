import { Clock, Sparkles, ArrowLeft } from 'lucide-react';
import acmLogo from '../images/ACM_USD_logo_transparent.png';

type Page = 'home' | 'schedule' | 'rsvp';

interface ScheduleProps {
  onNavigate: (page: Page) => void;
}

function Schedule({ onNavigate }: ScheduleProps) {
  const scheduleItems = [
    {
      time: '6:00 PM - 6:15 PM',
      title: 'Registration & Welcome',
      description: 'Check in at the registration desk, grab your name tag, and enjoy light refreshments. Take this time to network with early arrivals and get settled.',
      type: 'arrival'
    },
    {
      time: '6:15 PM - 6:30 PM',
      title: 'Opening Remarks',
      description: 'Brief introduction to ACM and overview of the evening\'s agenda. Learn about upcoming events and opportunities within our organization.',
      type: 'intro'
    },
    {
      time: '6:30 PM - 7:15 PM',
      title: 'Panel Discussion: Breaking Into AI',
      description: 'Our distinguished panel of AI professionals will discuss their career journeys, current industry trends, and practical advice for entering the field. Topics include required skills, portfolio building, interview preparation, and navigating your first AI role.',
      type: 'main'
    },
    {
      time: '7:15 PM - 7:45 PM',
      title: 'Interactive Q&A Session',
      description: 'Your chance to ask the experts anything! Submit questions via our digital platform or ask directly. Whether you\'re curious about specific technologies, career transitions, or day-to-day work life, our panelists are here to help.',
      type: 'interactive'
    },
    {
      time: '7:45 PM - 8:00 PM',
      title: 'Lightning Talks: AI Career Paths',
      description: 'Quick 5-minute presentations showcasing different career paths in AI - from Machine Learning Engineering to AI Ethics, Research to Product Management. Discover which path might be right for you.',
      type: 'talks'
    },
    {
      time: '8:00 PM - 8:30 PM',
      title: 'Networking Reception',
      description: 'The most valuable part of the evening! Connect with speakers, sponsors, and fellow attendees over refreshments. Exchange contact information, discuss ideas, and build relationships that could shape your career.',
      type: 'networking'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'arrival':
        return 'from-green-500 to-emerald-500';
      case 'intro':
        return 'from-blue-500 to-cyan-500';
      case 'main':
        return 'from-cyan-500 to-blue-500';
      case 'interactive':
        return 'from-purple-500 to-pink-500';
      case 'talks':
        return 'from-orange-500 to-red-500';
      case 'networking':
        return 'from-teal-500 to-green-500';
      default:
        return 'from-cyan-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <nav className="relative z-10 border-b border-cyan-500/20 bg-gray-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={acmLogo} alt="ACM USD Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ACM Events
              </span>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate('home')}
                className="text-gray-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('schedule')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
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

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Event Details</span>
        </button>

        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">EVENT SCHEDULE</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Event Timeline
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A detailed breakdown of the evening's activities. All times are in EST.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500"></div>

          <div className="space-y-8">
            {scheduleItems.map((item, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-900 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-cyan-400" />
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${getTypeColor(item.type)} rounded-lg text-white text-sm font-semibold`}>
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Important Notes
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">Arrive Early:</strong> We recommend arriving 10-15 minutes before the start time to allow for registration and seating.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">Bring Questions:</strong> Prepare thoughtful questions for the Q&A session to make the most of this opportunity.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">Business Cards:</strong> Bring business cards or have your LinkedIn profile ready for the networking reception.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">Refreshments:</strong> Light snacks and beverages will be provided throughout the event.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('rsvp')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
          >
            <span>Secure Your Spot Now</span>
          </button>
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

export default Schedule;
