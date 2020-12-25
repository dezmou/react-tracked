(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(91)),o=n(98),i={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},s={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"Debugging",description:"React Tracked uses native React state and context,",source:"@site/docs/debugging.md",slug:"/debugging",permalink:"/docs/debugging",version:"current",sidebar_label:"Debugging",sidebar:"docs",previous:{title:"Recipes",permalink:"/docs/recipes"},next:{title:"Caveats",permalink:"/docs/caveats"}},u=[{value:"React DevTools",id:"react-devtools",children:[]},{value:"useTrackedState (AffectedDebugValue)",id:"usetrackedstate-affecteddebugvalue",children:[]},{value:"useSelector",id:"useselector",children:[]},{value:"Naive logging",id:"naive-logging",children:[]}],l={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"React Tracked uses native React state and context,\nand the debugging method is basically the same as pure React."),Object(c.b)("h2",{id:"react-devtools"},"React DevTools"),Object(c.b)("p",null,"React officially provides its DevTools\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/blog/2019/08/15/new-react-devtools.html"}),"[1]"),"\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/react/tree/master/packages/react-devtools"}),"[2]"),"."),Object(c.b)("p",null,"Basically, you can use the tool just like a pure React app.\nOne note with React Tracked is that a state object stays\nin the Provider component."),Object(c.b)("p",null,"For example, if you create a container like this,"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const useValue = () => useReducer(reducer, initialState);\nexport const { Provider, useTracked } = createContainer(useValue);\n")),Object(c.b)("p",null,"your state will be in Provider / Value / Reducer."),Object(c.b)("img",{alt:"screenshot 1",src:Object(o.a)("img/devtools_screen1.png")}),Object(c.b)("h2",{id:"usetrackedstate-affecteddebugvalue"},"useTrackedState (AffectedDebugValue)"),Object(c.b)("p",null,"The very specific usage of the DevTools is for ",Object(c.b)("inlineCode",{parentName:"p"},"useTrackedState"),".\nIn the development mode, the tracked path list of a state\ncan be investigated with ",Object(c.b)("inlineCode",{parentName:"p"},"AffectedDebugValue"),"."),Object(c.b)("p",null,"Find it under TrackedState / TrackedState / AffectedDebugValue / DebugValue."),Object(c.b)("img",{alt:"screenshot 2",src:Object(o.a)("img/devtools_screen2.png")}),Object(c.b)("h2",{id:"useselector"},"useSelector"),Object(c.b)("p",null,"If you are using ",Object(c.b)("inlineCode",{parentName:"p"},"useSelector"),", you can use ",Object(c.b)("inlineCode",{parentName:"p"},"useDebugValue")," on your end.\nFor example, the following is to show a selected value in the DevTools."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const selectPerson = state => state.person;\nconst Person = () => {\n  const person = useSelector(selectPerson);\n  useDebugValue(person);\n  ...\n};\n")),Object(c.b)("h2",{id:"naive-logging"},"Naive logging"),Object(c.b)("p",null,"If you prefer console.log style debugging,\nhere's a recipe for that."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const reducer = ...;\nconst initialState = ...;\n\nconst useValue = () => {\n  const [state, dispatch] = useReducer(reducer, null, init);\n  useEffect(() => {\n    console.log('state', state);\n  }, [state]);\n  const dispatchWithLogging = useCallback((action) => {\n    console.log('action', action);\n    dispatch(action);\n  }, []);\n  return [state, dispatchWithLogging];\n};\n\nconst {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(useValue);\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,g=b["".concat(o,".").concat(p)]||b[p]||d[p]||c;return n?a.a.createElement(g,i(i({ref:t},u),{},{components:n})):a.a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(22),a=n(100);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}}}]);