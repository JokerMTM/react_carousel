(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(3),s=n.n(a),c=n(4),i=n(5),r=n(8),l=n(6),o=n(1),_=n.n(o),m=(n(13),n(7)),u=(n(14),n(0)),p=function(t){var e=t.images,n=t.step,a=t.frameSize,s=t.itemWidth,c=t.animationDuration,i=Object(o.useState)(0),r=Object(m.a)(i,2),l=r[0],_=r[1],p=l+a,b=a*s+10*a,j=l*(s+10);0===l&&(j=0);return Object(o.useEffect)((function(){_(0)}),[a]),Object(u.jsx)("div",{className:"Carousel",children:Object(u.jsxs)("div",{className:"Carousel__container",style:{width:b},children:[Object(u.jsx)("ul",{className:"Carousel__container__list",style:{gap:10,transition:"transform ".concat(c,"ms"),transform:"translateX(".concat(-j,"px)")},children:e.map((function(t,e){return Object(u.jsx)("li",{className:"Carousel__container__list__item",children:Object(u.jsx)("img",{className:"Carousel__container__list__img",src:t,alt:"".concat(e+1),width:s})},t)}))}),Object(u.jsxs)("div",{className:"Carousel__container__block",children:[Object(u.jsx)("button",{className:"Carousel__container__block__button",onClick:function(){return _(l>n?l-n:0)},type:"button",disabled:0===l,children:"Prev"}),Object(u.jsx)("button",{className:"Carousel__container__block__button",onClick:function(){return _(p+n<e.length?l+n:e.length-a)},type:"button","data-cy":"next",disabled:e.length-a===l,children:"Next"})]})]})})},b=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,a=e.step,s=e.frameSize,c=e.itemWidth,i=e.animationDuration;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{"data-cy":"title",className:"App__title",children:["Carousel with ",n.length," images"]}),Object(u.jsxs)("div",{className:"App__controls",children:[Object(u.jsxs)("div",{className:"App__controls__control",children:[Object(u.jsx)("label",{className:"App__controls__control__label",htmlFor:"stepId",children:"STEP:"}),Object(u.jsx)("input",{className:"App__controls__control__input",id:"stepId",type:"number",min:1,value:a,onChange:function(e){return t.setState({step:Number(e.target.value)})}})]}),Object(u.jsxs)("div",{className:"App__controls__control",children:[Object(u.jsx)("label",{className:"App__controls__control__label",htmlFor:"frameId",children:"FRAME SIZE:"}),Object(u.jsx)("input",{className:"App__controls__control__input",id:"frameId",type:"number",min:1,max:n.length,value:s,onChange:function(e){return t.setState({frameSize:Number(e.target.value)})}})]}),Object(u.jsxs)("div",{className:"App__controls__control",children:[Object(u.jsx)("label",{className:"App__controls__control__label",htmlFor:"itemId",children:"ITEM WIDTH:"}),Object(u.jsx)("input",{className:"App__controls__control__input",id:"itemId",type:"number",min:0,step:10,value:c,onChange:function(e){return t.setState({itemWidth:Number(e.target.value)})}})]}),Object(u.jsxs)("div",{className:"App__controls__control",children:[Object(u.jsx)("label",{className:"App__controls__control__label",htmlFor:"animationId",children:"ANIMATION DURATION:"}),Object(u.jsx)("input",{className:"App__controls__control__input",id:"animationId",type:"number",min:0,step:10,value:i,onChange:function(e){return t.setState({animationDuration:Number(e.target.value)})}})]})]}),Object(u.jsx)(p,{images:n,step:a,frameSize:s,itemWidth:c,animationDuration:i})]})}}]),n}(_.a.Component),j=b;s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fd04bb1e.chunk.js.map