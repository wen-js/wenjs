export default class Who {
  constructor(
    // 群友名称 别名
    readonly name:string | string[],
    // 群友简介
    readonly dec: string
  ) {}

  // 名称匹配规则
  pattern(input: string): boolean {
    const inputName = input.trim()
    if(Array.isArray(this.name)) {
      return this.name.some(name => name.trim() === inputName)
    }
    return inputName === this.name
  }
} 