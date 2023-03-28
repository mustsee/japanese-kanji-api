import kanji from "./kanji";

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
    "kanji": getKanji(["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "口", "日", "月", "田", "目"]),
  },
  "2": {
    "name": "Premières impressions",
    "kanji": getKanji(["古", "吾", "冒", "朋", "明", "唱", "晶", "品", "呂", "昌"])
  } 
}

export default chapters;