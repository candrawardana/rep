import{_ as A,d as z,P as D,L as T,J as P,o,h as m,m as c,l as r,b as e,t as s,e as h,c as a,i as q,f as d,F as p,r as u,k as b,w as V,v as $,y as L,z as F}from"./app-5a739dd9.js";import{A as I,N}from"./AppLayout-02188963.js";import{P as M}from"./PageHeader-990117fa.js";import{V as W}from"./ValidationErrors-bf47aed9.js";import{C as B}from"./CalenderSkeleton-f0af1d35.js";import{C as R,S as U,P as j,N as E}from"./carousel.es-51616c9f.js";const H=z({components:{AppLayout:I,Navbar:N,PageHeader:M,ValidationErrors:W,CalenderSkeleton:B,Wizard:D,Link:T,Carousel:R,Slide:U,Pagination:j,Navigation:E},props:["schedule","lawyer_id","appointment_type_id","is_schedule_required","lawyer","appointment_type_name","gateways"],created(){this.selected_date=P(new Date),this.fetchedSchedule=this.schedule},data(){return{transaction:null,cardElement:{},currentTabIndex:0,selected_date:"",paymentScreen:!1,fetchedSchedule:"",fetching:!1,selected_slot_index:"",selected_start_time:"",selected_end_time:"",attachment_view:"",form:this.$inertia.form({selected_schedule_id:"",lawyer_id:this.lawyer_id,date:this.selected_date,appointment_type_id:this.appointment_type_id,question:"",attachment:"",gateway:null}),windowWidth:window.innerWidth,isMobileScreen:!0,paymentDone:!1,bookedAppointmentDetail:"",settings:{itemsToShow:1,snapAlign:"start",autoplay:!1},breakpoints:{700:{itemsToShow:2,snapAlign:"start"},1024:{itemsToShow:2,snapAlign:"start"},1240:{itemsToShow:4,snapAlign:"start"}},key:1}},methods:{addFundRequest(){this.form.date=this.selected_date,this.form.post(this.route("customers.book_appointment"),{onSuccess:t=>{this.form.gateway=="wallet"?(this.bookedAppointmentDetail=t.props.response_data.appointment,this.onChangeCurrentTab(3),this.paymentDone=!0):(window.location.replace(this.route("user.addFund.confirm",{transaction:t.props.response_data.fund.transaction})),this.bookedAppointmentDetail=t.props.response_data.appointment,this.onChangeCurrentTab(3),this.paymentDone=!0)}})},onChangeCurrentTab(t,l){this.currentTabIndex=t,this.key++},fetchAvailableSlots(){this.form.selected_schedule_id="",this.selected_slot_index="",this.selected_start_time="",this.selected_end_time="",this.fetching=!0,axios.get(this.route("getApiAppointmentScheduleSlots",{selected_date:this.selected_date,lawyer_id:this.lawyer_id,appointment_type_id:this.appointment_type_id})).then(t=>{this.fetchedSchedule=t.data.data??"",this.fetching=!1})},selectSlot(t,l){this.form.selected_schedule_id&&this.form.selected_schedule_id==l.id?(this.form.selected_schedule_id="",this.selected_slot_index="",this.selected_start_time="",this.selected_end_time=""):(this.form.selected_schedule_id=l.id,this.selected_slot_index=t,this.selected_start_time=l.start_time,this.selected_end_time=l.end_time)},processFile(t){this.form.attachment=t.target.files[0],t.target.files[0].type.includes("image")?this.attachment_view=URL.createObjectURL(t.target.files[0]):this.attachment_view=""},async continuePaymentScreen(){this.paymentScreen=!0},onResize(){this.windowWidth=window.innerWidth,this.windowWidth<768&&(this.isMobileScreen=!1)}},mounted(){this.key++,this.$nextTick(()=>{window.addEventListener("resize",this.onResize)})},beforeDestroy(){window.removeEventListener("resize",this.onResize)}}),n=t=>(L("data-v-e0d6c97b"),t=t(),F(),t),Y={class:"container-fluid py-5 border-bottom border-dark"},G={class:"row"},J={class:"col-12"},O={class:"fs-2 text-center"},K={class:"fw-normal"},Q={class:"fw-bold"},X=n(()=>e("nav",{"aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb justify-content-center"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"#",class:"text-dark text-decoration-none"},"Home")]),e("li",{class:"breadcrumb-item","aria-current":"page"}," Make An Appointment ")])],-1)),Z={class:"section pt-0"},x={class:"container"},ee={class:"row"},te={class:"col-md-12"},se={key:0},oe={key:0,class:"row"},ie=n(()=>e("div",{class:"col-md-12"},[e("div",{class:"skeleton-structure"},[e("div",{class:"row mb-3"},[e("div",{class:"col-12 d-flex justify-content-end"},[e("div",{style:{width:"160px",height:"40px"},class:"bg-skeleton mb-2 p-3 rounded-5"})])]),e("div",{class:"row"},[e("div",{class:"card shadow p-3 border-0",style:{"max-width":"initial"}},[e("div",{style:{width:"180px",height:"20px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-2 mb-4"}),e("div",null,[e("ul",{class:"list-unstyled d-flex flex-wrap"},[e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"}),e("li",{style:{width:"160px",height:"50px"},class:"bg-skeleton mb-2 p-3 me-2 rounded-5"})])])])]),e("div",{class:"row mt-3"},[e("div",{class:"col-12 d-flex justify-content-end"},[e("div",{style:{width:"160px",height:"40px"},class:"bg-skeleton mb-2 p-3 rounded-5"})])])])],-1)),ae=[ie],le={key:1,class:"row"},ne={key:0,class:"col-12"},de={class:"d-md-flex justify-content-between mb-4"},ce={for:"starts_at",class:"fs-4"},re={type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},_e=n(()=>e("i",{class:"bi bi-calendar-date me-2"},null,-1)),he={class:"col-12 time-slots-list"},me={class:"card p-3 mb-4"},pe={key:0},ue={key:0},be={class:"list-unstyled d-flex flex-wrap mb-0"},fe=["onClick"],ye={type:"button",class:"btn p-0",style:{"font-size":"12px"}},we={key:1,class:"p-5 text-center"},ge=n(()=>e("i",{class:"bi bi-exclamation-circle-fill fs-1 text-primary"},null,-1)),ve=n(()=>e("br",null,null,-1)),ke={class:"fw-normal"},Se={key:1},Ce={key:0},Ae={class:"d-flex align-items-center justify-content-center py-4"},ze={class:"d-flex"},De={class:"mb-0 text-capitalize me-3 fw-bold"},Te={class:"fs-4"},Pe={key:1,class:"p-5 text-center"},qe=n(()=>e("i",{class:"bi bi-exclamation-circle-fill fs-1 text-primary"},null,-1)),Ve=n(()=>e("br",null,null,-1)),$e={class:"fw-normal"},Le={class:"p-3 card"},Fe={class:"row align-items-center"},Ie={class:"col-md-12"},Ne={class:"row"},Me={class:"col-md-4"},We={class:"border-end border-2 border-primary pe-4",style:{width:"fit-content"}},Be={class:"fs-6 d-block fw-bold text-capitalize"},Re={class:"small fw-normal"},Ue={class:"col-md-2"},je={class:"fs-6 fw-bold text-capitalize"},Ee=n(()=>e("br",null,null,-1)),He={class:"small fw-normal"},Ye={class:"col-md-3"},Ge={class:"fs-6 fw-bold text-capitalize"},Je=n(()=>e("br",null,null,-1)),Oe={class:"small fw-normal"},Ke={key:0,class:"col-md-3"},Qe={class:"fs-6 fw-bold text-capitalize"},Xe=n(()=>e("br",null,null,-1)),Ze={class:"small fw-normal"},xe={class:"col-md-12 mt-5"},et={class:"mb-4 text-capitalize"},tt={class:"card rounded p-3"},st={class:"ps-0"},ot={for:"question",class:"text-capitalize mb-3"},it={class:"ps-0 mb-3 mt-4"},at={for:"attachment",class:"text-capitalize mb-3"},lt=["src"],nt={class:"col-md-2 mt-3"},dt=["disabled"],ct={key:1},rt={class:"p-3 card"},_t={class:"row align-items-center"},ht={class:"col-md-10"},mt={class:"row"},pt={class:"col-md-4"},ut={class:"border-end border-2 border-primary pe-4",style:{width:"fit-content"}},bt={class:"fs-6 d-block fw-bold text-capitalize"},ft={class:"small fw-normal"},yt={class:"col-md-2"},wt={class:"fs-6 fw-bold text-capitalize"},gt=n(()=>e("br",null,null,-1)),vt={class:"small fw-normal"},kt={class:"col-md-3"},St={class:"fs-6 fw-bold text-capitalize"},Ct=n(()=>e("br",null,null,-1)),At={class:"small fw-normal"},zt={key:0,class:"col-md-3"},Dt={class:"fs-6 fw-bold text-capitalize"},Tt=n(()=>e("br",null,null,-1)),Pt={class:"small fw-normal"},qt={style:{width:"840px"},class:"px-4"},Vt=["onClick"],$t=["src","alt"],Lt={class:""},Ft={class:"pe-3 ps-3 mb-3"},It={class:"row align-items-center"},Nt={class:"col-md-6"},Mt=["disabled"],Wt={key:2},Bt={key:0,class:"thank-you-section mt-5"},Rt={class:"p-3 mb-4 rounded-lg bg-primary-light"},Ut={class:"row align-items-center"},jt={class:"col-12 p-4 text-center"},Et=n(()=>e("i",{class:"bi bi-envelope fs-1"},null,-1)),Ht={class:"fs-4 mb-0 fw-bold"},Yt={class:"fs-4 mb-0"},Gt={class:"fs-4 mb-0"},Jt={class:"fs-4 mb-0"},Ot={class:"mt-5 text-center"},Kt=n(()=>e("span",{class:"circle","aria-hidden":"true"},[e("span",{class:"icon arrow"})],-1)),Qt={class:"button-text"},Xt={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Zt={class:"modal-dialog"},xt={class:"modal-content bg-transparent border-0"},es={class:"modal-body"},ts={class:"form-group mb-3"},ss={class:"card shadow d-flex align-items-center p-3"};function os(t,l,is,as,ls,ns){const f=r("Slide"),y=r("Navigation"),w=r("Carousel"),g=r("Link"),v=r("Wizard"),k=r("VueDatePicker"),S=r("app-layout");return o(),m(S,{title:"My Profile"},{header:c(()=>[]),default:c(()=>[e("div",Y,[e("div",G,[e("div",J,[e("h2",O,[e("span",K,s(t.__("Hello"))+" "+s(t.$page.props.auth.user.name)+" | ",1),e("span",Q,s(t.__("make an appointment")),1)]),X])])]),e("div",Z,[e("div",x,[e("div",ee,[e("div",te,[h(v,{onChange:t.onChangeCurrentTab,verticalTabs:t.isMobileScreen,"scrollable-tabs":"",hideButtons:"","custom-tabs":[{title:"Schedule Appointment"},{title:"Add Payment Details"},{title:"Thanks for Booking"}]},{default:c(()=>[t.currentTabIndex===0?(o(),a("div",se,[t.fetching?(o(),a("div",oe,ae)):t.paymentScreen?d("",!0):(o(),a("div",le,[t.is_schedule_required?(o(),a("div",ne,[e("div",de,[e("label",ce,s(t.__("please select date and time")),1),e("button",re,[_e,q(" "+s(t.__("Select Date")),1)])])])):d("",!0),e("div",he,[e("div",me,[t.is_schedule_required?(o(),a("div",pe,[t.fetchedSchedule?(o(),a("div",ue,[e("ul",be,[(o(!0),a(p,null,u(t.fetchedSchedule.schedule_slots,(i,_)=>(o(),a("li",{style:{cursor:"pointer"},class:b(["my-1 p-2 me-2 rounded border border-primary",{"bg-primary bg-opacity-50":t.selected_slot_index===_,"bg-danger pe-none":i.is_disabled}]),key:_,onClick:C=>t.selectSlot(_,i)},[e("button",ye,s(i.start_time)+" -- "+s(i.end_time),1)],10,fe))),128))])])):(o(),a("div",we,[ge,ve,e("h4",ke,s(t.__("schedule is not available against this date")),1)]))])):(o(),a("div",Se,[t.fetchedSchedule?(o(),a("div",Ce,[e("div",null,[e("div",Ae,[e("div",ze,[e("h3",De,s(t.__("fee"))+": ",1),e("span",Te,s(t.fetchedSchedule?t.getDisplayAmount(t.fetchedSchedule.fee):""),1)])])])])):(o(),a("div",Pe,[qe,Ve,e("h4",$e,s(t.__("schedule is not available against this date")),1)]))]))]),e("div",Le,[e("div",Fe,[e("div",Ie,[e("div",Ne,[e("div",Me,[e("div",We,[e("label",Be,s(t.__("lawyer name")),1),e("span",Re,s(t.lawyer.first_name??"")+" "+s(t.lawyer.last_name??""),1)])]),e("div",Ue,[e("label",je,s(t.__("fee")),1),Ee,e("span",He,s(t.fetchedSchedule?t.getDisplayAmount(t.fetchedSchedule.fee):""),1)]),e("div",Ye,[e("label",Ge,s(t.__("date")),1),Je,e("span",Oe,s(t.getFormattedDate(t.selected_date)),1)]),t.is_schedule_required?(o(),a("div",Ke,[e("label",Qe,s(t.__("slot")),1),Xe,e("span",Ze,s(t.selected_start_time)+" -- "+s(t.selected_end_time),1)])):d("",!0)])]),e("div",xe,[e("h5",et,s(t.__("ask your question")),1),e("div",tt,[e("div",st,[e("label",ot,s(t.__("question")),1),V(e("textarea",{class:"w-100 form-control px-3","onUpdate:modelValue":l[0]||(l[0]=i=>t.form.question=i),cols:"50",rows:"6"},null,512),[[$,t.form.question]])]),e("div",it,[e("label",at,s(t.__("attachment")),1),e("input",{class:"w-100 custom-file-input",placeholder:"Please Enter",type:"file",id:"attachment_file",ref:"attachment_file",onChange:l[1]||(l[1]=i=>t.processFile(i)),name:"attachment_file"},null,544),t.attachment_view?(o(),a("img",{key:0,src:t.attachment_view,height:"100",width:"100",class:"mt-2"},null,8,lt)):d("",!0)])])]),e("div",nt,[e("button",{type:"button",class:"btn btn-primary",disabled:!t.form.selected_schedule_id&&t.is_schedule_required,onClick:l[2]||(l[2]=i=>(t.continuePaymentScreen(),t.onChangeCurrentTab(1)))},s(t.__("continue")),9,dt)])])])])]))])):d("",!0),t.currentTabIndex===1?(o(),a("div",ct,[e("div",rt,[e("div",_t,[e("div",ht,[e("div",mt,[e("div",pt,[e("div",ut,[e("label",bt,s(t.__("lawyer name")),1),e("span",ft,s(t.lawyer.first_name??"")+" "+s(t.lawyer.last_name??""),1)])]),e("div",yt,[e("label",wt,s(t.__("fee")),1),gt,e("span",vt,s(t.fetchedSchedule?t.getDisplayAmount(t.fetchedSchedule.fee):""),1)]),e("div",kt,[e("label",St,s(t.__("date")),1),Ct,e("span",At,s(t.getFormattedDate(t.selected_date)),1)]),t.is_schedule_required?(o(),a("div",zt,[e("label",Dt,s(t.__("slot")),1),Tt,e("span",Pt,s(t.selected_start_time)+" -- "+s(t.selected_end_time),1)])):d("",!0)])])])]),e("h3",null,s(t.__("Select Payment Gateway")),1),e("div",qt,[(o(),m(w,{key:t.key,settings:t.settings,breakpoints:t.breakpoints},{addons:c(()=>[h(y)]),default:c(()=>[(o(!0),a(p,null,u(t.gateways,(i,_)=>(o(),m(f,{key:_},{default:c(()=>[e("div",{class:b({"border border-5 border-warning":t.form.gateway==i.code}),onClick:C=>this.form.gateway=i.code},[e("img",{class:"",src:i.image,alt:i.name},null,8,$t),e("h5",Lt,s(i.name),1)],10,Vt)]),_:2},1024))),128))]),_:1},8,["settings","breakpoints"]))]),e("div",Ft,[e("div",It,[e("div",Nt,[e("button",{type:"button",class:"btn btn-primary","data-secret":"{{ $intent->client_secret }}",onClick:l[3]||(l[3]=(...i)=>t.addFundRequest&&t.addFundRequest(...i)),disabled:t.form.processing||!t.form.gateway},s(t.__("make payment")),9,Mt),parseInt(this.$page.props.settings.enable_wallet_system)?(o(),a("button",{key:0,type:"button",onClick:l[4]||(l[4]=i=>this.form.gateway="wallet"),class:"btn btn-info ms-3"},s(t.__("Pay Using Wallet")),1)):d("",!0)])])])])):d("",!0),t.currentTabIndex===3?(o(),a("div",Wt,[t.paymentDone?(o(),a("div",Bt,[e("div",Rt,[e("div",Ut,[e("div",jt,[Et,e("p",Ht,s(t.__("Thank You")),1),e("p",Yt,s(t.__("For Your Payment"))+" "+s(t.fetchedSchedule?t.getDisplayAmount(t.fetchedSchedule.fee):""),1),e("p",Gt,s(t.__("Appointment No"))+" "+s(t.bookedAppointmentDetail.id),1),e("p",Jt,s(t.__("Payment Status"))+" "+s(t.bookedAppointmentDetail.is_paid?"Paid":"UnPaid"),1)])])]),e("div",Ot,[h(g,{href:t.route("appointment_log"),class:"btn btn-primary"},{default:c(()=>[Kt,e("span",Qt,s(t.__("View Appointment Log")),1)]),_:1},8,["href"])])])):d("",!0)])):d("",!0)]),_:1},8,["onChange","verticalTabs"])])])]),e("div",Xt,[e("div",Zt,[e("div",xt,[e("div",es,[e("div",ts,[e("div",ss,[h(k,{inline:"","auto-apply":"",modelValue:t.selected_date,"onUpdate:modelValue":[l[5]||(l[5]=i=>t.selected_date=i),t.fetchAvailableSlots]},null,8,["modelValue","onUpdate:modelValue"])])])])])])])])]),_:1})}const ps=A(H,[["render",os],["__scopeId","data-v-e0d6c97b"]]);export{ps as default};