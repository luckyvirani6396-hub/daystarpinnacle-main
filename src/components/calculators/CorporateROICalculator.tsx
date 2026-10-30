import { useState } from 'react';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import Button from '../common/Button';

export default function CorporateROICalculator({ className = '' }: { className?: string }) {
  const [employees, setEmployees] = useState(100);
  const [burnoutRate, setBurnoutRate] = useState(30); // 30% average
  const avgSalary = 65000; // Fixed baseline salary for standard corporate team members

  // Calculations based on industry research:
  // Burnout costs ~34% of an employee's annual salary in lost productivity, absenteeism, and turnover.
  const costPerBurnedOutEmployee = avgSalary * 0.34;
  const totalBurnedOutEmployees = (employees * (burnoutRate / 100));
  const potentialBurnoutCost = totalBurnedOutEmployees * costPerBurnedOutEmployee;
  
  // Daystar Pinnacle corporate programs average a 28% reduction in absenteeism and turnover.
  const estimatedSavings = potentialBurnoutCost * 0.28;

  return (
    <div className={`bg-white rounded-[24px] border border-[#FAF9F5]/60 p-6 md:p-8 shadow-xl shadow-secondary/5 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FAF9F5] to-[#FAF9F5] flex items-center justify-center text-[#72A93B]">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-lg font-extrabold text-dark leading-tight">Corporate ROI Estimator</h4>
          <p className="text-xs text-muted">Estimate the cost of employee burnout and potential wellness savings</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Employee Count Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-dark flex items-center gap-2">
              <Users className="w-4 h-4 text-secondary" />
              <span>Total Employees:</span>
            </label>
            <span className="text-base font-extrabold text-primary bg-[#FAF9F5] px-3 py-1 rounded-full">
              {employees}
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full h-2 bg-[#FAF9F5] rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-[10px] text-muted mt-1">
            <span>10</span>
            <span>500</span>
            <span>1000</span>
          </div>
        </div>

        {/* Burnout Rate Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-dark flex items-center gap-2">
              <Award className="w-4 h-4 text-secondary" />
              <span>Estimated Burnout Rate (%):</span>
            </label>
            <span className="text-base font-extrabold text-primary bg-[#FAF9F5] px-3 py-1 rounded-full">
              {burnoutRate}%
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="80"
            step="5"
            value={burnoutRate}
            onChange={(e) => setBurnoutRate(Number(e.target.value))}
            className="w-full h-2 bg-[#FAF9F5] rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-[10px] text-muted mt-1">
            <span>5%</span>
            <span>40%</span>
            <span>80%</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
          {/* Burnout Cost Card */}
          <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-700 mb-1">
              Est. Burnout Cost / Year
            </p>
            <div className="flex items-baseline text-2xl font-extrabold text-red-950">
              <DollarSign className="w-5 h-5 self-center text-red-700 shrink-0" />
              <span>{Math.round(potentialBurnoutCost).toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-red-900/60 mt-1 leading-snug">
              Based on lost productivity, absenteeism, and replacement costs.
            </p>
          </div>

          {/* Potential Savings Card */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
              Daystar Est. Savings / Year
            </p>
            <div className="flex items-baseline text-2xl font-extrabold text-primary">
              <DollarSign className="w-5 h-5 self-center text-primary shrink-0" />
              <span>{Math.round(estimatedSavings).toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-primary/70 mt-1 leading-snug">
              Based on an average 28% reduction in employee health claims &amp; absenteeism.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          href="/contact"
          variant="primary"
          fullWidth
          className="font-bold py-3 mt-2"
        >
          Request Personalized ROI Proposal
        </Button>
      </div>
    </div>
  );
}
