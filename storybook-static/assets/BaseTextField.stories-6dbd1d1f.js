import{B as Ue}from"./BaseButton-40d08798.js";import{d as Ne,r as u,c as ze,w as Ee,o as l,a as c,n as F,b as M,t as $,e as Ie,f as He,v as We,g as je,m as Ae,h as Pe}from"./vue.esm-bundler-6ee5dc42.js";import{_ as Ge}from"./BaseTextField.vue_vue_type_style_index_0_lang-c4e37e64.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";const Je=["required","placeholder","disabled","readonly"],Ke={key:3,class:"error-message"},we=Ne({__name:"BaseTextField",props:{modelValue:{type:String,default:null},bind:{type:Object,default:null},variant:{type:String,default:"default",validator:e=>["default","outlined","underlined","dark"].includes(e)},useBorderLoading:{type:Boolean,default:!1},loadingColor:{type:String,default:"#3498db"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},label:{type:String,default:null},placeholder:{type:String,default:null},disableOnLoading:{type:Boolean,default:!1},maxLength:{type:Number,default:null},minLength:{type:Number,default:0},required:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"30px"},rules:{type:Array,default:[]},customStyle:{type:String,default:""},customStyleLabel:{type:String,default:""},disableRequiredRule:{type:Boolean,default:!1}},emits:["input:value","change:value","blur:value"],setup(e,{emit:Oe}){const t=e,s=u(t.modelValue),d=u(!1),q=u(!1),C=u(""),Ve=ze(()=>{const n=[];return t.required&&!t.disableRequiredRule&&n.push(r=>!!r&&!!r.length&&r!==""||"Required field"),t.minLength&&n.push(r=>r.length>=t.minLength||`Min ${t.minLength} characters`),t.maxLength&&n.push(r=>r.length<=t.maxLength||`Max ${t.maxLength} characters`),[...n,...t.rules]}),i=()=>{if(t.readonly)return;const n=Ve.value.map(r=>r(s.value)).filter(r=>typeof r=="string"||r===!1);C.value=n[0],q.value=!!n.length},R=Oe,Fe=()=>{i(),R("input:value",s)},Me=()=>{i(),R("change:value",s)},$e=()=>{d.value=!1,i(),R("blur:value",s)};return Ee(s,()=>{i()}),(n,r)=>{var w,O;return l(),c("div",{class:F(["base-text-field",{"base-text-field-has-label":e.label,[`base-text-field-${e.variant}`]:e.variant}])},[e.label?(l(),c("label",{key:0,for:"base-text-field-input-name",class:F(["base-text-field-label",{"base-text-field-label-active":(((w=s.value)==null?void 0:w.length)||d.value)&&!e.readonly}]),style:M(e.customStyleLabel)},$(e.label),7)):Ie("",!0),He(je("input",Ae({name:"base-text-field-input-name",type:"text",class:["base-text-field-input",{[`base-text-field-input-${e.variant}`]:e.variant,"base-text-field-error":q.value&&!e.loading,"base-text-field-border":e.variant==="outlined","base-text-field-input-has-spinner":e.loading&&!e.useBorderLoading,"base-text-field-input-has-base-color":e.variant==="default","base-text-field-input-has-dark-color":e.variant==="dark"}],"onUpdate:modelValue":r[0]||(r[0]=V=>s.value=V),required:e.required,style:[e.customStyle,{width:e.width,height:e.height}],placeholder:((O=s.value)!=null&&O.length||d.value)&&!e.readonly?e.placeholder:"",disabled:e.disabled||e.disableOnLoading&&e.loading,readonly:e.readonly,onInput:Fe,onChange:Me,onBlur:$e,onFocus:r[1]||(r[1]=V=>d.value=!0)},e.bind),null,16,Je),[[We,s.value]]),e.loading&&e.useBorderLoading?(l(),c("div",{key:1,class:"base-text-field-loading-border",style:M({"background-color":e.loadingColor})},null,4)):e.loading?(l(),Pe(Ge,{key:2,class:"base-text-field-spinner",size:"small","color-spinner":e.loadingColor},null,8,["color-spinner"])):(l(),c("span",Ke,$(C.value),1))],2)}}}),ea={title:"Input/BaseTextField",component:we,tags:["input","textField"],argTypes:{}},a={render:e=>({components:{BaseTextField:we},setup(){return{args:{placeholder:"Type your text",label:"Label",...e}}},template:'<div style="width: 200px"><BaseTextField v-bind="args">Default</BaseTextField></div>'}),args:{...Ue.args}},o=a;o.args={};const g={...a,args:{...a.args,variant:"outlined"}},m={...a,args:{...a.args,variant:"underlined"}},p={...a,args:{...a.args,variant:"dark"}},f={...a,args:{...a.args,loading:!0}},h={...a,args:{...a.args,loading:!0,useBorderLoading:!0}},b={...a,args:{...a.args,disabled:!0}},y={...a,args:{...a.args,disableOnLoading:!0,loading:!0}},v={...a,args:{...a.args,readonly:!0}},x={...a,args:{...a.args,required:!0}},T={...a,args:{...a.args,minLength:5}},S={...a,args:{...a.args,maxLength:5}},L={...a,args:{...a.args,rules:[e=>e.includes("vuetage")||'Text should include "vuetage"']}},B={...a,args:{...a.args,width:"40px"}},k={...a,args:{...a.args,height:"80px"}},D={...a,args:{...a.args,customStyle:"background-color: yellow; border-radius: 15px;"}};var U,N,z;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:"Template",...(z=(N=o.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var E,I,H;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    variant: 'outlined'
  }
}`,...(H=(I=g.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var W,j,A;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    variant: 'underlined'
  }
}`,...(A=(j=m.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var P,G,J;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    variant: 'dark'
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    loading: true
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,_;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    loading: true,
    useBorderLoading: true
  }
}`,...(_=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,ae,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    disabled: true
  }
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    disableOnLoading: true,
    loading: true
  }
}`,...(ne=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,oe,de;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    readonly: true
  }
}`,...(de=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,ue,ce;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    required: true
  }
}`,...(ce=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ge,me,pe;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    minLength: 5
  }
}`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,he,be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    maxLength: 5
  }
}`,...(be=(he=S.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,ve,xe;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    rules: [(value: string) => value.includes('vuetage') || 'Text should include "vuetage"']
  }
}`,...(xe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Te,Se,Le;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    width: '40px'
  }
}`,...(Le=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};var Be,ke,De;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    height: '80px'
  }
}`,...(De=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Re,qe,Ce;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    customStyle: 'background-color: yellow; border-radius: 15px;'
  }
}`,...(Ce=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:Ce.source}}};const aa=["Default","Outlined","Underlined","Dark","LoadingDefault","LoadingUseBorder","Disabled","DisabledOnLoading","Readonly","Required","MinLength5","MaxLength5","CustomRule","Width","Height","CustomStyle"];export{L as CustomRule,D as CustomStyle,p as Dark,o as Default,b as Disabled,y as DisabledOnLoading,k as Height,f as LoadingDefault,h as LoadingUseBorder,S as MaxLength5,T as MinLength5,g as Outlined,v as Readonly,x as Required,m as Underlined,B as Width,aa as __namedExportsOrder,ea as default};
//# sourceMappingURL=BaseTextField.stories-6dbd1d1f.js.map
