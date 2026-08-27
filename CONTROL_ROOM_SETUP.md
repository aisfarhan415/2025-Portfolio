# Private AI Control Room

The `/control-room` route is protected with a server-side password and email
allowlist. It currently ships in a deliberate safe state: the UI is
available, but no browser request can execute Antigravity or shell commands.

## Vercel environment variables

Add the following values to the Production, Preview, and Development scopes as
needed:

- `AUTH_SECRET`: a strong random secret.
- `CONTROL_ROOM_PASSWORD`: a long private password for the single operator.
- `CONTROL_ROOM_ALLOWED_EMAIL`: `aisfarhan415@gmail.com`.
- `CONTROL_ROOM_ENABLED`: set to `true` to open the room; leave `false` to keep
  it locked.

The Auth.js configuration trusts the forwarded host because Vercel terminates
HTTPS in front of the Next.js application. Do not reuse this configuration on
an untrusted reverse proxy that allows clients to forge host headers.

## Security boundary

- The public repository never contains OAuth, Groq, or Antigravity secrets.
- The Vercel app authenticates the operator but does not receive shell access.
- Agent commands remain disabled until a separately deployed, signed gateway
  enforces workspace isolation, action allowlists, approval gates, and audit
  logs.
- Never expose a raw terminal or Antigravity process directly to the browser.
