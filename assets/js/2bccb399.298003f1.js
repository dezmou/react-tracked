"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[325],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9851:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),c=n(4996),i=["components"],l={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},s=void 0,u={unversionedId:"debugging",id:"debugging",title:"Debugging",description:"React Tracked uses native React state and context,",source:"@site/docs/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/debugging",tags:[],version:"current",frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging"},sidebar:"docs",previous:{title:"Recipes",permalink:"/docs/recipes"},next:{title:"Caveats",permalink:"/docs/caveats"}},p=[{value:"React DevTools",id:"react-devtools",children:[],level:2},{value:"useTrackedState (AffectedDebugValue)",id:"usetrackedstate-affecteddebugvalue",children:[],level:2},{value:"useSelector",id:"useselector",children:[],level:2},{value:"Naive logging",id:"naive-logging",children:[],level:2}],d={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React Tracked uses native React state and context,\nand the debugging method is basically the same as pure React."),(0,o.kt)("h2",{id:"react-devtools"},"React DevTools"),(0,o.kt)("p",null,"React officially provides its DevTools\n",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2019/08/15/new-react-devtools.html"},"[1]"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/master/packages/react-devtools"},"[2]"),"."),(0,o.kt)("p",null,"Basically, you can use the tool just like a pure React app.\nOne note with React Tracked is that a state object stays\nin the Provider component."),(0,o.kt)("p",null,"For example, if you create a container like this,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const useValue = () => useReducer(reducer, initialState);\nexport const { Provider, useTracked } = createContainer(useValue);\n")),(0,o.kt)("p",null,"your state will be in Provider / Value / Reducer."),(0,o.kt)("img",{alt:"screenshot 1",src:(0,c.Z)("img/devtools_screen1.png")}),(0,o.kt)("h2",{id:"usetrackedstate-affecteddebugvalue"},"useTrackedState (AffectedDebugValue)"),(0,o.kt)("p",null,"The very specific usage of the DevTools is for ",(0,o.kt)("inlineCode",{parentName:"p"},"useTrackedState"),".\nIn the development mode, the tracked path list of a state\ncan be investigated with ",(0,o.kt)("inlineCode",{parentName:"p"},"AffectedDebugValue"),"."),(0,o.kt)("p",null,"Find it under TrackedState / TrackedState / AffectedDebugValue / DebugValue."),(0,o.kt)("img",{alt:"screenshot 2",src:(0,c.Z)("img/devtools_screen2.png")}),(0,o.kt)("h2",{id:"useselector"},"useSelector"),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelector"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"useDebugValue")," on your end.\nFor example, the following is to show a selected value in the DevTools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const selectPerson = state => state.person;\nconst Person = () => {\n  const person = useSelector(selectPerson);\n  useDebugValue(person);\n  ...\n};\n")),(0,o.kt)("h2",{id:"naive-logging"},"Naive logging"),(0,o.kt)("p",null,"If you prefer console.log style debugging,\nhere's a recipe for that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const reducer = ...;\nconst initialState = ...;\n\nconst useValue = () => {\n  const [state, dispatch] = useReducer(reducer, null, init);\n  useEffect(() => {\n    console.log('state', state);\n  }, [state]);\n  const dispatchWithLogging = useCallback((action) => {\n    console.log('action', action);\n    dispatch(action);\n  }, []);\n  return [state, dispatchWithLogging];\n};\n\nconst {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(useValue);\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")))}g.isMDXComponent=!0}}]);