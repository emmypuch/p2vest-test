export const imageData = [
  {
    src: "/assets/images/sendA.png",
    alt: "Send A",
    x: -50,
    y: -30,
    rotate: -5,
  },
  {
    src: "/assets/images/currency.png",
    alt: "Currency",
    x: 40,
    y: -50,
    rotate: 3,
  },
  {
    src: "/assets/images/shopping.png",
    alt: "Shopping",
    x: -30,
    y: 40,
    rotate: -2,
  },
  { src: "/assets/images/eating.png", alt: "Eating", x: 50, y: 30, rotate: 4 },
  {
    src: "/assets/images/paper-plane.png",
    alt: "Paper Plane",
    x: -20,
    y: -60,
    rotate: -8,
  },
  { src: "/assets/images/send.png", alt: "Send", x: 60, y: -20, rotate: 6 },
];

export type ImageData = (typeof imageData)[0];
