import {request} from './request';
export function getHomeMultidata(){
  return request({
    url:'/home/multidata',
    
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

export const pop = {
  page:1,
  list:[
    {
      show:{
        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631483557,3704325989&fm=26&gp=0.jpg"
      },
      title:"pop 標題 1",
      price:100,
      cfav:51
    },
    {
      show:{
        img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2410135129,3232375888&fm=11&gp=0.jpg"
      },
      title:"pop 標題 2",
      price:100,
      cfav:748641
    },
    {
      show:{
        img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1980311444,983901295&fm=15&gp=0.jpg"
      },
      title:"pop 標題 3",
      price:100,
      cfav:486
    },
    {
      show:{
        img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3891954326,102309258&fm=26&gp=0.jpg"
      },
      title:"pop 標題 4",
      price:100,
      cfav:10
    },
  ]
}

export const news = {
  page:1,
  list:[
    {
      show:{
        img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2038900212,2434906435&fm=15&gp=0.jpg"
      },
      title:"news 標題 1",
      price:100,
      cfav:51
    },
    {
      show:{
        img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2977407708,3699991785&fm=26&gp=0.jpg"
      },
      title:"news 標題 2",
      price:100,
      cfav:748641
    },
    {
      show:{
        img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3357046599,1412922959&fm=26&gp=0.jpg"
      },
      title:"news 標題 3",
      price:100,
      cfav:486
    },
    {
      show:{
        img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3768106475,343617952&fm=26&gp=0.jpg"
      },
      title:"news 標題 4",
      price:100,
      cfav:10
    },
  ]
}


export const sell = {
  page:1,
  list:[
    {
      show:{
        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563979682,404794730&fm=26&gp=0.jpg"
      },
      title:"sell 標題 1",
      price:100,
      cfav:51
    },
    {
      show:{
        img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3014840607,3100549496&fm=26&gp=0.jpg"
      },
      title:"sell 標題 2",
      price:100,
      cfav:748641
    },
    {
      show:{
        img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1976440423,2736293711&fm=26&gp=0.jpg"
      },
      title:"sell 標題 3",
      price:100,
      cfav:486
    },
    {
      show:{
        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669345204,738779644&fm=26&gp=0.jpg"
      },
      title:"sell 標題 4",
      price:100,
      cfav:10
    },
  ]
}