import { Context, Schema} from 'koishi'

import { h } from "koishi"

export const name = 'capoo'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export const using = []

export async function apply(ctx){
  function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  
  
  ctx.command('capoo').action(async ({session},...args)=>{
    return (h('image',{ url: (['https://git.acwing.com/HuParry/capoo/-/raw/master/capoo%20(',mathRandomInt(1, 456),').gif'].join('')) }));
  
  });
  
}

export const Config: Schema<Config> = Schema.object({
  capoo: Schema.boolean().default(true).description('猫猫虫“咖波”表情包'),
  greyscale: Schema.boolean().default(true).description('koishi群友收集的黑白表情包'),
  kaguranana: Schema.boolean().default(true).description('神乐七奈“狗妈”表情包'),
  long: Schema.boolean().default(true).description('龙图表情包'),
  bishoujo: Schema.boolean().default(true).description('小老师表情包'),
  mygo: Schema.boolean().default(true).description('mygo表情包'),
}).description('选择是否加入随机表情库')