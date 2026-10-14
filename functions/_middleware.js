// Send visitors on the old free address (and www) to the real one, keeping the path.
const HOME = "jdlpalletrecycling.ca";
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "jdlpalletrecycling.pages.dev" || url.hostname === "www." + HOME) {
    url.hostname = HOME;
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
