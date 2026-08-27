import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const allowedEmail = (
  process.env.CONTROL_ROOM_ALLOWED_EMAIL ?? "aisfarhan415@gmail.com"
).toLowerCase();

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [Google],
  pages: {
    signIn: "/control-room/login",
  },
  callbacks: {
    signIn({ profile }) {
      return profile?.email?.toLowerCase() === allowedEmail;
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
