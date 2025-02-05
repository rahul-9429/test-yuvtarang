import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Yuvtarang - The annual 2-day cultural festival organized by Vignan Vizag, featuring music, dance, and vibrant student performances." />
        <meta name="keywords" content="Yuvtarang, Yuvtarang VIIT, Yuvtarang viit, Yuvtarang 2025, Vignan Vizag, cultural fest, college events, student festival, music, dance, fun activities" />
        <meta name="author" content="Vignan Vizag" />

        <meta property="og:title" content="Yuvtarang - Vignan Vizag Cultural Fest" />
        <meta property="og:description" content="Experience the energy of Yuvtarang, the biggest cultural fest at Vignan Vizag with music, dance, and entertainment." />
        <meta property="og:image" content="https://yuvtarang.vercel.app/yuvtarang-banner.png" />
        <meta property="og:url" content="https://yuvtarang.vignaniit.edu.in/yuvtarang" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yuvtarang - Vignan Vizag Cultural Fest" />
        <meta name="twitter:description" content="Join us at Yuvtarang, the ultimate 2-day cultural festival at Vignan Vizag, featuring amazing performances and fun activities!" />
        <meta name="twitter:image" content="https://yuvtarang.vercel.app/yuvtarang-banner.png" />

        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Yuvtarang - Vignan Vizag Cultural Fest",
              "startDate": "2025-02-21",
              "endDate": "2025-02-22",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Vignan Vizag Campus",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Vignan's Institute of Engineering for Women",
                  "addressLocality": "Visakhapatnam",
                  "postalCode": "530049",
                  "addressCountry": "IN"
                }
              },
              "image": ["https://yuvtarang.vercel.app/yuvtarang-banner.png"],
              "description": "Yuvtarang is a 2-day cultural festival at Vignan Vizag, packed with music, dance, and entertainment.",
              "organizer": {
                "@type": "Organization",
                "name": "Vignan Vizag",
                "url": "https://yuvtarang.vignaniit.edu.in"
              }
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
