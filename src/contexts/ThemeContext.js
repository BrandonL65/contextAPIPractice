import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = { 
    LightTheme: true,
    light: {bg: "#eed"},
    dark: {bg: "444"}
  }
  render() { 
    return ( 
      <ThemeContext.Provider value = {{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
 
export default ThemeContextProvider;