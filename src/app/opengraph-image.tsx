import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/content";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const [headshotData, interBold, interMedium] = await Promise.all([
    readFile(join(process.cwd(), "public/images/amadeu-headshot.png")),
    readFile(join(process.cwd(), "src/app/fonts/inter-bold.woff")),
    readFile(join(process.cwd(), "src/app/fonts/inter-medium.woff")),
  ]);

  const headshotSrc = `data:image/png;base64,${headshotData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0a0a0a",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 18% 50%, rgba(197,155,109,0.18), transparent 58%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: -20,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 280,
            fontWeight: 800,
            color: "rgba(255,255,255,0.03)",
            fontFamily: "Inter",
            lineHeight: 1,
          }}
        >
          AI
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "58%",
            padding: "56px 64px",
            position: "relative",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "Inter",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c59b6d",
            }}
          >
            {siteConfig.name}
          </p>

          <p
            style={{
              margin: "20px 0 0",
              fontFamily: "Inter",
              fontSize: 46,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            AI is changing how businesses operate.
          </p>

          <p
            style={{
              margin: "24px 0 0",
              fontFamily: "Inter",
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.58)",
            }}
          >
            {siteConfig.ogDescription}
          </p>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                border: "1px solid #c59b6d",
                padding: "10px 20px",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#c59b6d",
              }}
            >
              Book a Discovery Call
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "Inter",
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              amadeu.me
            </p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "44%",
            height: "100%",
            display: "flex",
          }}
        >
          <img
            src={headshotSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.55) 38%, transparent 72%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, #0a0a0a 0%, transparent 28%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interBold, weight: 800, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
      ],
    },
  );
}
