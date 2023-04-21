import { getAllJsonFromDataDirectory } from "@/app/_helpers/json";

export async function GET() {
  const response = getAllJsonFromDataDirectory('terrain');
  return new Response(JSON.stringify(response));
}
