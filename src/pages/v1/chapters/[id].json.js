import chapters from "../../../data/chapters.json";

export const get = ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify(chapters[id])
  }
}

export function getStaticPaths () {
  const paths = []

  for (const key in chapters) {
    paths.push({ params: { id: key } })
  }

  return paths;
}