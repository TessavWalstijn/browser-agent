# Browser Agent Changelog

## Release [v3.0.0](https://github.com/TessavWalstijn/browser-agent/releases/tag/v2.0.2) - 2024-02-09

### Added

- npm package `browser-agent/collection`
  the place for the userAgent collection
- Changelog

### Removed

- userAgent collection from npm package `browser-agent`
  (breaking change if you used the userAgent collection)

## Release [v2.0.2](https://github.com/TessavWalstijn/browser-agent/releases/tag/v2.0.2) - 2024-02-06

### Added

- Package.json types path for TypeScript

### Fixed

- Package.json require and import paths

## Release [v2.0.1](https://github.com/TessavWalstijn/browser-agent/releases/tag/v2.0.1) - 2024-02-06

### Added

- Contribution Guidelines
- Code of Conduct

### Fixed

- Testing step in publish pipeline
- Actual build files in package

## Release [v2.0.0](https://github.com/TessavWalstijn/browser-agent/releases/tag/v2.0.0) - 2024-02-03

### Added

- Builds for npm
  - CJS version
  - ESM version
- Tests
  - Build test on CJS
  - Build test on ESM
  - Chrome test
  - Edge test
  - Firefox test
  - Internet Explorer test
  - Safari test
- userAgents (3234 of them!)

### Changed

- v1.0.1 moved to `./classic` folder
- Original functions rewritten to TypeScript
  - Browsers
    - Chrome
    - Edge
    - Firefox
    - Internet Explorer
    - Safari
  - Operating Systems
    - Windows
    - Mac OS
    - Ubuntu
    - Fedora
    - Red Hat
    - Linux Mint
    - CentOS
    - Debian
    - Linux
    - Android
    - iOS
    - iPadOS
    - Unix

## Release [v1.0.1](https://github.com/TessavWalstijn/browser-agent/releases/tag/v1.0.1) - 2022-12-26

### Fixed

- Typo in Firefox.js 

## Release [v1.0.0](https://github.com/TessavWalstijn/browser-agent/releases/tag/v1.0.0) - 2022-12-26

### Added

- **Browsers:**
  - Chrome
  - Edge
  - Firefox
  - IE
  - Safari
- **Operating Systems:**
  - Windows
  - Mac OS
  - Ubuntu
  - Fedora
  - Red Hat
  - Linux Mint
  - CentOS
  - Debian
  - Linux
  - Android
  - iOS
  - Unix
