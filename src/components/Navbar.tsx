import React from 'react';
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <img src="https://via.placeholder.com/40x40?text=DB" alt="Dragon Ball logo" />
          </Avatar>
          <span className="text-xl font-semibold text-orange-600">Dragon Ball</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#" className="hover:text-slate-900">Inicio</a>
          <a href="#characters" className="hover:text-slate-900">Personajes</a>
          <a href="#transformations" className="hover:text-slate-900">Transformaciones</a>
          <a href="#contact" className="hover:text-slate-900">Contacto</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">Iniciar sesión</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Explorar Universo</Button>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default Navbar;
