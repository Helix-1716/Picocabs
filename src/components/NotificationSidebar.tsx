import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  Bell, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  MapPin,
  IndianRupee,
  Archive,
  Check
} from 'lucide-react';
import gsap from 'gsap';

interface NotificationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onViewArchive: () => void;
}

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: 'emergency',
    title: 'SOS Alert Resolved',
    message: 'Trip TRP 8842 in MG Road, Bangalore has been successfully closed.',
    time: '2m ago',
    icon: AlertTriangle,
    color: 'text-red-500'
  },
  {
    id: 2,
    type: 'verification',
    title: 'Driver Verification',
    message: 'New driver Rajesh Kumar is awaiting document approval.',
    time: '15m ago',
    icon: CheckCircle2,
    color: 'text-black'
  },
  {
    id: 3,
    type: 'system',
    title: 'System Maintenance',
    message: 'Scheduled maintenance tonight at 02:00 IST.',
    time: '1h ago',
    icon: Clock,
    color: 'text-black/40'
  },
  {
    id: 4,
    type: 'financial',
    title: 'Payout Initiated',
    message: '₹45,000 payout processed for Vikram Singh (MH-01).',
    time: '3h ago',
    icon: IndianRupee,
    color: 'text-green-600'
  },
  {
    id: 5,
    type: 'ops',
    title: 'High Demand Area',
    message: 'Surge pricing active in Cyber City, Gurgaon due to weather.',
    time: '4h ago',
    icon: MapPin,
    color: 'text-amber-600'
  }
];

const NotificationSidebar: React.FC<NotificationSidebarProps> = ({ isOpen, onClose, onViewArchive }) => {
  const [notifs, setNotifs] = useState(INITIAL_NOTIFICATIONS);
  const [isArchiving, setIsArchiving] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, display: 'block', duration: 0.4 });
      gsap.to(sidebarRef.current, { x: 0, duration: 0.6, ease: 'expo.out' });
      gsap.fromTo('.notif-item', 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, delay: 0.2, ease: 'power2.out' }
      );
    } else {
      gsap.to(sidebarRef.current, { x: '100%', duration: 0.4, ease: 'power2.in' });
      gsap.to(overlayRef.current, { opacity: 0, display: 'none', duration: 0.3 });
    }
  }, [isOpen]);

  const handleMarkAllRead = () => {
    gsap.to('.notif-item', {
      opacity: 0,
      x: -20,
      stagger: 0.05,
      duration: 0.4,
      onComplete: () => setNotifs([])
    });
  };

  const handleViewArchive = () => {
    setIsArchiving(true);
    // Simulate archive fetch then switch sidebars
    setTimeout(() => {
      setIsArchiving(false);
      onViewArchive();
    }, 800);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/5 backdrop-blur-sm z-[60] hidden"
      />

      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className="fixed right-0 top-0 h-screen w-[400px] bg-white border-l border-border z-[70] translate-x-full flex flex-col shadow-2xl"
      >
        <div className="p-8 border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell size={18} className="text-black" />
            <h2 className="font-serif text-xl font-bold italic">Notifications</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-surface transition-all group rounded-lg"
          >
            <X size={18} className="transition-transform group-hover:rotate-90 text-secondary" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">Recent Activity</span>
            {notifs.length > 0 && (
              <button 
                onClick={handleMarkAllRead}
                className="text-[10px] font-bold border-b border-border pb-0.5 hover:text-primary transition-colors flex items-center gap-1.5 text-secondary"
              >
                <Check size={10} /> MARK ALL READ
              </button>
            )}
          </div>

          <div className="space-y-4">
            {notifs.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-black/5 flex items-center justify-center rounded-full mb-4">
                  <CheckCircle2 className="text-black/20" size={20} />
                </div>
                <p className="text-xs font-serif italic text-black/40">Inbox zero achieved.</p>
                <p className="text-[10px] font-bold tracking-widest uppercase mt-2 text-black/20">All Units Verified</p>
              </div>
            ) : (
              notifs.map((notif) => (
                <div 
                  key={notif.id}
                  className="notif-item group p-5 border border-border bg-surface/30 hover:bg-surface hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden rounded-2xl"
                >
                  <div className="flex gap-4 relative z-10">
                    <div className={`mt-1 ${notif.color}`}>
                      <notif.icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-bold text-black leading-tight">{notif.title}</h4>
                        <span className="text-[9px] font-mono text-black/30">{notif.time}</span>
                      </div>
                      <p className="text-xs text-black/50 font-light leading-relaxed pr-2">
                        {notif.message}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="p-8 border-t border-border bg-background/50">
          <button 
            onClick={handleViewArchive}
            disabled={isArchiving}
            className="w-full bg-primary text-white py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 rounded-xl shadow-lg shadow-primary/10"
          >
            {isArchiving ? (
              <>
                <div className="w-3 h-3 border border-white/30 border-t-white animate-spin rounded-full" />
                SYNCING ARCHIVE...
              </>
            ) : (
              <>
                <Archive size={14} /> VIEW NOTIFICATION ARCHIVE
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationSidebar;
