import { Lesson } from '../types';

export const COUNSELING_LESSON: Lesson = {
  id: "ezequiel-parte-2",
  title: "Ezequiel: Restauración y Gloria",
  subtitle: "Juicio, Naciones y Esperanza Futura (Parte 2)",
  totalSlides: 9,
  duration: "45 min",
  objectives: [
    "Comprender el juicio final sobre Jerusalén y las naciones vecinas.",
    "Analizar las profecías contra Tiro, Sidón y Egipto.",
    "Explorar la promesa del Buen Pastor y el Nuevo Pacto.",
    "Visualizar la restauración de Israel en el valle de los huesos secos.",
    "Conocer la visión del Templo Futuro y la gloria de Dios."
  ],
  slides: [
    {
      id: "slide-1",
      type: "intro",
      title: "Ezequiel: Parte 2",
      subtitle: "El Profeta de la Restauración",
      visual: {
        type: "image",
        source: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/8c4aa3aa-7815-4e9e-8a9d-ff8442ecb742_rw_1920.jpg?h=7d0b50887b050ce56c93398c3ad4eac9",
        position: "background",
        effect: "overlay-dark"
      },
      content: "Desde la caída de Jerusalén hasta la visión de la gloria futura. Un viaje de juicio a esperanza.",
      interaction: {
        type: "click-reveal",
        revealItems: [
          {
            title: "Caída de Jerusalén",
            text: "Capítulos 20-24",
            icon: "Flame"
          },
          {
            title: "Juicio a las Naciones",
            text: "Capítulos 25-32",
            icon: "Globe"
          },
          {
            title: "Restauración",
            text: "Capítulos 33-48",
            icon: "Sunrise"
          }
        ]
      }
    },
    {
      id: "slide-2",
      type: "grid-cards",
      title: "La Caída de Jerusalén",
      subtitle: "Profecías Finales antes del Sitio (Cap. 20-24)",
      visual: {
        type: "image",
        source: "https://images.unsplash.com/photo-1626262886746-862590240955?q=80&w=1920&auto=format&fit=crop",
        position: "background"
      },
      interaction: {
        type: "grid-cards",
        revealItems: [
          {
            title: "La Espada Afilada",
            text: "El juicio inevitable de Dios.",
            icon: "Sword",
            image: "https://images.unsplash.com/photo-1595856950278-832607997642?q=80&w=800&auto=format&fit=crop",
            longContent: "La espada del Señor está afilada y pulida para degollar. Nabucodonosor, indeciso en el cruce de caminos, usa adivinación y Dios lo dirige contra Jerusalén primero, no contra Amón."
          },
          {
            title: "Ahola y Aholiba",
            text: "Alegoría de dos hermanas infieles.",
            icon: "Users",
            image: "https://images.unsplash.com/photo-1505535162959-9bbcb4fe2271?q=80&w=800&auto=format&fit=crop",
            longContent: "Ahola (Samaria) y Aholiba (Jerusalén). A pesar de ver el castigo de su hermana Samaria, Jerusalén actuó peor, adulterando con ídolos de Asiria y Babilonia."
          },
          {
            title: "La Olla Hirviente",
            text: "Símbolo del sitio de la ciudad.",
            icon: "Flame",
            image: "https://images.unsplash.com/photo-1542849187-5ec6ea5e6a43?q=80&w=800&auto=format&fit=crop",
            longContent: "Jerusalén es la olla, el fuego es el sitio, y los pedazos de carne son los habitantes. La herrumbre (sangre) será quemada en el fuego de la destrucción."
          },
          {
            title: "Muerte de la Esposa",
            text: "Ezequiel como señal para Judá.",
            icon: "HeartCrack",
            image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop",
            longContent: "Dios anuncia que la esposa de Ezequiel morirá, pero él no debe llorar públicamente. Esto simboliza que el pueblo no tendrá tiempo de llorar la destrucción de su amado templo."
          }
        ]
      }
    },
    {
      id: "slide-3",
      type: "hotspot-reveal",
      title: "Juicio a las Naciones",
      subtitle: "Profecías contra los Vecinos (Cap. 25-32)",
      visual: {
        type: "map",
        source: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop",
        position: "background"
      },
      interaction: {
        type: "hotspots",
        revealItems: [
          {
            title: "Vecinos Hostiles",
            text: "Amón, Moab, Edom, Filistea.",
            x: 80, y: 60,
            icon: "MapPin",
            longContent: "Se gozaron de la caída de Judá. Amón y Moab serán invadidos. Edom tendrá asolamiento perpetuo por su rencor. Filistea será destruida."
          },
          {
            title: "Tiro y Sidón",
            text: "Orgullo comercial y caída.",
            x: 55, y: 50,
            icon: "Anchor",
            longContent: "Tiro, la ciudad isla, se creía invencible. Su rey (símbolo de Satanás) era 'sello de la perfección' hasta que se halló maldad. Nabucodonosor y Alejandro Magno la destruirían."
          },
          {
            title: "Egipto",
            text: "El gran dragón del Nilo.",
            x: 30, y: 60,
            icon: "Waves",
            longContent: "Faraón Hofra, el 'gran dragón', será ganchado. Egipto será entregado a Nabucodonosor como 'salario' por su trabajo contra Tiro. Será una nación humilde."
          }
        ]
      }
    },
    {
      id: "slide-4",
      type: "tabs-reveal",
      title: "Responsabilidad y Liderazgo",
      subtitle: "El Atalaya y los Pastores (Cap. 33-34)",
      visual: {
        type: "image",
        source: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1920&auto=format&fit=crop",
        position: "background"
      },
      interaction: {
        type: "tabs-reveal",
        revealItems: [
          {
            title: "El Atalaya",
            text: "Responsabilidad Personal",
            longContent: "Dios renueva el llamado de Ezequiel como atalaya. Cada individuo es responsable de su propio pecado. 'El alma que pecare, esa morirá', pero si el impío se aparta, vivirá.",
            icon: "Bell",
            image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=800&auto=format&fit=crop"
          },
          {
            title: "Malos Pastores",
            text: "Líderes Egoístas",
            longContent: "Ay de los pastores que se apacientan a sí mismos. No fortalecieron a la débil ni buscaron a la perdida. Por su culpa, las ovejas fueron esparcidas.",
            icon: "UserX",
            image: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/9098b031-31b0-4e66-9c25-80b850fff573_rw_1920.jpg?h=85469a4ce70b0c980ddcbc24a05b8a93"
          },
          {
            title: "El Buen Pastor",
            text: "Promesa Mesiánica",
            longContent: "Dios mismo buscará a sus ovejas. 'Yo buscaré la perdida y haré volver la descarriada'. Levantará a un pastor, 'mi siervo David', para que las apaciente.",
            icon: "Heart",
            image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=800&auto=format&fit=crop"
          }
        ]
      }
    },
    {
      id: "slide-5",
      type: "stepped-overlay",
      title: "Restauración y Nuevo Pacto",
      subtitle: "Un Corazón Nuevo (Cap. 36)",
      visual: {
        type: "image",
        source: "https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=1920&auto=format&fit=crop",
        position: "background"
      },
      content: "La promesa más gloriosa de regeneración en el Antiguo Testamento.",
      interaction: {
        type: "stepped-reveal",
        revealItems: [
          {
            title: "Agua Limpia",
            text: "Esparciré sobre vosotros agua limpia, y seréis limpiados de todas vuestras inmundicias.",
            image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=800&auto=format&fit=crop",
            icon: "Droplets"
          },
          {
            title: "Corazón Nuevo",
            text: "Os daré corazón nuevo, y quitaré de vuestra carne el corazón de piedra.",
            image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800&auto=format&fit=crop",
            icon: "Heart"
          },
          {
            title: "Espíritu Nuevo",
            text: "Pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos.",
            image: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/c2320c48-4235-42be-938f-55a14aefaa22_rw_1920.jpg?h=b65033d6859454b335840478d1db7c78",
            icon: "Wind"
          }
        ]
      }
    },
    {
      id: "slide-6",
      type: "flashcards",
      title: "Avivamiento Nacional",
      subtitle: "Visiones de Esperanza (Cap. 37-39)",
      visual: {
        type: "image",
        source: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1920&auto=format&fit=crop",
        position: "background"
      },
      interaction: {
        type: "flashcards",
        revealItems: [
          {
            title: "Huesos Secos",
            text: "¿Vivirán estos huesos?",
            icon: "Skull",
            image: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/11fa739d-50c8-4d93-809d-e5a73f760fc9_rw_1920.jpg?h=31e82f27f980e201562ea968ce2100d5",
            longContent: "Visión del valle de huesos secos. Al profetizar, los huesos se juntaron, les salió carne y el Espíritu les dio vida. Representa la restauración de toda la casa de Israel."
          },
          {
            title: "Dos Palos",
            text: "Reunificación de las Tribus.",
            icon: "GitMerge",
            image: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/c377a890-cf70-4e71-a0ed-135e6711ca09_rw_1920.jpg?h=670e14dbb4878fb27c7d79531163e3c5",
            longContent: "Ezequiel une dos palos: uno por Judá y otro por Efraín (Israel). Simboliza que Dios hará de ellos una sola nación y nunca más serán dos reinos."
          },
          {
            title: "Gog y Magog",
            text: "La Batalla Final.",
            icon: "ShieldAlert",
            image: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/0f3255f2-eaf7-4a92-be69-8c9a455e45f4_rw_1920.jpg?h=a4a7504fd1e5638665d0a41d3c88faad",
            longContent: "Profecía contra Gog de Magog, que atacará a Israel en los postreros tiempos. Dios intervendrá sobrenaturalmente para defender a su pueblo y mostrar su santidad."
          }
        ]
      }
    },
    {
      id: "slide-7",
      type: "info-menu-reveal",
      title: "La Gloria Futura",
      subtitle: "El Nuevo Templo y la Tierra (Cap. 40-48)",
      visual: {
        type: "image",
        source: "https://images.unsplash.com/photo-1548625361-ec86b11030e2?q=80&w=1920&auto=format&fit=crop",
        position: "background"
      },
      interaction: {
        type: "menu-reveal",
        revealItems: [
          {
            title: "El Nuevo Templo",
            text: "El Regreso de la Gloria",
            longContent: "Ezequiel ve un templo perfecto con medidas detalladas. Lo más importante: la gloria de Jehová, que había salido en el capítulo 10, regresa y llena la casa (43:2-5).",
            icon: "Layout",
            image: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/55042a77-529d-43c5-a3dc-96458358a70f_rw_1920.jpg?h=7a257af33c76d27433dd9902a6eda59e"
          },
          {
            title: "El Río de Vida",
            text: "Sanidad desde el Santuario",
            longContent: "Un río que sale del templo y se hace más profundo. Donde entra, trae vida y sanidad, incluso al Mar Muerto. Sus árboles dan fruto para comida y hojas para medicina.",
            icon: "Droplets",
            image: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/9a6e335e-5fdc-40a1-9170-50632eb58e24_rw_1920.jpg?h=3696495d5c45b4393faaf0a0ecea2d12"
          },
          {
            title: "La Ciudad Santa",
            text: "Jehová-Sama",
            longContent: "La tierra es repartida equitativamente entre las tribus. El nombre de la ciudad desde aquel día será: Jehová-Sama, que significa 'El Señor está allí'.",
            icon: "Map",
            image: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/40862190-a9b8-4e0f-b46f-9719b600cecd_rw_1920.jpg?h=54e3a16b32041fb2b6ea27df939b5212"
          }
        ]
      }
    },
    {
      id: "slide-8",
      type: "quiz",
      title: "Evaluación",
      subtitle: "Comprueba tu aprendizaje",
      visual: {
        type: "image",
        source: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1920&auto=format&fit=crop",
        position: "background"
      },
      interaction: {
        type: "multiple-choice",
        options: [
          {
            id: "q1",
            label: "¿Qué simboliza la unión de los dos palos en la mano de Ezequiel?",
            options: [
              { id: "a", label: "La paz entre Egipto y Babilonia", isCorrect: false, feedback: "Incorrecto. Se refiere a la nación de Israel." },
              { id: "b", label: "La reunificación de Judá e Israel", isCorrect: true, feedback: "Correcto. Representa que las doce tribus volverán a ser una sola nación bajo un solo rey." },
              { id: "c", label: "La construcción del nuevo templo", isCorrect: false, feedback: "Incorrecto. Se refiere a la unidad del pueblo." }
            ]
          },
          {
            id: "q2",
            label: "¿Cuál es el nombre final de la ciudad santa en la visión de Ezequiel?",
            options: [
              { id: "a", label: "Jehová-Jireh", isCorrect: false, feedback: "Incorrecto. Eso significa 'El Señor proveerá'." },
              { id: "b", label: "Jehová-Nisi", isCorrect: false, feedback: "Incorrecto. Eso significa 'El Señor es mi estandarte'." },
              { id: "c", label: "Jehová-Sama", isCorrect: true, feedback: "Correcto. Jehová-Sama significa 'El Señor está allí', indicando la presencia permanente de Dios." }
            ]
          },
          {
            id: "q3",
            label: "¿Qué promesa clave se encuentra en Ezequiel 36:26?",
            options: [
              { id: "a", label: "Un corazón de carne y un espíritu nuevo", isCorrect: true, feedback: "Correcto. Dios promete quitar el corazón de piedra y dar un corazón sensible a Su Espíritu." },
              { id: "b", label: "Riquezas y prosperidad material", isCorrect: false, feedback: "Incorrecto. La promesa es espiritual." },
              { id: "c", label: "Victoria militar sobre Roma", isCorrect: false, feedback: "Incorrecto. Roma no era el enemigo en ese tiempo." }
            ]
          }
        ]
      }
    },
    {
      id: "slide-9",
      type: "completion",
      title: "¡Estudio Completado!",
      subtitle: "Has finalizado Ezequiel",
      visual: {
        type: "image",
        source: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/8c4aa3aa-7815-4e9e-8a9d-ff8442ecb742_rw_1920.jpg?h=7d0b50887b050ce56c93398c3ad4eac9",
        position: "background",
        effect: "vignette"
      },
      content: "Has recorrido las visiones de juicio y las gloriosas promesas de restauración. Que la visión de 'Jehová-Sama' te inspire a vivir en Su presencia.",
      interaction: {
        type: "click-reveal",
        revealItems: []
      }
    }
  ]
};
