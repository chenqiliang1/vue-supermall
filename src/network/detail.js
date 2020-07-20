import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}


export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}



export const res = {
  result:
    {
      iid:1,
      show:{
        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563979682,404794730&fm=26&gp=0.jpg"
      },
      title:"sell 標題 1",
      price:100,
      cfav:51,
      rate:{
        cRate:125,
        list:[{
          canExplain:false,
          content:"剛好合適,物美價廉,衣服面料很好.版型也很好看,非常棒",
          created:113165115,
          extraInfo:["是否合身:合身"],
          images:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563979682,404794730&fm=26&gp=0.jpg"],
          isAnonymous:1,
          isEmpty:0,
          level:"",
          rateId:"4684dsd",
          style:"顔色·上衣+褲子 尺碼:M",
          user:{
            avatar:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1722506617,2322243230&fm=26&gp=0.jpg",
            name:"好客戶" 
          }
        }]
      },
      itemInfo:{
        title:"好衣服大甩賣",
        discountDesc:"活動價",
        desc:"好衣服，質量超級好",
        price:"$1000.50",
        oldPrice:"$500.89",
        lowNowPrice:"$200.10",
        topImages:["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1600850603,223320482&fm=26&gp=0.jpg",
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=244816884,2156620520&fm=26&gp=0.jpg",
                  "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1985749318,3816028815&fm=26&gp=0.jpg",
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1933469033,4008319129&fm=26&gp=0.jpg"
        ]
      },
      colums:["銷量 1580","收藏33人"],
      itemParams:{
        info:{
          key:"產品參數",
          set:[{key:"圖案",value:"宮廷復古圖/民族復古圖,字母/文字/數字"},
          {key:"產名",value:"深圳有限公司"},
          {key:"顔色",value:"黑白拼接"},
          {key:"袖型",value:"常規袖"},
          {key:"上衣厚度",value:"適中"},
          {key:"尺碼",value:"XL,L,M,XXL"},
          {key:"季節",value:"春秋"}
          ]
        },
        rule:{
          disclaimer:"#以上尺寸圍為實物人工測量,因此尺寸存在1~2厘米的誤差範圍",
          key:"尺碼描述",
          tables:[
            ["尺碼","M","L","XL","XXL"],
            ["衣長","61.5","63","64.5","66"],
            ["胸圍","98","104","110","116"],
            ["袖長","63","66","68.5","70.5"]
          ]
        }
      },
      detailInfo:{
        desc:"好衣服好衣服,免費送免費送",
        key:"穿著效果",
        list:[
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2188715069,80671849&fm=26&gp=0.jpg",
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2909080636,1472358441&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121027204,3860554556&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1722656732,699064042&fm=26&gp=0.jpg"
        ]
      },
      showInfo:{
        services:[
        {
          name:"退貨補運費",
          icon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3654447071,260571119&fm=26&gp=0.jpg"
        },
        {
          name:"全國包郵",
          icon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3654447071,260571119&fm=26&gp=0.jpg"
        },
        {
          name:"7天無理由退款",
          icon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3654447071,260571119&fm=26&gp=0.jpg"
        },
        {
          name:"72小時發貨",
          icon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3654447071,260571119&fm=26&gp=0.jpg"
        }]
      },
      shopInfo:{
        shopLogo:"https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=397385748,3693940230&fm=26&gp=0.jpg",
        name:"好衣服店",
        cFans:"1000",
        cSells:"500",
        cGoods:"10",
        score:[
          {isBetter:false,name:"描述相符",score:4.64},
          {isBetter:true,name:"價格合理",score:5},
          {isBetter:false,name:"質量滿意",score:4.62}
        ]
      }
    }
}