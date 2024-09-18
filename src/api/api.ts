const baseUrl = "http://localhost:3001";

export async function getAll(url: string, token?: string) {
  const response = await fetch(`${baseUrl}/${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
}
