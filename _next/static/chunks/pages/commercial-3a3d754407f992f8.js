(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{3023:function(e,t){"use strict";var r,o=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),m=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function b(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case n:case i:case s:case d:case p:return e;default:switch(e=e&&e.$$typeof){case m:case l:case u:case w:case f:case c:return e;default:return t}}case a:return t}}}r=Symbol.for("react.module.reference")},6607:function(e,t,r){"use strict";r(3023)},4217:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/commercial",function(){return r(6147)}])},9343:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var o=r(5893),a=r(7294),n=r(7462),s=r(3366),i=r(6010),c=r(594),l=r(6523),m=r(9707),u=r(6682);const d=["className","component"];var p=r(7078);const f=function(e={}){const{defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:p,styleFunctionSx:f=l.Z}=e,w=(0,c.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(f);return a.forwardRef((function(e,a){const c=(0,u.Z)(t),l=(0,m.Z)(e),{className:f,component:g="div"}=l,b=(0,s.Z)(l,d);return(0,o.jsx)(w,(0,n.Z)({as:g,ref:a,className:(0,i.Z)(f,p?p(r):r),theme:c},b))}))}({defaultTheme:(0,r(2309).Z)(),defaultClassName:"MuiBox-root",generateClassName:p.Z.generate});var w=f,g=r(4780),b=r(7074),h=r(6446),v=r(4867),y=r(1588);function Z(e){return(0,v.Z)("MuiImageList",e)}(0,y.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var x=a.createContext({});const S=["children","className","cols","component","rowHeight","gap","style","variant"],N=(0,b.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant]]}})((({ownerState:e})=>(0,n.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})));var j=a.forwardRef((function(e,t){const r=(0,h.Z)({props:e,name:"MuiImageList"}),{children:c,className:l,cols:m=2,component:u="ul",rowHeight:d="auto",gap:p=4,style:f,variant:w="standard"}=r,b=(0,s.Z)(r,S),v=a.useMemo((()=>({rowHeight:d,gap:p,variant:w})),[d,p,w]);a.useEffect((()=>{0}),[]);const y="masonry"===w?(0,n.Z)({columnCount:m,columnGap:p},f):(0,n.Z)({gridTemplateColumns:`repeat(${m}, 1fr)`,gap:p},f),j=(0,n.Z)({},r,{component:u,gap:p,rowHeight:d,variant:w}),_=(e=>{const{classes:t,variant:r}=e,o={root:["root",r]};return(0,g.Z)(o,Z,t)})(j);return(0,o.jsx)(N,(0,n.Z)({as:u,className:(0,i.Z)(_.root,_[w],l),ref:t,style:y,ownerState:j},b,{children:(0,o.jsx)(x.Provider,{value:v,children:c})}))})),_=(r(6607),r(7335));function B(e){return(0,v.Z)("MuiImageListItem",e)}var I=(0,y.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);const C=["children","className","cols","component","rows","style"],M=(0,b.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${I.img}`]:t.img},t.root,t[r.variant]]}})((({ownerState:e})=>(0,n.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${I.img}`]:(0,n.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})})));var E=a.forwardRef((function(e,t){const r=(0,h.Z)({props:e,name:"MuiImageListItem"}),{children:c,className:l,cols:m=1,component:u="li",rows:d=1,style:p}=r,f=(0,s.Z)(r,C),{rowHeight:w="auto",gap:b,variant:v}=a.useContext(x);let y="auto";"woven"===v?y=void 0:"auto"!==w&&(y=w*d+b*(d-1));const Z=(0,n.Z)({},r,{cols:m,component:u,gap:b,rowHeight:w,rows:d,variant:v}),S=(e=>{const{classes:t,variant:r}=e,o={root:["root",r],img:["img"]};return(0,g.Z)(o,B,t)})(Z);return(0,o.jsx)(M,(0,n.Z)({as:u,className:(0,i.Z)(S.root,S[v],l),ref:t,style:(0,n.Z)({height:y,gridColumnEnd:"masonry"!==v?`span ${m}`:void 0,gridRowEnd:"masonry"!==v?`span ${d}`:void 0,marginBottom:"masonry"===v?b:void 0},p),ownerState:Z},f,{children:a.Children.map(c,(e=>a.isValidElement(e)?"img"===e.type||(0,_.Z)(e,["Image"])?a.cloneElement(e,{className:(0,i.Z)(S.img,e.props.className)}):e:null))}))})),k=r(1163),P=r(1225);function R(){var e=(0,k.useRouter)(),t=function(t){return"".concat(e.basePath).concat(t)},r=(0,P.Z)("(max-width:768px)");return(0,o.jsx)(w,{className:"d-flex justify-content-center",children:(0,o.jsx)(j,{variant:"masonry",cols:r?2:3,gap:8,children:$.map((function(e){return(0,o.jsx)(E,{children:(0,o.jsx)("img",{src:t(e.img),srcSet:t(e.img),alt:e.title,loading:"lazy"})},e.img)}))})})}var $=[{img:"/webp/1-webp.webp",title:"Bed"},{img:"/webp/2-webp.webp",title:"Bed"},{img:"/webp/3-webp.webp",title:"Bed"},{img:"/webp/4-webp.webp",title:"Bed"},{img:"/webp/5-webp.webp",title:"Bed"},{img:"/webp/6-webp.webp",title:"Bed"},{img:"/webp/7-webp.webp",title:"Bed"},{img:"/webp/8-webp.webp",title:"Bed"},{img:"/webp/9-webp.webp",title:"Bed"},{img:"/webp/10-webp.webp",title:"Bed"},{img:"/webp/11-webp.webp",title:"Bed"}]},6147:function(e,t,r){"use strict";r.r(t);var o=r(5893),a=(r(7294),r(682)),n=r(4051),s=r(1555),i=r(9343);t.default=function(){return(0,o.jsxs)(a.Z,{fluid:!0,children:[(0,o.jsxs)(n.Z,{children:[(0,o.jsx)(s.Z,{xs:12,children:(0,o.jsx)("h1",{className:"fw-light text-center",children:"Commercial Page"})}),(0,o.jsx)(s.Z,{xs:12,className:"text-center",children:(0,o.jsx)("h5",{className:"fw-light",children:"Is comming soon! Meanwhile you can look at some pictures"})})]}),(0,o.jsx)(n.Z,{className:"mt-4",children:(0,o.jsx)(s.Z,{children:(0,o.jsx)(i.Z,{})})})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=4217,e(e.s=t);var t}));var t=e.O();_N_E=t}]);