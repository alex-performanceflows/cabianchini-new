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

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const { type, name, email } = data;
  if (!name || !email) {
    return new Response(JSON.stringify({ error: "Nome e email sono obbligatori" }), { status: 400 });
  }

  const isBooking = type === "booking";

  const subject = isBooking
    ? buildBookingSubject(data)
    : `Nuovo messaggio — ${data.subject || "Contatto dal sito"}`;

  const text = isBooking ? buildBookingText(data) : buildContactText(data);

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: "Errore invio email" }), { status: 500 });
  }
}
