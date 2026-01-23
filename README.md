# UK Visa & Immigration Cost Calculator

A comprehensive, static site calculator for estimating UK visa application costs including fees, Immigration Health Surcharge, and priority services.

## Features

- 🧮 **Comprehensive Calculator** - Covers all major UK visa routes (work, study, family, visitor, settlement)
- 💰 **Complete Cost Breakdown** - Application fees, IHS, priority services, and additional costs
- 📱 **Mobile-First Design** - Fully responsive across all devices
- 🔍 **SEO Optimized** - Proper meta tags, sitemap, robots.txt, and JSON-LD schemas
- 🚀 **GitHub Pages Ready** - Works seamlessly when deployed to repository subpaths
- 📊 **Data-Driven** - Easy to update via JSON configuration files

## Local Development

### Prerequisites
- A local web server (e.g., VS Code Live Server, Python's http.server, or Node's http-server)

### Running Locally

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uk-visa-calculator
   ```

2. **Serve with a local web server**

   **Option A: VS Code Live Server**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"
   - Site will open at `http://localhost:5500`

   **Option B: Python**
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

   **Option C: Node.js**
   ```bash
   npx http-server -p 8000
   ```
   Then open `http://localhost:8000` in your browser

3. **Run validation checks (optional)**
   ```bash
   node scripts/validate.js
   ```
   This checks:
   - JSON file integrity
   - Route ID uniqueness
   - Fee reference validity
   - Required field completeness

## Deploying to GitHub Pages

### Step 1: Prepare Your Repository

1. Create a new GitHub repository (e.g., `uk-visa-calculator`)
2. Push your code to the repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/uk-visa-calculator.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select branch: **main** and folder: **/ (root)**
5. Click **Save**

### Step 3: Update Configuration

After GitHub Pages deployment, update these files with your actual domain:

1. **Update canonical URLs** in:
   - `index.html`
   - All route pages (`uk/*/index.html`)
   - Info pages (`guides/index.html`, `about/index.html`, etc.)
   
   Replace `yourdomain.github.io` with your actual GitHub username:
   ```html
   <link rel="canonical" href="https://USERNAME.github.io/uk-visa-calculator/">
   ```

2. **Update `robots.txt`**:
   ```
   Sitemap: https://USERNAME.github.io/uk-visa-calculator/sitemap.xml
   ```

3. **Update `sitemap.xml`**:
   - Replace all instances of `yourdomain.github.io` with your actual domain

### Step 4: Verify Deployment

Your site will be live at:
```
https://USERNAME.github.io/uk-visa-calculator/
```

**Test checklist:**
1. ✅ Homepage loads with working navigation
2. ✅ Calculator form appears and works
3. ✅ All nav links work (Guides, About, Contact, etc.)
4. ✅ Sample route pages load (e.g., `/uk/study/student-visa/`)
5. ✅ No 404 errors in browser console
6. ✅ No network errors loading CSS/JS/JSON files
7. ✅ Calculator calculations display correctly

## Project Structure

```
uk-visa-calculator/
├── index.html              # Homepage with master calculator
├── css/
│   └── main.css           # Styles
├── js/
│   ├── data-loader.js     # JSON data loading with path resolution
│   ├── calculator.js      # Cost calculation logic
│   └── ui.js             # UI utilities
├── data/
│   ├── routes.json        # Route configurations
│   ├── fees.json          # Fee database
│   ├── rules.json         # IHS rates and rules
│   └── site.json          # Site config
├── content/routes/        # Route-specific content (FAQs, examples)
├── uk/                    # Route pages by category
│   ├── work/
│   ├── study/
│   ├── family/
│   ├── visit/
│   ├── settlement/
│   └── other/
├── guides/                # Information pages
├── about/
├── contact/
├── privacy/
├── terms/
├── disclaimer/
├── scripts/
│   └── validate.js        # Data validation script
├── robots.txt             # Search engine directives
└── sitemap.xml            # URL sitemap
```

## Updating Content

### Updating Fees

Edit `data/fees.json` with new fee amounts:
```json
{
  "skilled_worker_inside": {
    "description": "Skilled Worker visa - apply inside UK",
    "amount_inside_uk": 827,
    "amount_outside_uk": null
  }
}
```

### Adding a New Route

1. Add route configuration to `data/routes.json`
2. Add fee keys to `data/fees.json` if needed
3. Create content file in `content/routes/<route-id>.json`
4. Create route page at `uk/<category>/<route-id>/index.html`
5. Add URL to `sitemap.xml`
6. Run `node scripts/validate.js` to verify

## SEO & Analytics

- **Robots.txt**: Controls search engine crawling
- **Sitemap.xml**: Lists all indexable pages
- **Meta Tags**: Unique titles and descriptions for each page
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
  - Organization schema (homepage)
  - BreadcrumbList schema (route pages)
  - FAQPage schema (route pages with FAQs)

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome for Android)
- JavaScript required for calculator functionality

## License

This project is provided as-is for informational purposes. Not affiliated with UK government.

## Disclaimer

⚠️ **All fees shown are estimates only.** UK visa fees change regularly. Always verify costs with official UK government sources before applying:
- https://www.gov.uk/visa-fees
- https://www.gov.uk/healthcare-immigration-application

## Support

For issues or suggestions, please open an issue on GitHub or use the contact form on the website.
