// // src/pages/_document.jsx

// import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         {/* Google Tag Manager Head */}
//         <Script id="gtm-head" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-T6263GJ');
//           `}
//         </Script>

//         {/* UTM Parameter Capture Script */}
//         <Script id="utm-capture" strategy="afterInteractive">
//           {`
//             (function () {
//               const params = new URLSearchParams(window.location.search);
//               const trackingFields = [
//                 "utm_source", "utm_medium", "utm_campaign", "utm_campaignname",
//                 "utm_adgroup", "utm_adgroupname", "utm_term", "utm_content",
//                 "utm_adid", "utm_device", "utm_matchtype", "utm_network",
//                 "utm_position", "utm_location", "utm_pincode", "utm_sitelink",
//                 "gclid", "gbraid"
//               ];
//               trackingFields.forEach(key => {
//                 const value = params.get(key);
//                 if (value) localStorage.setItem(key, value);
//               });
//             })();
//           `}
//         </Script>

//         {/* Fonts */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin=""
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Sora:wght@100;300;400;500;600;700;800&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       <body className="antialiased">
//         {/* Google Tag Manager NoScript Fallback */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-T6263GJ"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>

//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

// src/pages/_document.jsx

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="datafast-analytics"
          defer
          data-website-id="68e024163e1a9a4b49d90a68"
          data-domain="olioglobaladtech.com"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />

        {/* Matomo Analytics */}
        <Script id="matomo-analytics" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://olioglobaladtech.matomo.cloud/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '3']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://cdn.matomo.cloud/olioglobaladtech.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>

        {/* Matomo Tag Manager */}
        <Script id="matomo-tag-manager" strategy="afterInteractive">
          {`
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://cdn.matomo.cloud/olioglobaladtech.matomo.cloud/container_a2tN9Yaw.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>

        {/* Google Tag Manager Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T6263GJ');
          `}
        </Script>

        {/* UTM Parameter Capture Script */}
        <Script id="utm-capture" strategy="afterInteractive">
          {`
            (function () {
              const params = new URLSearchParams(window.location.search);
              const trackingFields = [
                "utm_source", "utm_medium", "utm_campaign", "utm_campaignname",
                "utm_adgroup", "utm_adgroupname", "utm_term", "utm_content",
                "utm_adid", "utm_device", "utm_matchtype", "utm_network",
                "utm_position", "utm_location", "utm_pincode", "utm_sitelink",
                "gclid", "gbraid"
              ];
              trackingFields.forEach(key => {
                const value = params.get(key);
                if (value) localStorage.setItem(key, value);
              });
            })();
          `}
        </Script>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        {/* Google Tag Manager NoScript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6263GJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
