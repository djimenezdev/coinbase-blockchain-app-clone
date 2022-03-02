import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "hfofkhv6",
  dataset: "production",
  apiVersion: "2021-10-21",
  token:
    "sk7XRaytKzEmAX7lplSgSBl8lPE0nAp3JpOEmCKDUL7n3ksOqdRqlp4zsTFud8HXCNNtJ0o9PImx7vMI2KRe3L5J5hIGzHaWFrRi8uFKrYa9EbdxTTQHzuKGjAalr1NbD400yJ0qABQrmENgImpUGctIN0pAc7iHPD3gZHn3onw20iUW3LCY",
  useCdn: false,
});
