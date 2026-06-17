import React from 'react';
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const Hero: React.FC = () => {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200 via-transparent to-transparent opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <Badge className="mb-4 bg-sky-900 text-white">Universo Oficial</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Explora el Universo Dragon Ball
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-xl">
            Descubre guerreros, transformaciones y batallas legendarias. Una landing moderna con diseño premium, responsive y accesible.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Explorar Universo</Button>
            <Button variant="outline">Ver Personajes</Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            aria-hidden
            className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full shadow-2xl bg-gradient-to-br from-orange-400 to-sky-900 flex items-center justify-center"
          >
            <img src="https://via.placeholder.com/300x300?text=DB+Art" alt="Ilustración Dragon Ball" className="w-72 h-72 rounded-full object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
