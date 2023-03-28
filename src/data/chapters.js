import kanji from "./kanji.json";

const getKanji = (chars) => {
  let res = []
  chars.forEach(char => {
    res.push(kanji[char])
  });
  return res;
}

const chapters = {
  "1": {
    "name": "Nombres",
    "kanji": getKanji(["人", "男"]),
  },
  "2": {
    "name": "Premières impressions",
    "kanji": getKanji(["古", "吾"])
  } 
}

export default chapters;