import React from 'react';
import { CHARACTERS } from '../data/characters';
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export const CharactersGrid: React.FC = () => {
  return (
    <section id="characters" aria-label="Personajes" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Personajes Destacados</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {CHARACTERS.map((c) => (
          <Card key={c.id} className="p-4 rounded-2xl shadow-sm hover:shadow-lg transition">
            <CardHeader className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <img src={c.image} alt={c.name} />
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary">{c.race}</Badge>
                  <span className="text-sm text-slate-600">Poder: <strong className="text-slate-900">{c.power}</strong></span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-4 text-sm text-slate-600">
              Breve descripción de {c.name}. Información esencial y estadísticas de combate.
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CharactersGrid;
