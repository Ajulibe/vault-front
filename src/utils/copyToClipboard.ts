export const copyToClipboard = async (text: string, cb?: () => void): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text)
    if (cb) cb()
  } catch (err) {
    console.error('Could not copy text: ', err)
    throw err
  }
}
