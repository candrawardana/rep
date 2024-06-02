import{_ as h,d as w,o as y,h as _,m as o,l as r,i as s,b as t,e as n,w as d,v as g,k as c,E as D,x as b}from"./app-5a739dd9.js";import{A as v,D as C}from"./DialogModal-48696bc6.js";import{D as k}from"./DangerButton-d1505699.js";import{I as U}from"./Input-8812850b.js";import{I as M}from"./InputError-8e109f03.js";import{S as A}from"./SecondaryButton-ae55756a.js";import"./Modal-94d7f363.js";const S=w({components:{ActionSection:v,DangerButton:k,DialogModal:C,Input:U,InputError:M,SecondaryButton:A},data(){return{modal:null,form:this.$inertia.form({password:""})}},methods:{confirmUserDeletion(){this.form.password="";let e=document.querySelector("#confirmingUserDeletionModal");this.modal=new bootstrap.Modal(e),this.modal.show(),setTimeout(()=>this.$refs.password.focus(),250)},deleteUser(){this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.form.reset(),this.modal.hide()}}}),$=t("div",null," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),B={class:"mt-3"},I={class:"mt-4"},V={class:"spinner-border spinner-border-sm",role:"status"},E=t("span",{class:"visually-hidden"},"Loading...",-1),N=[E];function P(e,a,T,F,K,O){const i=r("danger-button"),m=r("input-error"),u=r("secondary-button"),p=r("dialog-modal"),f=r("action-section");return y(),_(f,null,{title:o(()=>[s(" Delete Account ")]),description:o(()=>[s(" Permanently delete your account. ")]),content:o(()=>[$,t("div",B,[n(i,{onClick:e.confirmUserDeletion},{default:o(()=>[s(" Delete Account ")]),_:1},8,["onClick"])]),n(p,{id:"confirmingUserDeletionModal"},{title:o(()=>[s(" Delete Account ")]),content:o(()=>[s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),t("div",I,[d(t("input",{type:"password",placeholder:"Password",ref:"password","onUpdate:modelValue":a[0]||(a[0]=l=>e.form.password=l),class:c({"is-invalid":e.form.errors.password}),onKeyup:a[1]||(a[1]=D((...l)=>e.deleteUser&&e.deleteUser(...l),["enter"]))},null,34),[[g,e.form.password]]),n(m,{message:e.form.errors.password},null,8,["message"])])]),footer:o(()=>[n(u,{"data-dismiss":"modal",onClick:e.closeModal},{default:o(()=>[s(" Cancel ")]),_:1},8,["onClick"]),n(i,{onClick:e.deleteUser,class:c({"text-white-50":e.form.processing}),disabled:e.form.processing},{default:o(()=>[d(t("div",V,N,512),[[b,e.form.processing]]),s(" Delete Account ")]),_:1},8,["onClick","class","disabled"])]),_:1})]),_:1})}const Q=h(S,[["render",P]]);export{Q as default};
