type DailyDownloads = {
  day: string,
  downloads: number
}

declare type PackageStats = {
  name: string,
  downloads: Array<DailyDownloads>
}
