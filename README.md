placeholdr
---
Simple Node.js image placeholder server

### Usage

1. Install dependencies

```bash
npm install
```

2. Run the server

```bash
node app

#or

foreman start
```

### Parameters (Optional)

**text**

- change the text of the placeholder. 
- default: `$height + 'x' + $width`

**bg**

- change background color.
- default: `#aaa`

**fg**

- change foreground color.
- default: `#fff`

**fs**

- change font size
- default: `40`