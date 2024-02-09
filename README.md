# Check Operating System, Browser Type and Version

### Browser checks:

- Chrome
- Edge
- Firefox
- IE
- Safari

### Operating System checks:

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

---

## How to use

```ts
import { detectMac } from 'browser-agent'

const shortcutToolTipLabel = (event: Keyboard) => {
  const alt = `${detectMac(userAgent) ? '⌥' : 'alt'}`
  const shift = `${detectMac(userAgent) ? '⇧' : 'shift'}`
  return `${alt} + ${shift} + T`
}
```

```cjs
const browserAgent = require('browser-agent')
const { detectMac } = browserAgent

const shortcutToolTipLabel = (event) => {
  const alt = `${detectMac(userAgent) ? '⌥' : 'alt'}`
  const shift = `${detectMac(userAgent) ? '⇧' : 'shift'}`
  return `${alt} + ${shift} + T`
}
```

## Browser Agent packages notice

The npm packages:
- `browser-agent`
- `browser-agent/collection`

Have the same version to garuntee compatibility with each other.

## How to contribute

Before starting, please read our [Code of Conduct](./CODE_OF_CONDUCT./) and [Contributing Guidelines](./CONTRIBUTING_GUIDELINES.md) for detailed information and instructions on contributing to this repository.
