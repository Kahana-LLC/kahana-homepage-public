import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="GA4-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WBXNXKQ');
            `,
          }}
        />

        {/* Adding hotjar script here */}
        <Script
          id="hotjar-script"
          dangerouslySetInnerHTML={{
            __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2868036,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
          }}
        />
        {/* End of hotjar script */}
        <link
          href="https://cdn.jsdelivr.net/npm/tabler-icons@1.39.1/icons/tabler-icons.min.css"
          rel="stylesheet"
        />

        {/* Crisp script */}
        <Script
          id="crisp-script"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="711b6e27-0210-4313-9ea3-75009495e3ec";
              (function(){
                var d=document;
                var s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />

        {/* <!-- Google tag (gtag.js) --> 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KQHFL9605P');
        </script> */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) immediately after opening <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBXNXKQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
