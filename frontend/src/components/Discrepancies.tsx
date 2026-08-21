import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Discrepancies() {
  const [discrepancyData, setDiscrepancyData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/results/registration_discrepancy.json')
      .then(res => res.json())
      .then(data => setDiscrepancyData(data));
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section-spacing"
    >
      <h2><Users className="text-accent" style={{ display: 'inline', marginRight: '12px' }}/> 3. Funnel & Discrepancies</h2>
      
      <div className="chart-layout">
        {/* Left Side: Chart */}
        <div className="glass-panel">
          <h3>Complete vs Incomplete Registration</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Total form signups vs actual accepted members</p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={discrepancyData}>
                <XAxis dataKey="category" stroke="#E0E0E0" />
                <YAxis stroke="#E0E0E0" />
                <Tooltip cursor={{ fill: 'rgba(255, 183, 3, 0.1)' }} />
                <Bar dataKey="count" fill="#FFB703" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side: Insights */}
        <div>
          <div className="insight-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={20} className="text-accent" /> Insight (Last Year)
            </h4>
            <p>
              Last year, only <span className="text-accent font-bold">4 individuals</span> went through the effort of filling out the registration forms but did not make it into the final accepted Members list (they either dropped out, abandoned the payment, or were rejected).
            </p>
          </div>

          <div className="actionable-meaning">
            <Target className="icon" size={24} />
            <div>
              <h4 style={{ marginBottom: '8px' }}>Strategy for This Year</h4>
              <p className="text-secondary">
                The onboarding funnel historically is incredibly efficient, boasting a <strong>~98% conversion rate</strong> from 'Form Filled' to 'Actual Member'. For this year's recruitment, we do not need to overhaul the registration process itself since it already works almost perfectly. Our focus should simply be on widening the top of the funnel (getting more people to see the form).
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
