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

const JLPTDecks = {
  /* 
    https://jlptsensei.com/learn-japanese-kanji/%E6%A0%A1-kou-school/
    https://www.apprendrelejaponais.net/liste-kanji-jlpt-n5-n4-n3-n2-n1.html
    JLPT 5 :
    一 右 雨 円 下 火 学 気 休 金 -> DONE
    九 月 見 五 校 左 三 山 四 子 -> DONE
    七 車 十 出 女 小 上 人 水 生 -> DONE
    先 千 川 大 男 中 天 土 二 日 -> DONE
    入 年 白 八 百 本 名 木 六 何 -> DONE
    外 間 午 後 語 -> DONE
    行 高 国 今 時 -> DONE
    書 食 西 前 長 電 東 読 南 半
    父 分 聞 母 北 毎 万 友 来 話
  */
  "n5": {
    "name": "JLPT 5",
    "kanji": getKanji(["一", "右", "雨", "円", "下", "火", "学", "気", "休", "金", "九", "月", "見", "五", "校", "左", "三", "山", "四", "子", "七", "車", "十", "出", "女", "小", "上", "人", "水", "生", "先", "千", "川", "大", "男", "中", "天", "土", "二", "日", "入", "年", "白", "八", "百", "本", "名", "木", "六", "何", "外", "間", "午", "後", "語", "行", "高", "国", "今", "時"]),
    "method": "jlpt",
  }
}

const otherDecks = {
  "date": {
    "name": "Date",
    /* 
    Pour les jours de la semaine :
    日月火水木金土曜
    Pour le système solaire :
    太陽天海冥王地球星
    */
    "kanji": getKanji(["日", "月", "火", "水", "木", "金", "土", "曜", "太", "陽", "天", "海", "冥", "王", "地", "球", "星"]),
    "method": "other"
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
 },
 {
    "id": "n5",
    "folder": "jlpt",
    "name": "JLPT N5",
    "method": "JLPT"
 },
 {
  "id": "date",
  "folder": "other",
  "name": "Date",
  "method": "Other"
 }
]


export { RTKDecks, CDJDecks, JLPTDecks, otherDecks, decksList };