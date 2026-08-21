import { useEffect, useState } from 'react';
import { Activity, Users, CreditCard } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function App() {
  const [discrepancy, setDiscrepancy] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);

  useEffect(() => {
    // Example fetching data
    fetch('/data/results/registration_discrepancy.json')
      .then(res => res.json())
      .then(data => setDiscrepancy(data))
      .catch(err => console.error(err));

    fetch('/data/results/volunteer_interest.json')
      .then(res => res.json())
      .then(data => setVolunteers(data))
      .catch(err => console.error(err));
  }, []);

  const COLORS = ['#FFB703', '#FFFFFF', '#4CAF50'];

  return (
    <div className="container">
      <header className="app-header">
        <div className="app-logo-wrapper">
          <Activity size={32} />
        </div>
        <h1 className="text-gradient">CSS 2526 Analytics</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Insights from the Computer Students' Society Registration Data
        </p>
      </header>

      <main className="grid">
        <div className="glass-panel">
          <h3><Users className="text-accent" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> Registration Discrepancy</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Total form signups vs actual accepted members</p>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={discrepancy}>
                <XAxis dataKey="category" stroke="#E0E0E0" />
                <YAxis stroke="#E0E0E0" />
                <Tooltip cursor={{ fill: 'rgba(255, 183, 3, 0.1)' }} />
                <Bar dataKey="count" fill="#FFB703" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel">
          <h3><CreditCard className="text-accent" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> Volunteer Interest</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Distribution of members wanting to volunteer</p>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={volunteers}
                  dataKey="count"
                  nameKey="response"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
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
      </main>
    </div>
  );
}

export default App;
