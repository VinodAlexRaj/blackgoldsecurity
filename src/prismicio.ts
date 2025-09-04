import * as prismic from "@prismicio/client";

export const repositoryName = "blackgoldsecurity";

export const createClient = () =>
  prismic.createClient(repositoryName, {
    fetch: fetch,
  });
