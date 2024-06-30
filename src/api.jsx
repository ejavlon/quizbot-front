const apiBaseUrl = import.meta.env.VITE_BACKEND_ULR;

export async function fetchData(endpoint) {
  const response = await fetch(`${apiBaseUrl}/${endpoint}`)
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`)
  }
  return response.json()
}


console.log("url = " + apiBaseUrl);