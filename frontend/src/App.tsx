import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import Demographics from './components/Demographics';
import TimeSeries from './components/TimeSeries';
import Discrepancies from './components/Discrepancies';
import Operations from './components/Operations';

function App() {
  return (
    <div className="container">
      <motion.header 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="app-header"
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="app-logo-wrapper"
        >
          <Activity size={40} />
        </motion.div>
        <h1 className="text-gradient">CSS 2526 Analytics Report</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          An in-depth review of the Computer Students' Society recruitment data, identifying demographics, registration timelines, and operational metrics.
        </p>
      </motion.header>

      <main>
        <Demographics />
        <TimeSeries />
        <Discrepancies />
        <Operations />
      </main>

      <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
        <p>Report generated from anonymized Python data.</p>
        <p className="text-muted">© 2526 Computer Students' Society</p>
      </footer>
    </div>
  );
}

export default App;
