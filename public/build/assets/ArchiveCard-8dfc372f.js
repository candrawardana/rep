import{d as r,L as d,_ as n,o as a,c as o,b as s,e as c,m as l,i as m,t,k as h,l as _}from"./app-5a739dd9.js";import{_ as p}from"./course-aea85fdd.js";const v=r({components:{Link:d},props:{background_color:{},add_col:{default:!0},archive:{}},created(){},data(){return{}},methods:{}}),u={class:"card item-h border card-alt rounded-md shadow overflow-hidden border-0 mb-3"},f={class:"d-flex justify-content-center rounded-md overflow-hidden card-avatar position-relative",style:{height:"300px"}},g=["src"],b={key:1,class:"img-fluid",src:p,alt:"image"},y=s("div",{class:"item-overlay top"},null,-1),k={class:"icon mx-3 position-absolute end-0 bottom-0 block--text text-center"},w={class:"card-body"},L={class:"fixed-title mb-0"},C=["href"],$={key:0,class:"badge bg-secondary"},A={key:1,class:"badge bg-secondary"},B={key:2,class:"badge bg-secondary"},N=["innerHTML"];function T(e,V,H,M,j,z){const i=_("Link");return a(),o("div",{class:h({"col-md-4":e.add_col,"col-md-6":!e.add_col})},[s("div",u,[s("div",f,[e.archive.image?(a(),o("img",{key:0,class:"img-fluid w-100",src:e.archive.image,alt:"image"},null,8,g)):(a(),o("img",b)),y,s("div",k,[c(i,{href:e.route("archives.detail",{slug:e.archive.slug}),class:"btn btn-primary"},{default:l(()=>[m(t(e.__("view detail")),1)]),_:1},8,["href"])])]),s("div",w,[s("h5",L,[s("a",{class:"text-decoration-none text-dark",href:e.route("archives.detail",{slug:e.archive.slug})},t(e.archive.name),9,C)]),e.archive.lawyer_id?(a(),o("span",$,"Lawyer")):e.archive.law_firm_id?(a(),o("span",A,"LawFirm")):(a(),o("span",B,"Admin")),s("p",{class:"mb-0 mt-3 lineclamp-2",innerHTML:e.archive.description},null,8,N)])])],2)}const F=n(v,[["render",T]]);export{F as A};
