import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Settings, CreditCard, HeartHandshake } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Operations() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/results/volunteer_interest.json')
      .then(res => res.json())
      .then(data => setVolunteers(data));

    fetch('/data/results/payment_method_preferences.json')
      .then(res => res.json())
      .then(data => setPayments(data));
  }, []);

  const COLORS = ['#FFFFFF', '#FFB703', '#4CAF50'];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section-spacing"
    >
      <h2><Settings className="text-accent" style={{ display: 'inline', marginRight: '12px' }}/> 4. Operational Insights</h2>
      
      {/* Volunteer Sub-section */}
      <div className="chart-layout" style={{ marginBottom: '4rem' }}>
        <div className="glass-panel">
          <h3><HeartHandshake className="text-accent" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> Volunteer Interest</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Distribution of members wanting to volunteer</p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={volunteers}
                  dataKey="count"
                  nameKey="response"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {volunteers.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <div className="insight-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={20} className="text-accent" /> Insight
            </h4>
            <p>
              Out of the AKWE registrants, approximately <span className="text-accent font-bold">41.8%</span> explicitly stated they want to volunteer. This represents a solid, enthusiastic segment of the membership base.
            </p>
          </div>

          <div className="actionable-meaning">
            <Target className="icon" size={24} />
            <div>
              <h4 style={{ marginBottom: '8px' }}>Actionable Meaning</h4>
              <p className="text-secondary">
                The leadership team has a ready-made pool of willing volunteers. Instead of asking the entire organization blindly for help, you should directly contact this specific group of 'Yes' respondents when staffing events, as they have already opted in.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Sub-section */}
      <div className="chart-layout">
        <div className="glass-panel">
          <h3><CreditCard className="text-accent" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> Payment Method Preferences</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>How members prefer to pay</p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={payments} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
                <XAxis type="number" stroke="#E0E0E0" />
                <YAxis dataKey="method" type="category" stroke="#E0E0E0" width={100} />
                <Tooltip cursor={{ fill: 'rgba(255, 183, 3, 0.1)' }} />
                <Bar dataKey="count" fill="#FFFFFF" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <div className="insight-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={20} className="text-accent" /> Insight
            </h4>
            <p>
              This data highlights the preferences for certain payment gateways when students are onboarding, showing a near 50/50 split between <span className="text-accent font-bold">Cash (On-site)</span> and <span className="text-accent font-bold">GCash (Online)</span>.
            </p>
          </div>

          <div className="actionable-meaning">
            <Target className="icon" size={24} />
            <div>
              <h4 style={{ marginBottom: '8px' }}>Actionable Meaning</h4>
              <p className="text-secondary">
                By understanding the split, the Treasury can optimize its workflow. Since digital payments (GCash) are highly utilized, the organization must ensure that online receipts and verification processes are just as robust and seamless as physical cash boxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
