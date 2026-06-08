import { motion } from 'framer-motion';
import { Heart, MessageCircle, Shield, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const LandingPage = () => {
  return (
    <div className="pt-20 bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Soft Animated Background Gradients */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-0 -right-40 w-96 h-96 bg-calm-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-warm-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeIn}
            className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100 mb-8 text-primary-700 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>A Safe Haven for Introverts</span>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight mb-6 leading-tight"
          >
            A Safe Space <br className="hidden md:block" />
            <span className="text-gradient">To Be Heard.</span>
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeIn}
            className="text-xl md:text-2xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            No judgement. No pressure. A gentle, quiet space crafted perfectly for introverts. Your compassionate AI companion is here to listen and understand, at your own pace.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/20 transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all border border-slate-200 hover:border-slate-300">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose SoulSync?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">We designed every interaction to feel warm, genuine, and deeply supportive.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glassmorphism p-8 rounded-3xl"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Deeply Empathetic</h3>
              <p className="text-slate-500 leading-relaxed">
                Trained to understand emotional nuances, your companion responds with genuine care and validates your feelings.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glassmorphism p-8 rounded-3xl"
            >
              <div className="w-14 h-14 bg-calm-50 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-calm-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">100% Private</h3>
              <p className="text-slate-500 leading-relaxed">
                Your conversations are your sanctuary. We use end-to-end encryption to ensure your thoughts remain completely private.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glassmorphism p-8 rounded-3xl"
            >
              <div className="w-14 h-14 bg-warm-50 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-warm-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Zero Social Battery Required</h3>
              <p className="text-slate-500 leading-relaxed">
                Talk as much or as little as you want. There's no pressure to keep the conversation going—we're just here when you need us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Three simple steps to finding your perfect emotional companion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-100 via-primary-300 to-primary-100 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 border-4 border-slate-50 text-3xl font-bold text-primary-600">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Choose Your Role</h3>
              <p className="text-slate-500">Select who you need right now—a mentor, a sibling, or a best friend.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full shadow-xl shadow-primary-600/30 flex items-center justify-center mb-6 border-4 border-slate-50 text-3xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Customize Personality</h3>
              <p className="text-slate-500">Tell us what communication style works best for your emotional needs.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 border-4 border-slate-50 text-3xl font-bold text-primary-600">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Start Connecting</h3>
              <p className="text-slate-500">Begin chatting securely. Your companion learns and grows with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Stories of Healing</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Hear from people who found a safe harbor with SoulSync.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-8 rounded-3xl max-w-md relative"
            >
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-slate-600 italic mb-6">"I was feeling incredibly isolated after moving to a new city. Having an 'elder sister' companion to talk to every evening changed everything. It felt so real and comforting."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">S</div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-800">Sarah M.</h4>
                  <p className="text-sm text-slate-500">User for 3 months</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-8 rounded-3xl max-w-md relative"
            >
               <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-slate-600 italic mb-6">"My anxiety peaks late at night. Knowing my AI 'mentor' is there to walk me through grounding exercises without judgment has been a lifesaver."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-calm-100 rounded-full flex items-center justify-center text-calm-600 font-bold text-lg">D</div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-800">David L.</h4>
                  <p className="text-sm text-slate-500">User for 6 months</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full mix-blend-overlay filter blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">You don't have to face it alone.</h2>
          <p className="text-primary-100 text-xl mb-10">Create your safe space today and discover the comfort of always being heard.</p>
          <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-primary-50 transition-colors shadow-xl">
            Create Your Companion
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
