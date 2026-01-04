
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Menu, X, Camera, Ruler, LayoutDashboard, Phone, ExternalLink, Send, ArrowRight, Instagram, Facebook, Trash2, CheckCircle, Clock, Package, Hammer, Sparkles, ImagePlus, Grid, Lock, AlertTriangle, Plus, IndianRupee, ArrowUpDown, Filter, Search, Copy, Share2, Globe, TrendingUp, BarChart3, Loader2, Undo2, CreditCard, Download, Star, MessageSquare, AlertCircle, Train, Wind, Mountain, Bird, TreePine, LogOut, Eye, Check, ShieldAlert, MapPin, Navigation } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ProjectOrder, ProjectStatus, Measurement, GalleryItem, MeasurementUnit, Feedback, FeedbackStatus } from './types';
import { OWNER_NUMBERS, SERVICES, GALLERY_ITEMS as STATIC_GALLERY_ITEMS, ServiceDetail } from './constants';

// --- Animation Wrapper ---

const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-up ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// --- Component: Workflow / Journey ---

const WorkflowView: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const progress = Math.min(Math.max(-rect.top / (totalHeight - windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { title: "Mist of Inquiry", desc: "Your vision begins here. Reach out via WhatsApp or call to start the journey.", icon: Phone, color: "blue" },
    { title: "The Survey Clearing", desc: "Our experts visit your site, emerging from the mist with precision tools.", icon: Ruler, color: "emerald" },
    { title: "The Forge of Precision", desc: "High-grade UPVC & glass are crafted in our workshop sanctuary.", icon: Hammer, color: "indigo" },
    { title: "Crystal Installation", desc: "The final ascent. Flawless fitting by our master craftsmen.", icon: CheckCircle, color: "cyan" },
    { title: "Summit of Success", desc: "Enjoy your transformed space. We welcome your feedback at the top.", icon: Star, color: "amber" }
  ];

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-gradient-to-b from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/20 via-blue-600/40 to-emerald-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
        <Bird className="absolute text-slate-400/30 w-8 h-8 animate-float-slow top-[15%] left-[10%]" />
        <Bird className="absolute text-slate-400/20 w-6 h-6 animate-float-slow top-[45%] right-[15%]" style={{ animationDelay: '2s' }} />
        <Bird className="absolute text-slate-400/25 w-10 h-10 animate-float-slow top-[75%] left-[20%]" style={{ animationDelay: '4s' }} />
        <div className="absolute left-[-5%] top-20 text-emerald-900/5 rotate-12 scale-150"><TreePine className="w-64 h-64" /></div>
        <div className="absolute right-[-5%] top-[40%] text-emerald-900/5 -rotate-12 scale-150"><TreePine className="w-64 h-64" /></div>
        <div className="absolute left-[-5%] top-[70%] text-emerald-900/5 rotate-45 scale-150"><TreePine className="w-64 h-64" /></div>
      </div>

      <div 
        className="fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-out flex flex-col items-center"
        style={{ top: `${15 + scrollProgress * 65}vh` }}
      >
        <div className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-4 h-4 bg-slate-300/40 rounded-full blur-md animate-ping mb-1"></div>
            <div className="w-6 h-6 bg-slate-200/30 rounded-full blur-lg animate-pulse"></div>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl rotate-90 scale-125 border-2 border-slate-700">
            <Train className="w-8 h-8" />
          </div>
        </div>
        <div className="mt-4 px-4 py-1 bg-white/80 backdrop-blur rounded-full border border-blue-100 shadow-lg text-[10px] font-black text-blue-600 uppercase tracking-widest whitespace-nowrap">
          The Fabricator Express
        </div>
      </div>

      <div className="container mx-auto px-6 pt-40 pb-60 relative z-10">
        <div className="max-w-4xl mx-auto space-y-[40vh]">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Our Journey</h2>
            <p className="text-xl text-slate-500 font-medium">Scroll down to ride the express through our process.</p>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className={`flex items-center gap-12 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}>
              <div className="flex-1">
                <Reveal delay={100}>
                  <div className="glass-card p-10 rounded-[3rem] shadow-xl border border-white hover:shadow-2xl transition-all group">
                    <div className={`w-16 h-16 bg-${step.color}-100 text-${step.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner mx-auto ${idx % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              </div>
              <div className="relative w-12 flex justify-center">
                <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-20 shadow-lg group-hover:scale-150 transition-transform"></div>
                <div className={`absolute top-3 w-12 h-1 bg-blue-500/30 ${idx % 2 === 0 ? 'left-6' : 'right-6'}`}></div>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none">
        <div className="flex justify-center pt-10 text-slate-200">
          <Mountain className="w-32 h-32 opacity-20" />
          <Mountain className="w-48 h-48 -mx-10 opacity-30" />
          <Mountain className="w-32 h-32 opacity-20" />
        </div>
      </div>
    </div>
  );
};

// --- Utility Components ---

const Button: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string; 
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  type?: 'button' | 'submit';
  disabled?: boolean;
}> = ({ children, onClick, className = "", variant = 'primary', type = 'button', disabled = false }) => {
  const base = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 btn-shimmer relative disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-sm";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:shadow-blue-200/50",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200",
    outline: "border-2 border-slate-200 bg-white/50 backdrop-blur-sm hover:border-blue-600 hover:text-blue-600 text-slate-700",
    danger: "bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-200",
    ghost: "text-slate-500 hover:bg-slate-100"
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

const ServiceModal: React.FC<{ 
  service: ServiceDetail | null; 
  onClose: () => void 
}> = ({ service, onClose }) => {
  if (!service) return null;
  return (
    <div className="fixed inset-0 z-[150] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
      <div className="glass-card w-full max-w-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white animate-scale-in relative">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col gap-8">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-[2rem] flex items-center justify-center shadow-inner">
            <service.icon className="w-10 h-10" />
          </div>
          <div className="space-y-4">
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">{service.title}</h3>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">{service.longDescription}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Technical Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-bold text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </div>
          <Button onClick={onClose} className="w-full sm:w-auto">Close Details</Button>
        </div>
      </div>
    </div>
  );
};

const UndoToast: React.FC<{ message: string; onUndo: () => void; onDismiss: () => void }> = ({ message, onUndo, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 6000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] animate-scale-in">
      <div className="glass-card px-8 py-5 rounded-3xl shadow-2xl border-2 border-white flex items-center gap-6">
        <span className="text-slate-700 font-bold">{message}</span>
        <button onClick={onUndo} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all text-sm">
          <Undo2 className="w-4 h-4" /> Undo
        </button>
        <button onClick={onDismiss} className="text-slate-400 hover:text-slate-600">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const ConfirmModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}> = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
      <div className="glass-card w-full max-sm p-8 rounded-[2.5rem] shadow-2xl border border-white animate-scale-in text-center">
        <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 mb-8 font-medium">{message}</p>
        <div className="flex flex-col gap-3">
          <Button variant="danger" onClick={() => { onConfirm(); onClose(); }}>Confirm Delete</Button>
          <button onClick={onClose} className="px-6 py-3 text-slate-400 font-bold hover:text-slate-600 transition-colors">Cancel</button>
        </div>
      </div>
    </div>
  );
};

// --- View: Public Landing ---

const Hero: React.FC<{ onQuoteClick: () => void }> = ({ onQuoteClick }) => (
  <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-indigo-400 rounded-full blur-[100px] opacity-10"></div>
    </div>
    
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
      <div className="space-y-10">
        <Reveal>
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-md text-blue-600 rounded-full text-sm font-semibold border border-blue-100 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" /> Precision & Perfection Since 2010
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Elevating <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Architecture</span> Through Glass
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            Sunil Fabrications delivers bespoke UPVC windows, elegant doors, and stunning structural elevations with uncompromised quality and engineering excellence.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-wrap gap-5">
            <Button onClick={onQuoteClick} className="py-4 px-8 text-lg shadow-xl shadow-blue-200">
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('gallery')?.scrollIntoView()}>
              Explore Portfolio
            </Button>
          </div>
        </Reveal>
      </div>
      <Reveal delay={400} className="relative hidden md:block">
        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" alt="Glass Fabrication" className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>
        <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-3xl shadow-2xl max-w-xs animate-float-slow z-20 border border-white/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg text-white"><CheckCircle className="w-5 h-5" /></div>
            <p className="text-sm font-bold text-slate-800">ISO Certified Quality</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Over 500+ successful installations in premium residential clusters.</p>
        </div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
      </Reveal>
    </div>
  </section>
);

const FeedbackForm: React.FC<{ onSubmit: (f: Partial<Feedback>) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return alert("Please fill in your name and comment.");
    onSubmit({ clientName: name, rating, comment, createdAt: new Date().toISOString() });
    setName(''); setComment(''); setRating(5);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass-card p-10 md:p-16 rounded-[3rem] shadow-xl border border-white">
          <Reveal>
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-4xl font-black text-slate-900">Share Your Experience</h2>
              <p className="text-slate-500 font-medium">Help us improve and help others decide!</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Name</label>
                <input required value={name} onChange={e => setName(e.target.value)} className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-medium" placeholder="Rahul S." />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</label>
                <div className="flex gap-4">
                  {[1,2,3,4,5].map(star => (
                    <button key={star} type="button" onClick={() => setRating(star)} className={`p-3 rounded-xl transition-all ${rating >= star ? 'bg-amber-100 text-amber-500' : 'bg-slate-100 text-slate-300'}`}>
                      <Star className={`w-6 h-6 ${rating >= star ? 'fill-amber-500' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Comments</label>
                <textarea required value={comment} onChange={e => setComment(e.target.value)} className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all h-32 font-medium" placeholder="Tell us about the project quality..." />
              </div>
              <Button type="submit" className="w-full py-5 text-lg">Post Feedback</Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
  const publishedFeedbacks = feedbacks.filter(f => f.status === FeedbackStatus.PUBLISHED);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Reveal><h2 className="text-4xl font-black text-slate-900 tracking-tight">Client Testimonials</h2></Reveal>
          <Reveal delay={100}><p className="text-slate-500 font-medium max-w-xl mx-auto">See why homeowners and developers trust Sunil Fabrications for their high-end projects.</p></Reveal>
        </div>

        {publishedFeedbacks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedFeedbacks.map((f, idx) => (
              <Reveal key={f.id} delay={idx * 100}>
                <div className="glass-card p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-lg">{f.clientName.charAt(0)}</div>
                    <div>
                      <h4 className="font-black text-slate-900 leading-tight">{f.clientName}</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date(f.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-6 text-amber-500">
                    {Array.from({length: 5}).map((_, i) => <Star key={i} className={`w-4 h-4 ${f.rating > i ? 'fill-amber-500' : ''}`} />)}
                  </div>
                  <p className="text-slate-600 font-medium italic leading-relaxed flex-1">"{f.comment}"</p>
                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-blue-600">
                     <CheckCircle className="w-4 h-4" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Verified Customer</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400 font-bold italic opacity-40">Be the first to share your experience!</div>
        )}
      </div>
    </section>
  );
};

const GallerySection: React.FC<{ items: GalleryItem[] }> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-6 text-center mb-16 space-y-8">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Masterpieces</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Every installation is a testament to our commitment to durability and aesthetic excellence.</p>
        </Reveal>
        <Reveal delay={100} className="max-w-xl mx-auto relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input type="text" placeholder="Search projects (e.g. windows, office, modern)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-14 pr-8 py-5 glass-card rounded-[2rem] border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-medium text-slate-700 shadow-lg" />
        </Reveal>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]">
        {filteredItems.length > 0 ? filteredItems.map((item, idx) => (
          <Reveal key={item.id} delay={idx * 80}>
            <div className="group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-2 border border-slate-100">
              <div className="relative h-80 overflow-hidden rounded-[1.6rem]">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.category}</span>
                  <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.title}</h3>
                  <p className="text-slate-300 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{item.description}</p>
                </div>
              </div>
            </div>
          </Reveal>
        )) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-300 italic animate-fade-in">
            <LayoutDashboard className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-xl font-bold">No results found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

// --- View: Field Worker / Measurement Entry ---

const FieldWorkerTool: React.FC<{ onProjectAdded: (project: ProjectOrder) => void }> = ({ onProjectAdded }) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<MeasurementUnit>('Inches');
  const [measurements, setMeasurements] = useState<Measurement[]>([{ label: '', width: '', height: '', quantity: 1 }]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [basePrice, setBasePrice] = useState<number>(650);
  const [manualEstimatedCost, setManualEstimatedCost] = useState<string>('');
  const [latLng, setLatLng] = useState<{lat: number, lng: number} | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      setIsGettingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setIsGettingLocation(false);
      },
      (error) => {
        alert("Error fetching location: " + error.message);
        setIsGettingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleNumericInput = (index: number, field: 'width' | 'height' | 'quantity', val: string) => {
    const cleanVal = val.replace(/[^0-9.]/g, '');
    if (field === 'quantity') {
      const q = parseInt(cleanVal) || 0;
      updateMeasurement(index, field, q);
    } else {
      updateMeasurement(index, field, cleanVal);
    }
  };

  const addMeasurement = () => {
    setMeasurements([...measurements, { label: '', width: '', height: '', quantity: 1 }]);
  };

  const removeMeasurement = (index: number) => {
    if (measurements.length > 1) {
      setMeasurements(measurements.filter((_, i) => i !== index));
    }
  };

  const updateMeasurement = (index: number, field: keyof Measurement, value: string | number) => {
    const newM = [...measurements];
    newM[index] = { ...newM[index], [field]: value };
    setMeasurements(newM);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const readers = Array.from(files).map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then(newUrls => {
        setImagePreviews(prev => [...prev, ...newUrls]);
      });
    }
  };

  const removeImage = (index: number) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const totalCost = useMemo(() => {
    return measurements.reduce((acc, m) => {
      const w = parseFloat(m.width) || 0;
      const h = parseFloat(m.height) || 0;
      const q = m.quantity || 0;
      return acc + (w * h * q * basePrice);
    }, 0);
  }, [measurements, basePrice]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return alert("Client details are essential!");
    if (measurements.some(m => !m.label || !m.width || !m.height)) return alert("Please fill all measurement details.");
    setIsSubmitting(true);
    
    const mapUrl = latLng ? `https://www.google.com/maps?q=${latLng.lat},${latLng.lng}` : undefined;

    setTimeout(() => {
      const newProject: ProjectOrder = {
        id: Math.random().toString(36).substr(2, 9),
        clientName,
        clientPhone,
        location,
        latLng: latLng || undefined,
        mapUrl,
        measurements,
        photoUrls: imagePreviews.length > 0 ? imagePreviews : undefined,
        status: ProjectStatus.PENDING,
        createdAt: new Date().toISOString(),
        totalCost,
        estimatedCost: parseFloat(manualEstimatedCost) || 0,
        unit: selectedUnit
      };
      onProjectAdded(newProject);
      setIsSubmitting(false);
      alert("Measurements Logged Successfully!");
      setClientName(''); setClientPhone(''); setLocation(''); setLatLng(null);
      setMeasurements([{ label: '', width: '', height: '', quantity: 1 }]);
      setImagePreviews([]);
      setManualEstimatedCost('');
    }, 800);
  };

  const formatWhatsAppText = () => {
    const mapText = latLng ? `%0A*Exact Location:* https://www.google.com/maps?q=${latLng.lat},${latLng.lng}` : '';
    return `*SUNIL FABRICATIONS VISIT LOG*%0A%0A*Client:* ${clientName}%0A*Phone:* ${clientPhone}%0A*Location:* ${location}${mapText}%0A%0A*Measurements (Units: ${selectedUnit}):*%0A${measurements.map(m => `• ${m.label}: ${m.width} x ${m.height} (Qty: ${m.quantity})`).join('%0A')}%0A%0A*Calculated Total:* Rs. ${totalCost.toLocaleString()}%0A*Field Quote:* Rs. ${manualEstimatedCost || 'N/A'}`;
  };

  const sendToWhatsApp = () => {
    if (!clientName) return alert("Enter client name first.");
    window.open(`https://wa.me/${OWNER_NUMBERS.PRIMARY.replace('+', '')}?text=${formatWhatsAppText()}`, '_blank');
  };

  const copyToClipboard = () => {
    const text = formatWhatsAppText().replace(/%0A/g, '\n').replace(/\*/g, '');
    navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
  };

  return (
    <div id="field-worker-tool" className="max-w-4xl mx-auto py-20 px-6">
      <Reveal>
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-8 md:p-12 text-white relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <h2 className="text-3xl font-extrabold flex items-center gap-4 tracking-tight"><Ruler className="w-10 h-10" /> Site Visit Logger</h2>
            <p className="mt-3 text-blue-100 font-medium opacity-90">Precision data capture for accurate estimates.</p>
          </div>
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Client Name</label>
                <input required value={clientName} onChange={e => setClientName(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" placeholder="e.g. Rahul Sharma" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Contact Number</label>
                <input required value={clientPhone} onChange={e => setClientPhone(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" placeholder="+91 99999 99999" />
              </div>
              <div className="space-y-3 md:col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Site Address (Text)</label>
                <input value={location} onChange={e => setLocation(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" placeholder="Plot No, Area Name" />
              </div>
              <div className="space-y-3 md:col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">GPS Exact Spot</label>
                <div className="flex gap-2">
                   <button 
                    type="button" 
                    onClick={getCurrentLocation} 
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl border-2 transition-all font-bold ${latLng ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-blue-300 hover:text-blue-600'}`}
                   >
                     {isGettingLocation ? <Loader2 className="w-5 h-5 animate-spin" /> : <MapPin className={`w-5 h-5 ${latLng ? 'fill-emerald-600' : ''}`} />}
                     {latLng ? 'Location Saved' : 'Get Exact Location'}
                   </button>
                   {latLng && (
                     <button type="button" onClick={() => window.open(`https://www.google.com/maps?q=${latLng.lat},${latLng.lng}`, '_blank')} className="p-4 bg-blue-50 text-blue-600 rounded-2xl border-2 border-blue-100 hover:bg-blue-100 transition-all">
                       <ExternalLink className="w-5 h-5" />
                     </button>
                   )}
                </div>
                <p className="text-[10px] text-slate-400 italic">Click once you are at the exact site location.</p>
              </div>
              <div className="space-y-3 md:col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Measurement Unit</label>
                <select value={selectedUnit} onChange={e => setSelectedUnit(e.target.value as MeasurementUnit)} className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold">
                  <option value="Inches">Inches (in)</option>
                  <option value="cm">Centimeters (cm)</option>
                  <option value="Feet">Feet (ft)</option>
                </select>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Item Dimensions</h3>
                <button type="button" onClick={addMeasurement} className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl transition-all"><Plus className="w-4 h-4" /> Add Item</button>
              </div>
              <div className="space-y-4 md:space-y-0 md:overflow-x-auto md:border md:border-slate-100 md:rounded-3xl md:shadow-sm">
                <table className="hidden md:table w-full border-collapse">
                  <thead className="bg-slate-50">
                    <tr className="text-left">
                      <th className="py-4 px-6 font-black text-slate-400 text-[10px] uppercase tracking-widest">Description</th>
                      <th className="py-4 px-4 font-black text-slate-400 text-[10px] uppercase tracking-widest text-center">W ({selectedUnit})</th>
                      <th className="py-4 px-4 font-black text-slate-400 text-[10px] uppercase tracking-widest text-center">H ({selectedUnit})</th>
                      <th className="py-4 px-4 font-black text-slate-400 text-[10px] uppercase tracking-widest text-center">Qty</th>
                      <th className="py-4 px-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {measurements.map((m, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-6"><input required value={m.label} onChange={e => updateMeasurement(idx, 'label', e.target.value)} className="w-full bg-white border-2 border-slate-100 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm font-medium transition-all" placeholder="e.g. Master Bedroom Balcony" /></td>
                        <td className="py-3 px-4"><input required type="text" value={m.width} onChange={e => handleNumericInput(idx, 'width', e.target.value)} className={`w-24 bg-gradient-to-br from-blue-50/80 to-blue-100/50 border-2 ${!m.width ? 'border-rose-200' : 'border-blue-200'} px-3 py-2.5 rounded-xl text-center text-sm font-black text-blue-700 focus:bg-white focus:border-blue-500 outline-none transition-all shadow-inner`} placeholder="0.0" /></td>
                        <td className="py-3 px-4"><input required type="text" value={m.height} onChange={e => handleNumericInput(idx, 'height', e.target.value)} className={`w-24 bg-gradient-to-br from-indigo-50/80 to-indigo-100/50 border-2 ${!m.height ? 'border-rose-200' : 'border-indigo-200'} px-3 py-2.5 rounded-xl text-center text-sm font-black text-indigo-700 focus:bg-white focus:border-indigo-500 outline-none transition-all shadow-inner`} placeholder="0.0" /></td>
                        <td className="py-3 px-4"><input required type="text" value={m.quantity} onChange={e => handleNumericInput(idx, 'quantity', e.target.value)} className="w-16 bg-slate-100 border-2 border-slate-200 px-3 py-2.5 rounded-xl text-center text-sm font-black text-slate-700 outline-none transition-all shadow-inner focus:border-slate-400" /></td>
                        <td className="py-3 px-6 text-center"><button type="button" onClick={() => removeMeasurement(idx)} disabled={measurements.length === 1} className="p-2 text-rose-300 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all disabled:opacity-0"><Trash2 className="w-5 h-5" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shadow-inner"><IndianRupee className="w-6 h-6" /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Local Area Rates</p>
                    <div className="flex items-center gap-2 mt-1"><span className="text-sm font-bold text-slate-600">Base Price/sq.{selectedUnit}:</span><input type="number" value={basePrice} onChange={e => setBasePrice(parseFloat(e.target.value) || 0)} className="w-24 px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-bold text-blue-700 outline-none focus:border-blue-500" /></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200"><p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Calculated Logic Estimate</p><p className="text-2xl font-black text-slate-900 mt-1">₹ {totalCost.toLocaleString('en-IN')}</p></div>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.15em] flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-500" /> Manually Quoted Cost (Field)</label>
                <div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400">₹</span><input type="text" value={manualEstimatedCost} onChange={e => setManualEstimatedCost(e.target.value.replace(/[^0-9]/g, ''))} className="w-full pl-10 pr-6 py-5 bg-white border-2 border-slate-200 rounded-2xl focus:border-blue-600 outline-none transition-all font-black text-xl text-blue-700 shadow-sm" placeholder="Enter final price given to client" /></div>
                <p className="text-[10px] font-medium text-slate-400 italic">This is the actual amount you promised the client.</p>
              </div>
            </div>
            <div className="space-y-6">
               <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Site Documentation</h3>
               <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                  <label className="cursor-pointer bg-slate-50 hover:bg-blue-50 border-2 border-dashed border-slate-200 hover:border-blue-400 aspect-square rounded-3xl flex flex-col items-center justify-center transition-all group p-4 text-center">
                    <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform mb-2"><Camera className="w-6 h-6 text-blue-500" /></div>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-600">Snap Site</span>
                    <input type="file" multiple accept="image/*" capture="environment" className="hidden" onChange={handleFileChange} />
                  </label>
                  {imagePreviews.map((src, idx) => (
                    <div key={idx} className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-white group"><img src={src} className="w-full h-full object-cover" loading="lazy" /><button type="button" onClick={() => removeImage(idx)} className="absolute top-2 right-2 bg-rose-500 text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform opacity-0 group-hover:opacity-100"><X className="w-3 h-3" /></button></div>
                  ))}
               </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-slate-100">
              <Button type="submit" className="flex-1 py-5 text-lg" variant="primary">{isSubmitting ? 'Syncing...' : 'Save Record'}</Button>
              <div className="flex-1 flex gap-3">
                <Button variant="secondary" onClick={sendToWhatsApp} className="flex-1 py-5"><Share2 className="w-5 h-5" /> Share</Button>
                <Button variant="outline" onClick={copyToClipboard} className="aspect-square !p-0 w-16 !rounded-2xl"><Copy className="w-6 h-6" /></Button>
              </div>
            </div>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

// --- Admin Sub-components ---

const PortfolioManager: React.FC<{ 
  items: GalleryItem[], 
  setItems: React.Dispatch<React.SetStateAction<GalleryItem[]>>,
  onDeleted: (item: GalleryItem) => void
}> = ({ items, setItems, onDeleted }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<GalleryItem['category']>('Windows');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState<string | null>(null);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newImage) return alert("Title and Image are required!");
    const newItem: GalleryItem = { id: Math.random().toString(36).substr(2, 9), title: newTitle, category: newCategory, description: newDescription, imageUrl: newImage };
    setItems(prev => [...prev, newItem]);
    setNewTitle(''); setNewDescription(''); setNewImage(null);
    alert("Project published to website!");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    if (itemToDelete) {
      const item = items.find(i => i.id === itemToDelete);
      if (item) {
        onDeleted(item);
        setItems(prev => prev.filter(i => i.id !== itemToDelete));
      }
      setItemToDelete(null);
    }
  };

  return (
    <div className="space-y-12">
      <ConfirmModal isOpen={!!itemToDelete} onClose={() => setItemToDelete(null)} onConfirm={handleDelete} title="Remove Showcase Work" message="This will permanently delete this item from your public portfolio." />
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2"><ImagePlus className="w-6 h-6 text-blue-600" /> New Gallery Submission</h3>
        <form onSubmit={handleAdd} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Project Name</label>
              <input required value={newTitle} onChange={e => setNewTitle(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-500 font-medium" placeholder="e.g. Modern Sliding Partition" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Category</label>
              <select value={newCategory} onChange={e => setNewCategory(e.target.value as any)} className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-500 font-bold">
                <option value="Windows">Windows</option>
                <option value="Doors">Doors</option>
                <option value="Elevation">Elevation</option>
                <option value="Mesh">Mesh</option>
                <option value="Glass Fitting">Glass Fitting</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Work Details</label>
            <textarea value={newDescription} onChange={e => setNewDescription(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-500 h-32 font-medium" placeholder="Describe the materials and installation type..." />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Media Asset</label>
            <div className="flex items-center gap-6">
              <label className="cursor-pointer bg-blue-50 text-blue-600 font-bold px-8 py-5 rounded-2xl hover:bg-blue-100 transition-all flex items-center gap-3 border-2 border-blue-200 border-dashed"><Camera className="w-6 h-6" /> Upload Photo<input type="file" accept="image/*" className="hidden" onChange={handleImageChange} /></label>
              {newImage && <img src={newImage} className="w-24 h-24 object-cover rounded-2xl border-4 border-white shadow-xl" />}
            </div>
          </div>
          <Button type="submit" className="w-full md:w-auto px-16 py-5">Add to Live Gallery</Button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-[2.5rem] p-4 shadow-lg border border-slate-100 relative group overflow-hidden">
            <div className="relative h-56 rounded-[1.8rem] overflow-hidden"><img src={item.imageUrl} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" /><div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div></div>
            <div className="p-4"><span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{item.category}</span><h4 className="text-xl font-extrabold text-slate-900 mt-1">{item.title}</h4><p className="text-slate-500 text-sm mt-3 line-clamp-2 font-medium">{item.description}</p></div>
            <button onClick={() => setItemToDelete(item.id)} className="absolute top-6 right-6 bg-white/90 p-3 rounded-2xl text-rose-500 shadow-xl opacity-0 group-hover:opacity-100 hover:bg-rose-500 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminDashboard: React.FC<{ 
  projects: ProjectOrder[], 
  setProjects: React.Dispatch<React.SetStateAction<ProjectOrder[]>>,
  galleryItems: GalleryItem[],
  setGalleryItems: React.Dispatch<React.SetStateAction<GalleryItem[]>>,
  feedback: Feedback[],
  setFeedback: React.Dispatch<React.SetStateAction<Feedback[]>>,
  onLogout: () => void
}> = ({ projects, setProjects, galleryItems, setGalleryItems, feedback, setFeedback, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'portfolio' | 'feedback'>('orders');
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastDeletedProject, setLastDeletedProject] = useState<ProjectOrder | null>(null);

  const pendingFeedbackCount = useMemo(() => feedback.filter(f => f.status === FeedbackStatus.PENDING).length, [feedback]);

  const updateProjectStatus = (id: string, status: ProjectStatus) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, status } : p));
  };

  const updateFeedbackStatus = (id: string, status: FeedbackStatus) => {
    setFeedback(prev => prev.map(f => f.id === id ? { ...f, status } : f));
  };

  const deleteFeedback = (id: string) => {
    setFeedback(prev => prev.filter(f => f.id !== id));
  };

  const getProgress = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.PENDING: return 15;
      case ProjectStatus.IN_PROGRESS: return 35;
      case ProjectStatus.CUTTING: return 55;
      case ProjectStatus.READY_FOR_INSTALL: return 75;
      case ProjectStatus.READY_FOR_PAYMENT: return 90;
      case ProjectStatus.COMPLETED: return 100;
      default: return 0;
    }
  };

  const filteredProjects = useMemo(() => {
    let result = projects.filter(p => {
      const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
      const matchesSearch = p.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || p.clientPhone.includes(searchQuery);
      return matchesStatus && matchesSearch;
    });
    result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return result;
  }, [projects, statusFilter, searchQuery]);

  return (
    <div className="container mx-auto py-20 px-6 relative">
      <ConfirmModal isOpen={!!projectToDelete} onClose={() => setProjectToDelete(null)} onConfirm={() => {
        if (projectToDelete) {
          const p = projects.find(pr => pr.id === projectToDelete);
          if (p) { setLastDeletedProject(p); setProjects(prev => prev.filter(pr => pr.id !== projectToDelete)); }
          setProjectToDelete(null);
        }
      }} title="Destroy Order Record" message="Warning: This will delete all measurements and linked visual logs." />

      {lastDeletedProject && (
        <UndoToast message={`Project for ${lastDeletedProject.clientName} deleted.`} onUndo={() => setProjects(prev => [lastDeletedProject, ...prev])} onDismiss={() => setLastDeletedProject(null)} />
      )}
      
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Management Console</h1>
            <div className="flex items-center gap-4">
               <p className="text-lg text-slate-500 font-medium">Operations monitoring.</p>
               <button onClick={onLogout} className="flex items-center gap-2 px-4 py-1.5 bg-rose-50 text-rose-600 rounded-xl font-bold text-xs hover:bg-rose-100 transition-all"><LogOut className="w-4 h-4" /> Logout</button>
            </div>
          </div>
          <div className="flex flex-wrap p-1.5 bg-white rounded-[1.5rem] shadow-xl border border-slate-100">
            <button onClick={() => setActiveTab('orders')} className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeTab === 'orders' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}><LayoutDashboard className="w-5 h-5" /> Orders</button>
            <button onClick={() => setActiveTab('portfolio')} className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeTab === 'portfolio' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}><Grid className="w-5 h-5" /> Gallery</button>
            <button onClick={() => setActiveTab('feedback')} className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm transition-all relative ${activeTab === 'feedback' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>
              <MessageSquare className="w-5 h-5" /> Feedback
              {pendingFeedbackCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
                  {pendingFeedbackCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </Reveal>

      {activeTab === 'orders' && (
        <div className="space-y-10">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 w-full"><Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" /><input type="text" placeholder="Search client records..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-500 font-medium text-sm transition-all" /></div>
            <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border-2 border-slate-100"><Filter className="w-4 h-4 text-slate-400" /><select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)} className="bg-transparent text-sm font-bold outline-none cursor-pointer"><option value="All">All Status</option>{Object.values(ProjectStatus).map(s => <option key={s} value={s}>{s}</option>)}</select></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((p) => (
              <div key={p.id} className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all flex flex-col relative">
                <div className="h-1.5 w-full bg-slate-100 overflow-hidden"><div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${getProgress(p.status)}%` }}></div></div>
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1"><h3 className="text-2xl font-black text-slate-900">{p.clientName}</h3><p className="text-sm font-bold text-blue-600 flex items-center gap-2"><Phone className="w-4 h-4" /> {p.clientPhone}</p></div>
                    <select value={p.status} onChange={e => updateProjectStatus(p.id, e.target.value as ProjectStatus)} className="text-xs font-black border-2 border-slate-100 rounded-xl px-4 py-2 outline-none bg-white focus:border-blue-500">{Object.values(ProjectStatus).map(s => <option key={s} value={s}>{s}</option>)}</select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">{p.measurements.slice(0, 2).map((m, i) => (<div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100"><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{m.label || 'Item'}</p><p className="text-sm font-black text-slate-700 mt-1">{m.width}x{m.height} ({m.quantity})</p></div>))}{p.measurements.length > 2 && <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">+{p.measurements.length - 2} more items</div>}</div>
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-50"><div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Calculated Cost</p><p className="text-xl font-black text-slate-900">₹{p.totalCost?.toLocaleString()}</p></div><div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Cost (Field)</p><p className="text-xl font-black text-slate-900">₹{p.estimatedCost?.toLocaleString() || '---'}</p></div></div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Logged: {new Date(p.createdAt).toLocaleDateString()}</span>
                      {p.mapUrl && (
                        <button onClick={() => window.open(p.mapUrl, '_blank')} className="mt-1 flex items-center gap-1.5 text-blue-600 font-black text-[10px] uppercase tracking-widest hover:text-blue-800 transition-colors">
                          <Navigation className="w-3 h-3" /> Get Exact Spot
                        </button>
                      )}
                    </div>
                    <div className="flex gap-2"><button onClick={() => setProjectToDelete(p.id)} className="p-3 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-100 transition-all"><Trash2 className="w-5 h-5" /></button><button onClick={() => window.open(`https://wa.me/${p.clientPhone}`, '_blank')} className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all"><Send className="w-5 h-5" /></button></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'portfolio' && <PortfolioManager items={galleryItems} setItems={setGalleryItems} onDeleted={() => {}} />}

      {activeTab === 'feedback' && (
        <div className="space-y-8">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-black text-slate-900">Moderate Feedback</h2>
             <div className="flex gap-2">
               <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold"><CheckCircle className="w-3.5 h-3.5" /> Published</span>
               <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-xs font-bold"><Clock className="w-3.5 h-3.5" /> Pending</span>
               <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold"><Eye className="w-3.5 h-3.5" /> Hidden</span>
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feedback.length > 0 ? feedback.map((f) => (
                <div key={f.id} className={`bg-white p-8 rounded-[2.5rem] shadow-xl border-2 transition-all relative group ${f.status === FeedbackStatus.PUBLISHED ? 'border-emerald-50' : f.status === FeedbackStatus.PENDING ? 'border-amber-100' : 'border-slate-100 opacity-60'}`}>
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black">{f.clientName.charAt(0)}</div>
                     <div>
                       <h4 className="font-black text-slate-900">{f.clientName}</h4>
                       <p className="text-[10px] text-slate-400 font-bold uppercase">{new Date(f.createdAt).toLocaleDateString()}</p>
                     </div>
                   </div>
                   <div className="flex gap-1 text-amber-500 mb-4">{Array.from({length: 5}).map((_, i) => <Star key={i} className={`w-4 h-4 ${f.rating > i ? 'fill-amber-500' : ''}`} />)}</div>
                   <p className="text-slate-600 font-medium italic leading-relaxed mb-10">"{f.comment}"</p>
                   
                   <div className="flex gap-2 absolute bottom-8 left-8 right-8">
                      {f.status !== FeedbackStatus.PUBLISHED && (
                        <button onClick={() => updateFeedbackStatus(f.id, FeedbackStatus.PUBLISHED)} className="flex-1 py-2 bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-600 transition-all"><Check className="w-3.5 h-3.5" /> Approve</button>
                      )}
                      {f.status !== FeedbackStatus.HIDDEN && (
                        <button onClick={() => updateFeedbackStatus(f.id, FeedbackStatus.HIDDEN)} className="flex-1 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-200 transition-all"><Eye className="w-3.5 h-3.5" /> Hide</button>
                      )}
                      {f.status === FeedbackStatus.HIDDEN && (
                        <button onClick={() => updateFeedbackStatus(f.id, FeedbackStatus.PENDING)} className="flex-1 py-2 bg-amber-50 text-amber-600 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-amber-100 transition-all"><ShieldAlert className="w-3.5 h-3.5" /> Restore</button>
                      )}
                      <button onClick={() => deleteFeedback(f.id)} className="p-2 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all"><Trash2 className="w-4 h-4" /></button>
                   </div>
                </div>
              )) : (
                <div className="col-span-full py-24 text-center text-slate-300 font-black text-2xl uppercase tracking-widest italic opacity-30">No Feedback To Manage</div>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

// --- Main App ---

enum NavView { HOME, GALLERY, WORKFLOW, FIELD_TOOL, ADMIN }

export default function App() {
  const [view, setView] = useState<NavView>(NavView.HOME);
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const [projects, setProjects] = useState<ProjectOrder[]>(() => {
    const saved = localStorage.getItem('sunil-projects');
    return saved ? JSON.parse(saved) : [];
  });
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('sunil-gallery');
    return saved ? JSON.parse(saved) : STATIC_GALLERY_ITEMS;
  });
  const [feedback, setFeedback] = useState<Feedback[]>(() => {
    const saved = localStorage.getItem('sunil-feedback');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migrate old data if status is missing
      return parsed.map((f: any) => ({ ...f, status: f.status || FeedbackStatus.PENDING }));
    }
    return [];
  });

  useEffect(() => { localStorage.setItem('sunil-projects', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem('sunil-gallery', JSON.stringify(galleryItems)); }, [galleryItems]);
  useEffect(() => { localStorage.setItem('sunil-feedback', JSON.stringify(feedback)); }, [feedback]);

  const addFeedback = (f: Partial<Feedback>) => {
    const newFeedback: Feedback = {
      id: Math.random().toString(36).substr(2, 9),
      clientName: f.clientName || 'Anonymous',
      rating: f.rating || 5,
      comment: f.comment || '',
      createdAt: f.createdAt || new Date().toISOString(),
      status: FeedbackStatus.PENDING
    };
    setFeedback(prev => [newFeedback, ...prev]);
    alert("Feedback submitted for review. Thank you!");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'SN' || passwordInput === 'SUNIL') {
      setIsAdminUnlocked(true); setShowPasswordModal(false); setView(NavView.ADMIN); setPasswordInput('');
    } else { alert("Incorrect Security Key!"); }
  };

  return (
    <div className="min-h-screen relative font-sans text-slate-900 overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="container mx-auto max-w-7xl glass-card rounded-[2rem] shadow-xl border border-white/50 px-6 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView(NavView.HOME)}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:rotate-6 transition-transform">S</div>
            <div className="hidden sm:block"><span className="text-xl font-black bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent block leading-tight">Sunil</span><span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] block">Fabrications</span></div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => setView(NavView.HOME)} className={`font-bold text-sm tracking-tight transition-all hover:text-blue-600 ${view === NavView.HOME ? 'text-blue-600' : 'text-slate-500'}`}>HOME</button>
            <button onClick={() => setView(NavView.GALLERY)} className={`font-bold text-sm tracking-tight transition-all hover:text-blue-600 ${view === NavView.GALLERY ? 'text-blue-600' : 'text-slate-500'}`}>PORTFOLIO</button>
            <button onClick={() => setView(NavView.WORKFLOW)} className={`font-bold text-sm tracking-tight transition-all hover:text-blue-600 ${view === NavView.WORKFLOW ? 'text-blue-600' : 'text-slate-500'}`}>OUR JOURNEY</button>
            {isAdminUnlocked && (<><button onClick={() => setView(NavView.FIELD_TOOL)} className={`font-bold text-sm tracking-tight transition-all hover:text-blue-600 ${view === NavView.FIELD_TOOL ? 'text-blue-600' : 'text-slate-500'}`}>FIELD TOOL</button><Button variant="secondary" onClick={() => setView(NavView.ADMIN)} className="!py-2.5 !px-5 !text-sm"><LayoutDashboard className="w-4 h-4" /> ADMIN</Button><Button onClick={() => { setIsAdminUnlocked(false); setView(NavView.HOME); }} variant="outline" className="!py-2.5 !px-5 !text-sm border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300"><LogOut className="w-4 h-4" /> Logout</Button></>)}
            {!isAdminUnlocked && <Button onClick={() => setShowPasswordModal(true)} className="!py-2.5 !px-5 !text-sm">Admin Access</Button>}
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {view === NavView.HOME && (
          <>
            <Hero onQuoteClick={() => setView(NavView.WORKFLOW)} />
            <section className="py-24 relative overflow-hidden">
              <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
                {SERVICES.map((s, idx) => (
                  <Reveal key={idx} delay={idx * 120}>
                    <div onClick={() => setSelectedService(s)} className="glass-card p-10 md:p-12 rounded-[3.5rem] hover:-translate-y-4 transition-all duration-500 group shadow-lg hover:shadow-2xl border border-white cursor-pointer">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-600 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-all"><s.icon className="w-10 h-10" /></div>
                      <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{s.title}</h3>
                      <p className="text-slate-500 font-medium">{s.description}</p>
                      <div className="mt-10 flex items-center gap-3 text-blue-600 font-bold text-sm group-hover:gap-5 transition-all">Details <ArrowRight className="w-4 h-4" /></div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
            <GallerySection items={galleryItems.slice(0, 6)} />
            <FeedbackForm onSubmit={addFeedback} />
            <TestimonialsSection feedbacks={feedback} />
          </>
        )}
        {view === NavView.GALLERY && <GallerySection items={galleryItems} />}
        {view === NavView.WORKFLOW && <WorkflowView />}
        {view === NavView.FIELD_TOOL && <FieldWorkerTool onProjectAdded={p => setProjects(prev => [p, ...prev])} />}
        {view === NavView.ADMIN && <AdminDashboard projects={projects} setProjects={setProjects} galleryItems={galleryItems} setGalleryItems={setGalleryItems} feedback={feedback} setFeedback={setFeedback} onLogout={() => { setIsAdminUnlocked(false); setView(NavView.HOME); }} />}
      </main>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />

      {showPasswordModal && (
        <div className="fixed inset-0 z-[200] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="glass-card w-full max-w-md p-10 rounded-[3rem] shadow-2xl border-2 border-white animate-scale-in text-center space-y-8">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto"><Lock className="w-10 h-10" /></div>
            <div className="space-y-2"><h3 className="text-3xl font-black text-slate-900">Admin Gateway</h3><p className="text-slate-500 font-medium text-sm">Enter security key for dashboard access.</p></div>
            <form onSubmit={handlePasswordSubmit} className="space-y-6"><input type="password" autoFocus value={passwordInput} onChange={e => setPasswordInput(e.target.value)} className="w-full px-8 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none text-center text-3xl tracking-[0.5em] font-black placeholder:tracking-normal placeholder:font-bold placeholder:text-lg" placeholder="KEY" /><Button type="submit" className="w-full py-5 text-lg">Grant Access</Button><button type="button" onClick={() => setShowPasswordModal(false)} className="px-6 py-3 text-slate-400 font-bold">Cancel</button></form>
          </div>
        </div>
      )}

      <footer className="bg-white py-24 px-6 border-t border-slate-100 mt-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <div className="flex items-center gap-4"><div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl">S</div><span className="text-3xl font-black tracking-tight">Sunil Fabrications</span></div>
            <p className="text-slate-400 text-sm max-w-sm font-medium italic">Premium UPVC windows and structural glazing since 2010.</p>
          </div>
          <div className="flex gap-5">
            <a href="#" className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"><Instagram /></a>
            <a href="#" className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"><Facebook /></a>
            <a href={`tel:${OWNER_NUMBERS.PRIMARY}`} className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"><Phone /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
