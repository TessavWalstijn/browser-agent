# Check Operating System, Browser Type and Version

### Indexed browsers:

- Chrome
- Edge
- Firefox
- IE
- Safari

### Indexed operating systems:

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

const shortcutToolTipLabel = (event: Keyboard) => {
  const alt = `${detectMac(userAgent) ? '⌥' : 'alt'}`
  const shift = `${detectMac(userAgent) ? '⇧' : 'shift'}`
  return `${alt} + ${shift} + T`
}
```

## How to contribute

Before starting, please read our [Code of Conduct](./CODE_OF_CONDUCT./) and [Contributing Guidelines](./CONTRIBUTING_GUIDELINES.md) for detailed information and instructions on contributing to this repository.


