export const copyToClipboard = (text: string, cb?: () => void) => {
  navigator.clipboard.writeText(text).then(
    () => cb && cb(),
    (err) => console.error('Could not copy text: ', err)
  )
}
