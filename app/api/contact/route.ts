import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      registration,
      mileage,
      year,
      name,
      phone,
      email,
      condition,
      description,
      turnstileToken,
    } = data;

    // ------------------------------------
    // TURNSTILE VERIFIERING
    // ------------------------------------

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Turnstile-verifiering saknas." },
        { status: 400 }
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      console.error(
        "Turnstile verification failed:",
        turnstileResult["error-codes"]
      );

      return NextResponse.json(
        { error: "Turnstile-verifieringen misslyckades." },
        { status: 403 }
      );
    }

    // ------------------------------------
    // OBLIGATORISKA FÄLT
    // ------------------------------------

    if (
      !registration ||
      !mileage ||
      !year ||
      !name ||
      !phone ||
      !email ||
      !condition
    ) {
      return NextResponse.json(
        { error: "Alla obligatoriska fält måste fyllas i." },
        { status: 400 }
      );
    }

    // ------------------------------------
    // SKICKA MEJL VIA RESEND
    // ------------------------------------

    const { error } = await resend.emails.send({
      from: "Bilförfrågan <onboarding@resend.dev>",
      to: ["christofer.codes@gmail.com"],
      replyTo: email,
      subject: `Ny bilförfrågan – ${registration}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto;">
          <h2>Ny bilförfrågan</h2>

          <h3>Biluppgifter</h3>

          <p>
            <strong>Registreringsnummer:</strong><br>
            ${registration}
          </p>

          <p>
            <strong>Miltal:</strong><br>
            ${mileage}
          </p>

          <p>
            <strong>Årsmodell:</strong><br>
            ${year}
          </p>

          <p>
            <strong>Skick:</strong><br>
            ${condition}
          </p>

          <hr>

          <h3>Kontaktuppgifter</h3>

          <p>
            <strong>Namn:</strong><br>
            ${name}
          </p>

          <p>
            <strong>Telefon:</strong><br>
            ${phone}
          </p>

          <p>
            <strong>E-post:</strong><br>
            ${email}
          </p>

          ${
            description
              ? `
                <hr>

                <h3>Övrig information</h3>

                <p style="white-space: pre-line;">
                  ${description}
                </p>
              `
              : ""
          }

          <hr>

          <p style="color: #666; font-size: 13px;">
            Detta meddelande skickades från formuläret på hemsidan.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Kunde inte skicka meddelandet." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);

    return NextResponse.json(
      { error: "Ett oväntat fel uppstod." },
      { status: 500 }
    );
  }
}
