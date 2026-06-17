import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

type Feature = { id: string; title: string; description: string; icon: React.ReactNode };

const FEATURES: Feature[] = [
  {
    id: 'saiyajin',
    title: 'Guerreros Saiyajin',
    description: 'Fuertes, determinados y con crecimiento infinito. Conoce sus historias.',
    icon: (
      <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 8c3-2 6-2 11 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'transform',
    title: 'Transformaciones',
    description: 'Super Saiyajin, Ultra Instinto y más. Potencia y estilo visual.',
    icon: (
      <svg className="w-8 h-8 text-sky-900" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'battles',
    title: 'Batallas Legendarias',
    description: 'Encuentros épicos que definieron eras. Revívelos con análisis y datos.',
    icon: (
      <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export const Features: React.FC = () => {
  return (
    <section aria-label="Características" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-3">
        {FEATURES.map((f) => (
          <Card key={f.id} className="p-6 hover:shadow-xl transition-shadow rounded-2xl">
            <CardHeader className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/60 rounded-xl shadow">
                {f.icon}
              </div>
              <CardTitle className="text-lg font-semibold">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-4 text-sm text-slate-600">{f.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
