import { serverEnv } from "@/lib/server/env";

// Shared handler for all HTTP methods
async function handle(req: Request, path: string[]) {
  const { API_HOST, API_KEY } = serverEnv;

  // Fail fast if API key is not configured
  if (!API_KEY || API_KEY === "REPLACE_ME") {
    return new Response(
      JSON.stringify({ error: "Server misconfigured: missing API_KEY" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // Build target URL
  const pathSegments = path || [];
  const pathname = pathSegments.join("/");
  const incomingUrl = new URL(req.url);
  const search = incomingUrl.search || "";

  const base = API_HOST.replace(/\/$/, "");
  const targetUrl = `${base}/${pathname}${search}`;

  // Copy headers, remove hop-by-hop headers, and inject x-api-key
  const headers = new Headers(req.headers);
  headers.delete("host");
  headers.delete("content-length");
  headers.set("x-api-key", API_KEY);

  // Prepare init
  const hasBody = !["GET", "HEAD"].includes(req.method);
  let forwardBody: BodyInit | undefined = undefined;
  if (hasBody) {
    // Read and forward the body to avoid Node fetch duplex issues
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      // Preserve exact string to avoid JSON double-encoding
      forwardBody = await req.text();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      forwardBody = await req.text();
    } else if (contentType.includes("multipart/form-data")) {
      // Forward as ArrayBuffer; upstream must handle boundaries present in headers
      forwardBody = await req.arrayBuffer();
    } else {
      forwardBody = await req.arrayBuffer();
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    body: forwardBody,
    redirect: "manual",
  };

  const upstreamRes = await fetch(targetUrl, init);

  if (upstreamRes.status === 403) {
    // Minimal server-side log to aid debugging (avoid leaking secrets)
    console.warn(`[proxy] Upstream returned 403 for ${pathname}`);
  }

  // Pass through status, headers, and body
  const resHeaders = new Headers(upstreamRes.headers);
  // Ensure CORS compatibility when called from the browser within the same origin
  resHeaders.set("Access-Control-Allow-Origin", "*");

  const stream = upstreamRes.body;
  return new Response(stream, {
    status: upstreamRes.status,
    statusText: upstreamRes.statusText,
    headers: resHeaders,
  });
}

export async function GET(
  req: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handle(req, path);
}
export async function POST(
  req: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handle(req, path);
}
export async function PUT(
  req: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handle(req, path);
}
export async function DELETE(
  req: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handle(req, path);
}
export async function PATCH(
  req: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handle(req, path);
}
export async function OPTIONS(
  req: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handle(req, path);
}
export async function HEAD(
  req: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handle(req, path);
}
