// src/components/Paroco.tsx
import { padre } from '../data/config'
import { Mail, Phone, Calendar } from 'lucide-react'

export default function Paroco(){
  const photo = padre.photo || 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop'

  return (
    <section id="paroco" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Padre (Pároco)</h2>
          {padre.since && <p className="mt-2 text-slate-600">{padre.since}</p>}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Foto */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow">
              <img src={photo} alt={`Foto do padre ${padre.name}`} className="w-full h-full object-cover" />
            </div>

            {/* Contatos */}
            <div className="mt-6 grid gap-3">
              {padre.email && (
                <a href={`mailto:${padre.email}`} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 shadow">
                  <Mail size={18}/> Enviar e-mail
                </a>
              )}
              {padre.phone && (
                <a href={`tel:${padre.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800 shadow">
                  <Phone size={18}/> Ligar
                </a>
              )}
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold">{padre.name}</h3>

            {padre.motto && (
              <blockquote className="mt-3 rounded-2xl bg-slate-50 p-4 italic text-slate-700 border border-slate-200">
                {padre.motto}
              </blockquote>
            )}

            <p className="mt-6 leading-relaxed text-slate-700">
              {padre.bio}
            </p>

            {padre.attendances && padre.attendances.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Calendar size={18}/> Atendimentos
                </div>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {padre.attendances.map((t)=>(
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600"/>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
