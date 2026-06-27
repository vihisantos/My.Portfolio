import { Helmet } from 'react-helmet-async';
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({
    title,
    description,
    keywords,
    image = "/og-image.png",
    url,
    structuredData
}: SEOProps) {
    const { language } = useLanguage();
    const t = translations[language].seo;

    const siteTitle = title || t.defaultTitle;
    const siteDescription = description || t.defaultDescription;
    const metaKeywords = keywords || t.defaultKeywords || '';

    const siteUrl = "https://vihisantos.github.io/My.Portfolio";
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={fullImage} />

            {structuredData && (Array.isArray(structuredData) ? structuredData : [structuredData]).map((data, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({ "@context": "https://schema.org", ...data })
                }} />
            ))}
        </Helmet>
    );
}
