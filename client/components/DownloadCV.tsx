import { Download, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { jsPDF } from 'jspdf';
import { timelineData } from './Timeline';
import { translations } from '@/lib/i18n';
import { useState } from 'react';

// Profile picture from Index.tsx
const PROFILE_URL = "https://cdn.builder.io/api/v1/image/assets%2Fcc7241044f564726a1519da181bd3eaa%2F5c680c48aefc4fabb891e721833c1d9e?format=jpeg&width=800";

export function DownloadCV() {
  const { language } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const t = translations[language];

  const getDataUrl = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/jpeg"));
        } else {
          reject("Canvas context failed");
        }
      };
      img.onerror = reject;
      // Append a random query param to avoid cached CORS issues
      img.src = url + "&t=" + new Date().getTime();
    });
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Colors from theme
      const primaryColor = "#5b21b6"; // Darker violet for text/sidebar
      const secondaryColor = "#7c3aed"; // Primary violet
      const accentColor = "#a78bfa"; // Light violet

      // --- SIDEBAR (Left) ---
      // Draw sidebar background
      doc.setFillColor(primaryColor);
      doc.rect(0, 0, 70, pageHeight, 'F');

      let sideY = 20;

      // Profile Photo
      try {
        const imgData = await getDataUrl(PROFILE_URL);
        // Draw circle mask (simulated by placing image and overlaying or using rounded image if possible. jsPDF circle clipping is complex, standard square or rounded rect is safer/easier)
        // For simplicity in jsPDF, we'll draw a square image with rounded corners effect or just square with border
        doc.addImage(imgData, 'JPEG', 10, sideY, 50, 50);
        sideY += 60;
      } catch (e) {
        console.error("Failed to load image", e);
        sideY += 10;
      }

      // Sidebar Text Style
      doc.setTextColor(255, 255, 255);

      // Name
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text("VITOR", 35, sideY, { align: "center" });
      sideY += 10;
      doc.text("SANTOS", 35, sideY, { align: "center" });
      sideY += 15;

      // Title
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Full-Stack", 35, sideY, { align: "center" });
      sideY += 6;
      doc.text("Developer", 35, sideY, { align: "center" });
      sideY += 20;

      // Contact / Socials (Mockup data as it's not fully in i18n but good for layout)
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("CONTACT", 10, sideY);
      sideY += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text("github.com/vitorsantos", 10, sideY);
      sideY += 6;
      doc.text("linkedin.com/in/vitor", 10, sideY);
      sideY += 15;

      // Skills in Sidebar
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(language === 'pt' ? 'SKILLS' : 'SKILLS', 10, sideY);
      sideY += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);

      const skillList = [
        "React / Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js / Express",
        "Python / Django",
        "PostgreSQL / Mongo",
        "AWS / Docker",
        "Git / CI/CD"
      ];

      skillList.forEach(skill => {
        doc.text(`• ${skill}`, 10, sideY);
        sideY += 6;
      });

      // --- MAIN CONTENT (Right) ---
      let mainX = 80;
      let mainY = 20;
      doc.setTextColor(30, 30, 30); // Dark text for main content

      // Helper for Section Title
      const addSectionTitle = (title: string) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(primaryColor);
        doc.text(title.toUpperCase(), mainX, mainY);
        // Underline
        doc.setDrawColor(secondaryColor);
        doc.setLineWidth(0.5);
        doc.line(mainX, mainY + 2, 190, mainY + 2);
        mainY += 10;
        doc.setTextColor(30, 30, 30); // Reset
      };

      // Professional Summary
      addSectionTitle(language === 'pt' ? 'Resumo Profissional' : 'Professional Summary');
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const summary = language === 'pt'
        ? 'Desenvolvedor Full-Stack apaixonado por criar aplicações escaláveis e modernas. Atualmente cursando Análise e Desenvolvimento de Sistemas e Gestão de T.I. Foco em UX/UI e performance.'
        : 'Passionate Full-Stack Developer creating scalable and modern applications. Currently studying Analysis and Systems Development and IT Management. Focus on UX/UI and performance.';

      const summaryLines = doc.splitTextToSize(summary, 110);
      doc.text(summaryLines, mainX, mainY);
      mainY += (summaryLines.length * 5) + 10;

      // Experience
      addSectionTitle(language === 'pt' ? 'Experiência' : 'Experience');
      const workItems = timelineData[language]?.filter(item => item.type === 'work') || [];

      workItems.forEach(item => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(item.title, mainX, mainY);

        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.text(`${item.institution} | ${item.year}`, mainX, mainY + 5);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        const descLines = doc.splitTextToSize(item.description, 110);
        doc.text(descLines, mainX, mainY + 10);

        mainY += 15 + (descLines.length * 4);
      });
      if (workItems.length === 0) mainY += 10;

      // Education
      addSectionTitle(language === 'pt' ? 'Educação' : 'Education');
      const eduItems = timelineData[language]?.filter(item => item.type === 'education') || [];

      eduItems.forEach(item => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text(item.title, mainX, mainY);

        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.text(`${item.institution} | ${item.year}`, mainX, mainY + 5);
        mainY += 10;
      });
      mainY += 5;

      // Certifications (New Page check?)
      if (mainY > 230) {
        doc.addPage();
        // Redraw sidebar for 2nd page? Optional. Let's keep it simple (white bg on 2nd page or repeat sidebar)
        // Just header for now
        mainY = 20;
      } else {
        mainY += 5;
      }

      addSectionTitle(language === 'pt' ? 'Certificações' : 'Certifications');
      const certs = (translations[language].certificatesList as any[]) || [];

      // Grid layout for certs? No, list is safer
      certs.slice(0, 8).forEach((cert: any) => {
        // Check page break
        if (mainY > 270) {
          doc.addPage();
          mainY = 20;
          addSectionTitle(language === 'pt' ? 'Certificações (Cont.)' : 'Certifications (Cont.)');
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(`• ${cert.title}`, mainX, mainY);
        mainY += 5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text(`${cert.issuer} (${cert.date})`, mainX + 5, mainY);
        doc.setTextColor(30, 30, 30);
        mainY += 6;
      });

      doc.save(`Vitor_Santos_${language === 'pt' ? 'Curriculo' : 'CV'}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold smooth-transition hover:shadow-lg hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
      {language === 'pt' ? (isGenerating ? 'Gerando...' : 'Baixar CV') : (isGenerating ? 'Generating...' : 'Download CV')}
    </button>
  );
}
