"""Compress the supplied Montserrat fonts and render the typographic social card."""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
fonts = root / "public" / "fonts"
for weight in (400, 500, 600, 700, 800, 900):
    font = TTFont(fonts / f"montserrat-{weight}.ttf")
    options = subset.Options()
    options.flavor = "woff2"
    sub = subset.Subsetter(options=options)
    sub.populate(unicodes=list(range(0x20, 0x180)) + list(range(0x2000, 0x2070)) + list(range(0x2190, 0x21A0)))
    sub.subset(font)
    font.flavor = "woff2"
    font.save(fonts / f"montserrat-{weight}.woff2")

im = Image.new("RGB", (1200, 630), "#151715")
draw = ImageDraw.Draw(im)
regular = ImageFont.truetype(str(fonts / "montserrat-400.ttf"), 20)
label = ImageFont.truetype(str(fonts / "montserrat-600.ttf"), 17)
heading = ImageFont.truetype(str(fonts / "montserrat-900.ttf"), 87)
draw.text((64, 44), "RAL ANGELO LLUISMA", font=label, fill="#f1f1e9")
draw.text((64, 112), "Software.", font=heading, fill="#f1f1e9")
draw.text((64, 211), "Hardware.", font=heading, fill="#f1f1e9")
draw.text((64, 310), "Useful systems.", font=heading, fill="#ff7849")
draw.line((64, 473, 1136, 473), fill="#3a3e37", width=2)
draw.text((64, 510), "EMBEDDED & IoT  /  AI & COMPUTER VISION  /  SOFTWARE", font=label, fill="#a5aaa1")
draw.text((64, 554), "Computer Applications graduate / MSU-IIT / 2026", font=regular, fill="#a5aaa1")
im.save(root / "public" / "social-preview.png", optimize=True)
print("Prepared six subset WOFF2 fonts and the 1200 × 630 social preview.")
