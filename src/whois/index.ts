import Puma from './puma'
import Zzt from './003'

type QunYouList = [typeof Puma, typeof Zzt]
const qunYouList:QunYouList = [Puma, Zzt]

export default (who = ''): string => {

  const filter = qunYouList.filter(qunyou => qunyou.pattern(who))
  if(!filter[0]) {
    return '没有这个人，或者没有简介'
  }
  if(filter.length > 1) {
    const first = filter.pop()
    const rest = filter.map(i => i.name).join(',')
    return `${first.dec} → 你想查看的是ta们？${rest}`
  }
  return filter[0].dec || '没有这个人'
}
