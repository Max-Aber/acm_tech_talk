import { Clock, Sparkles, ArrowLeft, MapPin } from 'lucide-react';
import acmLogo from '../images/ACM_USD_logo_transparent.png';

type Page = 'home' | 'schedule' | 'rsvp';

interface ScheduleProps {
  onNavigate: (page: Page) => void;
}

function Schedule({ onNavigate }: ScheduleProps) {
  const scheduleItems = [
    {
      time: '9:45 AM',
      title: 'Doors Open',
      location: 'UCs',
      description: 'Grab a name tag and light refreshments!',
      type: 'arrival'
    },
    {
      time: '9:45 AM - 10:20 AM',
      title: 'Check-In',
      location: 'UC Foyer',
      description: 'Check in table open all day, Demo areas for AI models around the room - (Daisy.so, Hip Clip, Court-Date, Boodle.AI)',
      type: 'arrival'
    },
    {
      time: '10:20 AM - 10:30 AM',
      title: 'Welcome Introduction',
      location: 'UC Forum A',
      description: 'Intro by ACM',
      type: 'intro'
    },
    {
      time: '10:30 AM - 11:15 AM',
      title: 'Tech Talk Panel #1 with AI Industry Professionals',
      location: 'UC Forum A',
      description: 'Panel 1 with Industry',
      type: 'panel'
    },
    {
      time: '11:15 AM - 11:30 AM',
      title: 'Q&A',
      location: 'UC Forum A',
      description: 'Session with the industry professionals. Submit questions online.',
      type: 'interactive'
    },
    {
      time: '11:30 AM - 12:30 PM',
      title: 'Lunch Break | Networking Time',
      location: 'UC Forum B',
      description: 'More time to network and connect with fellow peers.',
      type: 'networking'
    },
    {
      time: '12:30 PM - 1:15 PM',
      title: 'Tech Talk #2 with AI Company Founders',
      location: 'UC Forum A',
      description: 'Panel 2 with AI company founders',
      type: 'panel'
    },
    {
      time: '1:15 PM - 1:30 PM',
      title: 'Q&A',
      location: 'UC Forum A',
      description: 'Session with company founders. Submit questions online.',
      type: 'interactive'
    },
    {
      time: '1:30 PM - 1:45 PM',
      title: 'Break | Networking Time',
      location: 'UCs',
      description: 'More time to network and connect with fellow peers. Concludes Panel Session | Hackathon Session Begins',
      type: 'networking'
    },
    {
      time: '1:45 PM - 2:30 PM',
      title: 'Vibe Coding Workshop',
      location: 'UC Forum B',
      description: 'Learn how to code your dream apps fast and easy! Required for Hackathon participants',
      type: 'workshop'
    },
    {
      time: '2:30 PM - 3:15 PM',
      title: 'Daisy Workshop/Live Demo',
      location: 'UC Forum B',
      description: 'Required for Create-A-Thon participants',
      type: 'workshop'
    },
    {
      time: '3:15 PM - 3:30 PM',
      title: 'Break Into Teams',
      location: 'UC Forum B',
      description: 'Get together with your teams. Prompt releases at 3:30',
      type: 'interactive'
    },
    {
      time: '3:30 PM - 5:30 PM',
      title: 'Hack-A-Thon',
      location: 'UC Forum B',
      description: 'TBA',
      type: 'hackathon'
    },
    {
      time: '5:30 PM - 6:15 PM',
      title: 'Team Presentations | Break | Networking',
      location: 'UC Forum C | UC Forum A',
      description: '',
      type: 'presentations'
    },
    {
      time: '5:45 PM',
      title: 'Dinner is served',
      location: 'UC Forum A',
      description: '',
      type: 'networking'
    },
    {
      time: '6:30 PM - 7:30 PM',
      title: 'Award Ceremony Dinner and Closing Remarks',
      location: 'UC Forum A',
      description: 'Winners announced, congratulations to all participants!',
      type: 'awards'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'arrival':
        return 'from-green-500 to-emerald-500';
      case 'intro':
        return 'from-blue-500 to-cyan-500';
      case 'panel':
        return 'from-cyan-500 to-blue-500';
      case 'interactive':
        return 'from-purple-500 to-pink-500';
      case 'workshop':
        return 'from-orange-500 to-red-500';
      case 'networking':
        return 'from-teal-500 to-green-500';
      case 'hackathon':
        return 'from-pink-500 to-rose-500';
      case 'presentations':
        return 'from-indigo-500 to-purple-500';
      case 'awards':
        return 'from-yellow-500 to-amber-500';
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
            <div className="flex items-center gap-3">
              <img src={acmLogo} alt="ACM USD Logo" className="w-16 h-16" />
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
            A detailed breakdown of the day's activities from 9:45 AM to 7:30 PM.
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
                    {item.location && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 border border-gray-600/30 rounded-lg text-gray-300 text-sm font-medium">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  )}
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
