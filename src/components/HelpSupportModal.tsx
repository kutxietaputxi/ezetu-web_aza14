import { useState } from 'react';
import { X, ChevronDown, Mail, Camera, MapPin, BarChart3, Users } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const TABS: { id: string; label: string; icon: typeof Camera; faqs: FaqItem[] }[] = [
  {
    id: 'foto',
    label: 'Fotografía y autenticidad',
    icon: Camera,
    faqs: [
      {
        q: '¿Qué tipo de fotos puedo subir a Ezetu?',
        a: 'Fotografías reales de viajes, paisajes, naturaleza, arquitectura o rincones especiales tomadas por ti mismo. No están permitidas imágenes generadas por Inteligencia Artificial, fotos descargadas de internet ni material de bancos de imágenes.',
      },
      {
        q: '¿Se permiten fotos tomadas con el teléfono móvil?',
        a: 'Sí, por supuesto. En Ezetu valoramos la mirada, la luz y la autenticidad del momento, no el precio de la cámara. Tanto fotografías tomadas con cámara profesional como con smartphone son bienvenidas siempre que tengan buena calidad y nitidez.',
      },
      {
        q: '¿Está permitido editar las fotos (Lightroom, Photoshop)?',
        a: 'Sí. Se permiten los ajustes habituales de revelado fotográfico (luz, contraste, color, balance de blancos o reencuadre). Lo que no está permitido es alterar la realidad del lugar añadiendo o eliminando elementos significativos (como montañas, edificios o cielos falsos) ni utilizar herramientas de relleno generativo con IA.',
      },
      {
        q: '¿Por qué no se pueden descargar las fotos con el botón derecho?',
        a: 'Para proteger el trabajo y los derechos de autor de nuestra comunidad de fotógrafos. Desactivar la descarga directa ayuda a evitar el uso no autorizado o la copia masiva de imágenes sin permiso de su creador.',
      },
    ],
  },
  {
    id: 'mapa',
    label: 'Lugares y cartografía',
    icon: MapPin,
    faqs: [
      {
        q: '¿Cómo se eligen las fotos de portada de cada destino?',
        a: 'La portada de cada lugar se actualiza para mostrar la mejor representación visual real del rincón, dando prioridad a las fotografías mejor valoradas por la comunidad en ese destino.',
      },
      {
        q: '¿Qué pasa si un lugar está en la frontera entre dos territorios?',
        a: 'Hitos geográficos concretos como las Tre Cime di Lavaredo (en los Dolomitas, justo en la frontera entre las provincias de Belluno y Bolzano) o el Monte Everest (cuya cima divide Nepal y China) pertenecen oficialmente a ambos territorios. En Ezetu están vinculados de forma compartida y aparecen con total justicia en los rankings de ambos lados de la frontera.',
      },
      {
        q: '¿Por qué el mapa agrupa los lugares en números dinámicos?',
        a: 'Ezetu incorpora un sistema de agrupación cartográfica inteligente: cuando el mapa está alejado, los puntos cercanos se condensan en burbujas numéricas para mantener la pantalla limpia y no saturar de chinchetas. Al hacer clic sobre cualquier número o acercar el zoom, el círculo se expande suavemente y despliega los rincones individuales.',
      },
      {
        q: '¿Para qué sirve la lista "Quiero ir" (Joan nahi dut)?',
        a: 'Es tu lista personal de deseos viajeros. Te permite guardar los rincones que descubres en la galería o en el mapa para tenerlos siempre a mano y planificar tus próximas rutas y escapadas fotográficas.',
      },
    ],
  },
  {
    id: 'rankings',
    label: 'Valoraciones y rankings',
    icon: BarChart3,
    faqs: [
      {
        q: '¿Cómo se calcula la nota oficial de un destino en los Rankings?',
        a: 'Se calcula a partir de las valoraciones reales de los usuarios que conocen y puntúan el destino. El sistema pondera el número de opiniones y la consistencia de las notas para que los rankings reflejen un consenso justo y fiable de la comunidad.',
      },
      {
        q: '¿Qué significan las barritas de Fotogenia, Masificación, etc.?',
        a: 'Son métricas prácticas pensadas para viajeros y fotógrafos: te muestran de un vistazo qué potencial visual ofrece un lugar (Fotogenia), cuánta gente suele concentrarse allí (Masificación) y otros aspectos clave de la experiencia para que sepas qué esperar antes de ir.',
      },
      {
        q: '¿Cómo funciona el algoritmo de "Tendencias" en la galería?',
        a: 'La sección de Tendencias destaca las fotografías y lugares que están despertando mayor interés recientemente (combinando votos, interacciones y actividad reciente). De este modo, las nuevas aportaciones tienen visibilidad real y el escaparate se mantiene vivo.',
      },
    ],
  },
  {
    id: 'comunidad',
    label: 'Pasaporte y comunidad',
    icon: Users,
    faqs: [
      {
        q: '¿Cómo funciona el concurso de la Foto del Mes y del Año?',
        a: 'Cada mes, las fotografías más valoradas por la comunidad compiten por el reconocimiento a la Foto del Mes. Las imágenes destacadas mensualmente pasan a formar parte de la selección que optará al galardón anual de Foto del Año en Ezetu.',
      },
      {
        q: '¿Cómo se gana experiencia (XP) y qué ventajas tiene subir de nivel?',
        a: 'Ganas puntos de experiencia (XP) al participar activamente: subiendo fotografías reales, aportando nuevos lugares, completando valoraciones y recibiendo reconocimientos de la comunidad. Subir de nivel hace evolucionar tu Pasaporte de viajero, desbloquea insignias y refleja tu trayectoria como explorador dentro de Ezetu.',
      },
      {
        q: '¿Cómo denuncio una foto falsa, generada por IA o inapropiada?',
        a: 'Si detectas una imagen generada por IA, robada de otro autor o que incumple las normas de la comunidad, puedes reportarla directamente desde la opción de denuncia de la propia fotografía o escribiéndonos a info@ezetu.com indicando el enlace o el nombre del lugar.',
      },
    ],
  },
];

export function HelpSupportModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('foto');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tab = TABS.find((tb) => tb.id === activeTab) ?? TABS[0];

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

        <h2 className="font-display text-xl font-700 leading-tight pr-10">Ayuda y soporte</h2>
        <p className="text-sm text-slate-400 mt-0.5">Centro de ayuda de Ezetu</p>

        {/* Filter tabs */}
        <div className="flex gap-1.5 mt-4 overflow-x-auto pb-1 -mx-1 px-1">
          {TABS.map((tb) => {
            const Icon = tb.icon;
            const active = tb.id === activeTab;
            return (
              <button
                key={tb.id}
                onClick={() => { setActiveTab(tb.id); setOpenIndex(0); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-600 whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tb.label}
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ */}
        <div className="mt-4 space-y-2">
          {tab.faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="rounded-xl border border-slate-700/60 bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-white/5"
                >
                  <span className="text-sm font-600 leading-snug">{item.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                  <p className="px-4 pb-3.5 text-[13px] leading-relaxed text-slate-300 animate-riseIn">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact box */}
        <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-slate-200 leading-relaxed">
              ¿No encuentras lo que buscas? Nuestro equipo está aquí para ayudarte con cualquier duda técnica, sugerencia o incidencia.
            </p>
          </div>
          <a
            href="mailto:info@ezetu.com"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-600 whitespace-nowrap transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contactar: info@ezetu.com
          </a>
        </div>
      </div>
    </div>
  );
}
