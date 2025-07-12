import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "x4w1q20m",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-06-24",
});
