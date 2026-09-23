"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  ShieldCheck,
  Star,
} from "lucide-react";
import styles from "./SellCar.module.css";

type FormData = {
  registration: string;
  mileage: string;
  year: string;
  name: string;
  phone: string;
  email: string;
  condition: string;
  description: string;
};

const initialFormData: FormData = {
  registration: "",
  mileage: "",
  year: "",
  name: "",
  phone: "",
  email: "",
  condition: "",
  description: "",
};

export default function SellCar() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [reviewVisible, setReviewVisible] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);

  /* -------------------------------------------------
     FORM SECTION ANIMATION
  ------------------------------------------------- */

  useEffect(() => {
    const section = document.querySelector(`#salj-bil`);

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------
     GOOGLE REVIEWS SCROLL ANIMATION
  ------------------------------------------------- */

  useEffect(() => {
    const section = document.querySelector(
      `.${styles.reviewSection}`
    );

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReviewVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------
     GOOGLE RATING COUNT-UP
  ------------------------------------------------- */

  useEffect(() => {
    if (!reviewVisible) return;

    const target = 4.8;
    const duration = 3400;

    let animationFrame: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      const value = target * eased;

      setRatingValue(Number(value.toFixed(1)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [reviewVisible]);

  /* -------------------------------------------------
     FORM HANDLERS
  ------------------------------------------------- */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert("Bekräfta att du inte är en robot.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.details
            ? `${result.error}: ${result.details}`
            : result.error || "Kunde inte skicka formuläret."
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Formulärfel:", error);

      alert(
        "Något gick fel när formuläret skulle skickas. Försök igen."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
    setTurnstileToken(null);
  };

  return (
    <main className={styles.page}>
      {/* =================================================
          HERO / FORM
      ================================================= */}

      <section
        id="salj-bil"
        className={`${styles.formSection} ${isVisible ? styles.visible : ""
          }`}
      >
        <div className={styles.formContainer}>
          <div className={styles.formIntro}>
            <span className={styles.eyebrow}>
              SÄLJ DIN BIL
            </span>

            <h1>
              Dags att sälja?
              <br />
              <em>Vi gör det enkelt.</em>
            </h1>

            <p>
              Fyll i uppgifterna nedan så återkommer vi med
              en första värdering av din bil.
            </p>

            <div className={styles.trustPoints}>
              <div className={styles.trustPoint}>
                <ShieldCheck size={20} strokeWidth={1.5} />

                <div>
                  <strong>Trygg process</strong>
                  <span>Hela vägen till affär</span>
                </div>
              </div>

              <div className={styles.trustPoint}>
                <Clock3 size={20} strokeWidth={1.5} />

                <div>
                  <strong>Snabb återkoppling</strong>
                  <span>Vi hör av oss så snart vi kan</span>
                </div>
              </div>
            </div>

            <div className={styles.directContact}>
              <span className={styles.directContactLabel}>
                ELLER KONTAKTA OSS DIREKT
              </span>

              <div className={styles.directContactLinks}>
                <a href="tel:+46701234567">
                  <span>Ring oss</span>
                  <strong>070-123 45 67</strong>
                </a>

                <a href="mailto:hej@jbfordonsbolaget.se">
                  <span>Maila oss</span>
                  <strong>hej@jbfordonsbolaget.se</strong>
                </a>
              </div>
            </div>
          </div>



          <div className={styles.formWrapper}>
            {!submitted ? (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.formGrid}>
                  <div className={styles.field}>
                    <label htmlFor="registration">
                      Registreringsnummer
                    </label>

                    <input
                      id="registration"
                      name="registration"
                      type="text"
                      placeholder="ABC 123"
                      value={formData.registration}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="mileage">
                      Miltal
                    </label>

                    <input
                      id="mileage"
                      name="mileage"
                      type="text"
                      placeholder="12 500 mil"
                      value={formData.mileage}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.field}>
                    <label htmlFor="year">
                      Årsmodell
                    </label>

                    <input
                      id="year"
                      name="year"
                      type="number"
                      placeholder="2020"
                      value={formData.year}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="condition">
                      Skick
                    </label>

                    <div className={styles.selectWrapper}>
                      <select
                        id="condition"
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Välj skick
                        </option>

                        <option value="mycket-bra">
                          Mycket bra
                        </option>

                        <option value="bra">
                          Bra
                        </option>

                        <option value="normalt">
                          Normalt
                        </option>

                        <option value="slitage">
                          Slitage
                        </option>
                      </select>

                      <ChevronDown
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="name">
                    Namn
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ditt namn"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.field}>
                    <label htmlFor="phone">
                      Telefon
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="070-123 45 67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">
                      E-post
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="din@email.se"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="description">
                    Berätta gärna mer
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Extrautrustning, servicehistorik eller annat vi bör veta..."
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken(null)}
                  onError={() => setTurnstileToken(null)}
                />

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}>
                  <span>
                    {isSubmitting
                      ? "Skickar..."
                      : "Värdera min bil"}
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                  />
                </button>

                <p className={styles.formNote}>
                  Genom att skicka formuläret godkänner du
                  att vi kontaktar dig angående din bil.
                </p>
              </form>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <Check size={28} strokeWidth={1.5} />
                </div>

                <span className={styles.eyebrow}>
                  TACK!
                </span>

                <h2>
                  Vi har fått
                  <br />
                  <em>din förfrågan.</em>
                </h2>

                <p>
                  Vi går igenom informationen och återkommer
                  så snart som möjligt.
                </p>

                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={handleReset}
                >
                  Skicka en ny förfrågan
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =================================================
          GOOGLE REVIEWS
      ================================================= */}

      <section
        className={`${styles.reviewSection} ${reviewVisible ? styles.reviewVisible : ""
          }`}
      >
        <div className={styles.reviewContainer}>
          <div className={styles.reviewTop}>
            <div className={styles.googleMark}>
              <img
                src="/logos/google.svg"
                alt="Google"
              />
            </div>

            <div className={styles.reviewHeading}>
              <span className={styles.reviewEyebrow}>
                GOOGLE REVIEWS
              </span>

              <h2>
                Ett betyg som
                <br />
                <em>talar för sig själv.</em>
              </h2>
            </div>
          </div>

          <div className={styles.reviewBottom}>
            <div className={styles.ratingBlock}>
              <span className={styles.rating}>
                {ratingValue.toFixed(1)}
              </span>

              <div className={styles.ratingMeta}>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="#f2b600"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <span className={styles.ratingScale}>
                  / 5
                </span>
              </div>
            </div>

            <div className={styles.reviewInfo}>
              <p>
                Våra kunder uppskattar en enkel process,
                tydlig kommunikation och en trygg bilaffär.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}