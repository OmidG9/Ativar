import { ImageResponse } from "next/og";

export const alt = "ATIVAR — Enterprise AI & FinTech Consulting";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#176B9B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, color: "#243746" }}>ATIVAR</span>
            <span style={{ fontSize: 16, letterSpacing: 4, color: "#607482" }}>
              ENTERPRISE AI &amp; FINTECH
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ width: 96, height: 4, background: "#12AFC1" }} />
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#243746",
              maxWidth: 900,
            }}
          >
            Enterprise AI and FinTech for better business performance
          </div>
          <div style={{ fontSize: 26, color: "#607482" }}>
            Consulting · Architecture · Enterprise AI · FinTech
          </div>
        </div>

        <div style={{ fontSize: 20, color: "#607482" }}>ativar.ir</div>
      </div>
    ),
    { ...size },
  );
}
