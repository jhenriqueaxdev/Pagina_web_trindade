import { events } from '../data/config'

export default function Events(){
  return (
    <section id="eventos" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Próximos eventos</h2>
          <p className="mt-2 text-slate-600">Use este espaço para anunciar novenas, festas da padroeira, formações, etc.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e)=> (
            <article key={e.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-xs font-semibold text-blue-700">{e.date}</div>
              <h3 className="mt-1 font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{e.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
