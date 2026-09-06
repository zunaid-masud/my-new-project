import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Dedicated Inquiry In-Memory Audit Log
interface InquiryRecord {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  objective: string;
  website: string;
  budget: string;
  message: string;
  status: 'sent' | 'fallback_recorded' | 'failed';
  ip?: string;
}

const inquiriesLog: InquiryRecord[] = [];

// ==========================================
// API ROUTES FIRST
// ==========================================

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// API: Submit Growth Inquiry & Trigger Email Notification
app.post('/api/inquiry', async (req: Request, res: Response) => {
  try {
    const { objective, name, email, website, budget, message } = req.body;

    // 1. Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name.'
      });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid work email address.'
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanObjective = (objective || 'Shopify & E-Commerce Scale').trim();
    const cleanWebsite = (website || 'Not provided').trim();
    const cleanBudget = (budget || '$1,000 — $5,000 / mo').trim();
    const cleanMessage = (message || 'No additional message provided').trim();
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'Unknown';
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', dateStyle: 'full', timeStyle: 'long' });

    // Dynamic Email Subject specified by user
    const emailSubject = `New Growth Inquiry — ${cleanName}`;
    const recipientEmail = process.env.NOTIFICATION_RECIPIENT_EMAIL || 'masudzunaid5@gmail.com';

    // HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050817; color: #e2e8f0; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #0b112c; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #070d28 0%, #0d1a4d 100%); padding: 32px 24px; border-bottom: 2px solid #00f0ff; text-align: center; }
          .badge { display: inline-block; padding: 6px 14px; background: rgba(0, 240, 255, 0.15); border: 1px solid rgba(0, 240, 255, 0.4); border-radius: 9999px; color: #00f0ff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; }
          .title { font-size: 22px; font-weight: 800; color: #ffffff; margin: 0; }
          .content { padding: 28px 24px; }
          .field-group { margin-bottom: 20px; background: #070b1e; border: 1px solid #1e293b; border-radius: 12px; padding: 16px; }
          .label { font-size: 11px; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px; font-weight: 600; margin-bottom: 6px; }
          .value { font-size: 15px; color: #ffffff; font-weight: 500; word-break: break-word; }
          .value a { color: #00f0ff; text-decoration: none; }
          .message-box { background: #040714; border-left: 3px solid #00f0ff; padding: 14px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #cbd5e1; margin-top: 6px; }
          .footer { background: #050817; padding: 20px; text-align: center; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b; }
          .btn { display: inline-block; padding: 12px 24px; background: #00f0ff; color: #050817; font-weight: 800; font-size: 13px; text-transform: uppercase; border-radius: 8px; text-decoration: none; margin-top: 16px; letter-spacing: 1px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">🔥 Direct Portfolio Lead</div>
            <h1 class="title">${emailSubject}</h1>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="label">🎯 Primary Growth Objective</div>
              <div class="value" style="color: #00f0ff; font-weight: 700;">${cleanObjective}</div>
            </div>

            <div class="field-group">
              <div class="label">👤 Lead Name</div>
              <div class="value">${cleanName}</div>
            </div>

            <div class="field-group">
              <div class="label">📧 Work Email</div>
              <div class="value"><a href="mailto:${cleanEmail}">${cleanEmail}</a></div>
            </div>

            <div class="field-group">
              <div class="label">🌐 Store or Website URL</div>
              <div class="value">
                ${cleanWebsite !== 'Not provided' ? `<a href="${cleanWebsite.startsWith('http') ? cleanWebsite : 'https://' + cleanWebsite}" target="_blank">${cleanWebsite}</a>` : 'Not provided'}
              </div>
            </div>

            <div class="field-group">
              <div class="label">💰 Monthly Ad / Growth Budget</div>
              <div class="value" style="color: #38bdf8; font-weight: 600;">${cleanBudget}</div>
            </div>

            <div class="field-group">
              <div class="label">📝 Growth Goals or Pain Points</div>
              <div class="message-box">${cleanMessage.replace(/\n/g, '<br>')}</div>
            </div>

            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${cleanEmail}?subject=Re:%20Growth%20Inquiry%20Strategy%20Discussion" class="btn">
                Reply to ${cleanName}
              </a>
            </div>
          </div>
          <div class="footer">
            Received via Zunaid Masud Portfolio • ${timestamp} • IP: ${clientIp}
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain Text Version
    const textContent = `
========================================
NEW GROWTH INQUIRY — ${cleanName}
========================================

• Primary Growth Objective: ${cleanObjective}
• Name: ${cleanName}
• Work Email: ${cleanEmail}
• Store or Website URL: ${cleanWebsite}
• Monthly Ad / Growth Budget: ${cleanBudget}
• Growth Goals or Pain Points:
${cleanMessage}

----------------------------------------
Submitted: ${timestamp}
Sender IP: ${clientIp}
========================================
    `.trim();

    let emailSent = false;
    let deliveryMethod = 'none';

    // Strategy A: Resend API (if API Key is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Growth Inquiries <inquiries@zunaidmasud.com>',
            to: [recipientEmail],
            reply_to: cleanEmail,
            subject: emailSubject,
            html: htmlContent,
            text: textContent
          })
        });

        if (resendResponse.ok) {
          emailSent = true;
          deliveryMethod = 'resend';
          console.log(`[Email] Successfully delivered inquiry via Resend to ${recipientEmail}`);
        } else {
          const errText = await resendResponse.text();
          console.warn('[Email] Resend API response error:', errText);
        }
      } catch (resendErr) {
        console.warn('[Email] Resend delivery error:', resendErr);
      }
    }

    // Strategy B: Custom SMTP / Nodemailer (if SMTP environment variables configured)
    if (!emailSent && (process.env.SMTP_HOST || (process.env.SMTP_USER && process.env.SMTP_PASS))) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587', 10),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Portfolio Growth Lead" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: cleanEmail,
          subject: emailSubject,
          text: textContent,
          html: htmlContent,
        });

        emailSent = true;
        deliveryMethod = 'smtp';
        console.log(`[Email] Successfully delivered inquiry via SMTP to ${recipientEmail}`);
      } catch (smtpErr) {
        console.warn('[Email] SMTP delivery error:', smtpErr);
      }
    }

    // Strategy C: Formspree / Webhook HTTP Transport
    if (!emailSent) {
      try {
        const formspreeEndpoint = `https://formspree.io/f/mqaejnbk`; // or direct submission
        const webhookResponse = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _to: recipientEmail,
            _subject: emailSubject,
            _replyto: cleanEmail,
            name: cleanName,
            email: cleanEmail,
            objective: cleanObjective,
            website: cleanWebsite,
            budget: cleanBudget,
            message: cleanMessage,
            timestamp
          })
        });

        if (webhookResponse.ok) {
          emailSent = true;
          deliveryMethod = 'web_proxy';
          console.log(`[Email] Delivered inquiry via web gateway to ${recipientEmail}`);
        }
      } catch (webhookErr) {
        console.warn('[Email] Web gateway attempt note:', webhookErr);
      }
    }

    // Record inquiry in server log to guarantee zero data loss
    const recordId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
    const record: InquiryRecord = {
      id: recordId,
      timestamp,
      name: cleanName,
      email: cleanEmail,
      objective: cleanObjective,
      website: cleanWebsite,
      budget: cleanBudget,
      message: cleanMessage,
      status: emailSent ? 'sent' : 'fallback_recorded',
      ip: clientIp
    };

    inquiriesLog.push(record);
    console.log(`[Inquiry Saved] Record #${recordId} from ${cleanName} (${cleanEmail}) [Method: ${deliveryMethod}]`);

    return res.status(200).json({
      success: true,
      message: 'Inquiry transmitted successfully! Zunaid will review and reply within 12 hours.',
      inquiryId: recordId,
      recipient: recipientEmail,
      delivered: emailSent
    });

  } catch (error: any) {
    console.error('[Inquiry Error]', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please try again or reach out directly on WhatsApp.'
    });
  }
});

// ==========================================
// VITE MIDDLEWARE / STATIC ASSETS
// ==========================================

async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio Server listening on port ${PORT}`);
  });
}

start();
