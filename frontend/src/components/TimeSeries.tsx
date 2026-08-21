import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function TimeSeries() {
  const [timelineData, setTimelineData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/results/daily_registrations.json')
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
          <h3>Daily Registration Trend</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="#E0E0E0" />
                <YAxis stroke="#E0E0E0" />
                <Tooltip cursor={{ fill: 'rgba(255, 183, 3, 0.1)' }} />
                <Line type="monotone" dataKey="count" stroke="#FFB703" strokeWidth={3} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side: Insights */}
        <div>
          <div className="insight-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={20} className="text-accent" /> Insight
            </h4>
            <p>
              Registrations trickled in initially, but absolutely <span className="text-accent font-bold">exploded</span> during a three-day window (Aug 11-13) peaking at over 40 signups on the 13th. After August 14th, registrations practically ceased and flatlined.
            </p>
          </div>

          <div className="actionable-meaning">
            <Target className="icon" size={24} />
            <div>
              <h4 style={{ marginBottom: '8px' }}>Actionable Meaning</h4>
              <p className="text-secondary">
                There was a massive, highly successful recruitment spike in mid-August that drove almost the entire membership base in just 72 hours. Whatever marketing campaign, event, or orientation happened between August 11-13 was incredibly effective and should be heavily replicated next year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
