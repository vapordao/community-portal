(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"EKT/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("z1h2"),o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}},s=c("Callout"),l=c("Indent"),d=c("List"),u=c("Column"),p=c("Box"),b={_frontmatter:o},m=r.a;function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(m,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",null,"Vault Risk"),Object(i.mdx)(s,{icon:"warning",mdxType:"Callout"},Object(i.mdx)("p",null,"Owning a Vault is inherently risky.")),Object(i.mdx)("p",null,"This page describes the types of risk associated with owning a Vault and provides common practices for mitigating those risks. There are four major categories of risks to consider when creating a Vault: Market Risks, User Risks, Systemic Risks, and Parameter Variability Risk."),Object(i.mdx)("hr",null),Object(i.mdx)(l,{pad:2,mdxType:"Indent"},Object(i.mdx)("h2",null,"Market Risks"),Object(i.mdx)(l,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,"Using a Vault involves generating Dai and transferring ownership of your assets to a smart-contract that can sell your assets in the event of a market downturn. Any Vault with Generated Dai has a Liquidation Price, the price of the underlying asset at which one's Vault would be liquidated. Using a Vault for leverage introduces additional risk. The potential for reward is higher through leverage, but the potential for loss is magnified as well."),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"It is a common practice among users to maintain a high Collateralization Ratio to protect from Market Risks and thereby Liquidation."))),Object(i.mdx)("h2",null,"User Risks"),Object(i.mdx)(l,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,"This type of risk is associated with user error. MakerDAO can NOT reverse transactions or recover funds sent to incorrect addresses or contracts.")),Object(i.mdx)("h2",null,"Systemic Risks"),Object(i.mdx)(l,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,"Systemic risks associated with operation of the Maker Protocol include, but are not limited to:"),Object(i.mdx)("p",null,"Malicious hacks attack against the smart-contract infrastructure."),Object(i.mdx)("p",null,"Black Swan events involving one or more collateral assets."),Object(i.mdx)("p",null,"Failure of centralized infrastructure. For example, failed internet connections, MetaMask bugs, etc.")),Object(i.mdx)("h2",null,"Parameter Variability Risk"),Object(i.mdx)(l,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"It's important to note that Vault owners are subject to changes in the Risk Parameters that govern the system. This equates to financial risk for the Vault owner. Below is a partial list of parameters that are subject to change:")),Object(i.mdx)(d,{mdxType:"List"},Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/stability-fees/"}),"Stability Fees")),Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/faqs/makerdao-mcd-faqs/glossary/"}),"Debt Ceiling")),Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/"}),"Liquidation Penalty"))))),Object(i.mdx)(u,{mdxType:"Column"},Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("h2",null,"Mitigating Risk"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Common practices for mitigating the risks associated with owning a Vault include:")),Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("p",null,"Using price alerts and/or notifications to monitor Vaults"),Object(i.mdx)("p",null,"Increasing the collateralization ratio of a Vault"),Object(i.mdx)("p",null,"Maintaining enough liquidity outside of your Vault to pay back Dai generated by the Vault or add to its deposited collateral")))))}O.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var n=a("rePB"),i=a("q1tI"),r=a("2A+t"),o=a("izhR"),c=a("xEQ+"),s=a.n(c),l=a("Wbzz"),d=a("YwZP"),u=a("4XhP"),p=a("tW5L"),b=a("/xXG"),m=a("C9jn"),O=a("d+M2"),j=a("Al62");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=function(e){var t=Object(p.d)(),a=t.locale,c=t.t,f=t.DEFAULT_LOCALE,x=Object(l.useStaticQuery)("955314892").allMdx,g=e.children,y=e.pageContext,k=e.uri,w=y.pagePath,v=y.frontmatter,P=v.title,T=v.description,V=v.keywords,D=v.featuredImage,M=v.status,C=v.hideLanguageSelector,I=v.hideBreadcrumbs,L=w.replace(/^\/|\/$/g,"").split("/").slice(1),R=L.join("/"),q=Object(m.a)(x.edges,L[0],f,a,L),S=q.sidenavData,z=q.breadcrumbData,A=x.edges.filter((function(e){var t=e.node;return Object(j.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===R&&Object(j.g)(t.fileAbsolutePath)!==a})).map((function(e){var t=e.node;return{value:Object(j.c)(t),label:c("Language",null,null,Object(j.g)(t.fileAbsolutePath))}})),B="object"==typeof M?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:M.text},M):{children:M},E=Object(d.useLocation)().pathname.split("/")[2],N=P||function(){var e=i.Children.toArray(g).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||k.split("/").pop(),U=void 0!==E&&""!==E,F=y.frontmatter&&!y.frontmatter.hideSidenav&&U,X=U&&!C,W=!I||U&&!C,H={title:N,description:T,keywords:V,featuredImage:D},_=X?234:0;return F&&(_+=256),Object(r.c)(i.Fragment,null,F&&Object(r.c)(o.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(r.c)(s.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(r.c)(u.g,{data:S,currentPath:w}))),Object(r.c)(o.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+_+"px)"],mt:U?[4,4,"59px"]:0,pl:U?[4,4,"64px"]:0,pr:U?[4,4,0]:0,pb:4}},Object(r.c)(O.c,H),M&&Object(r.c)(o.f,{sx:{marginTop:U?2:0}},Object(r.c)(b.l,Object.assign({sticky:!0},B,{sx:{width:"100%"}}))),W&&Object(r.c)(o.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:U?0:[3,3,0]}},Object(r.c)(u.a,{data:z,pathDirs:L})),Object(r.c)(o.f,{sx:{display:["block","block","none"]}},X&&Object(r.c)(p.b,{data:A,pagePath:w})),Object(r.c)(o.f,null,g)),Object(r.c)(o.f,{sx:{display:["none","none","block"]}},X&&Object(r.c)(p.b,{data:A,pagePath:w})),Object(r.c)(u.e,{sidenavData:S}))}}}]);
//# sourceMappingURL=component---content-en-learn-vaults-risk-mdx-bcf8879bf69fa058769c.js.map