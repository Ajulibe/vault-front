export async function customFetch(url: string, errorMessage: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`${errorMessage}: ${response.status} ${response.statusText}`)
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
