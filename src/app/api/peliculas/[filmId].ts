import axios from "axios";

export async function GET(id: string) {
  try {
    const url = `https://swapi.dev/api/films/${id}`;

    const infoUrl = await axios(url);

    return infoUrl.data;
  } catch (error: any) {
    console.log({ Message: error.message });
  }
}
