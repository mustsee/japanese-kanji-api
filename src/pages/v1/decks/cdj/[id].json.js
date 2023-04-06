import { CDJDecks } from "../../../../data/decks";

export const get = ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify(CDJDecks[id])
  }
}

export function getStaticPaths () {
  const paths = []

  for (const key in CDJDecks) {
    paths.push({ params: { id: key } })
  }

  return paths;
}