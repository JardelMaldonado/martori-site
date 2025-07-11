import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "x4w1q20m",
  dataset: "production",
  useCdn: false, // `false` se você quer sempre os dados mais recentes, `true` para cache
  apiVersion: "2024-06-24",
});
