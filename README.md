# React help commands

This extension is a collection of usefull commands for speed up work with react

## Commands

### Create react component template
Adds in the open file a base component structure as a function component

Examples:

```js
import React, { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

const Component = () => {

  return null
}

Component.propTypes = {

}

Component.defaultProps = {

}

export default Component
```

### Create useState
This command transforms selection into useState expression.

Examples:
| Input       | Output                                                |
| ---         | ---                                                   |
|`dialogState`|`const [dialogState, setDialogState] = useState(null)` |
