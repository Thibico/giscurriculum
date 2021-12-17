"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{3906:function(e,n,r){r.d(n,{Z:function(){return C}});var t=r(5893),l=r(7294),i=r(711),s=r(5712),a=r(1651),c=r(4623),o=r(3272),d=r(6846),u=r(967),h=r(8005),x=r(5150),m=r(8093),g=r(1163),p=r(1664),j=r(1852),f=JSON.parse('{"en":["bangladesh","ghana","nigeria"],"es":["argentina","mexico"],"de":["germany"]}'),y=JSON.parse('{"bangladesh":["en"],"ghana":["en"],"nigeria":["en"],"argentina":["es"],"mexico":["es"],"germany":["de"]}'),Z=JSON.parse('{"en":"English","es":"Spanish","de":"German"}'),b=function(e){var n=e.charAt(0).toUpperCase(),r=e.slice(1);return"".concat(n).concat(r)};function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function F(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){v(e,n,r[n])}))}return e}var C=function(e){var n=e.source,r=e.frontMatter,v=r.mods,C=r.outlines,k=r.prev,w=r.next,E=(0,g.useRouter)(),q=(0,l.useState)(!1),A=q[0],O=q[1],P=((0,l.useRef)(),(0,l.useState)(!1)),S=P[0],N=P[1],G=(0,l.useState)(E.query.locale?E.query.locale:"en"),R=G[0],H=G[1],I=(0,l.useState)("en"),L=I[0],B=I[1],M=(0,l.useState)([]),z=M[0],D=M[1],J=(0,l.useState)([{key:"bangladesh",value:"bangladesh",flag:"bd",text:"Bangladesh"},{key:"germany",value:"germany",flag:"de",text:"Germany"}]),U=J[0],V=J[1],_=(0,l.useState)([{key:"en",value:"en",text:"English"}]),T=(_[0],_[1],[{key:"en",value:"en",text:"English"},{key:"es",value:"es",text:"Spanish"},{key:"de",value:"de",text:"German"}]),Q=(0,j.useMediaQuery)({query:"(max-width: 767px)"});(0,l.useEffect)((function(){V(f[R].map((function(e){return{key:e,value:e,text:b(e)}})))}),[R]);var X=function(e,n){if(y[E.query.country].includes(n.value)){var r=E.asPath.replace("/".concat(E.query.locale),"/".concat(n.value));H(n.value),E.push(r)}y[E.query.country].includes(n.value)||(B(n.value),D(f[n.value]),O(!0))},K=function(e,n){var r=E.asPath.replace("/".concat(E.query.country),"/".concat(n.value));E.push(r)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{onClose:function(){return O(!1)},onOpen:function(){return O(!0)},open:A,dimmer:"inverted",children:[(0,t.jsxs)(i.Z.Header,{children:["Modules available in ",Z[L]]}),(0,t.jsx)(i.Z.Content,{children:(0,t.jsx)(s.Z,{style:{padding:"1.5rem",textAlign:"center"},children:z.map((function(e,n){return(0,t.jsx)("div",{style:{border:"0.25px solid #D3D3D3",padding:"0.5rem",margin:"1rem 3rem"},children:(0,t.jsx)(p.default,{href:"/".concat(L,"/").concat(e),passHref:!0,children:(0,t.jsx)("h5",{style:{cursor:"pointer"},children:b(e)})})},n)}))})})]}),Q?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{children:(0,t.jsxs)(a.Z.Pushable,{as:c.Z,children:[(0,t.jsxs)(a.Z,{as:o.Z,animation:"overlay",icon:"labeled",onHide:function(){return N(!1)},vertical:!0,visible:S,width:"large",style:{border:"0px"},children:[(0,t.jsx)(o.Z.Item,{children:"\xa0"}),(0,t.jsxs)(o.Z.Item,{style:{textAlign:"left"},children:[(0,t.jsx)("h4",{children:"LANGUAGE:"}),(0,t.jsx)(d.Z,{placeholder:"Change Locale",fluid:!0,selection:!0,defaultValue:R,options:T,onChange:X}),(0,t.jsx)("br",{})]}),(0,t.jsxs)(o.Z.Item,{style:{textAlign:"left"},children:[(0,t.jsx)("h4",{children:"REGION:"}),(0,t.jsx)(d.Z,{placeholder:"Change Locale",fluid:!0,selection:!0,defaultValue:E.query.country,options:U,onChange:K}),(0,t.jsx)("br",{})]}),(0,t.jsxs)(o.Z.Item,{style:{textAlign:"left"},children:[(0,t.jsx)("h4",{style:{padding:"0.25rem",cursor:"pointer"},onClick:function(){return E.push("/".concat(E.query.locale,"/").concat(E.query.country))},children:(0,t.jsx)("a",{children:"Content Page"})}),v&&v.map((function(e,n){return(0,t.jsx)("p",{style:{padding:"0rem 0.12rem"},children:(0,t.jsx)(p.default,{href:e.match(/\[(.*?)\]/)[1],passHref:!0,children:(0,t.jsxs)("a",{style:{cursor:"pointer"},children:["Module\xa0",n,":\xa0",e.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g,"")]})},n)},n)}))]})]}),(0,t.jsx)(a.Z.Pusher,{dimmed:S,children:(0,t.jsxs)(c.Z,{basic:!0,children:[(0,t.jsxs)("div",{style:{margin:"0rem"},children:[(0,t.jsx)(u.Z,{onClick:function(){return N(!S)},children:"Content Menu"}),(0,t.jsx)(m.R,F({},n)),(0,t.jsx)(h.Z,{style:{marginTop:"1rem"},children:(0,t.jsxs)(h.Z.Row,{children:[(0,t.jsx)(h.Z.Column,{width:2,children:""!==k?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p.default,{href:k,passHref:!0,children:(0,t.jsxs)(u.Z,{icon:!0,labelPosition:"left",size:"large",style:{color:"#2A71FF",background:"#EBF1FF"},children:["Prev",(0,t.jsx)(x.Z,{name:"angle left"})]})})}):null}),(0,t.jsx)(h.Z.Column,{width:8,children:"\xa0"}),(0,t.jsx)(h.Z.Column,{width:2,style:{textAlign:"center"},children:w?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p.default,{href:w,passHref:!0,children:(0,t.jsxs)(u.Z,{icon:!0,labelPosition:"right",size:"large",style:{color:"#2A71FF",background:"#EBF1FF"},children:["Next",(0,t.jsx)(x.Z,{name:"angle right"})]})})}):null})]})})]}),(0,t.jsx)(s.Z,{textAlign:"justified",style:{padding:"1rem"}})]})})]})})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.Z,{children:(0,t.jsxs)(h.Z.Row,{style:{margin:"0px",padding:"0px"},children:[(0,t.jsx)(h.Z.Column,{width:Q?1:3,style:{background:"#E8EFF2",color:"black",padding:"2.5rem"},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)("h4",{style:{padding:"0.25rem"},children:"LANGUAGE:"}),(0,t.jsx)(d.Z,{placeholder:"Change Locale",fluid:!0,selection:!0,defaultValue:R,options:T,onChange:X,style:{margin:"0.2rem"}}),(0,t.jsx)("p",{style:{padding:"0.35rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,t.jsx)("h4",{style:{padding:"0.25rem"},children:"REGION:"}),(0,t.jsx)(d.Z,{placeholder:"Change Locale",fluid:!0,selection:!0,defaultValue:E.query.country,options:U,onChange:K,style:{margin:"0.2rem"}}),(0,t.jsx)("br",{}),(0,t.jsx)("hr",{}),(0,t.jsx)("h4",{style:{padding:"0.25rem",cursor:"pointer"},onClick:function(){return E.push("/".concat(E.query.locale,"/").concat(E.query.country))},children:(0,t.jsx)("a",{children:"Content Page"})}),v&&v.map((function(e,n){return(0,t.jsx)("p",{style:{padding:"0rem 0.25rem"},children:(0,t.jsx)(p.default,{href:e.match(/\[(.*?)\]/)[1],passHref:!0,children:(0,t.jsxs)("a",{style:{cursor:"pointer"},children:["Module\xa0",n,":\xa0",e.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g,"")]})},n)},n)})),(0,t.jsx)(h.Z,{})]})}),(0,t.jsxs)(h.Z.Column,{width:10,style:{margin:0,padding:0},children:[(0,t.jsxs)(s.Z,{textAlign:"justified",style:{padding:"2rem 1rem 0rem 1rem"},children:[(0,t.jsx)(m.R,F({},n)),(0,t.jsx)(h.Z,{style:{marginTop:"1rem"},children:(0,t.jsxs)(h.Z.Row,{children:[(0,t.jsx)(h.Z.Column,{width:2,children:""!==k?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p.default,{href:k,passHref:!0,children:(0,t.jsxs)(u.Z,{icon:!0,labelPosition:"left",size:"large",style:{color:"#2A71FF",background:"#EBF1FF"},children:["Prev",(0,t.jsx)(x.Z,{name:"angle left"})]})})}):null}),(0,t.jsx)(h.Z.Column,{width:10,children:"\xa0"}),(0,t.jsx)(h.Z.Column,{width:2,style:{textAlign:"right"},children:w?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p.default,{href:w,passHref:!0,children:(0,t.jsxs)(u.Z,{icon:!0,labelPosition:"right",size:"large",style:{color:"#2A71FF",background:"#EBF1FF"},children:["Next",(0,t.jsx)(x.Z,{name:"angle right"})]})})}):null})]})})]}),(0,t.jsx)(s.Z,{textAlign:"justified",style:{padding:"1rem"}})]}),(0,t.jsx)(h.Z.Column,{width:3,style:{borderLeft:"0.15px solid #EFEFEF",height:"80vh",margin:"1rem 0rem"},children:(0,t.jsx)(s.Z,{textAlign:"justified",style:{padding:"2rem 1rem"},children:C?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"Outlines"}),C.map((function(e,n){return(0,t.jsx)("h4",{children:(0,t.jsx)("a",{href:"#".concat(e.toLowerCase().replace(" ","-")),children:e})},n)}))]}):null})})]})})})]})}},230:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(5893),l=(r(7294),r(3272)),i=r(5517),s=r(1163),a=function(){var e=(0,s.useRouter)();return(0,t.jsxs)(l.Z,{fixed:"top",style:{background:"#00B1F6",margin:"0px"},children:[(0,t.jsx)(l.Z.Item,{style:{border:"0px",cursor:"pointer"},children:(0,t.jsx)(i.Z,{src:"https://i.imgur.com/lXrEJZj.png",size:"small",wrapped:!0,onClick:function(){return e.push("/".concat(e.query.locale))}})}),(0,t.jsx)(l.Z.Item,{style:{border:"0px",color:"white",cursor:"pointer"},children:(0,t.jsx)("h3",{onClick:function(){return e.push("/".concat(e.query.locale))},children:" Open GIS Curriculum"})})]})};function c(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{}),(0,t.jsx)("div",{style:{margin:"0.2rem",marginTop:"4rem",padding:"0.2rem"},children:e.children})]})}}}]);