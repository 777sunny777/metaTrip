"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[902],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return t?o.createElement(k,s(s({ref:n},p),{},{components:t})):o.createElement(k,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9930:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return p},toc:function(){return c},default:function(){return m}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),s=["components"],i={slug:"storybook-usage2",title:"How to use Storybook 2",authors:["sheldon"],tags:["storybook","react"]},l=void 0,d={permalink:"/metaTrip/build/blog/storybook-usage2",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-09-storybook2.mdx",source:"@site/blog/2022-01-09-storybook2.mdx",title:"How to use Storybook 2",description:"- \u8fd9\u7bc7blog\u662fstorybook\u7684\u5165\u95e8\u6559\u7a0b\u5e76\u4e14\u5305\u542b\u4e86\u6211\u4f7f\u7528storybook 3\u5e74\u591a\u7684\u4e00\u4e9b\u4f53\u9a8c",date:"2022-01-09T00:00:00.000Z",formattedDate:"January 9, 2022",tags:[{label:"storybook",permalink:"/metaTrip/build/blog/tags/storybook"},{label:"react",permalink:"/metaTrip/build/blog/tags/react"}],readingTime:5.885,truncated:!1,authors:[{name:"Sheldon Y Sun",title:"Jser @ Open Source Community",url:"https://github.com/777sunny777",imageURL:"https://github.com/777sunny777.png",key:"sheldon"}],prevItem:{title:"\u5e38\u89c1\u5bbd\u57fa\u6307\u6570\u57fa\u91d1(\u4e00)",permalink:"/metaTrip/build/blog/funding-basic2"},nextItem:{title:"\u8d44\u4ea7\u4e0e\u6307\u6570",permalink:"/metaTrip/build/blog/funding-basic1"}},p={authorsImageUrls:[void 0]},c=[{value:"4. Configure",id:"4-configure",children:[{value:"4-1. main.js",id:"4-1-mainjs",children:[{value:"On-demand story loading\uff1a",id:"on-demand-story-loading",children:[],level:4}],level:3},{value:"4-2. preview.js",id:"4-2-previewjs",children:[],level:3},{value:"4-3. manager.js",id:"4-3-managerjs",children:[],level:3}],level:2},{value:"5. Essential addons and Addons",id:"5-essential-addons-and-addons",children:[{value:"5-1. Essential addons",id:"5-1-essential-addons",children:[],level:3},{value:"5-2. Install 3rd party addons",id:"5-2-install-3rd-party-addons",children:[{value:"Using addons",id:"using-addons",children:[],level:4}],level:3},{value:"5-3. \u81ea\u5b9a\u4e49addons",id:"5-3-\u81ea\u5b9a\u4e49addons",children:[],level:3}],level:2},{value:"6. CLI options",id:"6-cli-options",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u7bc7blog\u662fstorybook\u7684\u5165\u95e8\u6559\u7a0b\u5e76\u4e14\u5305\u542b\u4e86\u6211\u4f7f\u7528storybook 3\u5e74\u591a\u7684\u4e00\u4e9b\u4f53\u9a8c "),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u9488\u5bf9React\u9879\u76ee"),(0,r.kt)("li",{parentName:"ul"},"\u8fdb\u4e00\u6b65\u5b66\u4e60\uff0c\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"li",href:"https://storybook.js.org/"},"Storybook\u5b98\u7f51"))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation."),(0,r.kt)("p",null,"\u4eceStorybook\u7684\u5b98\u65b9\u63cf\u8ff0\u6765\u770b\uff0c\u4ed6\u662f\u7528\u4e8e\u5feb\u901f\u6784\u5efaUI demo\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u7528\u6237\u5feb\u901f\u6784\u5efa\u9875\u9762\uff1b\u5e76\u4e14\u6709\u5f88\u597d\u7684\u8bed\u6cd5\u529f\u80fd\uff0c\u8f7b\u677e\u4e66\u5199demo\uff1b\u8fd8\u6709\u5f88\u597d\u7684\u8f85\u52a9\u63d2\u4ef6\uff0c\n\u6bd4\u5982demo\u7684\u6587\u6863\u8f85\u52a9\uff0c\u53c2\u6570\u8f85\u52a9\uff0c\u8fd8\u6709accessibility\u8f85\u52a9\u6d4b\u8bd5\u7b49\u7b49\u3002\u8fd9\u4e00\u5207\u51e0\u4e4e\u4fc3\u4f7f\u5b83\u6210\u4e3a\u4e86\u9879\u76eedemo\u7684\u6700\u597d\u9009\u62e9\u3002\u56e0\u4e3a\u6211\u7684\u9879\u76ee\u6d89\u53ca\u5230\u7ec4\u4ef6\u5e93\u7684\u5f00\u53d1\uff0c\n\u6240\u4ee5storybook\u5c31\u66f4\u663e\u5f97\u5408\u9002\u548c\u91cd\u8981\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"version: v6.4.9(Currently) and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/releases"},"Latest"))))),(0,r.kt)("p",null,"Storybook \u4ee3\u7801\u5e93\u66f4\u65b0\u5f88\u6d3b\u8dc3\uff0c\u51e0\u4e4e\u4e00\u5e74\u4e00\u6b21major\u7248\u672c\u7684\u66f4\u65b0\uff0c\u603b\u4f1a\u5e26\u6765\u4e9b\u65b0\u7684\u529f\u80fd\uff0c\u8fd9\u7bc7blog\u6211\u4eec\u90a3\u76ee\u524d\u6700\u65b0\u7248\u672cv6.4.9 \u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e"),(0,r.kt)("h2",{id:"4-configure"},"4. Configure"),(0,r.kt)("p",null,"Storybook is configured via a folder called .storybook, which contains various configuration files."),(0,r.kt)("p",null,"Storybook\u914d\u7f6e\u6587\u4ef6\u4e00\u822c\u662f\u653e\u5728.storybook\u7684\u6587\u4ef6\u5939\u4e0b\u9762\uff0c\u901a\u8fc7-c\u4e5f\u53ef\u4ee5\u8fdb\u884c\u8def\u5f84\u914d\u7f6e\u3002\u4e3b\u8981\u5305\u542b\u5982\u4e0b\u4e09\u4e2a\u6587\u4ef6\uff1amain.js preview.js and manager.js\n",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/configure/overview"},"Detials")),(0,r.kt)("h3",{id:"4-1-mainjs"},"4-1. main.js"),(0,r.kt)("p",null,"The main configuration file is main.js."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"This file controls the Storybook server's behavior, so you must restart Storybook\u2019s process when you change it.")))),(0,r.kt)("p",null,"The main.js configuration file is a preset and, as such, has a powerful interface, but the key fields within it are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stories: \u4e3b\u8981\u662f\u914d\u7f6estorie cases\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u662f\u6587\u4ef6\u540d\u4e2d\u5e26\u6709 stories \u7684\u6587\u4ef6\uff0c\u6587\u4ef6\u8def\u5f84\uff0c\u6587\u4ef6\u540d\u89c4\u5219\uff0c\u6587\u4ef6\u540e\u7f00\u90fd\u662f\u53ef\u914d\u7f6e\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"addons - \u914d\u7f6e\u4e00\u4e0b\u9875\u9762\u4e2d\u9700\u8981\u7528\u5230\u7684addons."),(0,r.kt)("li",{parentName:"ul"},"webpackFinal - \u81ea\u5b9a\u4e49\u7684 webpack configuration."),(0,r.kt)("li",{parentName:"ul"},"babel - \u81ea\u5b9a\u4e49\u7684 babel configuration.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// .storybook/main.js\n\nmodule.exports = {\n  stories: ['../packages/MyStories'],\n  addons: ['@storybook/addon-essentials'],\n  webpackFinal: async (config, { configType }) => {\n    config.module.rules.push({\n      test: /\\.scss$/,\n      use: ['style-loader', 'css-loader', 'sass-loader'],\n      include: path.resolve(__dirname, '../'),\n    });\n\n    return config;\n  },\n    babel: async (options) => ({\n    ...options,\n    // any extra options you want to set\n  })\n};\n\n")),(0,r.kt)("h4",{id:"on-demand-story-loading"},"On-demand story loading\uff1a"),(0,r.kt)("p",null,"\u6309\u9700\u52a0\u8f7dstories\uff0c\u8fdb\u884c\u6027\u80fd\u63d0\u5347\uff0c",(0,r.kt)("strong",{parentName:"p"},"Starting with Storybook 6.4"),", you can optimize your story loading by enabling the storyStoreV7 feature flag in your configuration as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// .storybook/main.js\n\nmodule.exports = {\n  stories: [],\n  addons: ['@storybook/addon-essentials'],\n  features: {\n    storyStoreV7: true,\n  },\n};\n\n")),(0,r.kt)("h3",{id:"4-2-previewjs"},"4-2. preview.js"),(0,r.kt)("p",null,"To control the way stories are rendered and add global decorators and parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is loaded in the Canvas tab"),(0,r.kt)("li",{parentName:"ul"},"Use preview.js for global code that applies to all stories.")),(0,r.kt)("p",null,"The preview.js file can be an ES module and export the following keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"decorators\uff1a\u5305\u542b\u9875\u9762\u7ed3\u6784\u548c\u5168\u5c40\u6837\u5f0f\uff0c\u90fd\u53ef\u4ee5\u5728decorators\u4e2d\u5b9a\u4e49"),(0,r.kt)("li",{parentName:"ul"},"parameters\uff1a\u4e00\u822c\u53ef\u4ee5\u914d\u7f6e\u5168\u5c40\u7684docs\u548caction\uff0cbackground"),(0,r.kt)("li",{parentName:"ul"},"globalTypes: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// .storybook/preview.js\n\n// createGlobalStyle from styled-component\nimport GlobalStyles from './GlobalStyles';\n\nexport const decorators = [\n  (Story) => (\n    <GlobalStyles />\n    <div style={{ margin: '3em' }}>\n      <Story />\n    </div>\n  ),\n];\n\nexport const parameters = {\n  backgrounds: {\n    values: [\n      { name: 'red', value: '#f00' },\n      { name: 'green', value: '#0f0' },\n    ],\n  },\n};\n\nexport const globalTypes = {\n  theme: {\n    name: 'Theme',\n    description: 'Global theme for components',\n    defaultValue: 'light',\n    toolbar: {\n      icon: 'circlehollow',\n      // Array of plain string values or MenuItem shape (see below)\n      items: ['light', 'dark'],\n      // Property that specifies if the name of the item will be displayed\n      showName: true,\n    },\n  },\n};\n\n")),(0,r.kt)("h3",{id:"4-3-managerjs"},"4-3. manager.js"),(0,r.kt)("p",null,"To control the layout of Storybook\u2019s UI you can use addons.setConfig in your .storybook/manager.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// .storybook/manager.js\n\nimport { addons } from '@storybook/addons';\n\naddons.setConfig({\n  isFullscreen: false,\n  showNav: true,\n  showPanel: true,\n  panelPosition: 'bottom',\n  enableShortcuts: true,\n  isToolshown: true,\n  theme: undefined,\n  selectedPanel: undefined,\n  initialActive: 'sidebar',\n  sidebar: {\n    showRoots: false,\n    collapsedRoots: ['other'],\n  },\n  toolbar: {\n    title: { hidden: false, },\n    zoom: { hidden: false, },\n    eject: { hidden: false, },\n    copy: { hidden: false, },\n    fullscreen: { hidden: false, },\n  },\n});\n\n")),(0,r.kt)("h2",{id:"5-essential-addons-and-addons"},"5. Essential addons and Addons"),(0,r.kt)("p",null,"Storybook\u5728\u53d1\u5c55\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5438\u6536\u4e00\u4e9b\u5e38\u7528\u7684addon\uff0c\u4f5c\u4e3a\u6846\u67b6\u9884\u5236\u7684addon\uff0c\u8fd9\u4e2a\u5c31\u662fEssential addons and Addons\u7684\u533a\u522b\u3002\n\u4f4e\u7248\u672c\u7684control \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a@storybook/addon-knobs\uff0c\u5728V6\u7248\u672c\u53ef\u4ee5\u5185\u7f6e\u751f\u6210\u4e86\u3002\u4f46\u662f\u8fd9\u4e2a\u63d2\u4ef6\u672c\u8eab\u76ee\u524d\u662f\u5411\u4e0b\u517c\u5bb9\u7684"),(0,r.kt)("h3",{id:"5-1-essential-addons"},"5-1. Essential addons"),(0,r.kt)("p",null,"If you're upgrading from a previous Storybook version, you'll need to run the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"#With npm\nnpm install -D @storybook/addon-essentials\n\n#With yarn\nyarn add -D @storybook/addon-essentials\n\n// .storybook/main.js\n\nmodule.exports = {\n  addons: ['@storybook/addon-essentials'],\n};\n\n")),(0,r.kt)("p",null,"There are many third-party addons as well as \u201cofficial\u201d addons developed by the Storybook core team.\u3001\n",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/introduction"},"Detials")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docs"),(0,r.kt)("li",{parentName:"ul"},"Controls"),(0,r.kt)("li",{parentName:"ul"},"Actions"),(0,r.kt)("li",{parentName:"ul"},"Viewport"),(0,r.kt)("li",{parentName:"ul"},"Backgrounds"),(0,r.kt)("li",{parentName:"ul"},"Toolbars & globals"),(0,r.kt)("li",{parentName:"ul"},"Measure"),(0,r.kt)("li",{parentName:"ul"},"Outline")),(0,r.kt)("h3",{id:"5-2-install-3rd-party-addons"},"5-2. Install 3rd party addons"),(0,r.kt)("p",null,"Storybook has ",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/addons"},"hundreds of reusable addons")," that are packaged as NPM modules."),(0,r.kt)("h4",{id:"using-addons"},"Using addons"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/addons/install-addons#using-addons"},"Detials")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"\nyarn add -D @storybook/addon-a11y\n\n// .storybook/main.js\n\nmodule.exports = {\n  stories: [],\n  addons: [\n    // Other Storybook addons\n    '@storybook/addon-a11y', //\ud83d\udc48 The addon registered here\n  ],\n};\n\n")),(0,r.kt)("img",{src:"https://storybook.js.org/5c457fbc275d0c3e2a37aae388a6019f/storybook-addon-installed-registered.png",alt:"Storybook addon",style:{width:"100%"}}),(0,r.kt)("h3",{id:"5-3-\u81ea\u5b9a\u4e49addons"},"5-3. \u81ea\u5b9a\u4e49addons"),(0,r.kt)("p",null,"Now let\u2019s add a panel to Storybook. Inside the src directory, create a new file called register.js and add the following:\n",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/addons/writing-addons#add-a-panel"},"Detials")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// /my-addon/src/register.js\n\nimport React from 'react';\n\nimport { addons, types } from '@storybook/addons';\n\nimport { AddonPanel } from '@storybook/components';\n\nconst ADDON_ID = 'myaddon';\nconst PANEL_ID = `${ADDON_ID}/panel`;\n\n// give a unique name for the panel\nconst MyPanel = () => <div>MyAddon</div>;\n\naddons.register(ADDON_ID, (api) => {\n  addons.add(PANEL_ID, {\n    type: types.PANEL,\n    title: 'My Addon',\n    render: ({ active, key }) => (\n      <AddonPanel active={active} key={key}>\n        <MyPanel />\n      </AddonPanel>\n    ),\n  });\n});\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"register \u9700\u8981\u5728main.js\u8fdb\u884c\u6ce8\u518c\uff08When you register a Storybook addon, it will look for either register.js or preset.js as the entry points.\uff09")))),(0,r.kt)("img",{src:"https://storybook.js.org/8a84ad965e96ef91ab0feb62f03b48b9/addon-initial-state.png",alt:"Storybook addon",style:{width:"100%"}}),(0,r.kt)("h2",{id:"6-cli-options"},"6. CLI options"),(0,r.kt)("p",null,"Storybook comes with two CLI utilities: start-storybook and build-storybook.\n",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/api/cli-options"},"Detials")))}m.isMDXComponent=!0}}]);