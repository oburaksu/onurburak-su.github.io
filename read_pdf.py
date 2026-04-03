import sys
import subprocess

try:
    import pypdf
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

reader = pypdf.PdfReader('c:/Users/onurb/Desktop/onurburak-su.github.io-main/onurburak-su.github.io-main/WebLab_Flexbox_Uygulama.pdf')
for page in reader.pages:
    print(page.extract_text())
