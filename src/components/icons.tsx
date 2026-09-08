import type { SVGProps } from "react";

/**
 * Biblioteca de ícones de linha usados no lugar do selo numerado em listas
 * que não representam sequência (categorias, diferenciais, benefícios).
 * Mesmo estilo em todos: viewBox 24x24, stroke atual (herda a cor do texto
 * do badge), sem preenchimento — consistente com o mockup aprovado
 * (categorias-mockup.html).
 */
function Icon({ children, ...props }: SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const House = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5h4V20h3.5a1 1 0 0 0 1-1v-9" />
  </Icon>
);

export const Car = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3.5 16.5 5 11a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 11l1.5 5.5" />
    <path d="M3.5 16.5h17v2.2a.8.8 0 0 1-.8.8h-1.6a.8.8 0 0 1-.8-.8v-1.2H7.7v1.2a.8.8 0 0 1-.8.8H5.3a.8.8 0 0 1-.8-.8z" />
    <circle cx="7.5" cy="16.5" r="1.6" />
    <circle cx="16.5" cy="16.5" r="1.6" />
  </Icon>
);

export const CarFleet = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M2.5 14.5 3.7 11a1.7 1.7 0 0 1 1.6-1.2h8.4A1.7 1.7 0 0 1 15.3 11l1.2 3.5" />
    <path d="M2.5 14.5h14.3v1.8a.7.7 0 0 1-.7.7H15a.7.7 0 0 1-.7-.7v-1H4.9v1a.7.7 0 0 1-.7.7H3.2a.7.7 0 0 1-.7-.7z" />
    <circle cx="6" cy="14.5" r="1.3" />
    <circle cx="13.3" cy="14.5" r="1.3" />
    <path d="M17.5 8.5h2.3a1.4 1.4 0 0 1 1.3 1l.9 2.8" />
    <path d="M17.5 12.3h4.3v1.4a.6.6 0 0 1-.6.6h-.7" />
  </Icon>
);

export const Motorcycle = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="5.5" cy="17" r="2.8" />
    <circle cx="18.5" cy="17" r="2.8" />
    <path d="m5.5 17 3-7h5l2 4.5h2.5" />
    <path d="M8.5 10h3.5l-1 3" />
    <path d="M15 17h-4" />
  </Icon>
);

export const Truck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="2.5" y="9" width="10" height="7.5" rx="0.6" />
    <path d="M12.5 11.5H17l3 3v2h-2" />
    <circle cx="6.5" cy="18" r="1.8" />
    <circle cx="16" cy="18" r="1.8" />
    <path d="M8.3 18h5.9" />
  </Icon>
);

export const Machine = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6M17.8 17.8l-1.6-1.6M7.8 7.8 6.2 6.2" />
  </Icon>
);

export const Plant = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 21c0-6 2-9 7-11-1 6-3 9-7 11Z" />
    <path d="M12 21c0-7-2.5-10-8-12 1 6.5 3.5 10 8 12Z" />
    <path d="M12 21v-6" />
  </Icon>
);

export const TrendingUp = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3.5 18.5h17" />
    <path d="M4.5 18v-3.5l4-3 3.5 2.5 5-5 3.5 3.5" />
    <path d="M16 6.5h3.5V10" />
  </Icon>
);

export const Sparkle = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M14.5 6.5a3 3 0 0 1-4.1 3.8L5 15.7a1.4 1.4 0 0 0 2 2l5.4-5.4a3 3 0 0 1 3.8-4.1l-2 2-1.4-1.4z" />
  </Icon>
);

export const PercentOff = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="7.5" cy="7.5" r="2.3" />
    <circle cx="16.5" cy="16.5" r="2.3" />
    <path d="M17.5 6.5 6.5 17.5" />
  </Icon>
);

export const CalendarDown = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="1.6" />
    <path d="M3.5 9.5h17" />
    <path d="M8 3v4M16 3v4" />
    <path d="M12 12v5.5M9.5 15l2.5 2.5 2.5-2.5" />
  </Icon>
);

export const HandCoin = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M12 6.7v2.6M10.7 8h2.6" />
    <path d="M3.5 19.5c1.4-2.6 3.6-4 6-4h3.6c1 0 2 .3 2.9.9l4.5 3" />
    <path d="M9.5 15.5h4a1.4 1.4 0 0 1 0 2.8h-3" />
  </Icon>
);

export const Headset = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4.5 15v-3a7.5 7.5 0 0 1 15 0v3" />
    <rect x="3" y="14" width="3.5" height="5.5" rx="1.2" />
    <rect x="17.5" y="14" width="3.5" height="5.5" rx="1.2" />
    <path d="M19.5 19.5v.5a2.5 2.5 0 0 1-2.5 2.5h-3" />
  </Icon>
);

export const Tractor = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="6.5" cy="17" r="3" />
    <circle cx="17" cy="17" r="2.2" />
    <path d="M9.3 17H15" />
    <path d="M6 12.5V6h6l3 5" />
    <path d="M15 11h4.5l1 3v3" />
    <path d="M9 6H5.5" />
  </Icon>
);

export const Bike = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="5.8" cy="16.5" r="3" />
    <circle cx="18.2" cy="16.5" r="3" />
    <path d="m5.8 16.5 4-8h5l3.4 8" />
    <path d="M9.8 8.5h3.5" />
    <path d="m9.8 16.5 3-6.5" />
  </Icon>
);

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="7" y="2.5" width="10" height="19" rx="2" />
    <path d="M10.3 18.5h3.4" />
  </Icon>
);

export const Building = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="5" y="3.5" width="14" height="17" rx="1" />
    <path d="M8.5 7.5h1.5M14 7.5h1.5M8.5 11.5h1.5M14 11.5h1.5M8.5 15.5h1.5M14 15.5h1.5" />
    <path d="M10.5 20.5V17h3v3.5" />
  </Icon>
);

export const Briefcase = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3" y="8" width="18" height="11.5" rx="1.6" />
    <path d="M8.5 8V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v2" />
    <path d="M3 13h18" />
  </Icon>
);

export const Camera = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3.5 8.5a1.5 1.5 0 0 1 1.5-1.5h2l1.2-1.8h7.6L17 7h2a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z" />
    <circle cx="12" cy="13" r="3.4" />
  </Icon>
);

export const Laptop = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="4.5" y="4.5" width="15" height="10" rx="1.2" />
    <path d="M2.5 18.5h19l-1.5-3h-16z" />
  </Icon>
);

export const GameController = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M6.5 8.5h11a3.5 3.5 0 0 1 3.4 4.3l-.6 2.6a2.4 2.4 0 0 1-4.2 1l-1.3-1.6H9.2L7.9 16.4a2.4 2.4 0 0 1-4.2-1l-.6-2.6a3.5 3.5 0 0 1 3.4-4.3Z" />
    <path d="M8 11v2.5M6.7 12.2h2.6" />
    <circle cx="16" cy="11.5" r=".9" />
    <circle cx="18" cy="13.5" r=".9" />
  </Icon>
);

export const Devices = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3" y="4.5" width="12" height="8.5" rx="1" />
    <path d="M6 16.5h6" />
    <rect x="16.5" y="8" width="5" height="9" rx="1" />
  </Icon>
);

export const PartyCalendar = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="1.6" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path d="M8.5 14.5 12 12l3.5 2.5-1.3 4h-4.4z" />
  </Icon>
);

export const Scale = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3v18M8 21h8" />
    <path d="M5 6h14" />
    <path d="M5 6 2.5 11a2.5 2.5 0 0 0 5 0Z" />
    <path d="M19 6l-2.5 5a2.5 2.5 0 0 0 5 0Z" />
  </Icon>
);

export const Package = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3.5 20 8v8l-8 4.5L4 16V8Z" />
    <path d="M4 8l8 4.5L20 8M12 12.5V21" />
  </Icon>
);

export const Plane = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 2.5c.9 0 1.5.9 1.5 2v5l6 3.5v2l-6-1.7V18l2 1.5v1.6L12 20l-3.5 1.1v-1.6L10.5 18v-4.7L4.5 15v-2l6-3.5v-5c0-1.1.6-2 1.5-2Z" />
  </Icon>
);

export const Heart = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 20.2s-7.5-4.6-9.7-9.3C.7 7.5 2.6 4 6 4c2.1 0 3.6 1.2 6 3.6C14.4 5.2 15.9 4 18 4c3.4 0 5.3 3.5 3.7 6.9-2.2 4.7-9.7 9.3-9.7 9.3Z" />
  </Icon>
);

export const Gift = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3.5" y="9" width="17" height="4" rx="0.6" />
    <rect x="4.5" y="13" width="15" height="8" rx="0.6" />
    <path d="M12 9v12" />
    <path d="M12 9C9.5 9 8.5 7.5 8.5 6.3A2.3 2.3 0 0 1 12 4.2C12 6.5 12 9 12 9Z" />
    <path d="M12 9c2.5 0 3.5-1.5 3.5-2.7A2.3 2.3 0 0 0 12 4.2C12 6.5 12 9 12 9Z" />
  </Icon>
);

export const Users = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="8.5" cy="8" r="3" />
    <path d="M2.8 19.5c.9-3.5 3-5.3 5.7-5.3s4.8 1.8 5.7 5.3" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15.8 14.6c2.3.2 3.9 1.9 4.7 4.9" />
  </Icon>
);

export const BuildingUsers = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 20.5V5l6.5-2.5v18" />
    <path d="M10.5 8.5h6.5v12h-6.5" />
    <path d="M13 12h2M13 15h2" />
    <path d="M6 8h2M6 12h2M6 16h2" />
  </Icon>
);

export const ShieldUsers = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 2.8 19.5 6v5.5c0 5-3.4 8-7.5 9.7-4.1-1.7-7.5-4.7-7.5-9.7V6Z" />
    <circle cx="12" cy="10" r="2" />
    <path d="M8.8 15.5c.6-1.7 1.7-2.5 3.2-2.5s2.6.8 3.2 2.5" />
  </Icon>
);

export const Backpack = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
    <path d="M6.5 10a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3Z" />
    <path d="M9 13.5h6v4H9z" />
    <path d="M8 10.2h1.4M14.6 10.2H16" />
  </Icon>
);

export const ClockShort = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2.8 2" />
    <path d="M9 2h6" />
  </Icon>
);

export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z" />
  </Icon>
);

export const Handshake = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M2.5 12.5 6 9l3 2 2-1.7 6 4.7" />
    <path d="M9 11 6 15.5l1.8 1.6a1.8 1.8 0 0 0 2.5-.2l.2-.2a1.8 1.8 0 0 0 2.4.1l.4-.3a1.8 1.8 0 0 0 2.4 0l.4-.4a1.7 1.7 0 0 0 .3-2.1L18.5 9l3-1.5" />
    <path d="M11 8.6 8.5 6.2a1.8 1.8 0 0 0-2.4-.1L4.5 7.5" />
  </Icon>
);

export const BankShield = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 2.5 20 6v10c0 3.5-3 5.7-8 8-5-2.3-8-4.5-8-8V6Z" />
    <path d="M9 12.5l2 2 4-4.3" />
  </Icon>
);

export const PiggyBank = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 13.5a6 6 0 0 1 6-6h4.5a4 4 0 0 1 3.8 2.7l1.7.6v3l-2 .7-.9 2.5H15l-.6-1.7H9.2L8.5 17H6l-.6-2A5.8 5.8 0 0 1 4 13.5Z" />
    <circle cx="15.5" cy="10.5" r=".8" />
    <path d="M8 7.5 9 5M12.5 7.2l.6-2.4" />
    <path d="M4 13.5H2.3" />
  </Icon>
);

export const ShieldCheck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 2.8 19.5 6v5.5c0 5-3.4 8-7.5 9.7-4.1-1.7-7.5-4.7-7.5-9.7V6Z" />
    <path d="M8.7 11.7l2.2 2.2 4.4-4.6" />
  </Icon>
);

export const DocumentCheck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M6.5 2.5h8l4 4v14a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z" />
    <path d="M14 2.5V7h4.5" />
    <path d="M8.5 14.5l2 2 4-4.3" />
  </Icon>
);

export const LockDocument = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M6.5 2.5h8l4 4v14a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z" />
    <path d="M14 2.5V7h4.5" />
    <rect x="8.3" y="13" width="7.4" height="5.5" rx="1" />
    <path d="M9.7 13v-1.6a2.3 2.3 0 0 1 4.6 0V13" />
  </Icon>
);

export const Key = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="7.5" cy="14.5" r="3.7" />
    <path d="M10.5 12 19 3.5M16.5 6.5l2 2M13.5 9.5l2 2" />
  </Icon>
);

export const Receipt = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M5.5 2.5h13v19l-2.3-1.5-2.2 1.5-2.2-1.5L9.6 21l-2.2-1.5L5 21Z" />
    <path d="M8.5 7.5h7M8.5 11h7M8.5 14.5h4" />
  </Icon>
);

export const HospitalCross = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="4" y="4" width="16" height="17" rx="1.4" />
    <path d="M12 8.5v6.5M8.7 11.8h6.6" />
    <path d="M8 21v-3.5h8V21" />
  </Icon>
);

export const PercentShield = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 2.8 19.5 6v5.5c0 5-3.4 8-7.5 9.7-4.1-1.7-7.5-4.7-7.5-9.7V6Z" />
    <path d="M9.3 9.3l5.4 5.4" />
    <circle cx="9.7" cy="9.7" r=".9" />
    <circle cx="14.3" cy="14.3" r=".9" />
  </Icon>
);

export const HeartHand = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 13.3s-3.7-2.3-4.9-4.6c-.9-1.8.2-3.7 2-3.7 1 0 1.8.6 2.9 1.8 1.1-1.2 1.9-1.8 2.9-1.8 1.8 0 2.9 1.9 2 3.7-1.2 2.3-4.9 4.6-4.9 4.6Z" />
    <path d="M3.5 19.5c1.2-2.4 3-3.7 5.3-3.7h3.7c.9 0 1.8.3 2.6.8l3.9 2.6" />
    <path d="M8.7 15.8h3.6a1.3 1.3 0 0 1 0 2.5h-2.6" />
  </Icon>
);

export const Star = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3.2 14.6 9l6.4.6-4.8 4.2 1.4 6.2L12 16.9 6.4 20l1.4-6.2L3 9.6 9.4 9Z" />
  </Icon>
);

export const MapPin = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 21.5s7-6.4 7-12a7 7 0 0 0-14 0c0 5.6 7 12 7 12Z" />
    <circle cx="12" cy="9.5" r="2.6" />
  </Icon>
);

export const ClockCheck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="11.5" cy="12.5" r="8" />
    <path d="M11.5 8v4.5l2.2 1.8" />
    <path d="M15.5 3.5 17 5" />
  </Icon>
);

export const VideoCall = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="2.5" y="6" width="13" height="12" rx="1.6" />
    <path d="M15.5 10.5 21 8v8l-5.5-2.5Z" />
    <circle cx="9" cy="11" r="1.8" />
    <path d="M5.5 15.5c.6-1.7 1.8-2.5 3.5-2.5s2.9.8 3.5 2.5" />
  </Icon>
);

export const Flame = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 21.5c-4 0-6.5-2.6-6.5-6 0-3 2-4.7 2.6-7.6 1.4 1 2 2.3 2.2 3.3.4-2.4-.3-5 1.4-8.7 2.7 2 4.8 5.3 4.8 8.7 1 0 1.7-.8 1.9-1.9 1 1.4 1.6 3.2 1.6 5.2 0 3.7-2.9 7-8 7Z" />
  </Icon>
);

export const Coffee = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4.5 9h12v6a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 4.5 15Z" />
    <path d="M16.5 10.5H18a2.5 2.5 0 0 1 0 5h-1.5" />
    <path d="M7.5 5.5c-.6.6-.6 1.2 0 1.8M11 5.5c-.6.6-.6 1.2 0 1.8" />
  </Icon>
);

export const Clock24 = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12.5" r="8.5" />
    <path d="M12 8v5l3 2" />
    <text x="12" y="5.5" textAnchor="middle" fontSize="5" fill="currentColor" stroke="none">
      24h
    </text>
  </Icon>
);

export const Dove = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 20c-3-.2-6-2-7-5.3 1.6.6 2.7.5 3.6-.2-2-1-3.2-2.6-3.4-5.2 1.8 1.4 3.3 1.8 4.6 1.4-.6-1.6-.3-3.2 1-4.7.2 1.7 1 2.8 2.2 3.4 1.6-1.4 3.6-1.9 6-1.4-1.4.9-2.1 1.9-2.2 3 1.6-.2 2.9.1 4.2 1.3-1.8.3-3 1-3.7 2.1 1.3.6 2 1.6 2.2 2.9-1.6-.8-2.9-.9-4-.3.4 1.6-.1 2.9-1.5 3.9-.2-1.3-.7-2.1-1.5-2.5-.2 1.2-.8 2.1-1.5 2.6Z" />
  </Icon>
);

export const Tag = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12.5 3.5H19a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-.44 1.06l-8 8a1.5 1.5 0 0 1-2.12 0l-6.5-6.5a1.5 1.5 0 0 1 0-2.12l8-8a1.5 1.5 0 0 1 1.06-.44Z" />
    <circle cx="15.8" cy="8.2" r="1.3" />
  </Icon>
);

export const ShoppingBag = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M5.5 8.5h13l1 12h-15Z" />
    <path d="M8.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5" />
  </Icon>
);

export const Compass = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-4.5 1.5L9 15l4.5-1.5Z" />
  </Icon>
);

export const ChatBubble = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3.5 5.5h17v11h-9L6 20v-3.5h-2.5Z" />
    <path d="M7.5 9.5h9M7.5 12.5h6" />
  </Icon>
);

export const Eye = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

export const CompareArrows = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M5 7h13.5M15.5 3.5 19 7l-3.5 3.5" />
    <path d="M19 17H5.5M8.5 13.5 5 17l3.5 3.5" />
  </Icon>
);

export const UserCheck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="9.5" cy="8" r="3.3" />
    <path d="M3.5 19.5c.9-3.5 3-5.3 6-5.3s5.1 1.8 6 5.3" />
    <path d="M16.5 12.5l1.6 1.6 3-3.2" />
  </Icon>
);

export const Pill = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3.3" y="10.2" width="17.4" height="7.6" rx="3.8" transform="rotate(-40 12 14)" />
    <path d="m9.5 10.5 4 4" />
  </Icon>
);

export const ClipboardCheck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="5" y="4" width="14" height="17" rx="1.4" />
    <rect x="9" y="2.3" width="6" height="3.4" rx="1" />
    <path d="M8.5 13l2.2 2.2 4.3-4.5" />
  </Icon>
);

export const Ribbon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4.3" />
    <path d="M9 11.5 6.5 21l5.5-3 5.5 3-2.5-9.5" />
  </Icon>
);

export const Tooth = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3.5c-2.6 0-3 1.4-4.6 1.4C5.6 4.9 4 6.6 4 9.3c0 2 .8 3 1.3 4.8.5 1.8.6 5.4 2.2 5.4 1.5 0 1.3-3.6 2.3-5 .5-.7 1.2-.7 1.7 0 1 1.4.8 5 2.3 5 1.6 0 1.7-3.6 2.2-5.4.5-1.8 1.3-2.8 1.3-4.8 0-2.7-1.6-4.4-3.4-4.4-1.6 0-2-1.4-4.6-1.4Z" />
  </Icon>
);

export const Wrench = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M14.5 3.5a5 5 0 0 0-6.4 6.1L3.5 14.2a2 2 0 0 0 2.8 2.8l4.6-4.6a5 5 0 0 0 6.1-6.4l-3 3-2.3-.7-.7-2.3Z" />
  </Icon>
);

export const Brain = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M9.5 4.2A2.8 2.8 0 0 0 6.7 7v.3A3 3 0 0 0 5 10a3 3 0 0 0 1 5.5c-.1 1.8 1.3 3.3 3.1 3.3.4 0 .8-.1 1.1-.2M9.5 4.2c.7 0 1.4.3 1.9.8M9.5 4.2v14.4" />
    <path d="M14.5 4.2A2.8 2.8 0 0 1 17.3 7v.3A3 3 0 0 1 19 10a3 3 0 0 1-1 5.5c.1 1.8-1.3 3.3-3.1 3.3-.4 0-.8-.1-1.1-.2M14.5 4.2c-.7 0-1.4.3-1.9.8M14.5 4.2v14.4" />
  </Icon>
);

export const PawPrint = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="7" cy="8.5" r="1.7" />
    <circle cx="12" cy="6.5" r="1.7" />
    <circle cx="17" cy="8.5" r="1.7" />
    <path d="M12 11.5c-3 0-5 2-5 4.3 0 1.8 1.4 3 3 3 .9 0 1.4-.4 2-.4s1.1.4 2 .4c1.6 0 3-1.2 3-3 0-2.3-2-4.3-5-4.3Z" />
  </Icon>
);

export const HouseKey = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5h4V20h3.5a1 1 0 0 0 1-1v-9" />
    <circle cx="12" cy="14.5" r="1.4" />
    <path d="M12 15.9V18" />
  </Icon>
);
