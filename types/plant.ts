import { StaticImageData } from "next/image";

interface Plant {
  id: string;
  name: string;
  light: number;
  water: number;
  cover: StaticImageData;
  price: number;
}

export default Plant;
