import { otherDecks } from "../../../../data/decks";

export const get = ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify(otherDecks[id])
  }
}

export function getStaticPaths () {
  const paths = []

  for (const key in otherDecks) {
    paths.push({ params: { id: key } })
  }

  return paths;
}