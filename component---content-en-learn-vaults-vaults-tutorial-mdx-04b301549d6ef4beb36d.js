(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{EvwK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("z1h2"),l={},o={_frontmatter:l},c=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",null,"Vaults Tutorial"),Object(r.mdx)("p",null,"A Vault is a tool that lets the owner deposit collateral and generate Dai."),Object(r.mdx)("h2",null,"Vault Types"),Object(r.mdx)("p",null,"Vaults are categorized by the type of collateral used to generated Dai. Users create Dai by generating it against their collateral and destroy Dai when repaying their generated Dai balance."),Object(r.mdx)("p",null,"The process of generating Dai happens entirely on-chain, which enables anyone to audit the amount of circulating Dai and the collateral backing it."),Object(r.mdx)("p",null,"For a current list of Collateral types and Vault types, please visit ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://oasis.app/borrow"}),"Oasis Borrow")," or try one of these ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#third-party-vault-portals"}),"other Maker Vault front-ends"),"."),Object(r.mdx)("h2",null,"Collateralization"),Object(r.mdx)("p",null,"Vaults are required to be overcollateralized and have a ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/"}),"Liquidation Ratio")," that Vault owners need to uphold to avoid the Liquidation of their positions."),Object(r.mdx)("p",null,"Additionally, a Debt Ceiling is imposed on the Maker Protocol as well as each Vault type. The Debt Ceiling is the maximum amount of Dai that can be generated."),Object(r.mdx)("p",null,"The Global Debt Ceiling limits the amount of Dai that can be generated across the entire system, while Vault-specific Debt-Ceilings limit how much Dai each type of Vault can generate."),Object(r.mdx)("h2",null,"Stability Fees"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/stability-fees/"}),"Stability Fee")," is a variable-rate fee continuously added to a Vault owner’s generated Dai balance."),Object(r.mdx)("h2",null,"Emergency Shutdown Module"),Object(r.mdx)("p",null,"The Emergency Shutdown Module(ESM) provides a process for shutting down the Maker Protocol and distributing collateral to Dai holders and Vault owners."),Object(r.mdx)("p",null,"To trigger an Emergency Shutdown, a minimum threshold of 50,000 MKR must be placed into the ESM. All MKR placed in the ESM can only be retrieved after redeployment as a decision of MKR governors."),Object(r.mdx)("p",null,Object(r.mdx)("img",Object.assign({parentName:"p"},{src:"https://i.imgur.com/QM63vjM.png",alt:"Emergency Shutdown Module"}))),Object(r.mdx)("p",null,"Activating an Emergency Shutdown:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Locks the System")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Freezes the Dai Savings Rate")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Prohibits Vault Creation/Dai Generation")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Freezes Reference Prices"))),Object(r.mdx)("p",null,"During an Emergency Shutdown, excess collateral is made available to Vault owners. Once collateral auctions are concluded, any remaining collateral in the Vaults is made available for redemption by Dai holders."))}s.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var n=a("rePB"),r=a("q1tI"),i=a("2A+t"),l=a("izhR"),o=a("xEQ+"),c=a.n(o),s=a("Wbzz"),d=a("YwZP"),p=a("4XhP"),u=a("tW5L"),b=a("/xXG"),m=a("C9jn"),h=a("d+M2"),O=a("Al62");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=function(e){var t=Object(u.d)(),a=t.locale,o=t.t,g=t.DEFAULT_LOCALE,f=Object(s.useStaticQuery)("955314892").allMdx,y=e.children,x=e.pageContext,w=e.uri,v=x.pagePath,D=x.frontmatter,P=D.title,S=D.description,M=D.keywords,V=D.featuredImage,k=D.status,E=D.hideLanguageSelector,C=D.hideBreadcrumbs,N=v.replace(/^\/|\/$/g,"").split("/").slice(1),L=N.join("/"),T=Object(m.a)(f.edges,N[0],g,a,N),z=T.sidenavData,A=T.breadcrumbData,F=f.edges.filter((function(e){var t=e.node;return Object(O.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===L&&Object(O.g)(t.fileAbsolutePath)!==a})).map((function(e){var t=e.node;return{value:Object(O.c)(t),label:o("Language",null,null,Object(O.g)(t.fileAbsolutePath))}})),R="object"==typeof k?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:k.text},k):{children:k},q=Object(d.useLocation)().pathname.split("/")[2],I=P||function(){var e=r.Children.toArray(y).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||w.split("/").pop(),B=void 0!==q&&""!==q,K=x.frontmatter&&!x.frontmatter.hideSidenav&&B,W=B&&!E,X=!C||B&&!E,G={title:I,description:S,keywords:M,featuredImage:V},H=W?234:0;return K&&(H+=256),Object(i.c)(r.Fragment,null,K&&Object(i.c)(l.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(i.c)(c.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(i.c)(p.g,{data:z,currentPath:v}))),Object(i.c)(l.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+H+"px)"],mt:B?[4,4,"59px"]:0,pl:B?[4,4,"64px"]:0,pr:B?[4,4,0]:0,pb:4}},Object(i.c)(h.c,G),k&&Object(i.c)(l.f,{sx:{marginTop:B?2:0}},Object(i.c)(b.l,Object.assign({sticky:!0},R,{sx:{width:"100%"}}))),X&&Object(i.c)(l.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:B?0:[3,3,0]}},Object(i.c)(p.a,{data:A,pathDirs:N})),Object(i.c)(l.f,{sx:{display:["block","block","none"]}},W&&Object(i.c)(u.b,{data:F,pagePath:v})),Object(i.c)(l.f,null,y)),Object(i.c)(l.f,{sx:{display:["none","none","block"]}},W&&Object(i.c)(u.b,{data:F,pagePath:v})),Object(i.c)(p.e,{sidenavData:z}))}}}]);
//# sourceMappingURL=component---content-en-learn-vaults-vaults-tutorial-mdx-04b301549d6ef4beb36d.js.map