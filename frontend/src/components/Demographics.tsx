import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, BookOpen } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Demographics() {
  const [programData, setProgramData] = useState<any[]>([]);
  const [yearData, setYearData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/results/program_distribution.json')
      .then(res => res.json())
      .then(data => setProgramData(data));
      
    fetch('/data/results/year_level_distribution.json')
      .then(res => res.json())
      .then(data => {
        const getOrdinal = (n: number) => {
          if (n === 1) return '1st Year';
          if (n === 2) return '2nd Year';
          if (n === 3) return '3rd Year';
          if (n === 4) return '4th Year';
          return `${n} Year`;
        };
        const formatted = data.map((d: any) => ({
          ...d,
          year_level_label: getOrdinal(Math.floor(Number(d.year_level)))
        }));
        setYearData(formatted);
      });
  }, []);

  const COLORS = ['#FFB703', '#FFFFFF', '#4CAF50', '#9E9E9E'];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section-spacing"
    >
      <h2><BookOpen className="text-accent" style={{ display: 'inline', marginRight: '12px' }}/> 1. Demographics Overview</h2>
      
      <div className="chart-layout">
        {/* Left Side: Charts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel">
            <h3>Program Distribution</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={programData} layout="vertical" margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
                  <XAxis type="number" stroke="#E0E0E0" />
                  <YAxis dataKey="program" type="category" stroke="#E0E0E0" width={120} />
                  <Tooltip cursor={{ fill: 'rgba(255, 183, 3, 0.1)' }} />
                  <Bar dataKey="count" fill="#FFB703" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-panel">
            <h3>Year Level Distribution</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={yearData}
                    dataKey="count"
                    nameKey="year_level_label"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {yearData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
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
              Looking back at last year's data, the CSS membership was heavily skewed towards freshmen and sophomores, representing roughly <span className="text-accent font-bold">84%</span> of the total base. Information Technology (IT) students also comfortably outnumbered Computer Science (CS) students.
            </p>
          </div>

          <div className="actionable-meaning">
            <Target className="icon" size={24} />
            <div>
              <h4 style={{ marginBottom: '8px' }}>Strategy for This Year</h4>
              <p className="text-secondary">
                Since our primary audience historically sits in the 1st and 2nd year levels, our events, technical workshops, and communications for this academic year should continue to prioritize beginner-friendly curriculum. To balance the demographics, we could also launch a targeted recruitment campaign specifically aimed at incoming 3rd and 4th year CS students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
