from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph


OUT = Path("output/pdf/Mani-Bharadwaj-Resume.pdf")
OUT.parent.mkdir(parents=True, exist_ok=True)

PAGE_W, PAGE_H = A4
INK = colors.HexColor("#14212B")
MUTED = colors.HexColor("#5D6A73")
BLUE = colors.HexColor("#2563EB")
PALE = colors.HexColor("#F4F2EC")
LINE = colors.HexColor("#DCE0DB")
LIME = colors.HexColor("#C6FA54")

styles = getSampleStyleSheet()
body = ParagraphStyle("body", parent=styles["Normal"], fontName="Helvetica", fontSize=8.1, leading=11.1, textColor=MUTED, spaceAfter=0)
small = ParagraphStyle("small", parent=body, fontSize=7.2, leading=9.2)
section = ParagraphStyle("section", parent=body, fontName="Helvetica-Bold", fontSize=8.5, leading=11, textColor=BLUE, spaceAfter=7, uppercase=True)
role = ParagraphStyle("role", parent=body, fontName="Helvetica-Bold", fontSize=10.1, leading=12.5, textColor=INK)
project = ParagraphStyle("project", parent=body, fontName="Helvetica-Bold", fontSize=9.5, leading=11.5, textColor=INK)
label = ParagraphStyle("label", parent=body, fontName="Helvetica-Bold", fontSize=7.1, leading=9, textColor=INK)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=10, firstLineIndent=-7, fontSize=7.65, leading=10.2)


def draw_para(canvas, text, style, x, y, width):
    para = Paragraph(text, style)
    _, height = para.wrap(width, PAGE_H)
    para.drawOn(canvas, x, y - height)
    return y - height


def line(canvas, x1, y, x2, color=LINE, width=0.7):
    canvas.setStrokeColor(color)
    canvas.setLineWidth(width)
    canvas.line(x1, y, x2, y)


def bullet_list(canvas, items, x, y, width):
    for item in items:
        y = draw_para(canvas, f"<font color='#2563EB'>•</font> {item}", bullet, x, y, width) - 3
    return y


def section_title(canvas, title, x, y, width):
    y = draw_para(canvas, title, section, x, y, width)
    line(canvas, x, y - 2, x + width, BLUE, 1.2)
    return y - 13


def draw_header(canvas):
    canvas.setFillColor(INK)
    canvas.rect(0, PAGE_H - 54 * mm, PAGE_W, 54 * mm, fill=1, stroke=0)
    canvas.setFillColor(LIME)
    canvas.rect(17 * mm, PAGE_H - 48 * mm, 12 * mm, 2 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 28)
    canvas.drawString(17 * mm, PAGE_H - 30 * mm, "Mani Bharadwaj")
    canvas.setFont("Helvetica", 11.5)
    canvas.setFillColor(colors.HexColor("#C7D5DC"))
    canvas.drawString(17 * mm, PAGE_H - 38 * mm, "Software Engineer I  |  Full-Stack Developer")
    canvas.setFont("Helvetica", 7.6)
    canvas.setFillColor(colors.HexColor("#E2E8EC"))
    contact = "Bengaluru, India  ·  manibharadwajcr@gmail.com  ·  github.com/Manibharadwaj  ·  linkedin.com/in/mani-bharadwaj"
    canvas.drawString(17 * mm, PAGE_H - 46 * mm, contact)
    canvas.setFillColor(BLUE)
    canvas.roundRect(PAGE_W - 46 * mm, PAGE_H - 36 * mm, 29 * mm, 9 * mm, 4.5 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 7.4)
    canvas.drawCentredString(PAGE_W - 31.5 * mm, PAGE_H - 32.5 * mm, "FULL-STACK")


def draw_experience(canvas, x, y, width):
    y = section_title(canvas, "Experience", x, y, width)
    entries = [
        ("Software Engineer I", "SmotPro India Pvt. Ltd.  |  Bengaluru, India", "Mar 2026 - Present", [
            "Build and maintain software solutions that simplify workflows for clients and executive teams.",
            "Develop full-stack features across user interfaces, back-end services, and data workflows.",
        ]),
        ("Technical Lead", "Global Tech Software Solutions  |  Bengaluru, India", "Jul 2025 - Mar 2026", [
            "Led delivery of full-stack software solutions for client and executive workflows.",
            "Translated requirements into practical features, reviewed work, and helped unblock delivery.",
        ]),
        ("Quality Analyst", "Medopharm  |  Malur, India", "Jun 2021 - Jul 2022", [
            "Supported quality processes, accurate record-keeping, and operational standards in a regulated environment.",
        ]),
    ]
    for title, company, dates, bullets in entries:
        y = draw_para(canvas, title, role, x, y, width)
        y = draw_para(canvas, f"<font color='#2563EB'>{company}</font>  <font color='#7A858C'>·  {dates}</font>", small, x, y - 2, width)
        y = bullet_list(canvas, bullets, x, y - 4, width)
        y -= 7
    return y


def draw_projects(canvas, x, y, width):
    y = section_title(canvas, "Selected engineering work", x, y, width)
    projects = [
        ("Putt Together", "TypeScript · Phaser · Hono · Redis", "Community mini-golf platform with deterministic client/server physics, replay ghosts, and server-validated ace-to-publish scoring."),
        ("Aasha", "Node.js · Slack Bolt · Supabase · MCP", "Relief-operations agent that turns incoming Slack messages into structured incidents, assignments, resolutions, and situation reports."),
        ("CodeScroll", "TypeScript · VS Code Extension API", "In-editor developer-news reader with topic feeds, article reading, API de-duplication, and persisted bookmarks."),
    ]
    for title, tech, description in projects:
        y = draw_para(canvas, title, project, x, y, width)
        y = draw_para(canvas, f"<font color='#2563EB'>{tech}</font>", small, x, y - 1, width)
        y = draw_para(canvas, description, body, x, y - 2, width) - 10
    return y


def build():
    c = Canvas(str(OUT), pagesize=A4, pageCompression=1)
    c.setTitle("Mani Bharadwaj - Software Engineer I Resume")
    c.setAuthor("Mani Bharadwaj")
    draw_header(c)

    left_x, right_x = 17 * mm, 134 * mm
    left_w, right_w = 105 * mm, 59 * mm
    y = PAGE_H - 64 * mm
    y = draw_para(c, "Software Engineer I and full-stack developer building practical products with React, Next.js, Node.js, and Python. Experienced across product interfaces, back-end services, data workflows, and technical delivery.", body, left_x, y, PAGE_W - 34 * mm)
    y -= 14
    left_y = draw_experience(c, left_x, y, left_w)
    left_y = draw_projects(c, left_x, left_y + 1, left_w)

    right_y = section_title(c, "Technical toolkit", right_x, y, right_w)
    grouped = [("Frontend", "React, Next.js, JavaScript, TypeScript"), ("Backend", "Node.js, Hono, REST APIs"), ("Data", "Python, Supabase, PostgreSQL, Redis"), ("Workflow", "Git, VS Code Extension API, MCP")]
    for name, value in grouped:
        right_y = draw_para(c, name, label, right_x, right_y, right_w)
        right_y = draw_para(c, value, body, right_x, right_y - 2, right_w) - 12

    right_y = section_title(c, "Education", right_x, right_y, right_w)
    right_y = draw_para(c, "Bachelor of Computer Applications (BCA)", role, right_x, right_y, right_w)
    right_y = draw_para(c, "Manav Rachna International Institute of Research & Studies  ·  2022 - 2025", small, right_x, right_y - 2, right_w) - 12
    right_y = draw_para(c, "Bachelor of Business Administration (BBA)", role, right_x, right_y, right_w)
    right_y = draw_para(c, "The East Point College of Higher Education  ·  2022 - 2025", small, right_x, right_y - 2, right_w) - 12

    right_y = section_title(c, "Links", right_x, right_y, right_w)
    for text, url in [("GitHub", "https://github.com/Manibharadwaj"), ("LinkedIn", "https://www.linkedin.com/in/mani-bharadwaj"), ("Portfolio", "https://manibharadwaj.netlify.app/")]:
        right_y = draw_para(c, f"<font color='#2563EB'><u>{text}</u></font><br/><font size='7'>{url.replace('https://', '')}</font>", body, right_x, right_y, right_w) - 10
        c.linkURL(url, (right_x, right_y, right_x + right_w, right_y + 22), relative=0)

    c.setFillColor(PALE)
    c.rect(0, 0, PAGE_W, 10 * mm, fill=1, stroke=0)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(17 * mm, 5 * mm, "Selected public work and experience  ·  Updated September 2026")
    c.drawRightString(PAGE_W - 17 * mm, 5 * mm, "manibharadwaj.netlify.app")
    c.save()


if __name__ == "__main__":
    build()
