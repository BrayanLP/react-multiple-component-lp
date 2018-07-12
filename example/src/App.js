import React, { Component } from 'react';

import { InputField, TextAreaField } from 'react-multiple-component-lp';

export default class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
