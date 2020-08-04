(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"+q0J":function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return o})),r.d(t,"default",(function(){return d}));var a=r("zLVn"),n=(r("q1tI"),r("7ljp")),c=r("z1h2"),o={},i={_frontmatter:o},s=c.a;function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.mdx)(s,Object.assign({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",null,"How it Works"),Object(n.mdx)("p",null,"In the Maker Protocol, each collateral type has a corresponding Oracle that publishes a reference price that the system uses. Each Oracle consists of an ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module")," and a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer.")," The Medianizer is sent data through a system of Feeds and relayers."),Object(n.mdx)("p",null,"Each Feed uses a tool called ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/setzer-mcd"}),"Setzer")," which pulls the median price from a set of exchanges and then pushes it to a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/more/protocols/secure-scuttlebutt.html"}),"Secure Scuttlebut Network")," that has relayers reading from it. Relayers aggregate the price data and send a transaction to the Medianizer. "),Object(n.mdx)("p",null,"The Medianizer then takes the median of the multiple reported medians and publishes it as a queued reference price. This price is then delayed by the Oracle Security Module before it is finally used by the system."),Object(n.mdx)("p",null,"Feeds may configure Setzer to pull from any exchanges of their choosing. Relayers are able to configure parameters around when to push price data to the Medianizer. Only MKR governance can configure or change the Medianizer and Oracle Security Module."))}d.isMDXComponent=!0},z1h2:function(e,t,r){"use strict";var a=r("rePB"),n=r("q1tI"),c=r("2A+t"),o=r("izhR"),i=(r("xEQ+"),r("YwZP")),s=r("tW5L"),d=r("4XhP"),l=r("/xXG"),p=r("d+M2");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}t.a=function(e){var t=e.children,r=e.pageContext,h=e.uri,m=r.frontmatter,b=m.title,f=m.description,O=m.keywords,y=m.featuredImage,j=m.status,g=m.hideLanguageSelector,x=m.hideBreadcrumbs,w="object"==typeof j?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({children:j.text},j):{children:j},M=Object(i.useLocation)().pathname.split("/")[2],k=void 0!==M&&""!==M,v={title:b||function(){var e=n.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||h.split("/").pop(),description:f,keywords:O,featuredImage:y};return Object(c.c)(n.Fragment,null,Object(c.c)(p.b,v),j&&Object(c.c)(o.f,{sx:{marginTop:k?2:0}},Object(c.c)(l.l,Object.assign({sticky:!0},w,{sx:{width:"100%"}}))),(!x||k&&!g)&&Object(c.c)(o.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:k?0:[3,3,0]}},!x&&Object(c.c)(d.a,null),k&&!g&&Object(c.c)(s.b,null)),Object(c.c)(o.f,{sx:k&&!g?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-learn-oracles-how-it-works-mdx-a5e740afa45f8e6f4840.js.map