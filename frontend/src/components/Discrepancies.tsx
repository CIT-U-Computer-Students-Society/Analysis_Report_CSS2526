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
              <Lightbulb size={20} className="text-accent" /> Insight
            </h4>
            <p>
              There are <span className="text-accent font-bold">4 individuals</span> who went through the effort of filling out the registration forms but did not make it into the final accepted Members list (either dropped out, abandoned the payment, or were rejected).
            </p>
          </div>

          <div className="actionable-meaning">
            <Target className="icon" size={24} />
            <div>
              <h4 style={{ marginBottom: '8px' }}>Actionable Meaning</h4>
              <p className="text-secondary">
                The onboarding funnel is actually incredibly efficient, with a <strong>~98% conversion rate</strong> from 'Form Filled' to 'Actual Member'. The process currently in place works almost perfectly and there are very few drop-offs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
