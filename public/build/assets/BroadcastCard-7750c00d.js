import{d as r,L as i,_ as n,o as a,c as o,b as e,e as c,m as l,i as m,t,k as _,l as b}from"./app-5a739dd9.js";import{C as p}from"./CardSkeleton-160dac99.js";const h="/build/assets/media-5f281d02.png",f=r({components:{Link:i,CardSkeleton:p},props:{broadcast:{},add_col:{default:!0}},created(){},data(){return{}},methods:{}}),u={class:"card item-h card-alt overflow-hidden border-0 shadow-sm rounded-md mb-4"},g={class:"d-flex justify-content-center overflow-hidden card-avatar position-relative",style:{height:"300px"}},y=["src"],k={key:1,class:"img-fluid",src:h,alt:"image"},v=e("div",{class:"item-overlay top"},null,-1),w={class:"icon mx-3 position-absolute end-0 bottom-0 block--text text-center"},L={class:"card-body"},C={class:"fixed-title mb-0"},B=["href"],$={key:0,class:"badge bg-secondary"},N={key:1,class:"badge bg-secondary"},T={key:2,class:"badge bg-secondary"},V=["innerHTML"];function H(s,M,S,j,x,z){const d=b("Link");return a(),o("div",{class:_({"col-md-6":s.add_col})},[e("div",u,[e("div",g,[s.broadcast.image?(a(),o("img",{key:0,class:"img-fluid w-100",src:s.broadcast.image,alt:"image"},null,8,y)):(a(),o("img",k)),v,e("div",w,[c(d,{href:s.route("broadcasts.detail",{slug:s.broadcast.slug}),class:"btn btn-primary"},{default:l(()=>[m(t(s.__("view detail")),1)]),_:1},8,["href"])])]),e("div",L,[e("h5",C,[e("a",{class:"text-decoration-none text-dark",href:s.route("broadcasts.detail",{slug:s.broadcast.slug})},t(s.broadcast.name),9,B)]),s.broadcast.lawyer_id?(a(),o("span",$,"Lawyer")):s.broadcast.law_firm_id?(a(),o("span",N,"LawFirm")):(a(),o("span",T,"Admin")),e("p",{class:"mb-0 mt-3 lineclamp-2",innerHTML:s.broadcast.description},null,8,V)])])],2)}const E=n(f,[["render",H]]);export{E as B};