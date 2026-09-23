import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
    } = body;

    // -----------------------------
    // Kontrollera Turnstile
    // -----------------------------

    if (!turnstileToken) {
      return NextResponse.json(
        {
          error: "Turnstile-token saknas.",
        },
        { status: 400 }
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY || "",
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      console.error(
        "Turnstile verification failed:",
        turnstileResult
      );

      return NextResponse.json(
        {
          error: "Robotkontrollen kunde inte verifieras.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Skicka mail med Resend
    // -----------------------------

    const { error } = await resend.emails.send({
        from: "JB Fordonsbolaget <hej@jbfordonsbolaget.se>",
        to: ["hej@jbfordonsbolaget.se"],
        subject: `Ny bilförfrågan – ${registration || "Okänd bil"}`,
        replyTo: email,
        html: `
          <h2>Ny förfrågan om bil</h2>
      
          <h3>Bil</h3>
          <p>
            <strong>Registreringsnummer:</strong>
            ${registration || "-"}
          </p>
      
          <p>
            <strong>Miltal:</strong>
            ${mileage || "-"}
          </p>
      
          <p>
            <strong>Årsmodell:</strong>
            ${year || "-"}
          </p>
      
          <p>
            <strong>Skick:</strong>
            ${condition || "-"}
          </p>
      
          <h3>Kund</h3>
          <p>
            <strong>Namn:</strong>
            ${name || "-"}
          </p>
      
          <p>
            <strong>Telefon:</strong>
            ${phone || "-"}
          </p>
      
          <p>
            <strong>E-post:</strong>
            ${email || "-"}
          </p>
      
          <h3>Övrig information</h3>
          <p>
            ${description || "Ingen extra information angiven."}
          </p>
        `,
      });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Resend kunde inte skicka mejlet.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Ett oväntat fel uppstod.",
      },
      { status: 500 }
    );
  }
}