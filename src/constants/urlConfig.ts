//** Envoirment var */
type EnvoirmentT = "develop" | "production";
export const envoirment: EnvoirmentT =
  import.meta.env.VITE_ENVIRONMENT || "develop";

export const baseUrl: string =
  envoirment === "production"
    ? "https://interview-apixx07.dev.park-depot.de/"
    : "https://interview-apixx07.dev.park-depot.de/";
