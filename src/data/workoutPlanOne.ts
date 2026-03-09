import type { WorkoutSession } from "./types";

export const workoutPlanOne: WorkoutSession[] = [
  {
    name: "Seduta A - Lower body",
    exercises: [
      {
        type: "exercise",
        exercise: {
          title: "Natural abductor",
          description: "da decubito laterale",
          series: "3x10 per gamba",
          mediaType: "video",
          mediaUrl: "/media/lower/natural-abductor.mov",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Goblet sumo squat",
          description: "con manubri",
          series: "3x15",
          mediaType: "video",
          mediaUrl: "/media/lower/goblet-sumo-squat.mov",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Single leg bridge",
          description: "con schiena su sedia",
          series: "3x10 per gamba",
          mediaType: "video",
          mediaUrl: "/media/lower/single-leg-bridge.mov",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Affondi sul posto",
          description: "con manubri",
          series: "3x10 per gamba",
          mediaType: "video",
          mediaUrl: "/media/lower/affondi-sul-posto.mov",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Step up su sedia",
          description: "con manubri",
          series: "3x10 per gamba",
          mediaType: "video",
          mediaUrl: "/media/lower/step-up-sedia.mp4",
        },
      },
    ],
  },
  {
    name: "Seduta B - Upper body",
    exercises: [
      {
        type: "exercise",
        exercise: {
          title: "Rematore presa neutra",
          description: "con manubri",
          series: "3x12",
          mediaType: "video",
          mediaUrl: "/media/upper/rematore-presa-neutra.mov",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Lat machine",
          description: "presa prona con elastico a maniglie",
          series: "4x10",
          mediaType: "video",
          mediaUrl: "/media/upper/lat-machine.mp4",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Alzate laterali",
          description: "seduta con manubri",
          series: "3x15",
          mediaType: "video",
          mediaUrl: "/media/upper/alzate-laterali.mp4",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Military press",
          description: "seduta senza supporto",
          series: "3x10",
          mediaType: "video",
          mediaUrl: "/media/upper/military-press.mp4",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "French press",
          description: "distesa a terra con manubri",
          series: "3x10",
          mediaType: "video",
          mediaUrl: "/media/upper/french-press.mp4",
        },
      },
    ],
  },
  {
    name: "Seduta C - Addome",
    exercises: [
      {
        type: "exercise",
        exercise: {
          title: "Crunch",
          description: "con ginocchia a 90 gradi",
          series: "3x15 esecuzione lenta",
          mediaType: "video",
          mediaUrl: "/media/addome/crunch-ginocchia-flesse.mp4",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Reverse crunch",
          description: "con ginocchia a 90 gradi",
          series: "3x10 esecuzione lenta",
          mediaType: "video",
          mediaUrl: "/media/addome/reverse-crunch-ginocchia-flesse.mov",
        },
      },
      {
        type: "exercise",
        exercise: {
          title: "Plank statico",
          description: "sugli avambracci",
          series: "4x tempo max sostenibile",
        },
      },
    ],
  },
];
