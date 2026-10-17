# Save website enquiries to a Google Sheet

Every enquiry from the site visit form is emailed by Web3Forms. These steps also save each one as a row in a Google Sheet, so all enquiries are in one list.

1. Signed in as jayambecivil@gmail.com, create a new Google Sheet named "Website enquiries".
2. In the sheet: **Extensions → Apps Script**. Delete what is there and paste the script below. Save.
3. **Deploy → New deployment → type: Web app**. Execute as: **Me**. Who has access: **Anyone**. Deploy and allow access.
4. Copy the **Web app URL** (it ends in `/exec`) and put it in `SHEET_URL` in `src/components/SiteVisitForm.astro`.

```js
const SHEET = 'Enquiries';
const COLS = ['Date', 'Name', 'Company', 'Phone', 'Email', 'Service', 'Location', 'Message', 'Page'];

function doPost(e) {
  const p = e.parameter || {};
  if (p.botcheck) return ContentService.createTextOutput('ok'); // spam trap
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET) || ss.insertSheet(SHEET);
    if (sh.getLastRow() === 0) sh.appendRow(COLS);
    // a leading ' stops text like "=..." being treated as a formula
    const safe = (v) => { v = String(v || ''); return /^[=+\-@]/.test(v) ? "'" + v : v; };
    sh.appendRow([new Date(), p.name, p.company, p.phone, p.email, p.service, p.location, p.message, p.page].map((v, i) => i ? safe(v) : v));
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput('ok');
}
```
