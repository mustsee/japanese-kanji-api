import { decksList } from "../../../data/decks";

export const get = ({ params, request }) => {
  return {
    body: JSON.stringify(decksList)
  }
}