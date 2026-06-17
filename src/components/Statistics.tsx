import React from 'react';

const STATS = [
  { id: 's1', value: '50+', label: 'Personajes' },
  { id: 's2', value: '20+', label: 'Transformaciones' },
  { id: 's3', value: '100+', label: 'Episodios memorables' },
];

export const Statistics: React.FC = () => {
  return (
    <section aria-label="Estadísticas" className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-slate-800 text-white rounded-2xl p-8 grid sm:grid-cols-3 gap-6 shadow-lg">
        {STATS.map((s) => (
          <div key={s.id} className="text-center">
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="mt-2 text-sm opacity-90">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
