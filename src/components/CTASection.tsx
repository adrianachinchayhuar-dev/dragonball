import React from 'react';
import { Button } from '@/components/ui/button'

export const CTASection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-r from-sky-900 to-orange-500 p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Únete a la aventura</h3>
          <p className="mt-2 opacity-90 max-w-md">
            Explora, compara y descubre datos únicos del universo Dragon Ball. ¿Preparado para volar?
          </p>
        </div>
        <div>
          <Button className="bg-white text-slate-900 hover:bg-slate-100">Explorar Universo</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
