# Arive Cache & Cookie Cleaner Chrome Extension

A simple Chrome extension that adds a one-click button to clear `localStorage`, `sessionStorage`, and all accessible cookies for `*.myarive.com` subdomains and the associated `auth.lendwize.io` login pages.

This extension is designed to help Arive users and developers quickly reset their local browser state without needing to navigate through browser settings.

---

## Features

*   **One-Click Clearing:** Easily clear cache and cookies from the Arive user interface.
*   **Targeted Cleaning:** Specifically targets `*.myarive.com` and `auth.lendwize.io` domains.
*   **UI Integration:**
    *   Adds a "Clear your Cache and Cookies" option to the user dropdown menu within Arive.
    *   Adds a "Clear your Cache and Cookies" link on the Arive login page (hosted on `auth.lendwize.io`).
*   **Automatic Reload:** Reloads the page after clearing to reflect changes immediately.
*   **Minimal Permissions:** Only requests `activeTab` and `scripting` permissions for the specified domains.
*   **Lightweight:** Built with vanilla JavaScript, HTML, and CSS.

---

## How It Works

The extension injects a content script (`content.js`) into pages matching `*://*.myarive.com/*` and `*://auth.lendwize.io/*`. This script:

1.  **Detects** the appropriate locations in the page's DOM (user menu or login form).
2.  **Injects** a "Clear your Cache and Cookies" button/link.
3.  When clicked, the script:
    *   Clears `localStorage`.
    *   Clears `sessionStorage`.
    *   Deletes all cookies associated with the current domain (e.g., `subdomain.myarive.com` or `auth.lendwize.io`), its parent domain (e.g., `.myarive.com` or `.lendwize.io`), and specifically targets `myarive.com` cookies even when on the login page.
    *   Reloads the current page.

---

## Installation

### From the Chrome Web Store

*   **[Link to Chrome Web Store Listing - To Be Added Once Approved]**

### For Local Development / Manual Installation

1.  **Clone the repository or download the ZIP:**
    ```bash
    git clone https://github.com/Spuds0588/Arive-Cookie-and-Cache-Cleaner.git
    ```
    Or download the ZIP and extract it.
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable **"Developer mode"** using the toggle switch in the top right corner.
4.  Click the **"Load unpacked"** button.
5.  Select the directory where you cloned or extracted the extension files (the directory containing `manifest.json`).

The extension icon should now appear in your Chrome toolbar when you are on an `*.myarive.com` or `auth.lendwize.io` page.

---

## Target Websites

This extension is specifically designed to work on:

*   Any subdomain of `myarive.com` (e.g., `company.myarive.com`, `placeholder.myarive.com`)
*   The Arive login pages hosted at `auth.lendwize.io`

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Spuds0588/Arive-Cookie-and-Cache-Cleaner/issues).

---

## License

This project is [MIT Licensed](LICENSE.md).

---

MIT License

Copyright (c) 2024 [Burns Development]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
