import { ArrowLeft, Code, Users, Trophy, Lightbulb, Clock, MapPin, ChevronRight } from 'lucide-react';
import acmLogo from '../images/ACM_USD_logo_transparent.png';

type Page = 'home' | 'schedule' | 'rsvp' | 'hackathon';

interface HackathonProps {
  onNavigate: (page: Page) => void;
}

function Hackathon({ onNavigate }: HackathonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <nav className="relative z-10 border-b border-cyan-500/20 bg-gray-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={acmLogo} alt="ACM USD Logo" className="w-16 h-16" />
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate('home')}
                className="text-gray-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('hackathon')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Hackathon
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
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Event Details</span>
        </button>

        <div className="mb-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">HACKATHON</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
              Hackathon
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join the Hackathon and collaborate with peers to design and present innovative AI products. Experience the full cycle of problem-solving, teamwork, and presentation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <Clock className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <p className="text-gray-400">3:30 PM - 7:30 PM</p>
            <p className="text-gray-400">Hacking and presentation time</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <MapPin className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400">University of San Diego</p>
            <p className="text-gray-400">UC Forum ABC</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <Users className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Team Size</h3>
            <p className="text-gray-400">4-5 members per team</p>
            <p className="text-cyan-400 font-medium">You don’t need a team to sign up.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-12 mb-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About the Hackathon
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              The Hackathon is a collaborative event where teams of 4-5 people work together to design and build innovative AI-powered products. This isn't about writing perfect code - it's about creativity, teamwork, and bringing ideas to life.
            </p>
            <p>
              Before the hackathon begins, you'll participate in required workshops on Vibe Coding and Daisy.so to learn the tools you'll use. At 3:30 PM, we'll release the prompt, and your team will have 2 hours to create something amazing.
            </p>
            <p>
              After the hacking period, each team will present their product to a panel of industry professionals who will judge the projects. Winners will be announced at the Award Ceremony!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 backdrop-blur-lg border border-yellow-500/30 rounded-3xl p-12 mb-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            Prizes & Recognition
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Compete for amazing prizes and recognition from industry professionals!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400">1st Place</h3>
                  <p className="text-gray-400">Winner Team</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span><strong className="text-white">$100 per team member</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span><strong className="text-white">Winner Diplomas</strong> for each team member</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span>Recognition from industry professionals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-gray-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-400 to-slate-400 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-300">2nd Place</h3>
                  <p className="text-gray-400">Runner-Up Team</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span><strong className="text-white">$50 per team member</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span><strong className="text-white">Winner Diplomas</strong> for each team member</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span>Recognition from industry professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-12 mb-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Hackathon Timeline
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">1:45 PM - 2:30 PM: Vibe Coding Workshop</h3>
                <p className="text-gray-400">
                  Learn rapid AI-assisted development techniques. Required for all hackathon participants.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2:30 PM - 3:15 PM: Daisy Workshop</h3>
                <p className="text-gray-400">
                  Hands-on demo of Daisy.so, the AI platform you'll use in the hackathon. Required attendance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3:15 PM - 3:30 PM: Team Formation</h3>
                <p className="text-gray-400">
                  Form teams of 4-5 people. The hackathon prompt will be released at 3:30 PM sharp.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3:30 PM - 5:30 PM: Hack Time!</h3>
                <p className="text-gray-400">
                  Two hours of intensive team collaboration to build your AI product.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">5:30 PM - 6:15 PM: Presentations</h3>
                <p className="text-gray-400">
                  Each team presents their product to the judging panel. Showcase your creativity and hard work!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">6:30 PM - 7:30 PM: Awards Ceremony</h3>
                <p className="text-gray-400">
                  Winners announced! Prizes awarded to the top teams. Celebrate everyone's achievements!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Important Information
          </h2>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">Registration Required:</strong> You must register separately for the hackathon. Space is limited!
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">Workshop Attendance Mandatory:</strong> Both the Vibe Coding and Daisy workshops are required for all hackathon participants.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">Bring Your Laptop:</strong> You'll need a laptop with internet access. Make sure it's charged or bring your charger.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">All Skill Levels Welcome:</strong> Whether you're a beginner or experienced developer, you'll have a great time. Focus is on creativity, not just coding.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>
                <strong className="text-white">Prizes & Recognition:</strong> Top teams will receive prizes and recognition from industry professionals.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => onNavigate('rsvp')}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
          >
            <span>Register for the Hackathon</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-gray-400">
            Limited spots available - register now to secure your place!
          </p>
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

export default Hackathon;
