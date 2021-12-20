"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[590],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(k,i(i({ref:t},l),{},{components:n})):a.createElement(k,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),i=["components"],o={id:"recipes",title:"Recipes",sidebar_label:"Recipes"},c=void 0,u={unversionedId:"recipes",id:"recipes",title:"Recipes",description:"React Tracked provides a primitive API,",source:"@site/docs/recipes.md",sourceDirName:".",slug:"/recipes",permalink:"/docs/recipes",tags:[],version:"current",frontMatter:{id:"recipes",title:"Recipes",sidebar_label:"Recipes"},sidebar:"docs",previous:{title:"API",permalink:"/docs/api"},next:{title:"Debugging",permalink:"/docs/debugging"}},l=[{value:"Recipes for createContainer",id:"recipes-for-createcontainer",children:[{value:"useReducer (props)",id:"usereducer-props",children:[],level:3},{value:"useReducer (embedded)",id:"usereducer-embedded",children:[],level:3},{value:"useState (props)",id:"usestate-props",children:[],level:3},{value:"useState (empty object)",id:"usestate-empty-object",children:[],level:3},{value:"useReducer (with persistence)",id:"usereducer-with-persistence",children:[],level:3},{value:"useState (with propState)",id:"usestate-with-propstate",children:[],level:3},{value:"useReducer (with event listener)",id:"usereducer-with-event-listener",children:[],level:3},{value:"useState (with update functions)",id:"usestate-with-update-functions",children:[],level:3}],level:2},{value:"Recipes for useTrackedState and useTracked",id:"recipes-for-usetrackedstate-and-usetracked",children:[{value:"useSelectorWithTracking",id:"useselectorwithtracking",children:[],level:3},{value:"useTrackedByName (based on useState)",id:"usetrackedbyname-based-on-usestate",children:[],level:3},{value:"useTrackedWithImmer (based on useState)",id:"usetrackedwithimmer-based-on-usestate",children:[],level:3}],level:2},{value:"Recipes for useUpdate (useDispatch)",id:"recipes-for-useupdate-usedispatch",children:[{value:"useSafeDispatch",id:"usesafedispatch",children:[],level:3}],level:2}],d={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"React Tracked provides a primitive API,\nand there are various ways to use it for apps."),(0,s.kt)("h2",{id:"recipes-for-createcontainer"},"Recipes for createContainer"),(0,s.kt)("p",null,"The argument ",(0,s.kt)("inlineCode",{parentName:"p"},"useValue")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"createContainer")," is so flexible\nand there are various usages."),(0,s.kt)("h3",{id:"usereducer-props"},"useReducer (props)"),(0,s.kt)("p",null,"This is the most typical usage.\nYou define a generic reducer and pass ",(0,s.kt)("inlineCode",{parentName:"p"},"reducer")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"initialState")," as props."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(({ reducer, initialState, init }) => useReducer(reducer, initialState, init));\n\nconst reducer = ...;\n\nconst App = ({ initialState }) => (\n  <Provider reducer={reducer} initialState={initialState}>\n    ...\n  </Provider>\n);\n")),(0,s.kt)("h3",{id:"usereducer-embedded"},"useReducer (embedded)"),(0,s.kt)("p",null,"For most cases, you would have a static reducer.\nIn this case, define useValue with the reducer in advance.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"initialState")," can be defined in useValue like the following example,\nor can be taken from props: ",(0,s.kt)("inlineCode",{parentName:"p"},"({ initialState }) => useReducer(...)")),(0,s.kt)("p",null,"This is good for TypeScript because the hooks returned by ",(0,s.kt)("inlineCode",{parentName:"p"},"createContainer")," is already typed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const reducer = ...;\nconst initialState = ...;\n\nconst {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(() => useReducer(reducer, initialState));\n\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")),(0,s.kt)("h3",{id:"usestate-props"},"useState (props)"),(0,s.kt)("p",null,"If you don't need reducer, useState would be simpler."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(({ initialState }) => useState(initialState);\n\n\nconst App = ({ initialState }) => (\n  <Provider initialState={initialState}>\n    ...\n  </Provider>\n);\n")),(0,s.kt)("h3",{id:"usestate-empty-object"},"useState (empty object)"),(0,s.kt)("p",null,"You could even start with completely an empty object."),(0,s.kt)("p",null,"This might not be TypeScript friendly. Although, you could do this: ",(0,s.kt)("inlineCode",{parentName:"p"},"useState<State>({})")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(() => useState({});\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")),(0,s.kt)("h3",{id:"usereducer-with-persistence"},"useReducer (with persistence)"),(0,s.kt)("p",null,"Here's how to persist state in localStorage."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const reducer = ...;\nconst initialState = ...; // used only if localStorage is empty.\nconst storageKey = 'persistedState';\n\nconst init = () => {\n  let preloadedState;\n  try {\n    preloadedState =  JSON.parse(window.localStorage.getItem(storageKey));\n    // validate preloadedState if necessary\n  } catch (e) {\n    // ignore\n  }\n  return preloadedState || initialState;\n};\n\nconst useValue = () => {\n  const [state, dispatch] = useReducer(reducer, null, init);\n  useEffect(() => {\n    window.localStorage.setItem(storageKey, JSON.stringify(state));\n  }, [state]);\n  return [state, dispatch];\n};\n\nconst {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(useValue);\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")),(0,s.kt)("p",null,"Using async storage is a bit tricky.\nSee ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/dai-shi/react-tracked/issues/8#issuecomment-548095476"},"the thread")," for an example."),(0,s.kt)("h3",{id:"usestate-with-propstate"},"useState (with propState)"),(0,s.kt)("p",null,"If you already have a state and would like to use Provider with it,\nyou can sync a container state with a state from props."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const useValue = ({ propState }) => {\n  const [state, setState] = useState(propState);\n  useEffect(() => { // or useLayoutEffect\n    setState(propState);\n  }, [propState]);\n  return [state, setState];\n};\n\nconst {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(useValue);\n\nconst App = ({ propState }) => (\n  <Provider propState={propState}>\n    ...\n  </Provider>\n);\n")),(0,s.kt)("p",null,"Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"propState")," has to be updated immutably."),(0,s.kt)("h3",{id:"usereducer-with-event-listener"},"useReducer (with event listener)"),(0,s.kt)("p",null,"Here's how to dispatch actions by DOM events."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const reducer = ...;\nconst initialState = ...;\n\nconst useValue = () => {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  useEffect(() => {\n    const listener = () => {\n      dispatch({\n        type: 'WINDOW_RESIZED',\n        width: window.innerWidth,\n        height: window.innerHeight,\n      });\n    };\n    window.addEventListener('resize', listener);\n    return () => {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  return [state, dispatch];\n};\n\nconst {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(useValue);\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")),(0,s.kt)("h3",{id:"usestate-with-update-functions"},"useState (with update functions)"),(0,s.kt)("p",null,"If you want to have custom update functions,\nyou can store them in a state object.\nBe sure to use ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"useMemo"),"\nto make the state object stable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const useValue = () => {\n  const [count, setCount] = useState(0);\n  const increment = useCallack(() => setCount((c) => c + 1), []);\n  const decrement = useCallack(() => setCount((c) => c - 1), []);\n  const state = useMemo(() => ({\n    count,\n    increment,\n    decrement,\n  }, [count, increment, decrement]);\n  return [state, () => { throw new Error('use functions in the state') }];\n};\n\nconst {\n  Provider,\n  useTrackedState,\n} = createContainer(useValue);\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")),(0,s.kt)("p",null,"Note: With custom update functions, you don't get the benefit\neven if you enable ",(0,s.kt)("inlineCode",{parentName:"p"},"concurrentMode")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"createContainer"),"."),(0,s.kt)("h2",{id:"recipes-for-usetrackedstate-and-usetracked"},"Recipes for useTrackedState and useTracked"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"useTrackedState")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"useTracked")," hooks are useful as is,\nbut new hooks can also be created based on them."),(0,s.kt)("h3",{id:"useselectorwithtracking"},"useSelectorWithTracking"),(0,s.kt)("p",null,"Selector interface is useful to share selection logic.\nYou can create a selector hook with state usage tracking very easily."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const useSelectorWithTracking = selector => selector(useTrackedState());\n")),(0,s.kt)("p",null,"Note: This is different from ",(0,s.kt)("inlineCode",{parentName:"p"},"useSelector")," which has no tracking support\nand triggers re-render based on the ref equality of selected value."),(0,s.kt)("h3",{id:"usetrackedbyname-based-on-usestate"},"useTrackedByName (based on useState)"),(0,s.kt)("p",null,"Sometimes, you might want to select a state by its property name.\nHere's a custom hook to return a tuple ",(0,s.kt)("inlineCode",{parentName:"p"},"[value, setValue]")," selected by a name."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const useTrackedByName = (name) => {\n  const [state, setState] = useTracked();\n  const update = useCallback((newVal) => {\n    setState(oldVal => ({\n      ...oldVal,\n      [name]: typeof newVal === 'function' ? newVal(oldVal[name]) : newVal,\n    }));\n  }, [setState, name]);\n  return [state[name], update];\n};\n")),(0,s.kt)("h3",{id:"usetrackedwithimmer-based-on-usestate"},"useTrackedWithImmer (based on useState)"),(0,s.kt)("p",null,"Updating a property deep in a state object is troublesome.\nHere's a custom hook to use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer")," for setState."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import produce from 'immer';\n\nconst useTrackedWithImmer = () => {\n  const [state, setState] = useTracked();\n  const update = useCallback((updater) => {\n    setState(oldVal => produce(oldVal, updater));\n  }, [setState]);\n  return [state, update];\n};\n")),(0,s.kt)("p",null,"Note: This can also be done at ",(0,s.kt)("inlineCode",{parentName:"p"},"createContainer"),"."),(0,s.kt)("h2",{id:"recipes-for-useupdate-usedispatch"},"Recipes for useUpdate (useDispatch)"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"useUpdate")," simply returns the second item\nin a tuple returned by ",(0,s.kt)("inlineCode",{parentName:"p"},"useState")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"useReducer"),".\nIt can also be extended as a custom hook."),(0,s.kt)("h3",{id:"usesafedispatch"},"useSafeDispatch"),(0,s.kt)("p",null,"This is a modified version of useDispatch that calls ",(0,s.kt)("inlineCode",{parentName:"p"},"getUntrackedObject"),"\nrecursively on an action object before dispatching it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getUntrackedObject } from 'react-tracked';\n\nconst untrackDeep = (obj) => {\n  if (typeof obj !== 'object' || obj === null) return obj;\n  const untrackedObj = getUntrackedObject(obj);\n  if (untrackedObj !== null) return untrackedObj;\n  const newObj = {};\n  let modified = false;\n  Object.entries(obj).forEach(([k, v]) => {\n    newObj[k] = untrackDeep(v);\n    if (newObj[k] !== null) {\n      modified = true;\n    } else {\n      newObj[k] = v;\n    }\n  });\n  return modified ? newObj : obj;\n};\n\nconst useSafeDispatch = () => {\n  const dispatch = useDispatch();\n  return useCallback((action) => {\n    dispatch(untrackDeep(action));\n  }, [dispatch]);\n};\n")))}p.isMDXComponent=!0}}]);