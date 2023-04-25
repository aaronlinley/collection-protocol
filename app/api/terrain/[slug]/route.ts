import { ModelType } from "@/app/_types/model";
import { getAllJsonFromDataDirectory } from "@/app/_helpers/json";

export async function generateStaticParams() {
  const terrain: ModelType[] = getAllJsonFromDataDirectory('terrain');

  return terrain.map((character) => ({
    slug: character.slug
  }));
}

export async function GET(request: Request, { params }: {
  params: { slug: string }
}) {
  try {
    const character = require(`../../../_data/terrain/${params.slug}`);
    return new Response(JSON.stringify(character));
  } catch (err) {
    return new Response("Resource not found");
  }
}
