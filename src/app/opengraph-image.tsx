import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "UK Visa Cost Calculator — Estimate Your Immigration Fees";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0d9488 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(99,102,241,0.25)",
            border: "1px solid rgba(99,102,241,0.4)",
            borderRadius: "100px",
            padding: "8px 18px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
          <span style={{ color: "#a5b4fc", fontSize: "18px", fontWeight: 600 }}>
            Free · Based on official GOV.UK data
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          UK Visa Cost Calculator
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.4,
            maxWidth: "780px",
            marginBottom: "48px",
          }}
        >
          Estimate visa fees, IHS, priority services &amp; dependant costs — instantly.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "Visa Types", value: "15+" },
            { label: "IHS Included", value: "✓" },
            { label: "Dependants", value: "✓" },
            { label: "Updated", value: "2025" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "16px 28px",
              }}
            >
              <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700 }}>
                {stat.value}
              </span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", marginTop: "4px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "rgba(255,255,255,0.35)",
            fontSize: "20px",
          }}
        >
          ukvisacalculator.co.uk
        </div>
      </div>
    ),
    { ...size }
  );
}
