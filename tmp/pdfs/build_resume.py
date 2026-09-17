from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

OUT = Path('output/pdf/Mani-Bharadwaj-Resume.pdf')
OUT.parent.mkdir(parents=True, exist_ok=True)
styles = getSampleStyleSheet()
name = ParagraphStyle('name', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=18, leading=21, alignment=TA_CENTER, textColor=colors.black, spaceAfter=2)
contact = ParagraphStyle('contact', parent=styles['Normal'], fontName='Helvetica', fontSize=8.5, leading=11, alignment=TA_CENTER, textColor=colors.black, spaceAfter=9)
section = ParagraphStyle('section', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=10, leading=12, textColor=colors.black, spaceBefore=6, spaceAfter=3, keepWithNext=True)
role = ParagraphStyle('role', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.2, leading=11, textColor=colors.black, spaceBefore=3)
body = ParagraphStyle('body', parent=styles['Normal'], fontName='Helvetica', fontSize=8.3, leading=10.4, textColor=colors.black)
bullet = ParagraphStyle('bullet', parent=body, leftIndent=10, firstLineIndent=-6, spaceBefore=1)

def P(text, style=body):
    return Paragraph(text, style)
def section_title(text):
    return [Spacer(1, 2), P(text.upper(), section)]
def bullets(items):
    return [P(f'• {item}', bullet) for item in items]

def build():
    doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=17*mm, leftMargin=17*mm, topMargin=13*mm, bottomMargin=13*mm, title='Mani Bharadwaj - Resume', author='Mani Bharadwaj')
    story = [P('Mani Bharadwaj', name), P('Software Engineer I | Full-Stack Developer | React, Next.js, Node.js, Python<br/>Bengaluru, India | manibharadwajcr@gmail.com | manibharadwaj.netlify.app | github.com/Manibharadwaj | linkedin.com/in/mani-bharadwaj', contact)]
    story += section_title('Summary') + [P('Software Engineer I and full-stack developer building practical web products with React, Next.js, Node.js, and Python. Experienced across product interfaces, back-end services, data workflows, developer tooling, AI agents, and technical delivery. Strong quality-focused mindset with experience leading delivery and turning requirements into maintainable software.')]
    story += section_title('Experience')
    for title, meta, items in [
        ('Software Engineer I', 'SmotPro India Pvt. Ltd. | Bengaluru, India | Mar 2026 - Present', ['Build and maintain software solutions that simplify workflows for clients and executive teams.', 'Develop full-stack features across user interfaces, back-end services, and data workflows from requirements through release.']),
        ('Technical Lead', 'Global Tech Software Solutions | Bengaluru, India | Jul 2025 - Mar 2026', ['Led delivery of full-stack software solutions for client and executive workflows.', 'Translated requirements into practical features, reviewed work, and helped unblock technical delivery.']),
        ('Quality Analyst', 'Medopharm | Malur, India | Jun 2021 - Jul 2022', ['Supported quality checks, documentation, record-keeping, and operational standards in a regulated pharmaceutical environment.']),
    ]:
        story += [P(title, role), P(meta)] + bullets(items)
    story += section_title('Selected Projects')
    for title, tech, description in [
        ('ESP32 Monitor', 'ESP32 | IoT | Embedded C/C++ | Sensors', 'Built an ESP32-based sensor monitoring project, connecting embedded hardware data to a lightweight monitoring interface and learning the device-to-UI workflow end to end.'),
        ('Jarvis', 'Python | Node.js | LiveKit | Whisper | PostgreSQL | LLM agents', 'Built a proactive voice accountability agent with scheduled wake-up, check-in, and evening-review calls, speech recognition, text-to-speech, memory, and tool-oriented workflows.'),
        ('CodeScroll VS Code Extension', 'TypeScript | VS Code Extension API | Hacker News API | Dev.to API', 'Built an editor-native developer-news extension with topic feeds, article reading, browser handoff, API de-duplication, and persisted bookmarks. Received positive feedback from Daily.dev CTO Ido Shamun about the project.'),
    ]:
        story += [P(title, role), P(tech), P(description)]
    story += section_title('Open-Source and Community Work') + [P('Maintains and publishes public software projects on GitHub across full-stack web, AI agents, developer tooling, and IoT. Public work includes Jarvis, CodeScroll, Putt Together, Aasha, WebXray, and supporting experiments. GitHub profile: github.com/Manibharadwaj')]
    story += section_title('Technical Skills') + [P('Languages: JavaScript, TypeScript, Python, HTML, CSS, C/C++<br/>Frontend: React.js, Next.js, Tailwind CSS, Phaser<br/>Backend: Node.js, Express.js, Hono, REST APIs, WebSockets, Slack Bolt<br/>Data and infrastructure: PostgreSQL, Supabase, Redis, Git, Docker<br/>AI and tooling: LLM agents, MCP, LiveKit, Whisper, VS Code Extension API')]
    story += section_title('Education') + [P('Bachelor of Computer Applications (BCA), Manav Rachna International Institute of Research & Studies | 2022 - 2025'), P('Bachelor of Business Administration (BBA), The East Point College of Higher Education | 2022 - 2025')]
    doc.build(story)

if __name__ == '__main__':
    build()
