import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "info@cabianchini.com";
const FROM = "Ca' Bianchini <form@cabianchini.com>";
const LINE = "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";

function formatDate(iso: string): string {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  const months = ["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];
  return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
}

function buildBookingText(data: Record<string, string>): string {
  return [
    LINE,
    "RICHIESTA DI DISPONIBILITÀ",
    "Ca' Bianchini",
    LINE,
    "",
    `Nome:          ${data.name || "—"}`,
    `Email:         ${data.email || "—"}`,
    `Telefono:      ${data.phone || "—"}`,
    "",
    `Appartamento:  ${data.apartment || "—"}`,
    `Check-in:      ${formatDate(data.checkin)}`,
    `Check-out:     ${formatDate(data.checkout)}`,
    `Ospiti:        ${data.guests || "—"}`,
    "",
    "Messaggio:",
    data.message || "—",
    "",
    LINE,
    `Rispondi a questa email per contattare ${data.name} direttamente.`,
  ].join("\n");
}

function buildContactText(data: Record<string, string>): string {
  return [
    LINE,
    "MESSAGGIO DAL SITO",
    "Ca' Bianchini",
    LINE,
    "",
    `Nome:      ${data.name || "—"}`,
    `Email:     ${data.email || "—"}`,
    `Telefono:  ${data.phone || "—"}`,
    "",
    `Oggetto:   ${data.subject || "—"}`,
    "",
    "Messaggio:",
    data.message || "—",
    "",
    LINE,
    `Rispondi a questa email per contattare ${data.name} direttamente.`,
  ].join("\n");
}

function buildBookingSubject(data: Record<string, string>): string {
  const parts: string[] = [];
  if (data.apartment) parts.push(data.apartment);
  if (data.checkin && data.checkout) {
    parts.push(`${formatDate(data.checkin)}–${formatDate(data.checkout)}`);
  }
  if (data.guests) parts.push(`${data.guests} ospiti`);
  return `Nuova richiesta — ${parts.join(" · ")}`;
}

// Node.js runtime handler (required by Vercel)
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data: Record<string, string> = req.body;

  if (!data?.name || !data?.email) {
    return res.status(400).json({ error: "Nome e email sono obbligatori" });
  }

  const isBooking = data.type === "booking";

  const subject = isBooking
    ? buildBookingSubject(data)
    : `Nuovo messaggio — ${data.subject || "Contatto dal sito"}`;

  const text = isBooking ? buildBookingText(data) : buildContactText(data);

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Errore invio email" });
  }

  return res.status(200).json({ ok: true });
}
