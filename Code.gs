/**
 * Mosque Website Intake — Google Apps Script backend.
 *
 * SETUP (one time):
 *  1. Create a Google Sheet (any name). Open Extensions → Apps Script.
 *  2. Delete any sample code, paste this whole file, and Save.
 *  3. Set NOTIFY_EMAIL below to the address that should receive new inquiries.
 *  4. Deploy → New deployment → gear icon → "Web app".
 *       - Description: anything (e.g. "Intake v1")
 *       - Execute as: Me
 *       - Who has access: Anyone
 *     Click Deploy, authorize when prompted, and copy the Web app URL (ends in /exec).
 *  5. Paste that URL into SHEET_ENDPOINT in index.html.
 *
 * The header row is created automatically on the first submission.
 * If you ever change the columns, delete row 1 in the sheet and it will be rebuilt.
 */

// The address that receives an email for every new inquiry.
var NOTIFY_EMAIL = 'saaima.yaqub@gmail.com';

// Column order for the sheet. Also used to build the header row.
var HEADERS = [
  'Timestamp',
  'Name',
  'Contact',
  'Selected Features',
  'Total Hours',
  'Total Cost (USD)',
  'Quoted Rate',
  'Rate Fit',
  'Budget Note',
  'Timeline',
  'Live Audience',
  'Donations',
  'Maintenance',
  'Content Ready',
  'Domain Preference',
  'Notes'
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Write header row once.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    var features = (data.selectedFeatures || []).join(', ');
    var timestamp = new Date();

    sheet.appendRow([
      timestamp,
      data.name || '',
      data.contact || '',
      features,
      data.totalHours || '',
      data.totalCost || '',
      data.quotedRate || '',
      data.rateFit || '',
      data.budgetNote || '',
      data.timeline || '',
      data.liveAudience || '',
      data.donations || '',
      data.maintenance || '',
      data.contentReady || '',
      data.domainPreference || '',
      data.notes || ''
    ]);

    sendNotification(data, timestamp);

    return jsonResponse({ result: 'success' });
  } catch (err) {
    return jsonResponse({ result: 'error', message: String(err) });
  }
}

function sendNotification(data, timestamp) {
  if (!NOTIFY_EMAIL) return;

  var features = (data.selectedFeatures || []);
  var featureList = features.length
    ? features.map(function (f) { return '  • ' + f; }).join('\n')
    : '  (none selected)';

  var body =
    'New mosque website inquiry\n' +
    '===========================\n\n' +
    'Received: ' + timestamp + '\n\n' +
    'CONTACT\n' +
    'Name: ' + (data.name || '') + '\n' +
    'Contact: ' + (data.contact || '') + '\n\n' +
    'FEATURES & PRICING\n' +
    featureList + '\n' +
    'Total: ' + (data.totalHours || '0') + ' hours | USD ' + (data.totalCost || '0') + '\n' +
    'Quoted rate: ' + (data.quotedRate || '') + '\n' +
    'Rate works for them? ' + (data.rateFit || '—') + '\n' +
    'Budget note: ' + (data.budgetNote || '—') + '\n\n' +
    'ANSWERS\n' +
    'Timeline: ' + (data.timeline || '—') + '\n' +
    'Live audience: ' + (data.liveAudience || '—') + '\n' +
    'Donations: ' + (data.donations || '—') + '\n' +
    'Maintenance: ' + (data.maintenance || '—') + '\n' +
    'Content ready: ' + (data.contentReady || '—') + '\n' +
    'Domain preference: ' + (data.domainPreference || '—') + '\n' +
    'Notes: ' + (data.notes || '—') + '\n';

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: 'New website inquiry — ' + (data.name || 'Unknown'),
    body: body
  });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
