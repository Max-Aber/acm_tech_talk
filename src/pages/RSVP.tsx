import { Sparkles, ArrowLeft, ExternalLink, Calendar, MapPin, Clock } from 'lucide-react';
import acmLogo from '../images/ACM_USD_logo_transparent.png';

type Page = 'home' | 'schedule' | 'rsvp' | 'hackathon';

interface RSVPProps {
  onNavigate: (page: Page) => void;
}

function RSVP({ onNavigate }: RSVPProps) {
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
                className="text-gray-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('hackathon')}
                className="text-gray-400 hover:text-cyan-300 transition-colors font-medium"
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
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                RSVP
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Event Details</span>
        </button>

        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">RESERVE YOUR SPOT</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Join Us
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Secure your place at this exclusive AI industry event. Limited seats available.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-10 mb-8">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            What's Included
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>Access to all panel discussions and presentations</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>Interactive Q&A session with industry experts</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>Networking reception with refreshments</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <span>Free Tokens and access codes for AI tools</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-10 mb-8">
          <div className="border-b border-cyan-500/20 pb-6 mb-8">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 text-sm font-medium">TECH TALK</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Register for the Tech Talk
            </h2>
            <p className="text-gray-300 text-lg">
              Join us for expert panel discussions, workshops, and networking opportunities with AI industry professionals and startup founders.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Date</h3>
                <p className="text-gray-400">Saturday, November 22, 2025</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Time</h3>
                <p className="text-gray-400">10:00 AM - 3:30 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-gray-400">University of San Diego</p>
                <p className="text-gray-400">UC Forum ABC</p>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-8">
            <a
              href="https://forms.gle/zSdMSTRqJQPd3SZXA"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
            >
              <span>Register Now</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <p className="mt-4 text-sm text-gray-400">
              You'll be redirected to our registration form
            </p>

            <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-cyan-400">Note:</strong> This registration is for the Tech Talk only. To participate in the Hackathon, you must register separately below.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-lg border border-pink-500/30 rounded-3xl p-10 mb-8">
          <div className="border-b border-pink-500/20 pb-6 mb-8">
            <button
              onClick={() => onNavigate('hackathon')}
              className="inline-block mb-4 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 cursor-pointer"
            >
              <span className="text-pink-400 text-sm font-medium">HACKATHON →</span>
            </button>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Register for the Hackathon
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Join the Hackathon and collaborate with peers to design innovative AI products. Teams of 4-5 people will compete to build and present their projects to industry judges.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-5 h-5 text-pink-400" />
              <span className="font-semibold">Time:</span>
              <span>1:45 PM - 7:30 PM</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">Separate Registration Required</h3>
                <p className="text-gray-300">
                  Hackathon registration is separate from event registration. Limited spots available!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">Workshop Attendance Mandatory</h3>
                <p className="text-gray-300">
                  All hackathon participants must attend the Vibe Coding (1:45-2:30 PM) and Daisy (2:30-3:15 PM) workshops.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">2-Hour Hacking Period</h3>
                <p className="text-gray-300">
                  Teams will have from 3:30 PM to 5:30 PM to build their AI product and prepare presentations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-pink-500/20">
            <a
              href="https://forms.gle/zSdMSTRqJQPd3SZXA"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-lg font-semibold hover:from-pink-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]"
            >
              <span>Sign Up for Hackathon</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <p className="mt-4 text-sm text-gray-400">
              You'll be redirected to our hackathon registration form
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Need Help?</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about registration or the event, please don't hesitate to reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:acm.usdchapter@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-colors text-white font-medium"
            >
              Email Us
            </a>
            <button
              onClick={() => onNavigate('schedule')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-colors text-white font-medium"
            >
              View Schedule
            </button>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-cyan-500/20 bg-gray-900/50 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>© 2025 ACM USD. All rights reserved.</p>
            <p className="mt-2 text-sm">Questions? Contact us at acm.usdchapter@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RSVP;
