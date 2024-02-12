// Context.jsx,Parent.jsx,UseContext are part of usecontext hook concept

// CONTEXT IS USED TO PASS DATA OR STATE TO COMPONENT TREE WITHOUT USING PROPS

// WITH THE HELP OF THIS CONTEXT AND USECONTEXT WE CAN MANAGE THE STATE GLOBALLY

// COMPONENTS WHICH NEEDS THE VALUES FROM THE CONTEXT THOSE SHOULD BE RETURN INSIDE context.provider.

import { createContext } from "react"

export const UserContext=createContext(null);