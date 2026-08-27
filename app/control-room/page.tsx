import { redirect } from "next/navigation";
import { auth, signOut } from "../../auth";
import ControlRoomClient from "./ControlRoomClient";

const allowedEmail = (
  process.env.CONTROL_ROOM_ALLOWED_EMAIL ?? "aisfarhan415@gmail.com"
).toLowerCase();

export default async function ControlRoomPage() {
  const session = await auth();
  const email = session?.user?.email?.toLowerCase();

  if (!email) redirect("/control-room/login");
  if (email !== allowedEmail) redirect("/control-room/unauthorized");

  return (
    <>
      <ControlRoomClient email={email} />
      <form
        className="fixed bottom-5 right-5 z-50"
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/control-room/login" });
        }}
      >
        <button className="rounded-xl border border-white/10 bg-[#0b101b]/90 px-3 py-2 text-[10px] text-slate-500 backdrop-blur transition hover:border-white/20 hover:text-slate-300">
          Sign out
        </button>
      </form>
    </>
  );
}

