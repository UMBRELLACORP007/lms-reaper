# Chrome Extension Setup Guide

This guide will help you load and use a Chrome extension manually in your browser.

## Step 1: Download or Extract the Extension Files

Make sure all extension files are inside one folder.

Example:

```text
my-extension/
├── manifest.json
├── background.js
├── popup.html
├── popup.js
└── icons/
```

If the extension is in a ZIP file, extract it first.

---

## Step 2: Open Chrome Extensions Page

Open Google Chrome and go to:

```text
chrome://extensions/
```

Or:

1. Click the 3 dots at the top-right corner.
2. Go to **Extensions**.
3. Click **Manage Extensions**.

---

## Step 3: Enable Developer Mode

At the top-right corner of the Extensions page:

* Turn ON **Developer mode**.

You will now see new buttons like:

* Load unpacked
* Pack extension
* Update

---

## Step 4: Upload the Extension

1. Click **Load unpacked**.
2. Select the extension folder.
3. Click **Select Folder**.

Your extension should now appear in Chrome.

---

## Step 5: Use the Extension

1. Click the puzzle icon near the Chrome search bar.
2. Find your extension.
3. Click the pin icon to keep it visible.
4. Open the extension by clicking its icon.

---

## Step 6: Update the Extension After Changes

If you edit any extension files:

1. Go back to:

```text
chrome://extensions/
```

2. Click the refresh/reload icon on your extension.

Chrome will load the latest changes.

---

## Common Errors

### "Manifest file is missing"

Make sure your extension folder contains:

```text
manifest.json
```

### "Could not load extension"

Check for:

* Missing files
* Wrong folder selected
* JSON syntax errors inside `manifest.json`

### Extension not working

Try:

* Reloading the extension
* Restarting Chrome
* Checking browser console errors

---

## Supported Browsers

This method works on:

* Google Chrome
* Brave
* Microsoft Edge
* Opera

All Chromium-based browsers support loading unpacked extensions.
