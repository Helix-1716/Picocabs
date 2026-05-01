import React, { useEffect } from 'react';
import { 
  Search, 
  Filter,
  ArrowLeft,
  UserCheck,
  ShieldCheck,
  MoreVertical,
  Star
} from 'lucide-react';
import gsap from 'gsap';

const drivers = [
  { id: 1, name: 'Rajesh Kumar', vehicle: 'Maruti Suzuki Dzire', plate: 'KA-01-MJ-2281', status: 'ONLINE', rating: 4.9, city: 'Bangalore', joinDate: '2023-01-12' },
  { id: 2, name: 'Vikram Singh', vehicle: 'Toyota Innova', plate: 'MH-01-AX-9921', status: 'ON TRIP', rating: 4.7, city: 'Mumbai', joinDate: '2023-03-05' },
  { id: 3, name: 'Priya Sharma', vehicle: 'Tata Nexon EV', plate: 'DL-01-CP-4412', status: 'OFFLINE', rating: 4.8, city: 'Delhi', joinDate: '2022-11-20' },
  { id: 4, name: 'Arjun Reddy', vehicle: 'Hyundai Verna', plate: 'TS-01-UB-7731', status: 'BLOCKED', rating: 3.5, city: 'Hyderabad', joinDate: '2023-05-15' },
  { id: 5, name: 'Anjali Nair', vehicle: 'Honda City', plate: 'TN-01-BK-1102', status: 'ONLINE', rating: 5.0, city: 'Chennai', joinDate: '2024-01-10' },
  { id: 6, name: 'Sameer Khan', vehicle: 'Mahindra XUV700', plate: 'WB-01-AD-6628', status: 'ON TRIP', rating: 4.6, city: 'Kolkata', joinDate: '2023-08-22' },
];

const DriverManagement: React.FC = () => {
  const [isExporting, setIsExporting] = React.useState(false);
  const [isVerifying, setIsVerifying] = React.useState(false);

  useEffect(() => {
    gsap.fromTo('.gsap-reveal', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: 'expo.out' }
    );
    gsap.fromTo('.table-row', 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.03, duration: 0.6, ease: 'expo.out', delay: 0.4 }
    );
  }, []);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert('FLEET DATA EXPORTED: driver registry india v01.csv');
    }, 1500);
  };

  const handleBulkVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      alert('BULK VERIFICATION COMPLETE: 492 drivers re-authenticated against national database.');
    }, 2500);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-8 space-y-10 pb-12">
      <button 
        onClick={() => window.history.back()}
        className="gsap-reveal flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-secondary hover:text-primary transition-all group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-border pb-8 gap-6 gsap-reveal">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">Fleet Management</h2>
          <p className="text-secondary mt-2 font-medium text-xs sm:text-base italic">Authentication and operational oversight for all active Indian units.</p>
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="flex-1 sm:flex-none px-6 py-2.5 border border-border hover:bg-surface transition-all text-xs font-bold tracking-widest uppercase disabled:opacity-50 text-primary"
          >
            {isExporting ? 'EXPORTING...' : 'Export List'}
          </button>
          <button 
            onClick={handleBulkVerify}
            disabled={isVerifying}
            className="flex-1 sm:flex-none px-6 py-2.5 bg-primary text-white hover:bg-primary/90 transition-all text-xs font-bold tracking-widest uppercase disabled:opacity-50"
          >
            {isVerifying ? 'VERIFYING...' : 'Bulk Verify'}
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-reveal">
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-lg">
              <UserCheck className="text-white w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-green-600 tracking-widest uppercase bg-green-50 px-2 py-1 rounded">Healthy</span>
          </div>
          <p className="text-[10px] font-bold tracking-widest text-secondary mb-1 uppercase">Active Compliance</p>
          <h3 className="text-3xl font-bold text-primary">98.2%</h3>
        </div>
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-lg">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/5 px-2 py-1 rounded">Verified</span>
          </div>
          <p className="text-[10px] font-bold tracking-widest text-secondary mb-1 uppercase">Background Checks</p>
          <h3 className="text-3xl font-bold text-primary">4,831</h3>
        </div>
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-lg">
              <Star className="text-white w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-amber-600 tracking-widest uppercase bg-amber-50 px-2 py-1 rounded">High</span>
          </div>
          <p className="text-[10px] font-bold tracking-widest text-secondary mb-1 uppercase">Avg Fleet Rating</p>
          <h3 className="text-3xl font-bold text-primary">4.82</h3>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col lg:flex-row gap-6 p-6 bg-surface border border-border items-center gsap-reveal rounded-2xl">
        <div className="relative flex-1 group w-full">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-primary transition-all" />
          <input 
            type="text" 
            placeholder="Search by name, ID, or license plate..." 
            className="w-full bg-transparent border-b border-border pl-8 pr-4 py-2 text-sm outline-none focus:border-primary transition-all placeholder:text-secondary font-medium"
          />
        </div>
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          <select className="flex-1 lg:flex-none bg-transparent border-b border-border px-4 py-2 text-[10px] font-bold tracking-widest uppercase outline-none focus:border-primary transition-all text-primary">
            <option>ALL REGIONS</option>
            <option>BANGALORE</option>
            <option>MUMBAI</option>
            <option>DELHI</option>
          </select>
          <select className="flex-1 lg:flex-none bg-transparent border-b border-border px-4 py-2 text-[10px] font-bold tracking-widest uppercase outline-none focus:border-primary transition-all text-primary">
            <option>STATUS: ALL</option>
            <option>ONLINE</option>
            <option>ON TRIP</option>
            <option>OFFLINE</option>
            <option>BLOCKED</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-secondary hover:text-primary transition-all border border-border rounded-lg bg-white shadow-sm">
            <Filter className="w-3 h-3" /> Filter
          </button>
        </div>
      </div>

      {/* Driver Table */}
      <div className="bg-white border border-border overflow-hidden gsap-reveal rounded-2xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-surface/30">
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Unit Identity</th>
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Asset Details</th>
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Operational Zone</th>
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Duty Status</th>
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Perf Rating</th>
                <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {drivers.map((driver) => (
                <tr key={driver.id} className="table-row group hover:bg-surface/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-white rounded-xl shadow-sm">
                        {driver.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">{driver.name}</p>
                        <p className="text-[10px] text-secondary font-mono tracking-widest uppercase">DRV {1000 + driver.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs font-bold text-primary">{driver.vehicle}</p>
                    <p className="text-[10px] text-secondary font-mono tracking-widest uppercase">{driver.plate}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs text-primary font-medium">{driver.city}</p>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">REGION INDIA 0{driver.id % 5 + 1}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[9px] font-bold px-3 py-1 rounded-full ${
                      driver.status === 'ONLINE' ? 'bg-green-100 text-green-700' : 
                      driver.status === 'ON TRIP' ? 'bg-primary text-white' :
                      driver.status === 'OFFLINE' ? 'bg-surface text-secondary border border-border' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {driver.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-primary">{driver.rating}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-1 h-1 rounded-full ${i < Math.floor(driver.rating) ? 'bg-primary' : 'bg-border'}`} />
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end items-center gap-2">
                      <button className="p-2 text-secondary hover:text-primary transition-colors hover:bg-surface rounded-lg">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 border-t border-border bg-surface/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-widest text-secondary uppercase">Displaying 06 Of 4,920 Units</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-border bg-white text-[10px] font-bold tracking-widest uppercase disabled:opacity-30 rounded-lg hover:bg-surface transition-colors shadow-sm" disabled>Prev</button>
            <button className="px-4 py-2 border border-border bg-white text-[10px] font-bold tracking-widest uppercase hover:bg-surface transition-colors rounded-lg shadow-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverManagement;

