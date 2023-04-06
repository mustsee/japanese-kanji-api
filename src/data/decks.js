import kanji from "./kanji";

const getKanji = (chars) => {
  let res = []
  chars.forEach(char => {
    res.push(kanji[char])
  });
  return res;
}

const RTKDecks = {
  "nombres": {
    "name": "Nombres",
    "method": "rtk",
    "chapter": 1,
    "kanji": getKanji(["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "口", "日", "月", "田", "目"]),
  },
  "premieres-impressions": {
    "name": "Premières impressions",
    "method": "rtk",
    "chapter": 2,
    "kanji": getKanji(["古", "吾", "冒", "朋", "明", "唱", "晶", "品", "呂", "昌", "早", "旭", "世", "胃", "旦", "胆", "亘", "凹", "凸"])
  } ,
  "le-baton-de-marche-et-la-goutte": {
    "name": "Le bâton de marche et la goutte",
    "kanji": getKanji(["旧", "自", "白", "百", "中", "千"]),
    "method": "rtk",
    "chapter": 3,
  },
}

const CDJDecks = {
  "nombres": {
    "name": "Nombres",
    "kanji": getKanji(["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千"]),
    "method": "cdj",
  }
}

const decksList = [
  {
    "id": "nombres",
    "folder": "rtk",
    "name": "Nombres",
    "method": "RTK",
    "chapter": 1,
  },
  {
    "id": "premieres-impressions",
    "folder": "rtk",
    "name": "Premières impressions",
    "method": "RTK",
    "chapter": 2,
  },
  {
    "id": "le-baton-de-marche-et-la-goutte",
    "folder": "rtk",
    "name": "Le bâton de marche et la goutte",
    "method": "RTK",
    "chapter": 3,
  },
  {
    "id": "nombres",
    "name": "Nombres",
    "folder": "cdj",
    "method": "CDJ",
 }
]


export { RTKDecks, CDJDecks, decksList };