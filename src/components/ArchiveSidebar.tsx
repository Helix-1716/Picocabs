import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  Archive, 
  RotateCcw, 
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  IndianRupee,
  MapPin,
  History,
  ChevronLeft
} from 'lucide-react';
import gsap from 'gsap';

interface ArchiveSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const ARCHIVED_NOTIFICATIONS = [
  {
    id: 101,
    type: 'ops',
    title: 'Peak Hour Report',
    message: 'Operational efficiency in Bangalore South increased by 14% compared to last Tuesday.',
    time: 'Yesterday',
    icon: Clock,
    color: 'text-black/40'
  },
  {
    id: 102,
    type: 'financial',
    title: 'Weekly Settlement',
    message: 'Settlement batch SET 9921 totaling ₹12,40,000 finalized.',
    time: '2 days ago',
    icon: IndianRupee,
    color: 'text-green-600'
  },
  {
    id: 103,
    type: 'system',
    title: 'Security Patch v1.2',
    message: 'Emergency encryption patch deployed across all driver mobile endpoints.',
    time: '3 days ago',
    icon: CheckCircle2,
    color: 'text-black'
  },
  {
    id: 104,
    type: 'ops',
    title: 'Region Expansion',
    message: 'Operational mapping for New Gurgaon sector 45 completed.',
    time: '4 days ago',
    icon: MapPin,
    color: 'text-amber-600'
  }
];

const ArchiveSidebar: React.FC<ArchiveSidebarProps> = ({ isOpen, onClose, onBack }) => {
  const [archived, setArchived] = useState(ARCHIVED_NOTIFICATIONS);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, display: 'block', duration: 0.4 });
      gsap.to(sidebarRef.current, { x: 0, duration: 0.6, ease: 'expo.out' });
      gsap.fromTo('.archive-item', 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, delay: 0.2, ease: 'power2.out' }
      );
    } else {
      gsap.to(sidebarRef.current, { x: '100%', duration: 0.4, ease: 'power2.in' });
      gsap.to(overlayRef.current, { opacity: 0, display: 'none', duration: 0.3 });
    }
  }, [isOpen]);

  const handleRestore = (id: number) => {
    gsap.to(`.archive-item-${id}`, {
      opacity: 0,
      x: 20,
      duration: 0.3,
      onComplete: () => {
        setArchived(prev => prev.filter(item => item.id !== id));
      }
    });
  };

  const handleClearArchive = () => {
    if (window.confirm('PERMANENT DELETE: Are you sure you want to clear the logs?')) {
      gsap.to('.archive-item', {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.4,
        onComplete: () => setArchived([])
      });
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/5 backdrop-blur-sm z-[80] hidden"
      />

      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className="fixed right-0 top-0 h-screen w-[400px] bg-white border-l border-border z-[90] translate-x-full flex flex-col shadow-2xl"
      >
        <div className="pt-6 px-8 pb-8 border-b border-border flex flex-col gap-8 bg-surface/30 relative">
          <div className="flex items-center justify-between w-full">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-1.5 border border-border hover:bg-white transition-all group rounded-lg"
              title="Back to Notifications"
            >
              <ChevronLeft size={14} className="text-secondary group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-secondary group-hover:text-primary">BACK</span>
            </button>
            <button 
              onClick={onClose}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-white transition-all group rounded-lg"
            >
              <X size={18} className="transition-transform group-hover:rotate-90 text-secondary" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <Archive size={18} className="text-primary" />
            <h2 className="font-serif text-xl font-bold italic text-primary">Operational Archive</h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">Archived Records</span>
            {archived.length > 0 && (
              <button 
                onClick={handleClearArchive}
                className="text-[10px] font-bold text-red-600 border-b border-red-600/10 pb-0.5 hover:text-red-700 transition-colors flex items-center gap-1.5"
              >
                <Trash2 size={10} /> CLEAR ALL
              </button>
            )}
          </div>

          <div className="space-y-4">
            {archived.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-black/5 flex items-center justify-center rounded-full mb-4">
                  <History className="text-black/20" size={20} />
                </div>
                <p className="text-xs font-serif italic text-black/40">No historical records found.</p>
                <p className="text-[10px] font-bold tracking-widest uppercase mt-2 text-black/20">Archive Clean</p>
              </div>
            ) : (
              archived.map((item) => (
                <div 
                  key={item.id}
                  className={`archive-item archive-item-${item.id} group p-5 border border-border bg-surface/10 hover:bg-surface transition-all relative overflow-hidden rounded-2xl`}
                >
                  <div className="flex gap-4 relative z-10">
                    <div className={`mt-1 ${item.color}`}>
                      <item.icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-bold text-black leading-tight opacity-60">{item.title}</h4>
                        <span className="text-[9px] font-mono text-black/30">{item.time}</span>
                      </div>
                      <p className="text-xs text-black/40 font-light leading-relaxed mb-4">
                        {item.message}
                      </p>
                      <button 
                        onClick={() => handleRestore(item.id)}
                        className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-black/40 hover:text-black transition-colors uppercase"
                      >
                        <RotateCcw size={10} /> Restore to Inbox
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="p-8 border-t border-border">
          <div className="bg-surface/50 p-4 flex items-start gap-3 rounded-xl border border-border/50">
            <AlertTriangle size={14} className="mt-0.5 text-secondary" />
            <p className="text-[9px] text-secondary leading-normal font-medium">
              SYSTEM NOTE: Archived notifications are stored for 30 days before automatic deletion. Verification logs are persisted in core ledger.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchiveSidebar;
