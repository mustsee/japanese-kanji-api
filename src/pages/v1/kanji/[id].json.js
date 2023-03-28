import kanji from "../../../data/kanji";

export const get = ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify(kanji[id])
  }
}

export function getStaticPaths () {
  const paths = []

  for (const key in kanji) {
    paths.push({ params: { id: key } })
  }

  return paths;
}
