import type { WorkoutSession } from "./types";

export const workoutPlanTwo: WorkoutSession[] = [
  {
    name: "Seduta A - Lower",
    exercises: [
      {
        type: "exercise",
        exercise: {
          title: "Abduzioni in quadrupedia verso l'esterno",
          description: "con glute band sopra le ginocchia",
          series: "3x15 per lato",
        },
      },
      {
        type: "superSet",
        name: "Goblet sumo squat + passi laterali",
        rounds: "3 round",
        exercises: [
          {
            title: "Goblet sumo squat",
            description: "con un manubrio e glute band sopra le ginocchia",
            series: "15 ripetizioni",
            mediaType: "video",
            mediaUrl: "/media/lower/goblet-sumo-squat.mov",
          },
          {
            title: "Passi laterali",
            description: "con elastico alle caviglie",
            series: "1 minuto",
          },
        ],
      },
      {
        type: "exercise",
        exercise: {
          title: "Affondi indietro con manubri",
          description: "alternati",
          series: "3x10 per gamba",
          mediaType: "video",
          mediaUrl: "/media/lower/affondi-indietro.mov",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Spinte indietro in quadrupedia",
          description: "con glute band sopra le ginocchia",
          series: "3x15 per lato",
        },
      },
    ],
  },
  {
    name: "Seduta B - Upper",
    exercises: [
      {
        type: "exercise",
        exercise: {
          title: "Pullover con due manubri",
          description: "distesa a terra con ginocchia piegate, piedi a terra e schiena inarcata",
          series: "3x15",
          mediaType: "video",
          mediaUrl: "/media/upper/pullover.mp4",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Lat machine presa prona",
          description: "con elastico con maniglie",
          series: "4x10",
          mediaType: "video",
          mediaUrl: "/media/upper/lat-machine.mp4",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Arnold press con due manubri",
          description: "seduta senza poggiare la schiena",
          series: "3x8",
          mediaType: "video",
          mediaUrl: "/media/upper/arnold-press.mp4",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Alzate ad L in piedi",
          description: "con due manubri",
          series: "3x8 coppie",
          mediaType: "video",
          mediaUrl: "/media/upper/alzate-ad-L.mov",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Kick back con due manubri",
          description: "controllo del movimento",
          series: "3x12",
          mediaType: "video",
          mediaUrl: "/media/upper/kickback.mov",
        },
      },
    ],
  },
  {
    name: "Seduta C - Total",
    exercises: [
      {
        type: "superSet",
        name: "Single leg bridge + push up presa stretta",
        rounds: "3 round",
        exercises: [
          {
            title: "Single leg bridge",
            description: "con piede su sedia",
            series: "10 per lato",
            mediaType: "video",
            mediaUrl: "/media/lower/single-leg-bridge.mov",
          },
          {
            title: "Push up presa stretta sulle ginocchia",
            description: "a cedimento tecnico",
            series: "massime ripetizioni",
            mediaType: "video",
            mediaUrl: "/media/upper/push-up.mp4",
          },
        ],
      },
      {
        type: "superSet",
        name: "Reverse crunch + plank sulle mani",
        rounds: "3 round",
        exercises: [
          {
            title: "Reverse crunch a gambe tese",
            description: "controllato",
            series: "12 ripetizioni",
            mediaType: "video",
            mediaUrl: "/media/addome/reverse-crunch-gambe-tese.mov",
          },
          {
            title: "Plank statico sulle mani",
            description: "tenuta isometrica",
            series: "massimo tempo",
          },
        ],
      },
      {
        type: "superSet",
        name: "Crunch twist + plank sugli avambracci",
        rounds: "3 round",
        exercises: [
          {
            title: "Crunch twist a gambe divaricate",
            description: "alternando i lati",
            series: "8 coppie",
            mediaType: "video",
            mediaUrl: "/media/addome/crunch-twist.mov",
          },
          {
            title: "Plank statico sugli avambracci",
            description: "tenuta isometrica",
            series: "massimo tempo",
          },
        ],
      },
    ],
  },
];
