import { chaptersList } from "../../../data/chapters";

export const get = ({ params, request }) => {
  return {
    body: JSON.stringify(chaptersList)
  }
}