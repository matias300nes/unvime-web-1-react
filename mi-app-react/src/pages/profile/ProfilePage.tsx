import { useMemo } from "react";
import { currentUser } from "../../data/mockDashboard";
import { useMainAreaHeader } from "../../layouts/MainAreaHeaderContext";

export default function ProfilePage() {
  const headerConfig = useMemo(() => ({ title: "Perfil" }), []);
  useMainAreaHeader(headerConfig);

  return (
    <section className="mx-auto flex w-full max-w-[760px] flex-col gap-8">
      <div className="flex items-center gap-5 rounded-[22px] bg-[#2c2c2c] p-6 shadow-[0_10px_12px_rgba(0,0,0,0.25)]">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-2xl font-semibold text-[#222]">
          {currentUser.avatarInitials}
        </div>
        <div>
          <h2 className="text-2xl font-normal text-white">{currentUser.name}</h2>
          <p className="text-lg text-white/60">{currentUser.role}</p>
        </div>
      </div>
    </section>
  );
}
