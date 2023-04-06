import { decks } from "../../../../data/decks";

export const get = ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify(decks[id])
  }
}

export function getStaticPaths () {
  const paths = []

  for (const key in decks) {
    paths.push({ params: { id: key } })
  }

  return paths;
}