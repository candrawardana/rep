import{A as r}from"./AppLayout-02188963.js";import{_,d as l,L as d,o as m,h as p,m as o,l as n,b as t,t as e,e as i}from"./app-5a739dd9.js";const u=l({components:{AppLayout:r,Link:d}}),h={class:"thank-you-section mt-2"},f={class:"p-3 mb-2 rounded-lg bg-primary-light"},y={class:"row align-items-center"},b={class:"col-12 p-4 text-center"},v=t("h1",{class:"text-danger"},"Oops!",-1),g={class:"fs-4 mb-0 fw-bold"},k={class:"fs-4 mb-0"},w={class:"fs-4 mb-0"},L={class:"row justify-content-center mt-3"},P={class:"col-auto"},B={class:"button-text"},$={class:"col-auto"},C={class:"button-text"};function F(s,A,M,N,S,V){const a=n("Link"),c=n("app-layout");return m(),p(c,{title:"My Profile"},{header:o(()=>[]),default:o(()=>[t("div",h,[t("div",f,[t("div",y,[t("div",b,[v,t("p",g,e(s.__("We really appreciate you giving us a moment of your time today but unfortunately the payment was unsuccessful due to it seems some issue in server to server communication. Kindly connect with administrator���")),1),t("p",k,e(s.__("For Your Payment")),1),t("p",w,e(s.__("Payment Status"))+" Failed: ",1)])])]),t("div",L,[t("div",P,[i(a,{href:s.route("home"),class:"btn btn-primary me-3"},{default:o(()=>[t("span",B,e(s.__("Back To Home")),1)]),_:1},8,["href"])]),t("div",$,[i(a,{href:s.route("my_profile"),class:"btn btn-secondary"},{default:o(()=>[t("span",C,e(s.__("My Profile")),1)]),_:1},8,["href"])])])])]),_:1})}const D=_(u,[["render",F]]);export{D as default};