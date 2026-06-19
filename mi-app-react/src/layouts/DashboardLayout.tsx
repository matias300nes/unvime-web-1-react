import { useMemo, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { currentUser } from "../data/mockDashboard";
import {
  MainAreaHeaderContext,
  type MainAreaHeaderConfig,
} from "./MainAreaHeaderContext";

type IconName = "home" | "box" | "store" | "user" | "menu" | "close";

const navItems = [
  { label: "Inicio", path: "/", icon: "home" },
  { label: "Productos", path: "/products", icon: "box" },
  { label: "Tiendas", path: "/stores", icon: "store" },
] satisfies Array<{ label: string; path: string; icon: IconName }>;

function getDefaultHeader(pathname: string): MainAreaHeaderConfig {
  if (pathname === "/") {
    return { title: `Hola ${currentUser.name}!` };
  }

  if (pathname === "/products") {
    return { title: "Productos" };
  }

  if (pathname === "/products/new") {
    return { title: "Agregar Producto" };
  }

  if (pathname.startsWith("/products/")) {
    return { title: "Detalle de producto" };
  }

  if (pathname === "/profile") {
    return { title: "Perfil" };
  }

  return { title: "Pagina no encontrada", eyebrow: "Error 404" };
}

function AppIcon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  if (name === "home") {
    return (
      <svg {...common}>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  if (name === "box") {
    return (
      <svg {...common}>
        <path d="m21 8-9-5-9 5 9 5 9-5Z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </svg>
    );
  }

  if (name === "store") {
    return (
      <svg {...common}>
        <path d="M4 10h16" />
        <path d="M5 10 6 4h12l1 6" />
        <path d="M6 10v10h12V10" />
        <path d="M9 20v-5h6v5" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg {...common}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function Brand() {
  return (
    <Link to="/" className="text-white" aria-label="Dashboard inicio">
      <span className="text-4xl font-semibold leading-none tracking-normal">Dashboard</span>
    </Link>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-[#222] px-6 py-7 text-white">
      <Brand />

      <nav className="mt-12 flex flex-col gap-2" aria-label="Menu principal">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={({ isActive }) =>
              [
                "flex h-11 items-center gap-5 rounded-lg px-7 text-lg transition-colors",
                isActive
                  ? "bg-[#606060] text-white"
                  : "text-white/90 hover:bg-[#343434] hover:text-white",
              ].join(" ")
            }
          >
            <AppIcon name={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <NavLink
        to="/profile"
        onClick={onNavigate}
        className={({ isActive }) =>
          [
            "mt-auto flex h-12 items-center gap-3 rounded-full px-2 text-lg transition-colors",
            isActive ? "bg-[#667173]" : "bg-[#566163] hover:bg-[#667173]",
          ].join(" ")
        }
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-semibold text-[#222]">
          {currentUser.avatarInitials}
        </span>
        <span>{currentUser.name}</span>
      </NavLink>
    </div>
  );
}

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [customHeader, setCustomHeader] = useState<{
    config: MainAreaHeaderConfig;
    pathname: string;
  } | null>(null);
  const headerConfig =
    customHeader?.pathname === location.pathname
      ? customHeader.config
      : getDefaultHeader(location.pathname);
  const headerContextValue = useMemo(
    () => ({
      setHeaderConfig: (config: MainAreaHeaderConfig) => {
        setCustomHeader({ config, pathname: location.pathname });
      },
    }),
    [location.pathname],
  );

  return (
    <MainAreaHeaderContext.Provider value={headerContextValue}>
      <div className="min-h-svh bg-[#222] text-white">
        <div className="flex min-h-svh">
          <aside className="hidden w-[296px] shrink-0 min-[1025px]:block">
            <SidebarContent />
          </aside>

          <main className="flex h-svh min-h-svh flex-1 flex-col overflow-hidden bg-[#222]">
            <header className="flex h-[72px] shrink-0 items-center border-b border-white/5 px-6 max-[1024px]:px-5">
              <button
                type="button"
                aria-label="Abrir menu"
                onClick={() => setIsSidebarOpen(true)}
                className="mr-4 grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#303030] text-white shadow-lg min-[1025px]:hidden"
              >
                <AppIcon name="menu" />
              </button>

              <div className="min-w-0">
                {headerConfig.eyebrow ? (
                  <p className="text-sm font-semibold text-[#ff4d55]">{headerConfig.eyebrow}</p>
                ) : null}
                <h1 className="truncate text-4xl font-normal leading-tight text-white max-[640px]:text-2xl">
                  {headerConfig.title}
                </h1>
              </div>

              {headerConfig.actions ? (
                <div className="ml-auto flex shrink-0 items-center gap-4">
                  {headerConfig.actions}
                </div>
              ) : null}
            </header>

            <section className="min-h-0 flex-1 overflow-y-auto px-6 py-8 max-[1024px]:px-5">
              <Outlet />
            </section>
          </main>
        </div>

        {isSidebarOpen ? (
          <div className="fixed inset-0 z-40 min-[1025px]:hidden">
            <button
              type="button"
              aria-label="Cerrar menu"
              className="absolute inset-0 bg-black/55"
              onClick={() => setIsSidebarOpen(false)}
            />
            <aside className="relative h-full w-[296px] max-w-[82vw] shadow-2xl">
              <button
                type="button"
                aria-label="Cerrar menu"
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-lg bg-[#303030] text-white"
              >
                <AppIcon name="close" />
              </button>
              <SidebarContent onNavigate={() => setIsSidebarOpen(false)} />
            </aside>
          </div>
        ) : null}
      </div>
    </MainAreaHeaderContext.Provider>
  );
}

export { AppIcon };
