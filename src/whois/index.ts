// import Puma from './puma'
// import Zzt from './003'

// type QunYouList = [typeof Puma, typeof Zzt]
// const qunYouList:QunYouList = [Puma, Zzt]

interface Qunyou {
  name: string | string[]
  desc: string
}

export function getQuyouData(): Promise<Qunyou[]> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const dataScript = document.createElement('script')
    script.innerText = `
    function getQunYou(qunyou) {
      window.qunyouRes = qunyou
    }
    `
    dataScript.src = 'https://cdn.jsdelivr.net/gh/wen-js/wen-data@main/qunyou.js'
    dataScript.onload = () => {
      document.body.removeChild(script)
      document.body.removeChild(dataScript)
      resolve(window['qunyouRes'])
    }
    dataScript.onerror = () => {
      reject(new Error('群友数据不见了！'))
    }
    document.body.appendChild(script)
    document.body.appendChild(dataScript)
  })
}

export default async (who = ''): Promise<string> => {
  const qunYouList = await getQuyouData()
  const filter = qunYouList.filter(qunyou => {
    const inputName = who.trim()
    if(Array.isArray(qunyou.name)) {
      return qunyou.name.some(name => name.trim() === inputName)
    }
    return inputName === qunyou.name
  })
  // const filter = qunYouList.filter(qunyou => qunyou.pattern(who))
  if(!filter[0]) {
    return '没有这个人，或者没有简介'
  }
  if(filter.length > 1) {
    const first = filter.pop()
    const rest = filter.map(i => i.name).join(',')
    return `${first.desc} → 你想查看的是ta们？${rest}`
  }
  return filter[0].desc || '没有这个人'
}
