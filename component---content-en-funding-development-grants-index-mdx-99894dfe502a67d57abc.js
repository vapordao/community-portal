(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{u0sK:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return O}));var r=n("zLVn"),a=(n("q1tI"),n("7ljp")),o=n("z1h2"),c={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",t)}},l=i("StatusBanner"),p=i("Tout"),d=i("Box"),s=i("Aligner"),u=i("Button"),b={_frontmatter:c},m=o.a;function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.mdx)(m,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l,{warning:!0,mdxType:"StatusBanner"},Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"The grants program is not accepting new applications at the moment. Please check back later for the next wave."))),Object(a.mdx)("h1",null,"Development Grants"),Object(a.mdx)("p",null,"The MakerDAO Community grants program funds projects that increase Dai adoption, support emerging economies, open new markets, provide novel uses for the stablecoin, or other further the MakerDAO Foundation's principles."),Object(a.mdx)("p",null,"We allocate grants ranging from 5K - 50K Dai. We distribute blocks of funds as teams reach their predetermined milestones."),Object(a.mdx)(p,{mdxType:"Tout"},Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)("h3",null,"What We Fund"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Tools That Directly Benefit Dai and MKR Users"),Object(a.mdx)("li",{parentName:"ul"},"Expanding Dai Adoption"),Object(a.mdx)("li",{parentName:"ul"},"Increasing Access to Personal Liquidity"))),Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)("h3",null,"What We Don't Fund"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Pure R&D"),Object(a.mdx)("li",{parentName:"ul"},"Information Gathering"),Object(a.mdx)("li",{parentName:"ul"},"Additional Runway"),Object(a.mdx)("li",{parentName:"ul"},"Generic Ethereum Ecosystem Improvements"),Object(a.mdx)("li",{parentName:"ul"},"Large Marketing Budgets"),Object(a.mdx)("li",{parentName:"ul"},"Dai Airdrops | Giveaways")))),Object(a.mdx)(s,{center:!0,mdxType:"Aligner"},Object(a.mdx)(u,{to:"/funding/development-grants/development-grants-info/",mdxType:"Button"},"Apply for a Development Grant")),Object(a.mdx)(s,{center:!0,mdxType:"Aligner"},Object(a.mdx)(u,{to:"/funding/development-grants/grantee-playbook/",mdxType:"Button"},"Read the Grantee Playbook")))}O.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),o=n("2A+t"),c=n("izhR"),i=n("xEQ+"),l=n.n(i),p=n("Wbzz"),d=n("YwZP"),s=n("4XhP"),u=n("tW5L"),b=n("/xXG"),m=n("C9jn"),O=n("d+M2"),j=n("Al62");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=Object(u.d)(),n=t.locale,i=t.t,f=t.DEFAULT_LOCALE,g=Object(p.useStaticQuery)("955314892").allMdx,h=e.children,y=e.pageContext,v=e.uri,w=y.pagePath,D=y.frontmatter,P=D.title,k=D.description,T=D.keywords,A=D.featuredImage,B=D.status,L=D.hideLanguageSelector,N=D.hideBreadcrumbs,W=w.replace(/^\/|\/$/g,"").split("/").slice(1),E=W.join("/"),M=Object(m.a)(g.edges,W[0],f,n,W),C=M.sidenavData,I=M.breadcrumbData,S=g.edges.filter((function(e){var t=e.node;return Object(j.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===E&&Object(j.g)(t.fileAbsolutePath)!==n})).map((function(e){var t=e.node;return{value:Object(j.c)(t),label:i("Language",null,null,Object(j.g)(t.fileAbsolutePath))}})),G="object"==typeof B?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:B.text},B):{children:B},z=Object(d.useLocation)().pathname.split("/")[2],F=P||function(){var e=a.Children.toArray(h).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||v.split("/").pop(),R=void 0!==z&&""!==z,X=y.frontmatter&&!y.frontmatter.hideSidenav&&R,K=R&&!L,q=!N||R&&!L,H={title:F,description:k,keywords:T,featuredImage:A},U=K?234:0;return X&&(U+=256),Object(o.c)(a.Fragment,null,X&&Object(o.c)(c.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(o.c)(l.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(o.c)(s.g,{data:C,currentPath:w}))),Object(o.c)(c.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+U+"px)"],mt:R?[4,4,"59px"]:0,pl:R?[4,4,"64px"]:0,pr:R?[4,4,0]:0,pb:4}},Object(o.c)(O.c,H),B&&Object(o.c)(c.f,{sx:{marginTop:R?2:0}},Object(o.c)(b.l,Object.assign({sticky:!0},G,{sx:{width:"100%"}}))),q&&Object(o.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:R?0:[3,3,0]}},Object(o.c)(s.a,{data:I,pathDirs:W})),Object(o.c)(c.f,{sx:{display:["block","block","none"]}},K&&Object(o.c)(u.b,{data:S,pagePath:w})),Object(o.c)(c.f,null,h)),Object(o.c)(c.f,{sx:{display:["none","none","block"]}},K&&Object(o.c)(u.b,{data:S,pagePath:w})),Object(o.c)(s.e,{sidenavData:C}))}}}]);
//# sourceMappingURL=component---content-en-funding-development-grants-index-mdx-99894dfe502a67d57abc.js.map