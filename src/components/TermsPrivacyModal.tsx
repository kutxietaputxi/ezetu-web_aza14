import { X, Copyright, ShieldCheck, Lock, Mail } from 'lucide-react';

interface TermPoint {
  title: string;
  text: string;
}

const BLOCKS: { icon: typeof Copyright; title: string; accent: string; points: TermPoint[] }[] = [
  {
    icon: Copyright,
    title: 'Propiedad Intelectual (100 % del autor)',
    accent: 'text-emerald-400',
    points: [
      {
        title: 'Tus fotos son tuyas',
        text: 'Conservas en todo momento el 100 % de los derechos de autor y la propiedad intelectual sobre las fotografías que subas a Ezetu.',
      },
      {
        title: 'Licencia de visualización',
        text: 'Al publicar una imagen, únicamente concedes a Ezetu una licencia gratuita, no exclusiva y revocable para mostrarla dentro de la plataforma (galerías, mapas, rankings, concursos y menciones de la comunidad), siempre reconociendo tu autoría.',
      },
      {
        title: 'Sin venta a terceros',
        text: 'Ezetu nunca venderá ni cederá tus fotografías a bancos de imágenes o terceros sin tu consentimiento expreso. Si decides eliminar una fotografía o cerrar tu cuenta, se retirará de la plataforma.',
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Normas de la Comunidad y Compromiso Anti-IA',
    accent: 'text-sky-400',
    points: [
      {
        title: 'Autenticidad ante todo',
        text: 'Ezetu es una comunidad de fotografía real de viajes y naturaleza. Queda estrictamente prohibido subir imágenes generadas total o parcialmente mediante Inteligencia Artificial, fotomontajes engañosos o fotografías de las que no seas el autor legítimo.',
      },
      {
        title: 'Respeto y convivencia',
        text: 'No se tolerarán contenidos ofensivos, ilegales, spam, publicidad encubierta ni conductas irrespetuosas hacia otros miembros de la comunidad o hacia el entorno natural (promovemos un turismo responsable y respetuoso con cada territorio).',
      },
      {
        title: 'Moderación',
        text: 'Ezetu se reserva el derecho de retirar cualquier contenido que incumpla estas normas y de suspender las cuentas que infrinjan reiteradamente el compromiso de autenticidad.',
      },
    ],
  },
  {
    icon: Lock,
    title: 'Privacidad y Protección de Datos (RGPD)',
    accent: 'text-amber-400',
    points: [
      {
        title: 'Uso responsable de tus datos',
        text: 'Tratamos tus datos personales conforme al Reglamento General de Protección de Datos (RGPD). Solo recopilamos la información estrictamente necesaria para gestionar tu cuenta, tu perfil de viajero, tu Pasaporte y el funcionamiento seguro de la plataforma.',
      },
      {
        title: 'Cero venta de datos',
        text: 'Nunca vendemos ni alquilamos tus datos personales a terceros con fines comerciales.',
      },
      {
        title: 'Metadatos y ubicación',
        text: 'Las fotografías se vinculan únicamente a los destinos o puntos geográficos públicos que tú elijas asociar; protegemos tu privacidad evitando exponer datos personales sensibles innecesarios.',
      },
      {
        title: 'Tus derechos',
        text: 'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión (derecho al olvido), limitación, oposición y portabilidad escribiéndonos a info@ezetu.com.',
      },
    ],
  },
];

export function TermsPrivacyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-slate-900/95 border border-slate-700/80 backdrop-blur-md rounded-2xl max-w-2xl w-full p-6 text-slate-100 z-50 m-auto max-h-[85vh] overflow-y-auto shadow-lift animate-popIn pointer-events-auto">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 grid place-items-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <h2 className="font-display text-xl font-700 leading-tight pr-10">Términos y privacidad</h2>
        <p className="text-sm text-slate-400 mt-0.5">Las condiciones que hacen de Ezetu una comunidad justa y auténtica.</p>

        <div className="mt-5 space-y-4">
          {BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <section key={block.title} className="rounded-xl border border-slate-700/60 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className={`grid place-items-center w-8 h-8 rounded-lg bg-white/5 ${block.accent}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-700 leading-snug">{block.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {block.points.map((p) => (
                    <li key={p.title} className="flex gap-2.5">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                      <p className="text-[13px] leading-relaxed text-slate-300">
                        <span className="font-600 text-slate-100">{p.title}: </span>
                        {p.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="flex-1 text-[13px] text-slate-300 leading-relaxed">
            Cualquier consulta sobre estos términos o sobre el tratamiento de tus datos puede dirigirse a nuestro equipo.
          </p>
          <a
            href="mailto:info@ezetu.com"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-600 whitespace-nowrap transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@ezetu.com
          </a>
        </div>
      </div>
    </div>
  );
}
