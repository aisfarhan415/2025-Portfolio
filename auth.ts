import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const allowedEmail = (
  process.env.CONTROL_ROOM_ALLOWED_EMAIL ?? "aisfarhan415@gmail.com"
).toLowerCase();

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Control room password",
      credentials: { password: { label: "Password", type: "password" } },
      authorize(credentials) {
        const password = process.env.CONTROL_ROOM_PASSWORD;
        if (!password || credentials?.password !== password) return null;
        return { id: "control-room-owner", email: allowedEmail, name: "Ais Farhan" };
      },
    }),
  ],
  pages: {
    signIn: "/control-room/login",
  },
  callbacks: {
    signIn({ account, profile, user }) {
      if (account?.provider === "credentials") return true;
      return (profile?.email ?? user?.email)?.toLowerCase() === allowedEmail;
    },
    authorized({ auth: session, request }) {
      const { pathname } = request.nextUrl;

      if (!pathname.startsWith("/control-room")) return true;
      if (
        pathname === "/control-room/login" ||
        pathname === "/control-room/unauthorized"
      ) {
        return true;
      }

      return session?.user?.email?.toLowerCase() === allowedEmail;
    },
  },
});
