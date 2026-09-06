import { jsPDF } from 'jspdf';
import { siteConfig } from '../data/siteConfig';

/**
 * Generates and downloads the official MD Zunaid Masud CV PDF
 * perfectly styled after the uploaded luxury executive CV design.
 */
export function generateAndDownloadCVPDF(filename = 'MD_Zunaid_Masud_CV.pdf') {
  // A4 dimensions in mm: 210 x 297
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;

  // Background - Luxury Dark Charcoal / Deep Warm Slate (#1a1715)
  doc.setFillColor(26, 23, 21);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Top Header Accent Area
  doc.setFillColor(32, 28, 26);
  doc.rect(0, 0, pageWidth, 52, 'F');

  // Name: MD ZUNAID MASUD
  doc.setFont('times', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(245, 240, 235);
  doc.text('MD ZUNAID MASUD', 18, 25);

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(205, 175, 135); // Warm gold
  doc.text('F R E E L A N C E   D I G I T A L   M A R K E T I N G   S P E C I A L I S T', 18, 34);

  // Horizontal divider below header
  doc.setDrawColor(80, 70, 65);
  doc.setLineWidth(0.4);
  doc.line(18, 48, pageWidth - 18, 48);

  // Column layout definitions
  const leftColX = 18;
  const leftColW = 58;
  const colDividerX = 80;
  const rightColX = 86;
  const rightColW = pageWidth - rightColX - 18;

  // Vertical separator line between columns
  doc.setDrawColor(65, 58, 54);
  doc.setLineWidth(0.4);
  doc.line(colDividerX, 56, colDividerX, pageHeight - 30);

  // ==========================================
  // LEFT COLUMN: CONTACT, EXPERTISE, LANGUAGE, CERTIFICATIONS
  // ==========================================
  let curYLeft = 64;

  // 1. CONTACT
  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(245, 240, 235);
  doc.text('CONTACT', leftColX, curYLeft);
  curYLeft += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(205, 175, 135);
  doc.text('PHONE', leftColX, curYLeft);
  curYLeft += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(220, 220, 220);
  doc.text('+8801771161787', leftColX, curYLeft);
  curYLeft += 6.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(205, 175, 135);
  doc.text('EMAIL', leftColX, curYLeft);
  curYLeft += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(220, 220, 220);
  doc.text('masudzunaid5@gmail.com', leftColX, curYLeft);
  curYLeft += 6.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(205, 175, 135);
  doc.text('ADDRESS', leftColX, curYLeft);
  curYLeft += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(220, 220, 220);
  const addrLines = doc.splitTextToSize('Rani Bari, Chandpur, Shibgonj, ChapaiNawabgonj, Bangladesh', leftColW);
  doc.text(addrLines, leftColX, curYLeft);
  curYLeft += addrLines.length * 4 + 7;

  // 2. EXPERTISE
  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(245, 240, 235);
  doc.text('EXPERTISE', leftColX, curYLeft);
  curYLeft += 6;

  const expertiseItems = [
    'Digital Marketing',
    'SEO (Search Engine Optimization)',
    'Social Media Marketing',
    'Shopify & WooCommerce',
    'Lead Generation'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(220, 220, 220);
  expertiseItems.forEach(item => {
    doc.setFillColor(205, 175, 135);
    doc.circle(leftColX + 1.5, curYLeft - 1, 0.8, 'F');
    const lines = doc.splitTextToSize(item, leftColW - 6);
    doc.text(lines, leftColX + 5, curYLeft);
    curYLeft += lines.length * 4.5 + 1.5;
  });
  curYLeft += 5;

  // 3. LANGUAGE
  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(245, 240, 235);
  doc.text('LANGUAGE', leftColX, curYLeft);
  curYLeft += 6;

  // Bangla
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(220, 220, 220);
  doc.text('Bangla', leftColX, curYLeft);
  // Bar
  doc.setFillColor(70, 60, 55);
  doc.rect(leftColX + 22, curYLeft - 2.5, 34, 2, 'F');
  doc.setFillColor(205, 175, 135);
  doc.rect(leftColX + 22, curYLeft - 2.5, 34, 2, 'F');
  curYLeft += 6;

  // English
  doc.text('English', leftColX, curYLeft);
  doc.setFillColor(70, 60, 55);
  doc.rect(leftColX + 22, curYLeft - 2.5, 34, 2, 'F');
  doc.setFillColor(205, 175, 135);
  doc.rect(leftColX + 22, curYLeft - 2.5, 29, 2, 'F');
  curYLeft += 10;

  // 4. CERTIFICATIONS
  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(245, 240, 235);
  doc.text('CERTIFICATIONS', leftColX, curYLeft);
  curYLeft += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(205, 175, 135);
  doc.text('Trainers IT Institute', leftColX, curYLeft);
  curYLeft += 4.5;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(200, 200, 200);
  const cert1 = doc.splitTextToSize('Professional Digital Marketing & SEO Course', leftColW);
  doc.text(cert1, leftColX, curYLeft);
  curYLeft += cert1.length * 3.8 + 3;

  const cert2 = doc.splitTextToSize('Content Marketing and Design Course (2025)', leftColW);
  doc.text(cert2, leftColX, curYLeft);

  // Decorative dots pattern at bottom left
  const dotStartX = leftColX;
  const dotStartY = pageHeight - 24;
  doc.setFillColor(80, 70, 65);
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 8; c++) {
      doc.circle(dotStartX + c * 4, dotStartY + r * 4, 0.6, 'F');
    }
  }

  // ==========================================
  // RIGHT COLUMN: ABOUT ME, EXPERIENCE, EDUCATION
  // ==========================================
  let curYRight = 64;

  // 1. ABOUT ME
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(245, 240, 235);
  doc.text('ABOUT ME', rightColX, curYRight);
  curYRight += 6.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(215, 215, 215);
  const aboutText =
    'I am a passionate Digital Marketer with hands-on experience in SEO, social media marketing, and e-commerce platforms like Shopify and WooCommerce. I have worked with international clients and aim to help businesses grow through effective digital strategies.';
  const aboutLines = doc.splitTextToSize(aboutText, rightColW);
  doc.text(aboutLines, rightColX, curYRight);
  curYRight += aboutLines.length * 4.2 + 10;

  // 2. EXPERIENCE
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(245, 240, 235);
  doc.text('EXPERIENCE', rightColX, curYRight);
  curYRight += 6.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(245, 240, 235);
  doc.text('Freelancer - Fiverr & Instagram (Online Platform)', rightColX, curYRight);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(205, 175, 135);
  doc.text('2025 - Present', rightColX + rightColW - 25, curYRight);
  curYRight += 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(205, 175, 135);
  doc.text('Digital Marketing Specialist', rightColX, curYRight);
  curYRight += 5;

  const expBulletPoints = [
    'SEO (Search Engine Optimization)',
    'Shopify Store & WooCommerce Management',
    'Social Media Marketing',
    'Content Creation & Logo Design (Canva)'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(215, 215, 215);
  expBulletPoints.forEach(pt => {
    doc.setFillColor(205, 175, 135);
    doc.circle(rightColX + 1.5, curYRight - 1, 0.7, 'F');
    const ptLines = doc.splitTextToSize(pt, rightColW - 6);
    doc.text(ptLines, rightColX + 5, curYRight);
    curYRight += ptLines.length * 4.2 + 1.5;
  });
  curYRight += 8;

  // 3. EDUCATION
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(245, 240, 235);
  doc.text('EDUCATION', rightColX, curYRight);
  curYRight += 6.5;

  // Degree 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(245, 240, 235);
  doc.text('National University Under Rajshahi Govt. City College', rightColX, curYRight);
  curYRight += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(205, 175, 135);
  doc.text('Bachelor of Arts (B.A) 2023 - Present', rightColX, curYRight);
  curYRight += 8;

  // Degree 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(245, 240, 235);
  doc.text('Mirzapur College ( 2020 - 2021 )', rightColX, curYRight);
  curYRight += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(215, 215, 215);
  doc.text('Higher Secondary Certificate (HSC)', rightColX, curYRight);
  doc.setTextColor(205, 175, 135);
  doc.text('GPA 4.50', rightColX + rightColW - 20, curYRight);
  curYRight += 8;

  // Degree 3
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(245, 240, 235);
  doc.text('Asian School and College ( 2018 - 2019 )', rightColX, curYRight);
  curYRight += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(215, 215, 215);
  doc.text('Secondary School Certificate (SSC)', rightColX, curYRight);
  doc.setTextColor(205, 175, 135);
  doc.text('GPA 4.11', rightColX + rightColW - 20, curYRight);

  // Save / Trigger Download
  doc.save(filename);
}

/**
 * Universal CV downloader that triggers download directly on Desktop, Android, and iOS.
 * Connects directly to the exact URL specified in siteConfig.cvPdfUrl.
 */
export async function downloadCVPdf() {
  const filename = 'MD_Zunaid_Masud_CV.pdf';
  const targetUrl = (siteConfig.cvPdfUrl && siteConfig.cvPdfUrl.trim() !== '') 
    ? siteConfig.cvPdfUrl.trim() 
    : `/${filename}`;

  // If external URL
  if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
    try {
      const res = await fetch(targetUrl, { mode: 'cors' });
      if (res.ok) {
        const blob = await res.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1500);
        return;
      }
    } catch {
      // If CORS or server prevents blob download, open the exact PDF URL in a new tab
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // Direct fallback if fetch wasn't 200 OK
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  // Local/Internal relative URL
  try {
    const res = await fetch(targetUrl);
    if (res.ok) {
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1500);
      return;
    }
  } catch {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }
}
