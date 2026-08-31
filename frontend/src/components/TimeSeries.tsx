import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

export default function TimeSeries() {
  const [timelineData, setTimelineData] = useState<{date: string, count: number}[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/results/daily_registrations.json')
      .then(res => res.json())
      .then(data => setTimelineData(data));
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section-spacing"
    >
      <h2><TrendingUp className="text-accent" style={{ display: 'inline', marginRight: '12px' }}/> 2. Time Series of Registration</h2>
      
      <div className="chart-layout">
        {/* Left Side: Chart */}
        <div className="glass-panel">
          <h3>Daily Registration (Time Series/Trend)</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData} margin={{ top: 15, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="#E0E0E0" />
                <YAxis stroke="#E0E0E0" />
                <Tooltip cursor={{ fill: 'rgba(255, 183, 3, 0.1)' }} />
                
                <ReferenceLine x="2025-08-11" stroke="#4ade80" strokeDasharray="3 3" strokeWidth={2} />
                <ReferenceLine x="2025-08-14" stroke="#60a5fa" strokeDasharray="3 3" strokeWidth={2} />
                <ReferenceLine x="2025-08-27" stroke="#f87171" strokeDasharray="3 3" strokeWidth={2} />

                <Line type="monotone" dataKey="count" stroke="#FFB703" strokeWidth={3} activeDot={{ r: 8 }} name="Daily Registrations" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', marginTop: '16px', fontSize: '13px', color: '#E0E0E0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '16px', borderBottom: '2px dashed #4ade80' }}></span>
              Start of Membership
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '16px', borderBottom: '2px dashed #60a5fa' }}></span>
              Start of Akwe
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '16px', borderBottom: '2px dashed #f87171' }}></span>
              End of Akwe
            </div>
          </div>
        </div>

        {/* Right Side: Insights */}
        <div>
          <div className="insight-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={20} className="text-accent" /> Insight (Last Year)
            </h4>
            <p>
              Looking back at last year, registrations trickled in initially but <span className="text-accent font-bold">exploded</span> during a specific three-day window (Aug 11-13), peaking at over 40 signups on the 13th. After August 14th, registrations practically ceased and flatlined.
            </p>
          </div>

          <div className="actionable-meaning">
            <Target className="icon" size={24} />
            <div>
              <h4 style={{ marginBottom: '8px' }}>Strategy for This Year</h4>
              <p className="text-secondary">
                There was a highly successful recruitment spike in mid-August last year that drove almost the entire membership base in just 72 hours. For this year, we must identify exactly what marketing campaign, event, or orientation happened during those days and replicate it. We should also plan to launch our core campaigns during that same crucial mid-August window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
