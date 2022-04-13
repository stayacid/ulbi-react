import React from "react";
import classes from './MainInput.module.css';

// когда нужно использовать компонент с рефом
const MainInput = React.forwardRef((props, ref) => {

  return (
    <input
      ref={ref}
      className={classes.mainInput}
      type="text"
      placeholder="Название поста"
    />
  )
})

export default MainInput;