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
    "kanji": getKanji(["古", "吾", "冒", "朋", "明", "唱", "晶", "品", "呂", "昌", "早", "旭", "世", "胃", "旦", "胆", "亘", "凹", "凸"])
  } ,
  "3": {
    "name": "Le bâton de marche et la goutte",
    "kanji": getKanji(["旧", "自", "白", "百", "中", "千"])
  }
}

const chaptersList = {
  "1": {
    "name": "Nombres",
    "method": "rtk",
  },
  "2": {
    "name": "Premières impressions",
    "method": "rtk",
  },
  "3": {
    "name": "Le bâton de marche et la goutte",
    "method": "rtk",
  } 
}

export { chapters, chaptersList };