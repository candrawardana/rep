import{_ as p}from"./PaginationMixin-11bee913.js";import{A as v,N as w}from"./AppLayout-02188963.js";import{P as u}from"./PageHeader-990117fa.js";import{L as f}from"./LawyerReviewCard-5a1927ae.js";import{R as y}from"./RecordNotFound-d1886f2e.js";import{_ as b,d as g,o as s,h as l,m as k,l as d,b as e,t as i,c as a,f as c,F as C,r as L,e as N,k as R,i as $}from"./app-5a739dd9.js";const x=g({mixins:[p],components:{AppLayout:v,Navbar:w,PageHeader:u,LawyerReviewCard:f,RecordNotFound:y},props:["lawyer"],created(){},mounted(){this.onSearch()},data(){return{reviews:{}}},methods:{async getPaginatedData(t=!1){await this.getLawyerReviews(t)},getLawyerReviews(t){axios.post(this.route("getApiLawyerReviews",{user_name:this.lawyer.user_name}),this.filter).then(r=>{const o=r.data.data;t?this.reviews.data=this.reviews.data.concat(o.data):this.reviews.data=o.data,this.reviews.links=o.links,this.reviews.meta=o.meta,this.fetching=!1})}}}),B={class:"row mx-0 border-bottom border-dark py-5"},P={class:"col-12 text-center"},V={class:"text-center"},A=e("nav",{"aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb justify-content-center mb-0"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"#",class:"text-dark text-decoration-none"},"Home")]),e("li",{class:"breadcrumb-item text-dark","aria-current":"page"},"reviews")])],-1),F={class:"section py-5"},j={class:"container"},D={class:"row"},H=e("div",{class:"col-12 mb-5"},null,-1),M={key:0,class:"col-12"},S={class:"row"},z={key:1,class:"col-12"},E={key:0,class:"row mb-5 mx-0"},T={key:1,class:"row mb-5 mx-0"},q={class:"col-12 text-center mb-3"},G={key:2,class:"row"},I={class:"col-md-12 d-flex align-items-center justify-content-center"},J=["disabled"];function K(t,r,o,O,Q,U){const m=d("lawyer-review-card"),_=d("record-not-found"),h=d("app-layout");return s(),l(h,{title:"My Profile"},{default:k(()=>[e("div",B,[e("div",P,[e("h2",V,i(t.lawyer.name)+" "+i(t.__n("review")),1),A])]),e("div",F,[e("div",j,[e("div",D,[H,t.fetching?(s(),a("div",M,[e("div",S,i(t.__("fetching")),1)])):c("",!0),t.fetching?c("",!0):(s(),a("div",z,[t.reviews.data.length>0?(s(),a("div",E,[(s(!0),a(C,null,L(t.reviews.data,n=>(s(),l(m,{add_col:!0,key:n.id,review:n},null,8,["review"]))),128))])):(s(),a("div",T,[e("div",q,[N(_)])])),t.reviews.meta.last_page!=this.filter.page?(s(),a("div",G,[e("div",I,[e("button",{onClick:r[0]||(r[0]=n=>t.loadMore()),class:"btn btn-primary position-relative",disabled:t.loading_more},[e("span",{class:R([{loader:t.loading_more},"position-absolute"])},null,2),$(" "+i(t.__("load more")),1)],8,J)])])):c("",!0)]))])])])]),_:1})}const se=b(x,[["render",K]]);export{se as default};
