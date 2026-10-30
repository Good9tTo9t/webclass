# webclass

Coursework for the 2026 fall web programming class. The repository holds one
finished site, a multi-page navigation demo, and the individual lab exercises.

## Structure

```
webclass/
├── index.html          project index (start here)
├── tainan/             Tainan travel site
│   └── index.html
├── pages/              five-page navigation demo
│   ├── index.html      Home
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   └── contact.html
├── multitable/         multiplication table demo
│   ├── multitable.html
│   ├── style.css
│   └── script.js
├── labs/               standalone exercises
│   ├── intro.html
│   ├── lists.html
│   ├── divs.html
│   ├── img.html
│   ├── imgfilter.html
│   ├── jazz.html
│   └── schedule.html
├── css/
│   ├── base.css        shared reset and typography
│   ├── navbar.css      navigation bar for pages/
│   └── tainan.css      styles for the Tainan site
└── images/
    ├── tainan/         photos used by the Tainan site
    └── misc/           photos used by the lab exercises
```

## Previewing

Open `index.html` directly in a browser, or serve the folder locally:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000/>.

Every link and image path is relative, so the site works from `file://` and
from any subdirectory (for example a GitHub Pages project path).

## What each part shows

| Page | Technique |
| --- | --- |
| `tainan/index.html` | Hero image, Flexbox sections, hover gallery, `rowspan`/`colspan` tables |
| `pages/*.html` | Shared navigation bar and stylesheet across five pages |
| `multitable/multitable.html` | JavaScript loops that generate a 9&times;9 multiplication table |
| `labs/intro.html` | Text-level tags: `abbr`, `dfn`, `sub`, `sup`, `strong`, `em` |
| `labs/lists.html` | Ordered, unordered, and description lists |
| `labs/divs.html` | Flexbox rows and centred blocks |
| `labs/img.html` | Floated images and circular hover overlays |
| `labs/imgfilter.html` | CSS `filter` transitions on hover |
| `labs/jazz.html` | Link states (`:link`, `:visited`, `:hover`, `:active`) |
| `labs/schedule.html` | Table styling with `rowspan` |

## Notes

- The navigation markup lives in each page, but its styling is shared in
  `css/navbar.css`; `css/base.css` holds the reset both use.
- Images are grouped by project. The Tainan site loads its photos from
  `images/tainan/`, so moving `css/tainan.css` means updating the `../` prefix
  in the hero `background-image` rule.
