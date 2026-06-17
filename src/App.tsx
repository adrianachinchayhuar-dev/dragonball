import { useState } from "react"
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Flame,
  Gauge,
  Layers,
  Menu,
  Play,
  Sparkles,
  Star,
  Swords,
  Target,
  Trophy,
  Zap,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { label: "Roster", href: "#roster" },
  { label: "Transformaciones", href: "#transformaciones" },
  { label: "Sagas", href: "#sagas" },
  { label: "FAQ", href: "#faq" },
]

const warriors = [
  {
    id: "goku",
    name: "Goku",
    role: "Vanguardia instintiva",
    faction: "Saiyajin",
    emblem: "K",
    quote: "La pelea empieza cuando el rival deja de parecer imposible.",
    aura: "from-amber-200 via-orange-500 to-sky-500",
    ring: "shadow-amber-400/40",
    silhouette: "bg-gradient-to-b from-amber-100 via-orange-300 to-orange-700",
    stats: { fuerza: 96, velocidad: 94, tecnica: 88, aura: 99 },
    tactic: "Presiona el inicio del viaje y lleva al usuario hacia el roster.",
  },
  {
    id: "vegeta",
    name: "Vegeta",
    role: "Estratega de orgullo real",
    faction: "Elite Saiyajin",
    emblem: "V",
    quote: "La conversion no se pide: se conquista con claridad.",
    aura: "from-sky-300 via-blue-700 to-amber-300",
    ring: "shadow-sky-400/40",
    silhouette: "bg-gradient-to-b from-sky-100 via-blue-500 to-blue-950",
    stats: { fuerza: 94, velocidad: 90, tecnica: 96, aura: 92 },
    tactic: "Ordena comparaciones, beneficios y decisiones de alto impacto.",
  },
  {
    id: "gohan",
    name: "Gohan",
    role: "Potencial desbloqueado",
    faction: "Hibrido",
    emblem: "G",
    quote: "El poder oculto funciona mejor cuando la interfaz lo revela.",
    aura: "from-yellow-200 via-orange-500 to-red-500",
    ring: "shadow-orange-400/40",
    silhouette: "bg-gradient-to-b from-yellow-100 via-orange-400 to-red-800",
    stats: { fuerza: 89, velocidad: 86, tecnica: 91, aura: 95 },
    tactic: "Convierte secciones informativas en momentos de descubrimiento.",
  },
  {
    id: "piccolo",
    name: "Piccolo",
    role: "Mentor tactico",
    faction: "Guardian",
    emblem: "P",
    quote: "Una buena defensa visual es jerarquia, espacio y contraste.",
    aura: "from-emerald-300 via-cyan-500 to-blue-900",
    ring: "shadow-cyan-400/40",
    silhouette: "bg-gradient-to-b from-emerald-100 via-cyan-500 to-slate-950",
    stats: { fuerza: 82, velocidad: 84, tecnica: 98, aura: 86 },
    tactic: "Refuerza confianza con FAQ, microcopy y estados claros.",
  },
]

const transformations = [
  {
    id: "base",
    name: "Base",
    label: "Control",
    power: 62,
    speed: 68,
    clarity: 95,
    description:
      "Estado inicial: comunica rapido, reduce ruido y prepara el siguiente clic.",
  },
  {
    id: "ssj",
    name: "Super Saiyajin",
    label: "Impacto",
    power: 82,
    speed: 78,
    clarity: 86,
    description:
      "Aumenta la intensidad visual con auras, contraste dorado y CTA dominante.",
  },
  {
    id: "blue",
    name: "Blue",
    label: "Precision",
    power: 91,
    speed: 88,
    clarity: 90,
    description:
      "Combina energia alta con control de layout, lectura y acciones secundarias.",
  },
  {
    id: "ultra",
    name: "Ultra Instinto",
    label: "Conversion",
    power: 100,
    speed: 96,
    clarity: 98,
    description:
      "El punto premium: cada modulo guia una accion y elimina friccion.",
  },
]

const sagaCards = [
  {
    title: "Llegada Saiyajin",
    phase: "Acto 01",
    metric: "Descubrimiento",
    power: 72,
    copy: "Presenta el universo, muestra stakes y hace que el usuario elija un bando.",
  },
  {
    title: "Namek en crisis",
    phase: "Acto 02",
    metric: "Exploracion",
    power: 84,
    copy: "Convierte lore en misiones, comparaciones y rutas de contenido.",
  },
  {
    title: "Torneo final",
    phase: "Acto 03",
    metric: "Conversion",
    power: 96,
    copy: "Cierra con pruebas sociales, CTA claro y sensacion de recompensa.",
  },
  {
    title: "Camara del Tiempo",
    phase: "Bonus",
    metric: "Retencion",
    power: 89,
    copy: "Ideal para desbloqueables, progreso y futuras interacciones.",
  },
]

const featureCards = [
  {
    icon: Target,
    title: "Selector con intencion",
    copy: "Cada guerrero actualiza panel, estadisticas, frase y tactica de UX.",
  },
  {
    icon: Layers,
    title: "Visuales CSS premium",
    copy: "Siluetas, anillos, emblemas, orbes y auras sin imagenes oficiales.",
  },
  {
    icon: Gauge,
    title: "Comparacion accionable",
    copy: "Tabs y barras explican poder, velocidad y claridad de cada estado.",
  },
]

const faqs = [
  {
    question: "Que hace que esta landing no sea solo decorativa?",
    answer:
      "Cada bloque tiene una tarea: elegir guerrero, comparar transformaciones, explorar sagas, abrir briefing, revisar FAQ y avanzar por CTAs.",
  },
  {
    question: "Como evita usar imagenes con copyright?",
    answer:
      "Los personajes son representaciones CSS: siluetas, emblemas, anillos de energia, gradientes y stats. No se cargan imagenes externas.",
  },
  {
    question: "Que se puede conectar despues?",
    answer:
      "El selector puede usar datos reales, el carousel puede abrir detalles por saga y los CTAs pueden conectarse a registro, compra o contenido desbloqueable.",
  },
  {
    question: "Esta preparada para mobile?",
    answer:
      "Si. Usa navegacion Sheet, grids fluidos, paneles apilados, targets tactiles y contenido que no depende de hover para entenderse.",
  },
]

function CharacterVisual({
  warrior,
  active = false,
}: {
  warrior: (typeof warriors)[number]
  active?: boolean
}) {
  return (
    <div
      className={`relative isolate mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-3xl border bg-slate-950 transition duration-500 ${
        active
          ? "border-amber-200/60 shadow-2xl shadow-amber-400/20"
          : "border-white/10 shadow-xl shadow-slate-950/30"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${warrior.aura} opacity-40`} />
      <div className="absolute inset-4 rounded-full border border-white/20" />
      <div className={`absolute left-1/2 top-12 size-44 -translate-x-1/2 rounded-full bg-gradient-to-br ${warrior.aura} opacity-30 blur-2xl aura-pulse`} />
      <div className="absolute left-1/2 top-8 size-36 -translate-x-1/2 rounded-full border border-amber-100/30" />
      <div className="absolute left-1/2 top-20 h-48 w-24 -translate-x-1/2 rounded-t-full bg-slate-950/85 shadow-2xl" />
      <div className={`absolute left-1/2 top-16 size-20 -translate-x-1/2 rounded-full ${warrior.silhouette} shadow-xl`} />
      <div className={`absolute left-1/2 top-36 h-32 w-36 -translate-x-1/2 rounded-t-[4rem] ${warrior.silhouette}`} />
      <div className="absolute left-[25%] top-40 h-24 w-8 -rotate-12 rounded-full bg-slate-950/90" />
      <div className="absolute right-[25%] top-40 h-24 w-8 rotate-12 rounded-full bg-slate-950/90" />
      <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/75 p-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-slate-300">
            Emblema
          </span>
          <span className="grid size-9 place-items-center rounded-xl bg-amber-300 font-black text-slate-950">
            {warrior.emblem}
          </span>
        </div>
      </div>
    </div>
  )
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-bold text-amber-200">{value}%</span>
      </div>
      <Progress
        value={value}
        className="h-2 bg-white/10 [&_[data-slot=progress-indicator]]:bg-gradient-to-r [&_[data-slot=progress-indicator]]:from-orange-500 [&_[data-slot=progress-indicator]]:to-amber-200 [&_[data-slot=progress-indicator]]:duration-700"
      />
    </div>
  )
}

function CinematicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07040f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(255,214,102,0.34),transparent_27%),radial-gradient(circle_at_82%_14%,rgba(56,189,248,0.28),transparent_30%),radial-gradient(circle_at_62%_44%,rgba(168,85,247,0.18),transparent_34%),radial-gradient(circle_at_28%_88%,rgba(249,115,22,0.24),transparent_34%),linear-gradient(135deg,#090312_0%,#111827_38%,#172554_63%,#5f1b0b_100%)]" />
      <div className="speed-lines absolute inset-0 opacity-35" />
      <div className="dot-matrix absolute inset-0 opacity-25" />
      <div className="noise-layer absolute inset-0 opacity-[0.1]" />
      <div className="energy-particles absolute inset-0" />
      <div className="floating-orb absolute left-[6%] top-[14%] size-56 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="floating-orb absolute right-[7%] top-[28%] size-72 rounded-full bg-sky-400/20 blur-3xl [animation-delay:1.2s]" />
      <div className="floating-orb absolute bottom-[8%] left-[30%] size-80 rounded-full bg-orange-500/20 blur-3xl [animation-delay:2.1s]" />
      <div className="floating-orb absolute bottom-[26%] right-[26%] size-64 rounded-full bg-violet-500/18 blur-3xl [animation-delay:3s]" />
    </div>
  )
}

function TransformationGlyph({
  form,
  selected,
}: {
  form: (typeof transformations)[number]
  selected: boolean
}) {
  return (
    <div className="relative grid size-16 shrink-0 place-items-center sm:size-20">
      <div
        className={`absolute inset-0 rounded-full blur-xl transition duration-500 ${
          selected ? "bg-amber-300/45" : "bg-sky-400/15"
        }`}
      />
      <div
        className={`relative grid size-14 place-items-center rounded-full border font-black transition duration-500 sm:size-16 ${
          selected
            ? "border-amber-200 bg-gradient-to-br from-amber-200 via-orange-500 to-sky-500 text-slate-950 shadow-xl shadow-amber-400/25"
            : "border-white/15 bg-slate-950 text-slate-300"
        }`}
      >
        {form.power}
      </div>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Badge className="mb-4 border border-amber-300/30 bg-amber-300/15 px-3 py-1 text-amber-100">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      ) : null}
    </div>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="border-white/20 bg-white/10 text-white hover:bg-white/20 md:hidden"
        >
          <Menu />
          <span className="sr-only">Abrir navegacion</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="border-white/10 bg-slate-950 text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Dragon Ball UX</SheetTitle>
        </SheetHeader>
        <nav className="grid gap-3 px-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default function App() {
  const [selectedWarriorId, setSelectedWarriorId] = useState(warriors[0].id)
  const [selectedTransformationId, setSelectedTransformationId] = useState(
    transformations[1].id
  )
  const selectedWarrior =
    warriors.find((warrior) => warrior.id === selectedWarriorId) ?? warriors[0]
  const selectedTransformation =
    transformations.find((form) => form.id === selectedTransformationId) ??
    transformations[0]

  return (
    <TooltipProvider>
      <div className="relative min-h-screen overflow-hidden text-white">
        <CinematicBackground />
        <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-amber-300 via-orange-500 to-sky-700 font-black text-slate-950 shadow-lg shadow-orange-500/30">
                DB
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
                  Dragon Ball UX
                </p>
                <p className="text-xs text-amber-200">Premium fan interface</p>
              </div>
            </a>

            <NavigationMenu className="hidden md:flex" viewport={false}>
              <NavigationMenuList className="gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className="rounded-full px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                      >
                        {item.label}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="hidden border-white/20 bg-white/10 text-amber-200 hover:bg-white/20 sm:inline-flex"
                  >
                    <Sparkles />
                    <span className="sr-only">Aura activa</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Aura activa</TooltipContent>
              </Tooltip>
              <Button className="hidden bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-200 md:inline-flex">
                Crear experiencia
              </Button>
              <MobileNav />
            </div>
          </header>
        </div>

        <main>
          <section className="relative isolate overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_50%_18%,rgba(251,191,36,0.26),transparent_24%),radial-gradient(circle_at_72%_42%,rgba(56,189,248,0.18),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.62)_76%,rgba(2,6,23,0.9)_100%)]" />
            <div className="absolute left-1/2 top-28 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-amber-200/20 shadow-[0_0_160px_rgba(251,191,36,0.3)]" />
            <div className="absolute right-[-8rem] top-36 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute left-[-10rem] bottom-20 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="section-divider-glow absolute inset-x-0 bottom-0 h-px opacity-80" />
            <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] xl:min-h-[820px]">
              <div className="max-w-3xl">
                <Badge className="mb-6 border border-amber-300/40 bg-amber-300/20 px-4 py-2 text-amber-50 shadow-lg shadow-amber-500/20 backdrop-blur">
                  <Flame className="size-4" />
                  Fan experience interactiva
                </Badge>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.9] text-white drop-shadow-[0_0_32px_rgba(251,191,36,0.2)] sm:text-7xl lg:text-8xl">
                  Elige tu aura.
                  <span className="block bg-gradient-to-r from-amber-200 via-orange-400 to-sky-300 bg-clip-text text-transparent">
                    Desbloquea la saga.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                  Una landing anime premium donde cada seccion hace algo:
                  selecciona guerreros, compara transformaciones, explora sagas
                  y avanza hacia un CTA con energia visual.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-amber-300 text-slate-950 shadow-2xl shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-amber-300/40"
                  >
                    Entrar al roster
                    <ArrowRight />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/25 bg-white/12 text-white shadow-lg shadow-sky-500/10 transition hover:-translate-y-0.5 hover:bg-white/20"
                      >
                        <Play />
                        Ver briefing
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Briefing de experiencia</DialogTitle>
                        <DialogDescription>
                          Esta landing no usa imagenes oficiales. La fantasia se
                          construye con CSS: siluetas, auras, emblemas, stats,
                          carousels y decisiones interactivas.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {["Seleccionar", "Comparar", "Convertir"].map((step) => (
                          <Card
                            key={step}
                            className="border-white/10 bg-white/10 text-white"
                          >
                            <CardContent className="py-4 text-sm font-bold">
                              {step}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    ["4", "Guerreros activos"],
                    ["12", "Stats comparables"],
                    ["0", "Imagenes externas"],
                  ].map(([value, label]) => (
                    <Card
                      key={label}
                      className="glass-panel text-white transition hover:-translate-y-1 hover:border-amber-200/30"
                    >
                      <CardContent className="py-5">
                        <p className="text-3xl font-black text-amber-200">
                          {value}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                          {label}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="glass-panel relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(251,191,36,0.28),transparent_28%),radial-gradient(circle_at_50%_72%,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.18),transparent_28%)]" />
                <CardContent className="relative grid gap-6 p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-amber-200">
                        Guerrero seleccionado
                      </p>
                      <h2 className="mt-2 text-3xl font-black">
                        {selectedWarrior.name}
                      </h2>
                    </div>
                    <Badge className="bg-sky-400 text-slate-950">
                      {selectedWarrior.faction}
                    </Badge>
                  </div>
                  <CharacterVisual warrior={selectedWarrior} active />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <StatBar label="Fuerza" value={selectedWarrior.stats.fuerza} />
                    <StatBar
                      label="Velocidad"
                      value={selectedWarrior.stats.velocidad}
                    />
                    <StatBar label="Tecnica" value={selectedWarrior.stats.tecnica} />
                    <StatBar label="Aura" value={selectedWarrior.stats.aura} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="roster" className="relative px-4 py-24 sm:px-6">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12),rgba(124,45,18,0.12),rgba(15,23,42,0.08))]" />
            <div className="section-divider-glow absolute inset-x-12 top-0 h-px opacity-50" />
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Selector interactivo"
                title="El roster ya no es una galeria estatica"
                description="Haz clic en un guerrero para actualizar el panel tactico, sus stats y la direccion del CTA."
              />

              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="grid gap-4 sm:grid-cols-2">
                  {warriors.map((warrior) => {
                    const active = selectedWarrior.id === warrior.id

                    return (
                      <button
                        key={warrior.id}
                        type="button"
                        onClick={() => setSelectedWarriorId(warrior.id)}
                        className={`group rounded-3xl border p-3 text-left transition duration-300 hover:-translate-y-1 ${
                          active
                            ? "border-amber-300/70 bg-amber-300/12 shadow-2xl shadow-amber-500/20"
                            : "glass-panel hover:border-white/25 hover:bg-white/10"
                        }`}
                      >
                        <CharacterVisual warrior={warrior} active={active} />
                        <div className="mt-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xl font-black text-white">
                              {warrior.name}
                            </p>
                            <p className="text-sm text-slate-300">{warrior.role}</p>
                          </div>
                          <Badge
                            className={
                              active
                                ? "bg-amber-300 text-slate-950"
                                : "bg-white/10 text-slate-200"
                            }
                          >
                            {warrior.stats.aura}%
                          </Badge>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <Card className="glass-panel text-white">
                  <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <Badge className="mb-3 bg-orange-500 text-white">
                          Panel tactico
                        </Badge>
                        <CardTitle className="text-3xl font-black text-white">
                          {selectedWarrior.name}: {selectedWarrior.role}
                        </CardTitle>
                        <CardDescription className="mt-2 text-base leading-7 text-slate-300">
                          {selectedWarrior.quote}
                        </CardDescription>
                      </div>
                      <Avatar className="size-14 border border-amber-300/30 bg-amber-300/10">
                        <AvatarFallback className="bg-transparent font-black text-amber-200">
                          {selectedWarrior.emblem}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="rounded-2xl border border-white/10 bg-white/8 p-5 shadow-inner shadow-white/5">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                        Tactica UX
                      </p>
                      <p className="mt-3 text-lg font-semibold leading-8 text-white">
                        {selectedWarrior.tactic}
                      </p>
                    </div>
                    <div className="grid gap-4">
                      <StatBar label="Fuerza" value={selectedWarrior.stats.fuerza} />
                      <StatBar
                        label="Velocidad"
                        value={selectedWarrior.stats.velocidad}
                      />
                      <StatBar
                        label="Tecnica"
                        value={selectedWarrior.stats.tecnica}
                      />
                      <StatBar label="Aura" value={selectedWarrior.stats.aura} />
                    </div>
                    <Button className="bg-amber-300 text-slate-950 hover:bg-amber-200">
                      Usar estrategia de {selectedWarrior.name}
                      <ChevronRight />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section
            id="transformaciones"
            className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-24"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(251,191,36,0.2),transparent_28%),radial-gradient(circle_at_88%_32%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.14),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.05),rgba(15,23,42,0.42),rgba(2,6,23,0.18))]" />
            <div className="speed-lines absolute inset-0 opacity-20" />
            <div className="section-divider-glow absolute inset-x-12 top-0 h-px opacity-60" />
            <div className="relative mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Power comparison"
                title="Transformaciones que explican la experiencia"
                description="Selecciona una etapa del power path: el panel se actualiza con energia, metricas y proposito UX."
              />
              <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] lg:items-start">
                <Card className="glass-panel text-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="relative grid gap-4">
                      <div className="absolute left-8 top-10 bottom-10 hidden w-px bg-gradient-to-b from-amber-300/70 via-orange-500/40 to-sky-400/70 sm:block" />
                      {transformations.map((form, index) => {
                        const selected = selectedTransformation.id === form.id

                        return (
                          <button
                            key={form.id}
                            type="button"
                            onClick={() => setSelectedTransformationId(form.id)}
                            className={`group relative grid gap-4 rounded-3xl border p-4 text-left transition duration-300 sm:grid-cols-[auto_1fr_auto] sm:items-center ${
                              selected
                                ? "border-amber-300/70 bg-amber-300/12 shadow-2xl shadow-amber-500/20"
                                : "border-white/10 bg-white/[0.06] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.12] hover:shadow-xl hover:shadow-sky-500/10"
                            }`}
                          >
                            <TransformationGlyph form={form} selected={selected} />
                            <div>
                              <div className="mb-2 flex flex-wrap items-center gap-2">
                                <Badge
                                  className={
                                    selected
                                      ? "bg-amber-300 text-slate-950"
                                      : "bg-white/10 text-slate-200"
                                  }
                                >
                                  Etapa 0{index + 1}
                                </Badge>
                                <span className="text-xs uppercase tracking-[0.22em] text-slate-400">
                                  {form.label}
                                </span>
                              </div>
                              <h3 className="text-2xl font-black text-white">
                                {form.name}
                              </h3>
                              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                                {form.description}
                              </p>
                            </div>
                            <div className="grid min-w-28 gap-2">
                              <div className="flex items-center justify-between text-xs text-slate-300">
                                <span>Power</span>
                                <span className="font-bold text-amber-200">
                                  {form.power}
                                </span>
                              </div>
                              <Progress
                                value={form.power}
                                className="h-2 bg-white/10 [&_[data-slot=progress-indicator]]:bg-gradient-to-r [&_[data-slot=progress-indicator]]:from-orange-500 [&_[data-slot=progress-indicator]]:to-amber-200 [&_[data-slot=progress-indicator]]:duration-700"
                              />
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-panel sticky top-24 text-white max-lg:static">
                  <CardContent className="grid gap-6 p-5 sm:p-6">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/30 via-slate-950/90 to-sky-500/30 p-5 shadow-2xl shadow-orange-500/10">
                      <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/25 aura-pulse" />
                      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
                      <div className="relative grid aspect-square min-h-56 place-items-center rounded-3xl border border-white/10 bg-slate-950/70">
                        <div className="grid size-32 place-items-center rounded-full bg-gradient-to-br from-amber-200 via-orange-500 to-sky-600 text-4xl font-black text-slate-950 shadow-2xl shadow-amber-400/30">
                          {selectedTransformation.power}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Badge className="mb-4 bg-sky-400 text-slate-950">
                        {selectedTransformation.label}
                      </Badge>
                      <h3 className="text-3xl font-black text-white sm:text-4xl">
                        {selectedTransformation.name}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-slate-300">
                        {selectedTransformation.description}
                      </p>
                    </div>
                    <div className="grid gap-5">
                      <StatBar
                        label="Poder visual"
                        value={selectedTransformation.power}
                      />
                      <StatBar
                        label="Velocidad percibida"
                        value={selectedTransformation.speed}
                      />
                      <StatBar
                        label="Claridad UX"
                        value={selectedTransformation.clarity}
                      />
                    </div>
                    <Button className="bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-200">
                      Activar {selectedTransformation.name}
                      <Zap />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="relative px-4 py-24 sm:px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(249,115,22,0.12),transparent_24%),radial-gradient(circle_at_82%_72%,rgba(56,189,248,0.12),transparent_28%)]" />
            <div className="relative mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Sistema de experiencia"
                title="Mas que decoracion: cada modulo empuja una decision"
              />
              <div className="grid gap-5 md:grid-cols-3">
                {featureCards.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <Card
                      key={feature.title}
                      className="glass-panel group text-white transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:shadow-2xl hover:shadow-amber-500/10"
                    >
                      <CardHeader>
                        <div className="mb-4 grid size-12 place-items-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/25 transition group-hover:scale-110">
                          <Icon />
                        </div>
                        <CardTitle className="text-2xl font-black text-white">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm leading-7 text-slate-300">
                        {feature.copy}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          <section id="sagas" className="bg-slate-900/50 px-4 py-24 sm:px-6">
            <div className="relative mx-auto max-w-7xl">
              <div className="absolute -left-20 top-20 size-64 rounded-full bg-violet-500/15 blur-3xl" />
              <div className="absolute -right-16 bottom-10 size-72 rounded-full bg-amber-300/15 blur-3xl" />
              <SectionHeading
                eyebrow="Saga carousel"
                title="Eventos utiles para explorar, no slides decorativos"
                description="Cada saga explica que rol cumple en la conversion y muestra un nivel de intensidad."
              />
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {sagaCards.map((saga) => (
                    <CarouselItem
                      key={saga.title}
                      className="md:basis-1/2 xl:basis-1/3"
                    >
                      <Card className="glass-panel h-full text-white transition duration-300 hover:-translate-y-1 hover:border-sky-200/30 hover:shadow-2xl hover:shadow-sky-500/10">
                        <CardContent className="grid h-full gap-6 p-5">
                          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-violet-950/50 to-sky-500/35" />
                            <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/40" />
                            <div className="absolute inset-x-8 top-1/2 h-1 -translate-y-1/2 rounded-full bg-amber-200/60 shadow-[0_0_30px_rgba(251,191,36,0.65)]" />
                            <Swords className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 text-amber-100" />
                          </div>
                          <div>
                            <div className="mb-3 flex items-center justify-between gap-3">
                              <Badge className="bg-orange-500 text-white">
                                {saga.phase}
                              </Badge>
                              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                {saga.metric}
                              </span>
                            </div>
                            <h3 className="text-2xl font-black text-white">
                              {saga.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                              {saga.copy}
                            </p>
                          </div>
                          <div className="mt-auto">
                            <StatBar label="Intensidad" value={saga.power} />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>

          <section id="faq" className="relative px-4 py-24 sm:px-6">
            <div className="section-divider-glow absolute inset-x-12 top-0 h-px opacity-50" />
            <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <Badge className="mb-4 bg-amber-300 text-slate-950">
                  FAQ de producto
                </Badge>
                <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                  Preguntas antes de lanzar la siguiente saga
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  Copy pensado para explicar decisiones, derechos visuales y
                  evolucion del producto.
                </p>
              </div>
              <Card className="glass-panel text-white">
                <CardContent className="p-5">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((item, index) => (
                      <AccordionItem
                        key={item.question}
                        value={`item-${index}`}
                        className="border-white/10"
                      >
                        <AccordionTrigger className="text-left text-base text-white hover:text-amber-200">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="leading-7 text-slate-300">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="relative px-4 py-24 sm:px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.2),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(56,189,248,0.16),transparent_28%)]" />
            <div className="relative mx-auto max-w-7xl">
              <Card className="relative overflow-hidden border-amber-300/30 bg-gradient-to-br from-orange-500/80 via-slate-950/95 to-sky-950/90 text-white shadow-2xl shadow-orange-500/25 backdrop-blur">
                <div className="speed-lines absolute inset-0 opacity-25" />
                <div className="absolute -right-20 -top-20 size-80 rounded-full bg-amber-300/20 blur-3xl" />
                <div className="absolute -bottom-24 left-1/4 size-96 rounded-full bg-sky-400/15 blur-3xl" />
                <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
                  <div>
                    <Badge className="mb-4 bg-amber-300 text-slate-950">
                      CTA final
                    </Badge>
                    <h2 className="text-4xl font-black leading-tight text-white sm:text-6xl">
                      Convierte la energia en accion
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100">
                      El siguiente paso natural es conectar este fan experience
                      a un registro, contenido desbloqueable o sistema de
                      progreso real.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                    <Button
                      size="lg"
                      className="bg-amber-300 text-slate-950 shadow-xl shadow-amber-500/25 hover:bg-amber-200"
                    >
                      Activar experiencia
                      <Zap />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                    >
                      Ver roadmap
                      <ChevronRight />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Trophy className="text-amber-300" />
                <p className="font-black uppercase tracking-[0.2em] text-white">
                  Dragon Ball UX Experience
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                React, Vite, Tailwind CSS y shadcn/ui.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Star className="size-4 text-amber-300" />
                Sin imagenes oficiales
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="size-4 text-sky-300" />
                Interactivo y responsive
              </span>
            </div>
          </div>
          <Separator className="mx-auto my-8 max-w-7xl bg-white/10" />
          <p className="text-center text-xs text-slate-500">
            Interfaz conceptual creada para practica frontend.
          </p>
        </footer>
      </div>
    </TooltipProvider>
  )
}
