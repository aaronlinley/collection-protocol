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
