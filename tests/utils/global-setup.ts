import { execSync } from "child_process";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function globalSetup() {
  // Resetear y migrar base de datos
  execSync("npx prisma migrate reset --force --skip-seed", {
    stdio: "inherit",
  });

  // Crear usuario de prueba
  await prisma.user.create({
    data: {
      email: "test@user.com",
      name: "Usuario Test",
    },
  });

  // Crear eventos
  const events = [
    {
      id: "1",
      name: "Rock en Vivo 2025",
      date: new Date("2023-12-15"),
      time: "20:00",
      location: "Estadio Nacional, Ciudad de México",
      description:
        "El festival de rock más grande del año con las mejores bandas nacionales e internacionales. Una experiencia musical inolvidable con más de 8 horas de música en vivo.",
      price: 85.99,
      genre: "Rock",
      image: "/placeholder.svg?height=400&width=800",
      totalTickets: 500,
      ticketsAvailable: 500,
    },
    {
      id: "2",
      name: "Noche de Jazzz",
      date: new Date("2023-11-20"),
      time: "19:30",
      location: "Teatro Metropolitan, Ciudad de México",
      description:
        "Una velada elegante con los mejores exponentes del jazz contemporáneo. Disfruta de una atmósfera íntima y sofisticada mientras escuchas a los maestros del género.",
      price: 65.5,
      genre: "Jazz",
      image: "/placeholder.svg?height=400&width=800",
      totalTickets: 200,
      ticketsAvailable: 200,
    },
    {
      id: "3",
      name: "Festival Electrónicoo",
      date: new Date("2023-12-31"),
      time: "22:00",
      location: "Autódromo Hermanos Rodríguez, Ciudad de México",
      description:
        "Despide el año con la mejor música electrónica. DJs internacionales, efectos visuales impresionantes y la mejor producción para una fiesta inolvidable.",
      price: 120.0,
      genre: "Electrónica",
      image: "/placeholder.svg?height=400&width=800",
      totalTickets: 1000,
      ticketsAvailable: 1000,
    },
    {
      id: "4",
      name: "Concierto Sinfónicoo",
      date: new Date("2023-11-10"),
      time: "18:00",
      location: "Palacio de Bellas Artes, Ciudad de México",
      description:
        "La orquesta sinfónica nacional presenta las obras maestras de Beethoven y Mozart. Una experiencia cultural que no te puedes perder en el recinto más emblemático del país.",
      price: 75.0,
      genre: "Clásica",
      image: "/placeholder.svg?height=400&width=800",
      totalTickets: 300,
      ticketsAvailable: 300,
    },
    {
      id: "5",
      name: "Festival de Pop Latino",
      date: new Date("2023-12-05"),
      time: "17:00",
      location: "Foro Sol, Ciudad de México",
      description:
        "Los artistas más populares del momento reunidos en un solo escenario. Más de 6 horas de música pop latina con tus canciones favoritas.",
      price: 95.5,
      genre: "Pop Latino",
      image: "/placeholder.svg?height=400&width=800",
      totalTickets: 0,
      ticketsAvailable: 0,
    },
    {
      id: "6",
      name: "Noche de Reggaetón",
      date: new Date("2023-11-25"),
      time: "21:00",
      location: "Arena Ciudad de México, Ciudad de México",
      description:
        "Los mejores exponentes del reggaetón y el trap latino en un concierto explosivo. Prepárate para bailar toda la noche con los éxitos del momento.",
      price: 110.0,
      genre: "Reggaetón",
      image: "/placeholder.svg?height=400&width=800",
      totalTickets: 2,
      ticketsAvailable: 2,
    },
  ];

  await prisma.event.createMany({ data: events });

  await prisma.$disconnect();
}
