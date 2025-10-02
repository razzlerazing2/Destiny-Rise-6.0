# Destiny Rise 6.0

**Last Updated:** October 2, 2025

## Overview

Destiny Rise 6.0 is a web proxy application designed to bypass network restrictions. The application disguises itself as an educational "Math Bros." website while providing a full-featured web proxy service with game and app collections.

**Current Status:** Fully operational and configured for Replit environment

## Project Architecture

### Technology Stack
- **Backend:** Node.js 20+ with Express.js
- **Proxy Server:** @nebula-services/bare-server-node (v2.0.4)
- **Build System:** Webpack 5
- **Frontend:** Static HTML/CSS/JavaScript

### Project Structure
```
/
├── totallynotthefrontendtrust/  # Frontend static files
│   ├── assets/                  # CSS, JS, JSON, media files
│   │   ├── css/                 # Stylesheets
│   │   ├── js/                  # JavaScript modules
│   │   ├── json/                # App/game/anime data
│   │   ├── media/               # Images, icons, backgrounds
│   │   ├── dyn/                 # Dynamic proxy client code
│   │   └── ultra/               # Ultraviolet proxy bundle
│   ├── real_files/              # HTML pages
│   │   └── trickfiles/          # Disguise/camouflage pages
│   ├── index.html               # Root landing page
│   └── sw.js                    # Service worker
├── index.js                     # Main server entry point
├── config.js                    # Server configuration
├── Masqr.js                     # Optional masquerading feature
└── webpack.config.mjs           # Webpack build configuration
```

### Key Features
- **Web Proxy:** Full browsing proxy with bare server backend
- **Game Collection:** Browser-based games library
- **App Collection:** Curated web applications
- **Disguise Mode:** Appears as educational math website
- **Optional Password Protection:** Configurable basic auth
- **Service Worker:** Offline and caching capabilities
- **Asset Caching:** 30-day cache for remote assets

## Configuration

### Port Configuration
- **Development & Production:** Port 5000 (required for Replit)
- **Host:** 0.0.0.0 for external access

### Environment Variables
- `PORT`: Server port (defaults to 5000)
- `MASQR`: Enable/disable Masqr feature (currently disabled)

### Server Settings (config.js)
- `challenge`: Enable/disable password protection (default: false)
- `users`: Username/password pairs for basic auth

## Routes

### Main Routes
- `/` - Landing page (Math Bros. disguise)
- `/home` - Main proxy home page
- `/home-page` - Alternative home
- `/apps` - Applications library
- `/games` - Games library
- `/animes` - Anime collection
- `/settings` - User settings
- `/t` - Proxy search interface
- `/proxyhome` - Proxy home page
- `/song` - Web music player
- `/resources` - Resource links
- `/learn` - Educational content (disguise)

### Proxy Routes
- `/fq/*` - Bare server proxy endpoint (WebSocket + HTTP)
- `/e/1/*` - External asset proxy (GitHub)
- `/e/2/*` - V5 assets proxy
- `/e/3/*` - V5 Retro assets proxy

## Recent Changes

### October 2, 2025 - Initial Replit Setup
- Upgraded Node.js from v16 to v20 for compatibility
- Installed all npm dependencies
- Configured workflow for port 5000
- Added cache control headers for Replit iframe environment
- Set up VM deployment configuration
- Server successfully running and tested

## Development Notes

### Important Constraints
- **Do not edit files outside `totallynotthefrontendtrust/`** unless you understand the server architecture
- **Safe to edit:** Everything inside `totallynotthefrontendtrust/` folder
- **Cache control:** No-cache headers already configured for Replit preview

### Testing Checklist
- ✅ Server starts without errors
- ✅ Landing page loads correctly
- ✅ Static assets served properly
- ✅ Routes functioning correctly
- ⚠️ Minor particle.js config 404s (cosmetic only, doesn't affect functionality)

### Known Issues
- Particle.js configuration files return 404 (non-critical, particle animations may not display)
- Some pages reference missing particle configs in assets directory

## Deployment

### Deployment Configuration
- **Type:** VM (always-on server)
- **Command:** `node index.js`
- **Reason:** Requires persistent WebSocket connections for proxy functionality

### Publishing
Users need to click the "Publish" button in Replit to deploy to production with a live URL.

## Dependencies

### Production Dependencies
- @nebula-services/bare-server-node: Bare server implementation
- express: Web framework
- express-basic-auth: Password protection
- cookie-parser: Cookie handling
- cors: CORS middleware
- chalk: Terminal styling
- mime: MIME type detection
- node-fetch: HTTP client
- tsparticles: Particle animations
- dotenv: Environment variables

### Dev Dependencies
- webpack & webpack-cli: Module bundling
- babel: JavaScript transpilation
- @biomejs/biome: Linting and formatting

## Support

**Original Project:** Destiny Rise 6.0 by @razzlerazing2
**Contributors:** @467riguy8

For issues related to the Replit setup, check the workflow logs in the Replit interface.
