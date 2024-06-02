import{_ as C,d as T,H as N,L as P,o as n,h as c,m,l as h,b as t,i as _,t as a,c as l,f as d,w as i,v as u,e as b,r as p,k as $,F as w}from"./app-5a739dd9.js";import{A as S}from"./AppLayout-02188963.js";import{T as D}from"./TablePagination-6ccfb30e.js";import{C as E,S as M,P as B,N as L}from"./carousel.es-51616c9f.js";const O={created(){},data(){return{filter:{page:1,perPage:10}}},methods:{async onPageChange(e){this.searching=!0,this.filter.page=e.page,await this.getPaginatedData(),this.searching=!1},async onPerPageChange(){this.searching=!0,this.pagination.page=1,await this.getPaginatedData(),this.searching=!1}}},V=T({components:{Head:N,Link:P,AppLayout:S,TablePagination:D,Carousel:E,Slide:M,Pagination:B,Navigation:L},props:["current_balance","transactions","withdrawals","gateways"],mixins:[O],data(){return{form:this.$inertia.form({amount:null,gateway:null}),withdraw:this.$inertia.form({amount:null,account_holder:"",account_number:"",bank:"",additional_note:""}),currentTabIndex:0,active_tab:"transaction_tab",settings:{itemsToShow:1,snapAlign:"start",autoplay:!1},breakpoints:{700:{itemsToShow:2,snapAlign:"start"},1024:{itemsToShow:2,snapAlign:"start"},1240:{itemsToShow:4,snapAlign:"start"}},key:1}},methods:{AddAmountToWallet(){if(!this.form.amount||this.form.amount<=0){this.$toast.error("Please enter amount greater than 0");return}if(!this.form.gateway){this.$toast.error("Please select a gateway");return}this.form.post(this.route("wallet.addAmount"),{onSuccess:e=>{document.getElementById("close").click(),window.location.replace(this.route("user.addFund.confirm",{transaction:e.props.response_data.fund.transaction}))}})},withdrawAmount(){if(!this.withdraw.amount||this.withdraw.amount<=0){this.$toast.error("Please enter amount greater than 0");return}this.withdraw.post(this.route("wallet.withdraw"),{onSuccess:()=>{document.getElementById("withdraw_close").click()}})},onChangeCurrentTab(e){this.currentTabIndex=e},getPaginatedData(){this.$inertia.replace(this.route("wallet"),{data:this.filter})},changeTab(){this.$inertia.replace(this.route("wallet"))},getTransactionDetails(e){return e?e.details:null},renderCarousal(){var e=document.getElementById("walletAddModal");let s=this;e.addEventListener("shown.bs.modal",function(f){s.key++})}},mounted(){this.key++}}),W={class:"section p-0 profile"},q={class:"row mx-0 border-bottom border-dark py-5"},F={class:"col-12 text-center py-3"},U={class:"fs-2 mb-0"},j={class:"fw-bold"},I={class:"container"},H={class:"row py-md-5"},R={class:"col-12 mt-3 mb-5"},K={class:"card rounded-lg border-0 shadow bg-primary p-4 px-md-5"},z={class:"d-md-flex align-items-center justify-content-between"},Y={class:"d-flex align-items-center mb-3 mb-md-0"},G={class:"fs-2 me-3 fw-bold"},J={class:"fw-bold"},Q={class:"text-end text-md-start"},X=["disabled"],Z={class:"modal fade",id:"walletAddModal",tabindex:"-1","aria-labelledby":"walletAddModalLabel","aria-hidden":"true"},x={class:"modal-dialog modal-lg"},tt={class:"modal-content"},et={class:"modal-header"},at={class:"modal-title",id:"walletAddModalLabel"},ot=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),st={class:"modal-body"},nt={class:"row"},lt={class:"form-group mb-4"},dt={class:"px-4"},rt=["onClick"],it=["src","alt"],ut={class:""},ht={class:"modal-footer"},mt={type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",id:"close"},ct={class:"modal fade",id:"withdrawAmountModal",tabindex:"-1","aria-labelledby":"withdrawAmountModalLabel","aria-hidden":"true"},_t={class:"modal-dialog modal-lg"},bt={class:"modal-content"},pt={class:"modal-header"},wt={class:"modal-title",id:"withdrawAmountModalLabel"},gt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ft={class:"modal-body"},yt={class:"form-group mb-4"},vt={for:""},kt={key:0,class:"text-danger"},At={class:"form-group mb-4"},Ct={for:""},Tt={key:0,class:"text-danger"},Nt={class:"form-group mb-4"},Pt={for:""},$t={key:0,class:"text-danger"},St={class:"form-group mb-4"},Dt={for:""},Et={key:0,class:"text-danger"},Mt={class:"form-group"},Bt={for:""},Lt={key:0,class:"text-danger"},Ot={class:"modal-footer"},Vt={type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",id:"withdraw_close"},Wt={class:"col-12"},qt={class:"tab-pane",id:"general-info",role:"tabpanel","aria-labelledby":"general-info-tab",tabindex:"0"},Ft={class:"nav nav-pills mb-4",id:"pills-tab",role:"tablist"},Ut={class:"nav-link text-dark active",id:"wallet-transaction-info-tab","data-bs-toggle":"pill","data-bs-target":"#wallet-transaction-info",type:"button",role:"tab","aria-controls":"wallet-transaction-info","aria-selected":"false"},jt={class:"nav-link text-dark",id:"wallet-withdraw-requests-info-tab","data-bs-toggle":"pill","data-bs-target":"#wallet-withdraw-requests-info",type:"button",role:"tab","aria-controls":"wallet-withdraw-requests-info","aria-selected":"false"},It={class:"tab-content pb-4",id:"pills-tabContent"},Ht={class:"tab-pane fade active show",id:"wallet-transaction-info",role:"tabpanel","aria-labelledby":"wallet-transaction-info-tab"},Rt={class:"col-12 mb-5"},Kt={class:"wallet-table"},zt={class:"table-responsive"},Yt={class:"table text-center"},Gt={class:"table-primary"},Jt=t("th",null,"SR. #",-1),Qt={key:0},Xt={colspan:"5"},Zt={class:"tab-pane fade",id:"wallet-withdraw-requests-info",role:"tabpanel","aria-labelledby":"wallet-withdraw-requests-info-tab"},xt={class:"col-12 my-5"},te={class:"wallet-table"},ee={class:"table-responsive"},ae={class:"table text-center"},oe={class:"table-primary"},se=t("th",null,"SR. #",-1),ne={key:0},le={key:0},de={colspan:"8"};function re(e,s,f,ie,ue,he){const y=h("Slide"),v=h("Navigation"),k=h("Carousel"),g=h("TablePagination"),A=h("app-layout");return n(),c(A,{title:"Wallet"},{default:m(()=>[t("div",W,[t("div",q,[t("div",F,[t("p",U,[_(a(e.__("hello"))+" "+a(e.$page.props.auth.user.name)+" | ",1),t("span",j,a(e.__("Payment Wallet")),1)]),t("p",null,a(e.__("discover The Best Lawyers Near You")),1)])]),t("div",I,[t("div",H,[t("div",R,[t("div",K,[t("div",z,[t("div",Y,[t("span",G,a(e.getDefaultCurrencySymbol())+a(e.current_balance),1),_(),t("span",J,a(e.__("Available Amount")),1)]),t("div",Q,[e.$page.props.auth.logged_in_as=="lawyer"||e.$page.props.auth.logged_in_as=="law_firm"?(n(),l("button",{key:0,class:"btn btn-dark me-2","data-bs-toggle":"modal","data-bs-target":"#withdrawAmountModal",disabled:e.current_balance==0},a(e.__("Withdraw Amount")),9,X)):d("",!0),e.$page.props.auth.logged_in_as=="customer"?(n(),l("button",{key:1,class:"btn btn-dark",onClick:s[0]||(s[0]=(...o)=>e.renderCarousal&&e.renderCarousal(...o)),"data-bs-toggle":"modal","data-bs-target":"#walletAddModal"},a(e.__("Add to wallet")),1)):d("",!0)]),t("div",Z,[t("div",x,[t("div",tt,[t("div",et,[t("h5",at,a(e.__("Select Payment Method")),1),ot]),t("div",st,[t("div",nt,[t("div",lt,[i(t("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=o=>e.form.amount=o),class:"form-control",onKeypress:s[2]||(s[2]=o=>e.inputNumbersOnly()),placeholder:"Enter Amount"},null,544),[[u,e.form.amount]])]),t("div",dt,[(n(),c(k,{key:e.key,settings:e.settings,breakpoints:e.breakpoints},{addons:m(()=>[b(v)]),default:m(()=>[(n(!0),l(w,null,p(e.gateways,(o,r)=>(n(),c(y,{key:r},{default:m(()=>[t("div",{class:$({"border border-5 border-warning":e.form.gateway==o.code}),onClick:me=>this.form.gateway=o.code},[t("img",{class:"",src:o.image,alt:o.name},null,8,it),t("h5",ut,a(o.name),1)],10,rt)]),_:2},1024))),128))]),_:1},8,["settings","breakpoints"]))])])]),t("div",ht,[t("button",mt,a(e.__("close")),1),t("button",{type:"button",class:"btn btn-primary",onClick:s[3]||(s[3]=(...o)=>e.AddAmountToWallet&&e.AddAmountToWallet(...o))},a(e.__("submit")),1)])])])]),t("div",ct,[t("div",_t,[t("div",bt,[t("div",pt,[t("h5",wt,a(e.__("Withdraw Amount")),1),gt]),t("div",ft,[t("div",yt,[t("label",vt,a(e.__("Amount"))+":",1),i(t("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=o=>e.withdraw.amount=o),class:"form-control",onKeypress:s[5]||(s[5]=o=>e.inputNumbersOnly()),placeholder:"Enter Amount"},null,544),[[u,e.withdraw.amount]]),e.withdraw.errors.amount?(n(),l("span",kt,a(e.withdraw.errors.amount),1)):d("",!0)]),t("div",At,[t("label",Ct,a(e.__("Account Holder Name"))+":",1),i(t("input",{type:"text","onUpdate:modelValue":s[6]||(s[6]=o=>e.withdraw.account_holder=o),class:"form-control",placeholder:"Enter Account Holder Name"},null,512),[[u,e.withdraw.account_holder]]),e.withdraw.errors.account_holder?(n(),l("span",Tt,a(e.withdraw.errors.account_holder),1)):d("",!0)]),t("div",Nt,[t("label",Pt,a(e.__("Account Number"))+":",1),i(t("input",{type:"text","onUpdate:modelValue":s[7]||(s[7]=o=>e.withdraw.account_number=o),class:"form-control",placeholder:"Enter Account Number"},null,512),[[u,e.withdraw.account_number]]),e.withdraw.errors.account_number?(n(),l("span",$t,a(e.withdraw.errors.account_number),1)):d("",!0)]),t("div",St,[t("label",Dt,a(e.__("Bank Name"))+":",1),i(t("input",{type:"text","onUpdate:modelValue":s[8]||(s[8]=o=>e.withdraw.bank=o),class:"form-control",placeholder:"Enter Bank Name"},null,512),[[u,e.withdraw.bank]]),e.withdraw.errors.bank?(n(),l("span",Et,a(e.withdraw.errors.bank),1)):d("",!0)]),t("div",Mt,[t("label",Bt,a(e.__("Additional Note"))+":",1),i(t("textarea",{class:"form-control","onUpdate:modelValue":s[9]||(s[9]=o=>e.withdraw.additional_note=o),cols:"30",rows:"10",placeholder:"Enter Additional Notes"},null,512),[[u,e.withdraw.additional_note]]),e.withdraw.errors.additional_note?(n(),l("span",Lt,a(e.withdraw.errors.additional_note),1)):d("",!0)])]),t("div",Ot,[t("button",Vt,a(e.__("close")),1),t("button",{type:"button",class:"btn btn-primary",onClick:s[10]||(s[10]=(...o)=>e.withdrawAmount&&e.withdrawAmount(...o))},a(e.__("submit")),1)])])])])])])]),t("div",Wt,[t("div",qt,[t("ul",Ft,[t("li",{class:"nav-item",role:"presentation",onClick:s[11]||(s[11]=()=>{this.active_tab="transaction_tab",this.changeTab()})},[t("button",Ut,a(e.__("Transactions"))+":",1)]),e.$page.props.auth.logged_in_as=="lawyer"||e.$page.props.auth.logged_in_as=="law_firm"?(n(),l("li",{key:0,class:"nav-item",role:"presentation",onClick:s[12]||(s[12]=()=>{this.active_tab="withdraw_request_tab",this.changeTab()})},[t("button",jt,a(e.__("Withdraw Requests"))+":",1)])):d("",!0)]),t("div",It,[t("div",Ht,[t("div",Rt,[t("div",Kt,[t("h4",null,a(e.__("Transactions"))+":",1),t("div",zt,[t("table",Yt,[t("thead",Gt,[t("tr",null,[Jt,t("th",null,a(e.__("Amount")),1),t("th",null,a(e.__("Type")),1),t("th",null,a(e.__("Time")),1),t("th",null,a(e.__("Info")),1),t("th",null,a(e.__("Date")),1)])]),t("tbody",null,[(n(!0),l(w,null,p(e.transactions.data,(o,r)=>(n(),l("tr",{key:r},[t("td",null,a(r+1),1),t("td",null,a(e.getDefaultCurrencySymbol())+a(o.amount),1),t("td",null,a(o.type),1),t("td",null,a(e.getFormattedTime(o.created_at)),1),t("td",null,a(e.getTransactionDetails(o.meta)),1),t("td",null,a(e.getFormattedDateOnly(o.created_at)),1)]))),128)),e.transactions.length==0?(n(),l("tr",Qt,[t("td",Xt,a(e.__("No data found")),1)])):d("",!0)])]),b(g,{onOnPageChange:e.onPageChange,meta:e.transactions},null,8,["onOnPageChange","meta"])])])])]),t("div",Zt,[t("div",xt,[t("div",te,[t("h4",null,a(e.__("Withdraw Requests"))+":",1),t("div",ee,[t("table",ae,[t("thead",oe,[t("tr",null,[se,t("th",null,a(e.__("Amount")),1),t("th",null,a(e.__("Account Number")),1),t("th",null,a(e.__("Holder Name")),1),t("th",null,a(e.__("Bank Name")),1),t("th",null,a(e.__("Status")),1),t("th",null,a(e.__("Time")),1),t("th",null,a(e.__("Date")),1)])]),t("tbody",null,[(n(!0),l(w,null,p(e.withdrawals.data,(o,r)=>(n(),l("tr",{key:r},[t("td",null,a(r+1),1),t("td",null,a(e.getDefaultCurrencySymbol())+" "+a(o.amount),1),t("td",null,a(o.account_number),1),t("td",null,a(o.account_holder),1),t("td",null,a(o.bank),1),t("td",null,[_(a(o.status.toUpperCase())+" ",1),o.rejected_reason?(n(),l("span",ne,"("+a(o.rejected_reason)+")",1)):d("",!0)]),t("td",null,a(e.getFormattedTime(o.created_at)),1),t("td",null,a(e.getFormattedDateOnly(o.created_at)),1)]))),128)),e.withdrawals.length==0?(n(),l("tr",le,[t("td",de,a(e.__("No data found")),1)])):d("",!0)])]),b(g,{onOnPageChange:e.onPageChange,meta:e.withdrawals},null,8,["onOnPageChange","meta"])])])])])])])])])])])]),_:1})}const we=C(V,[["render",re]]);export{we as default};
