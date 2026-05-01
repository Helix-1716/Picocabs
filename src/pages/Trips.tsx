import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  Navigation, 
  Clock, 
  Search,
  Filter,
  MoreVertical,
  ChevronRight,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Activity,
  MapPin
} from 'lucide-react';

const trips = [
  {
    id: 'TR-9042',
    customer: 'Anjali Sharma',
    driver: 'Rajesh K.',
    vehicle: 'Mercedes S-Class (Black)',
    origin: 'MG Road, Bangalore',
    destination: 'Kempegowda Int. Airport (BLR)',
    time: '14:20',
    status: 'In Progress',
    fare: '₹1,850.00',
    type: 'Luxury'
  },
  {
    id: 'TR-9041',
    customer: 'Vikram Malhotra',
    driver: 'Suresh M.',
    vehicle: 'Tesla Model S (White)',
    origin: 'Connaught Place, Delhi',
    destination: 'Indira Gandhi Int. Airport (DEL)',
    time: '13:45',
    status: 'Completed',
    fare: '₹1,420.00',
    type: 'Electric'
  },
  {
    id: 'TR-9040',
    customer: 'Priya Deshmukh',
    driver: 'Vijay P.',
    vehicle: 'BMW 5 Series (Silver)',
    origin: 'Marine Drive, Mumbai',
    destination: 'Chhatrapati Shivaji Int. Airport (BOM)',
    time: '13:10',
    status: 'Completed',
    fare: '₹2,340.00',
    type: 'Business'
  },
  {
    id: 'TR-9039',
    customer: 'Aditya Reddy',
    driver: 'Lokesh T.',
    vehicle: 'Audi A6 (Black)',
    origin: 'Cyber Towers, Hyderabad',
    destination: 'Rajiv Gandhi Int. Airport (HYD)',
    time: '12:55',
    status: 'Cancelled',
    fare: '₹0.00',
    type: 'Business'
  },
  {
    id: 'TR-9038',
    customer: 'Deepa Nair',
    driver: 'Arun D.',
    vehicle: 'Mercedes E-Class (Blue)',
    origin: 'T. Nagar, Chennai',
    destination: 'Chennai Int. Airport (MAA)',
    time: '12:30',
    status: 'Completed',
    fare: '₹1,180.00',
    type: 'Comfort'
  }
];

const Trips: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current.querySelectorAll('.gsap-reveal'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'expo.out' }
      );
    }
  }, []);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-50 text-green-700 border-green-100';
      case 'In Progress': return 'bg-primary text-white border-primary';
      case 'Cancelled': return 'bg-red-50 text-red-700 border-red-100';
      default: return 'bg-surface text-secondary border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle2 size={12} />;
      case 'In Progress': return <Navigation size={12} className="animate-pulse" />;
      case 'Cancelled': return <XCircle size={12} />;
      default: return <Clock size={12} />;
    }
  };

  return (
    <div ref={pageRef} className="max-w-[1280px] mx-auto px-6 sm:px-8 py-8 space-y-10 pb-12">
      <button 
        onClick={() => window.history.back()}
        className="gsap-reveal flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-secondary hover:text-primary transition-all group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-8 gap-6 gsap-reveal">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary">Active Operations</h1>
          <p className="text-secondary mt-2 font-medium text-xs sm:text-base italic">Real-time trip monitoring and lifecycle management across regions.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative group w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search IDs, drivers, routes..." 
              className="w-full bg-white border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-all font-medium placeholder:text-secondary shadow-sm"
            />
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-border px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-surface transition-all rounded-xl shadow-sm text-primary">
            <Filter size={14} />
            Filters
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gsap-reveal">
        {[
          { label: 'Live Trips', value: '142', sub: '+12 from last hour', icon: Navigation },
          { label: 'Avg. Fare', value: '₹280.40', sub: 'National average', icon: Activity },
          { label: 'Wait Time', value: '4.2m', sub: 'Target: <5.0m', icon: Clock },
          { label: 'Completion', value: '94.2%', sub: 'High reliability', icon: CheckCircle2 }
        ].map((stat, i) => (
          <div key={i} className="bg-surface border border-border p-6 rounded-2xl group hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                <stat.icon size={20} />
              </div>
            </div>
            <p className="text-[10px] font-bold tracking-widest text-secondary mb-1 uppercase">{stat.label}</p>
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-[10px] text-secondary mt-2 font-bold uppercase tracking-widest italic">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Trip Table */}
      <div className="bg-white border border-border overflow-hidden gsap-reveal rounded-2xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-surface/30">
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Trip ID & Details</th>
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Geographic Route</th>
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Personnel Asset</th>
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary text-right">Fare Status</th>
                <th className="px-8 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {trips.map((trip) => (
                <tr key={trip.id} className="group hover:bg-surface/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm text-primary">{trip.id}</span>
                      <div className="flex items-center gap-1.5 text-[10px] text-secondary font-bold uppercase tracking-widest">
                        <Clock size={10} />
                        {trip.time} • {trip.type}
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-2 max-w-xs">
                      <div className="flex items-center gap-2">
                        <MapPin size={10} className="text-green-500" />
                        <span className="text-xs text-primary font-medium truncate">{trip.origin}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={10} className="text-primary" />
                        <span className="text-xs text-primary font-medium truncate">{trip.destination}</span>
                      </div>
                    </div>
                  </td>

                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary text-white rounded-lg flex items-center justify-center text-[10px] font-bold">
                          {trip.customer.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-primary">{trip.customer}</span>
                        <ChevronRight size={10} className="text-secondary" />
                        <span className="text-xs font-bold text-primary">{trip.driver}</span>
                      </div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest ml-8">{trip.vehicle}</span>
                    </div>
                  </td>

                  <td className="px-8 py-6 text-right">
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-bold text-sm text-primary">{trip.fare}</span>
                      <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest ${getStatusStyle(trip.status)}`}>
                        {getStatusIcon(trip.status)}
                        {trip.status}
                      </span>
                    </div>
                  </td>

                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-secondary hover:text-primary transition-colors hover:bg-surface rounded-lg">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-8 py-6 border-t border-border bg-surface/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold tracking-widest text-secondary uppercase">Showing 05 Of 142 Daily Operations</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-border text-[10px] font-bold tracking-widest uppercase hover:bg-surface transition-colors rounded-lg shadow-sm" disabled>Prev</button>
            <button className="px-4 py-2 bg-white border border-border text-[10px] font-bold tracking-widest uppercase hover:bg-surface transition-colors rounded-lg shadow-sm">Next</button>
          </div>
        </div>
      </div>

      {/* Operational Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gsap-reveal">
        <div className="bg-primary text-white p-8 rounded-3xl group overflow-hidden relative shadow-xl">
          <div className="absolute top-0 right-0 p-8 text-white/10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
            <Navigation size={140} strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Traffic Heatmap</h3>
            <p className="text-white/70 text-sm font-medium leading-relaxed mb-8 max-w-sm">
              Current peak demand detected in Central Bangalore and Mumbai Business Districts. 
              Deploy additional units to maintain &lt;5 min response time.
            </p>
            <button className="text-[10px] uppercase tracking-[0.2em] font-bold border border-white/20 px-6 py-2.5 rounded-xl hover:bg-white hover:text-primary transition-all">
              Launch Regional Map
            </button>
          </div>
        </div>
        
        <div className="bg-surface border border-border p-8 rounded-3xl relative overflow-hidden group shadow-sm">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-primary">Fleet Efficiency</h3>
            <div className="flex items-end gap-1 mb-4">
              <span className="text-4xl font-bold text-primary">88%</span>
              <span className="text-[10px] text-secondary mb-1.5 font-bold uppercase tracking-widest">Utilization</span>
            </div>
            <div className="w-full bg-white border border-border h-3 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[88%] transition-all duration-1000 ease-out" />
            </div>
            <p className="text-secondary text-[10px] mt-6 font-bold uppercase tracking-widest leading-relaxed">
              Current optimization level is optimal. No idle alerts detected in major hubs.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex-1 p-3 bg-white border border-border rounded-xl">
                <p className="text-[9px] text-secondary font-bold uppercase tracking-widest mb-1">Active</p>
                <p className="text-xl font-bold text-primary">1,242</p>
              </div>
              <div className="flex-1 p-3 bg-white border border-border rounded-xl">
                <p className="text-[9px] text-secondary font-bold uppercase tracking-widest mb-1">Standby</p>
                <p className="text-xl font-bold text-primary">168</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;

