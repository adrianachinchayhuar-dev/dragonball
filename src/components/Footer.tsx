import React from 'react';
import { Separator } from '@/components/ui/separator'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white/90 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Dragon Ball · Proyecto</h4>
            <p className="text-sm text-slate-600">Diseñado con <span className="font-medium">shadcn/ui</span> y Tailwind CSS</p>
          </div>

          <nav className="flex items-center gap-4 text-slate-700">
            <a href="#" aria-label="Twitter" className="hover:text-slate-900">Twitter</a>
            <a href="#" aria-label="Instagram" className="hover:text-slate-900">Instagram</a>
            <a href="#" aria-label="YouTube" className="hover:text-slate-900">YouTube</a>
          </nav>
        </div>

        <Separator className="my-6" />

        <div className="text-sm text-slate-600 text-center">© {new Date().getFullYear()} Dragon Ball · Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
