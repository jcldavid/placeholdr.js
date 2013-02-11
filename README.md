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

### Parameters

<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Default Value</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>text</td>
        <td>No</td>
        <td><code>$heightx$width</code></td>
        <td>text of the placeholder</td>
    </tr>
    <tr>
        <td>bg</td>
        <td>No</td>
        <td><code>#aaa</code></td>
        <td>background color</td>
    </tr>
    <tr>
        <td>fg</td>
        <td>No</td>
        <td><code>#fff</code></td>
        <td>foreground color</td>
    </tr>
    <tr>
        <td>fs</td>
        <td>No</td>
        <td><code>40</code></td>
        <td>font size</td>
    </tr>
</table>
