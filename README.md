# react-multiple-component-lp

> Is a multiple component of react, for example: input, textarea, etc

[![NPM](https://img.shields.io/npm/v/react-multiple-component-lp.svg)](https://www.npmjs.com/package/react-multiple-component-lp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-multiple-component-lp
```

## Usage

```jsx
import React, { Component } from 'react'

import {InputField , TextAreaField} from 'react-multiple-component-lp'

class Example extends Component {
  render () {
    return (
      <InputField
          label="Nombres"
          wrapperClass="Holi"
          type="text"
          text="Modern React component module"
          required
        />
        <TextAreaField
          label="Apellidos"
          wrapperClass="Holi"
          type="text"
          text="Modern React component module"
          required
        />
    )
  }
}
```

## License

MIT © [BrayanLP](https://github.com/BrayanLP)
