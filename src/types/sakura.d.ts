interface SakuraSettings {
  className?: string
  fallSpeed?: number
  maxSize?: number
  minSize?: number
  delay?: number
  colors?: Array<{
    gradientColorStart: string
    gradientColorEnd: string
    gradientColorDegree: number
  }>
  lifeTime?: number
}

interface SakuraInstance {
  start(): void
  stop(immediate?: boolean): void
}

declare class Sakura {
  constructor(selector: string, settings?: SakuraSettings)
  start(): void
  stop(immediate?: boolean): void
}
