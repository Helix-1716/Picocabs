import React, { useState, useEffect } from 'react';
import { 
  Zap,
  Phone,
  Clock,
  ChevronRight,
  Shield,
  Globe,
  Navigation,
  ArrowLeft
} from 'lucide-react';
import gsap from 'gsap';

const incidents = [
  { 
    id: 1, 
    type: 'Harassment Alert', 
    user: 'Anjali Sharma', 
    role: 'Customer', 
    location: 'MG Road, Bangalore', 
    time: '2m ago', 
    priority: 'CRITICAL',
    rideId: 'TRP 9928',
    sla: '01:42'
  },
  { 
    id: 2, 
    type: 'Vehicle Breakdown', 
    user: 'Rajesh Kumar', 
    role: 'Driver', 
    location: 'Mumbai-Pune Expressway', 
    time: '5m ago', 
    priority: 'HIGH',
    rideId: 'TRP 8812',
    sla: '04:15'
  },
  { 
    id: 3, 
    type: 'Medical Emergency', 
    user: 'Vikram Singh', 
    role: 'Customer', 
    location: 'Cyber City, Gurgaon', 
    time: '12m ago', 
    priority: 'URGENT',
    rideId: 'TRP 7721',
    sla: '08:00'
  },
];

const SOSCenter: React.FC = () => {
  const [selectedIncidentId, setSelectedIncidentId] = useState<number>(1);
  const selectedIncident = incidents.find(i => i.id === selectedIncidentId);

  useEffect(() => {
    gsap.fromTo('.gsap-reveal', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: 'expo.out' }
    );
  }, []);

  const [isDeploying, setIsDeploying] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  const handleDeploy = () => {
    if (!selectedIncident) return;
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      alert(`RESOURCES DEPLOYED: Dispatch units en route to ${selectedIncident.location}.`);
    }, 2000);
  };

  const handleCall = () => {
    if (!selectedIncident) return;
    setIsCalling(true);
    setTimeout(() => {
      setIsCalling(false);
      alert(`VOICE LINK ESTABLISHED: Connected to ${selectedIncident.user} (${selectedIncident.role}).`);
    }, 1500);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-8 space-y-10 pb-12">
      <div className="flex items-center justify-between gsap-reveal">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg text-[10px] font-bold tracking-[0.2em] uppercase text-secondary hover:text-primary hover:border-primary/30 transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono font-bold text-emergency animate-pulse flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emergency rounded-full" />
            LIVE FEED ACTIVE
          </span>
          <div className="h-4 w-px bg-border" />
          <span className="text-[10px] font-mono font-bold text-secondary">NODE: IN SOS 01</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-border pb-8 gap-6 gsap-reveal">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">Emergency Hub</h2>
          <p className="text-secondary mt-2 font-medium text-xs sm:text-base italic">Critical incident oversight and rapid response coordination.</p>
        </div>
      </div>

      {/* Connectivity & Technical Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gsap-reveal">
        {[
          { label: 'Satellite Link', status: 'Stable', strength: 98, icon: Globe },
          { label: 'Bangalore Hub', status: 'Active', strength: 100, icon: Navigation },
          { label: 'Delhi Node', status: 'Active', strength: 96, icon: Navigation },
          { label: 'Mumbai Relay', status: 'Congested', strength: 74, icon: Zap }
        ].map((hub, i) => (
          <div key={i} className="bg-surface border border-border p-5 rounded-2xl group flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
                <hub.icon size={14} className="text-white" />
              </div>
              <span className="text-[10px] font-mono font-bold text-primary">{hub.strength}%</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-secondary tracking-widest uppercase mb-2 block">{hub.label}</span>
              <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${hub.strength}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gsap-reveal">
        {/* Incident Feed */}
        <div className="lg:col-span-1 flex flex-col gap-6 h-[600px]">
          <div className="bg-primary text-white p-6 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <h3 className="font-bold text-lg italic">Incident Log</h3>
              <p className="text-[9px] font-mono text-white/50 tracking-widest uppercase mt-1">Real-time alerts</p>
            </div>
            <div className="w-2 h-2 bg-emergency rounded-full animate-pulse shadow-[0_0_10px_#EF4444]" />
          </div>
          
          <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar">
            {incidents.map((incident) => (
              <div 
                key={incident.id}
                onClick={() => setSelectedIncidentId(incident.id)}
                className={`p-5 border rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedIncidentId === incident.id 
                    ? 'border-primary bg-surface shadow-md' 
                    : 'border-border bg-white hover:border-primary/30 hover:bg-surface/30'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-mono text-secondary font-bold"># {incident.id.toString().padStart(4, '0')}</span>
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase ${
                    incident.priority === 'CRITICAL' ? 'bg-emergency text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    {incident.priority}
                  </span>
                </div>
                <h4 className="font-bold text-primary mb-1">{incident.type}</h4>
                <p className="text-[11px] text-secondary font-medium mb-5 line-clamp-1">{incident.location}</p>
                <div className="flex items-center justify-between text-[10px] font-bold text-secondary uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {incident.time}</span>
                  <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    <span className={selectedIncidentId === incident.id ? 'text-primary' : 'opacity-0'}>DETAILS</span>
                    <ChevronRight size={14} className={selectedIncidentId === incident.id ? 'text-primary' : 'text-border'} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Map & Action Panel */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-white border border-border h-[450px] relative overflow-hidden rounded-2xl shadow-sm group">
            <div className="absolute inset-0 bg-background">
              {/* Subtle Map Grid */}
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1E293B 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              
              {selectedIncident && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-emergency/20 rounded-full animate-ping absolute -inset-1" />
                  <div className="w-4 h-4 bg-emergency rounded-full relative z-10 border-2 border-white shadow-lg" />
                  
                  <div className="bg-white border border-border p-4 absolute bottom-8 left-1/2 -translate-x-1/2 w-56 shadow-2xl rounded-xl animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-secondary mb-1">Target Location</p>
                    <p className="text-xs font-bold text-primary leading-tight">{selectedIncident.location}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-2">
                      <span className="text-[9px] font-mono text-secondary">RIDE: {selectedIncident.rideId}</span>
                      <span className="text-[9px] font-mono text-emergency font-bold">SLA: {selectedIncident.sla}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-primary text-white px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase rounded-lg shadow-lg">IN REGION HQ</div>
                <div className="bg-white/80 backdrop-blur-sm border border-border px-3 py-1.5 text-[9px] font-bold tracking-widest text-secondary rounded-lg">LAYER: EMERGENCY OVERLAY</div>
              </div>
            </div>
            
            <div className="absolute bottom-6 inset-x-6 flex gap-4">
              <button 
                onClick={handleDeploy}
                disabled={isDeploying}
                className="flex-1 bg-primary text-white py-4 rounded-xl text-[10px] font-bold tracking-[0.2em] hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg active:scale-95"
              >
                {isDeploying ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white animate-spin rounded-full" />
                    DISPATCHING...
                  </>
                ) : (
                  <>
                    <Shield size={16} /> DEPLOY RESOURCES
                  </>
                )}
              </button>
              <button 
                onClick={handleCall}
                disabled={isCalling}
                className="flex-1 bg-white border border-border text-primary py-4 rounded-xl text-[10px] font-bold tracking-[0.2em] hover:bg-surface transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm active:scale-95"
              >
                {isCalling ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary/20 border-t-primary animate-spin rounded-full" />
                    CONNECTING...
                  </>
                ) : (
                  <>
                    <Phone size={16} /> INITIATE COMMS
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="bg-surface border border-border p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} className="text-primary" />
                <h3 className="font-bold text-primary italic">Operational Protocol</h3>
              </div>
              <p className="text-xs text-secondary font-medium leading-relaxed">
                Emergency response protocols are currently at Level 2. All personnel within 2km of active nodes are on high alert. 
                Automatic verification enabled for all rescue units.
              </p>
            </div>
            <div className="flex items-center gap-10 shrink-0">
              <div className="text-center">
                <p className="text-[9px] font-bold text-secondary tracking-widest mb-1 uppercase">Avg Response</p>
                <p className="text-3xl font-bold text-primary tracking-tight">2.4<span className="text-sm">m</span></p>
              </div>
              <div className="h-12 w-px bg-border/50" />
              <div className="text-center">
                <p className="text-[9px] font-bold text-secondary tracking-widest mb-1 uppercase">Success Rate</p>
                <p className="text-3xl font-bold text-success tracking-tight">99.2<span className="text-sm">%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSCenter;
