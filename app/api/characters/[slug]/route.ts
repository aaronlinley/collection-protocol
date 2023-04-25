import { ModelType } from "@/app/_types/model";
import { getAllJsonFromDataDirectory } from "@/app/_helpers/json";

export async function generateStaticParams() {
  const characters: ModelType[] = getAllJsonFromDataDirectory('characters');

  return characters.map((character) => ({
    slug: character.slug
  }));
}

export async function GET(request: Request, { params }: {
  params: { slug: string }
}) {
  try {
    const character = require(`../../../_data/characters/${params.slug}`);
    return new Response(JSON.stringify(character));
  } catch (err) {
    return new Response("Resource not found");
  }
}
