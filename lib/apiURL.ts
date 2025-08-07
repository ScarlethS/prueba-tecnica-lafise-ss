const API_BASE_URL =  "http://localhost:5566/";

export async function apiURL<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Error al consumir API");
    }

    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
