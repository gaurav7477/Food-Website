(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{9869:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/success",function(){return t(4395)}])},4747:function(e,r){"use strict";r.Z={src:"/_next/static/media/Logo.7cd89baf.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEX5trb4qan4nJ33lpb3jIz3h4j2goL2gYL2gID1ZWb1Xl71WFj1VFX1UlP1T1D1Tk/1TU71Skv1SUr1SEn1R0j0R0j1Rkf0Rkf0RUb0REX0Q0T0QkP0QUL0P0D0PkD0Ozz0OTr0ODr0ODn0Njj0NTf0NDb0Li/eLhNCAAAASUlEQVR42hXLxxGAMAwEwCOaDJYEwuRk+i+RYf8LUTsQqUDFy3GzgtewTuOLoL05TfIQxFUtdaOAPLIoeC1kypuymP+1u2Vj/QCyPATmnzlvzgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},3417:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(5893),s=t(4048),a=t.n(s),o=t(5675),i=t.n(o),c=t(4747),l=t(535),d=t(4496),u=t(1526),h=t(1664),x=t.n(h),j=t(7294),g=t(1163);function f(){(0,g.useRouter)(),(0,u.o)(e=>e);let[e,r]=(0,j.useState)("");(0,j.useEffect)(()=>{r(localStorage.getItem("order"))},[]);let t=(0,u.o)(e=>e.cart.pizzas.length);return(0,n.jsxs)("div",{className:a().header,children:[(0,n.jsxs)("div",{className:a().logo,children:[(0,n.jsx)(i(),{src:c.Z,alt:"heh",width:50,height:50}),(0,n.jsx)("span",{children:"Fudo"})]}),(0,n.jsxs)("ul",{className:a().menu,children:[(0,n.jsx)("li",{children:(0,n.jsx)(x(),{href:"../",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(x(),{href:"../",children:"Menu"})}),(0,n.jsx)("li",{children:(0,n.jsx)(x(),{href:"/contact",children:"Contact"})})]}),(0,n.jsxs)("div",{className:a().rigthSide,children:[(0,n.jsx)(x(),{href:"/cart",children:(0,n.jsxs)("div",{className:a().cart,children:[(0,n.jsx)(l.Z,{size:35,color:"#2E2E2E"}),(0,n.jsx)("div",{className:a().badge,children:t})]})}),e&&(0,n.jsx)(x(),{href:"/order/".concat(e),children:(0,n.jsxs)("div",{className:a().cart,children:[(0,n.jsx)(d.Z,{size:35,color:"#2E2E2E"}),""!=e&&(0,n.jsx)("div",{className:a().badge,children:"1"})]})})]})]})}},736:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var n=t(5893),s=t(3417),a=t(5168),o=t(8568),i=t(3448),c=t(3794),l=t.n(c),d=t(4747),u=t(5675),h=t.n(u);function x(){return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)("span",{children:"ALL RIGTH RESERVED"}),(0,n.jsxs)("div",{className:l().social,children:[(0,n.jsx)(a.Z,{size:45}),(0,n.jsx)(o.Z,{size:45}),(0,n.jsx)(i.Z,{size:45})]}),(0,n.jsxs)("div",{className:l().logo,children:[(0,n.jsx)(h(),{src:d.Z,alt:"heh",width:50,height:50}),(0,n.jsx)("span",{children:"Fudo"})]})]})}let j=e=>{let r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{}),r,(0,n.jsx)(x,{})]})};var g=j},7769:function(e,r,t){"use strict";t.d(r,{Z:function(){return x}});var n=t(5893),s=t(4442),a=t(7202),o=t(5923),i=t.n(o),c=t(7294);let l=async e=>{let{name:r,phone:t,address:n,total:s,paymentMethod:a}=e,o=await fetch("api/order",{method:"POST",body:JSON.stringify({name:r,phone:t,address:n,total:parseFloat(s),method:a,status:1})});console.log("res",o);let i=await o.json();return i};var d=t(6501),u=t(1526),h=t(1163);function x(e){let{opened:r,setOpened:t,paymentMethod:o}=e,x=(0,s.rZ)(),j=(0,h.useRouter)(),[g,f]=(0,c.useState)({}),_=e=>{f({...g,[e.target.name]:e.target.value})},m=async e=>{e.preventDefault();let r=await l({...g,total:A,paymentMethod:o});d.ZP.success("order placed"),console.log("order placed",r),p(),localStorage.setItem("order",r),j.push("/order/".concat(r))},p=(0,u.o)(e=>e.resetCart),A=localStorage.getItem("total");return(0,n.jsxs)(a.u,{overlayColor:"dark"===x.colorScheme?x.colors.dark[9]:x.colors.gray[2],overlayOpacity:.55,overlayBlur:3,opened:r,onClose:()=>t(null),children:[(0,n.jsxs)("form",{onSubmit:m,action:"",className:i().formContainer,children:[(0,n.jsx)("input",{onChange:_,type:"text",name:"name",required:!0,placeholder:"Name"}),(0,n.jsx)("input",{onChange:_,type:"text",name:"phone",required:!0,placeholder:"Phone Number"}),(0,n.jsx)("textarea",{onChange:_,name:"address",rows:3,required:!0,placeholder:"Address"}),(0,n.jsxs)("span",{children:["You will Pay ",(0,n.jsxs)("span",{children:["$",A]})," on Delivery"]}),(0,n.jsx)("button",{type:"submit",children:" Place Order"})]}),(0,n.jsx)(d.x7,{})]})}},4395:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var n=t(5893),s=t(736),a=t(7769);function o(){return(0,n.jsx)(s.Z,{children:(0,n.jsx)(a.Z,{opened:!0,paymentMethod:1})})}},1526:function(e,r,t){"use strict";t.d(r,{o:function(){return s}});var n=t(4529);let s=(0,n.Ue)(e=>({cart:{pizzas:[]},addPizza:r=>e(e=>({cart:{pizzas:[...e.cart.pizzas,r]}})),removePizza:r=>e(e=>({cart:{pizzas:e.cart.pizzas.filter((e,t)=>t!=r)}})),resetCart:()=>{e(()=>({cart:{pizzas:[]}}))}}))},3794:function(e){e.exports={container:"Footer_container__iN3aW",logo:"Footer_logo__PM82v",social:"Footer_social__r_lug"}},4048:function(e){e.exports={header:"Header_header__VYZ3G",logo:"Header_logo__6vBZG",menu:"Header_menu___mY7M",rigthSide:"Header_rigthSide__iYZXR",cart:"Header_cart__wM8u4",badge:"Header_badge__igzTy"}},5923:function(e){e.exports={formContainer:"OrderModal_formContainer__bjD_3"}}},function(e){e.O(0,[661,823,774,888,179],function(){return e(e.s=9869)}),_N_E=e.O()}]);