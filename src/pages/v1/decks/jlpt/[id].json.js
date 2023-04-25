import { JLPTDecks } from "../../../../data/decks";

export const get = ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify(JLPTDecks[id])
  }
}

export function getStaticPaths () {
  const paths = []

  for (const key in JLPTDecks) {
    paths.push({ params: { id: key } })
  }

  return paths;
}