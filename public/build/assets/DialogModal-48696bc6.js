import{S as h}from"./InputError-8e109f03.js";import{d as a,_ as d,o as i,c as $,b as o,e as f,m as n,s as t,l as c,h as u}from"./app-5a739dd9.js";import{M as v}from"./Modal-94d7f363.js";const b=a({components:{SectionTitle:h}}),w={class:"row"},S={class:"col-md-4"},g={class:"col-md-8"},y={class:"card shadow-sm"},B={class:"card-body"};function C(s,l,r,_,m,p){const e=c("section-title");return i(),$("div",w,[o("div",S,[f(e,null,{title:n(()=>[t(s.$slots,"title")]),description:n(()=>[t(s.$slots,"description")]),_:3})]),o("div",g,[o("div",y,[o("div",B,[t(s.$slots,"content")])])])])}const j=d(b,[["render",C]]),k=a({components:{Modal:v},props:{id:{type:String,required:!0},maxWidth:{default:"2xl"}}}),M={class:"modal-content"},x={class:"modal-header"},A={class:"modal-title"},D=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),N={class:"modal-body"},V={class:"modal-footer bg-light"};function W(s,l,r,_,m,p){const e=c("modal");return i(),u(e,{id:s.id,"max-width":s.maxWidth},{default:n(()=>[o("div",M,[o("div",x,[o("h5",A,[t(s.$slots,"title")]),D]),o("div",N,[t(s.$slots,"content")]),o("div",V,[t(s.$slots,"footer")])])]),_:3},8,["id","max-width"])}const z=d(k,[["render",W]]);export{j as A,z as D};