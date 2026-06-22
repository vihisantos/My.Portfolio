import { Helmet } from 'react-helmet-async';
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'profile';
    publishedTime?: string;
    keywords?: string[];
}

export function SEO({
    title,
    description,
    image = "/og-image.png",
    url,
    type = 'website',
    publishedTime,
    keywords = []
}: SEOProps) {
    const { language } = useLanguage();
    const t = translations[language].seo;

    const siteTitle = title || t.defaultTitle;
    const siteDescription = description || t.defaultDescription;

    const siteUrl = "https://vihisantos.github.io/My.Portfolio";
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const siteName = "Vitor Santos - Capybara Holding";
    const author = "Vitor Santos";

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="author" content={author} />
            
            {/* Keywords */}
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}

            {/* Canonical URL */}
            {url && (
                <link rel="canonical" href={fullUrl} />
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={siteName} />
            {publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:creator" content={`@${author}`} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            
            {/* Theme Color */}
            <meta name="theme-color" content="#3b82f6" />
        </Helmet>
    );
}
