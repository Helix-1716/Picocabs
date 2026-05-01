import React, { useEffect } from 'react';
import { 
  TrendingUp, 
  Wallet, 
  ArrowUpRight, 
  Download,
  Filter,
  IndianRupee,
  Clock,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import gsap from 'gsap';

const transactions = [
  { id: 'TX-9902', entity: 'Rajesh Kumar', type: 'Payout', amount: 14500, status: 'Completed', date: 'Today, 10:45 AM' },
  { id: 'TX-9901', entity: 'Tata Group (Corp)', type: 'Deposit', amount: 85000, status: 'Pending', date: 'Today, 09:30 AM' },
  { id: 'TX-9899', entity: 'Priya Sharma', type: 'Payout', amount: 12200, status: 'Completed', date: 'Yesterday' },
  { id: 'TX-9898', entity: 'Vikram Singh', type: 'Payout', amount: 18400, status: 'Completed', date: 'Yesterday' },
  { id: 'TX-9897', entity: 'Fleet Maintenance', type: 'Expense', amount: 45000, status: 'Completed', date: '2 days ago' },
  { id: 'TX-9896', entity: 'Reliance Indus (Corp)', type: 'Deposit', amount: 125000, status: 'Completed', date: '2 days ago' },
];

const Financials: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.gsap-reveal', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: 'expo.out' }
    );
  }, []);

  return (
    <div className="space-y-10 pb-12">
      <button 
        onClick={() => window.history.back()}
        className="gsap-reveal flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-secondary hover:text-primary transition-all group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      <div className="flex justify-between items-end border-b border-border pb-8 gsap-reveal">
        <div>
          <h2 className="text-5xl font-bold text-primary tracking-tight">Financial Oversight</h2>
          <p className="text-secondary mt-2 font-medium">Global capital flow, commissions, and fleet payout management.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 border border-border hover:bg-surface transition-all text-xs font-bold tracking-widest uppercase flex items-center gap-2 text-primary rounded-xl">
            <Download size={14} /> Export Ledger
          </button>
          <button className="px-6 py-2.5 bg-primary text-white hover:bg-primary/90 transition-all text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-primary/10">
            Initiate Bulk Payout
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Total Revenue (MTD)', value: '₹1,24,85,000', change: '+14.2%', trend: 'up', icon: TrendingUp },
          { label: 'Pending Payouts', value: '₹8,42,000', change: '12 Drivers', trend: 'neutral', icon: Clock },
          { label: 'Platform Commission', value: '₹18,72,000', change: '+8.5%', trend: 'up', icon: Wallet },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-border p-8 gsap-reveal group hover:border-primary/20 transition-all rounded-3xl shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-bold tracking-widest ${
                stat.trend === 'up' ? 'text-success' : 'text-secondary'
              }`}>
                {stat.trend === 'up' && <ArrowUpRight size={10} />}
                {stat.change}
              </div>
            </div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-secondary mb-2 uppercase">{stat.label}</p>
            <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gsap-reveal">
        {/* Transaction History */}
        <div className="lg:col-span-2 bg-white border border-black/5 flex flex-col">
          <div className="p-8 border-b border-black/5 flex items-center justify-between">
            <h3 className="font-serif text-xl">Recent Ledger</h3>
            <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-black/40 hover:text-black transition-all">
              <Filter size={12} /> Filter By Type
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-ivory/30">
                  <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 border-b border-black/5">Ref ID</th>
                  <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 border-b border-black/5">Entity</th>
                  <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 border-b border-black/5">Amount</th>
                  <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 border-b border-black/5">Status</th>
                  <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 border-b border-black/5">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-ivory/20 transition-colors group">
                    <td className="px-8 py-5 text-[11px] font-mono text-black/40">{tx.id}</td>
                    <td className="px-8 py-5">
                      <p className="text-sm font-bold text-black">{tx.entity}</p>
                      <p className="text-[10px] text-black/30 font-bold uppercase tracking-widest">{tx.type}</p>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-1 font-serif text-sm">
                        <IndianRupee size={12} className={tx.type === 'Expense' ? 'text-red-500' : tx.type === 'Deposit' ? 'text-green-600' : 'text-black'} />
                        <span className={tx.type === 'Expense' ? 'text-red-500' : ''}>{tx.amount.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`text-[9px] font-bold tracking-widest uppercase flex items-center gap-1.5 ${
                        tx.status === 'Completed' ? 'text-green-600' : 'text-amber-600'
                      }`}>
                        {tx.status === 'Completed' ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-[10px] text-black/40 font-medium">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <button className="p-4 text-[10px] font-bold tracking-widest uppercase text-black/30 hover:text-black transition-all border-t border-black/5">
            Load Archive Data
          </button>
        </div>

        {/* Financial Distribution */}
        <div className="bg-primary text-white p-8 flex flex-col rounded-3xl shadow-xl shadow-primary/10">
          <h3 className="font-bold text-xl mb-8 uppercase tracking-tight">Allocation Strategy</h3>
          
          <div className="space-y-8 flex-1">
            {[
              { label: 'Driver Earnings', value: 72, color: 'bg-white' },
              { label: 'Operational Costs', value: 18, color: 'bg-white/40' },
              { label: 'Platform Profit', value: 10, color: 'bg-white/10' },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">{item.label}</span>
                  <span className="text-lg font-serif">{item.value}%</span>
                </div>
                <div className="h-1 bg-white/5 w-full">
                  <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/5 border border-white/10">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4 text-center">Tax Compliance Status</h4>
            <div className="flex justify-around items-center">
              <div className="text-center">
                <p className="text-xs font-serif mb-1">GST IN</p>
                <div className="w-2 h-2 rounded-full bg-green-500 mx-auto" />
              </div>
              <div className="text-center">
                <p className="text-xs font-serif mb-1">TDS REG</p>
                <div className="w-2 h-2 rounded-full bg-green-500 mx-auto" />
              </div>
              <div className="text-center">
                <p className="text-xs font-serif mb-1">AUDIT V4</p>
                <div className="w-2 h-2 rounded-full bg-green-500 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;
