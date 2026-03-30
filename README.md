
Kuza Pocket


Simple local web app. Easy to run on your computer.

What it is
----------
A web app that shows one page. Static files are in `static/`. The page is in `templates/index.html`.

Quick start
-----------
1. Make sure Python 3 is installed.
2. In the project folder run:

```bash
python pocket.py
```

3. Open the address shown in the terminal (for example http://localhost:5000).

Files
-----
- `pocket.py` — the server (Flask).
- `templates/index.html` — the web page.
- `static/` — `styles.css`, `script.js`, and vendor libraries.

How to use
----------
- Start the app (step above).
- Register a vendor, unlock with PIN, then add transactions.
- Transactions are saved in your browser (`localStorage`).
- You can download a PDF report from the page.

Offline
-------
- Works without a server: registration, PIN, saving and viewing transactions, and PDF export (uses local jsPDF files).
- Needs the server: the credit code system (`/api/get-code` and `/api/check-code`) needs the Flask app running.

Deploy to PythonAnywhere 
------------------------------------
1. Make a free account at PythonAnywhere and log in.
2. Upload this project (use Git or the web upload).
3. On PythonAnywhere create a new Web app and pick "Flask".
4. Edit the WSGI file and add this line:

```python
from pocket import app
```

5. In the console on PythonAnywhere run:

```bash
pip install flask
```

6. (Optional) Set `KUZA_SECRET_KEY` in the Web app's environment variables on PythonAnywhere.
7. Reload the web app on PythonAnywhere.




