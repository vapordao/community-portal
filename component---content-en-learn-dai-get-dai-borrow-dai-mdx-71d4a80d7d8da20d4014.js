(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{wZpA:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r("zLVn"),o=(r("q1tI"),r("7ljp")),a=r("z1h2"),c={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",t)}},d=i("Box"),s=i("List"),p={_frontmatter:c},l=a.a;function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.mdx)(l,Object.assign({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Borrow Dai"),Object(o.mdx)("p",null,"DeFi lending skips the red tape and cuts out the middlemen. Borrowing Dai is easy, but borrow responsibly."),Object(o.mdx)("p",null,'There are two ways to "borrow" Dai within DeFi. Generate Dai on Oasis or use a lending platform.'),Object(o.mdx)("h2",null,"Platform Risk"),Object(o.mdx)("p",null,"Be mindful of the risks associated with lending and borrowing on the blockchain. Consider a platform’s risk rating on ",Object(o.mdx)("a",{href:"https://defiscore.io/"},"DeFi Score")," for help gauging a given platform's risk. Users are encouraged to do their own proper due diligence."),Object(o.mdx)(d,{sx:{padding:4},mdxType:"Box"},Object(o.mdx)("h3",null,"Popular Platforms"),Object(o.mdx)(s,{mdxType:"List"},Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("a",{href:"https://oasis.app/borrow"},"Oasis Borrow"),Object(o.mdx)("p",null,"Borrow Dai on the Maker Foundation’s platform. Lock collateral assets in the Vault smart contract to generate new Dai against the collateral’s value.")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("a",{href:"https://app.aave.com/"},"AAVE"),Object(o.mdx)("p",null,"Lend or borrow Dai and various other cryptocurrencies on AAVE. ")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("a",{href:"https://instadapp.io/compound/"},"Compound"),Object(o.mdx)("p",null,"Lend or borrow Dai and various other cryptocurrencies on Compound, one of the higher rated platforms in DeFi. ")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("a",{href:"https://ddex.io/"},"DDEX"),Object(o.mdx)("p",null,"Lend or borrow Dai and various other cryptocurrencies on DDEX. ")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("a",{href:"https://defisaver.com/"},"DeFi Saver"),Object(o.mdx)("p",null,"Save with this one-stop management solution for decentralized finance protocols.")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("a",{href:"https://trade.dydx.exchange/balances"},"dYdX"),Object(o.mdx)("p",null,"Lend or borrow Dai, ETH, USDC, or BTC on dYdX.")))))}b.isMDXComponent=!0},z1h2:function(e,t,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("2A+t"),c=r("izhR"),i=r("xEQ+"),d=r.n(i),s=r("Wbzz"),p=r("YwZP"),l=r("4XhP"),b=r("tW5L"),u=r("/xXG"),m=r("C9jn"),O=r("d+M2"),j=r("Al62");function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=Object(b.d)(),r=t.locale,i=t.t,h=t.DEFAULT_LOCALE,f=Object(s.useStaticQuery)("955314892").allMdx,g=e.children,y=e.pageContext,w=e.uri,D=y.pagePath,v=y.frontmatter,P=v.title,k=v.description,B=v.keywords,L=v.featuredImage,T=v.status,A=v.hideLanguageSelector,C=v.hideBreadcrumbs,E=D.replace(/^\/|\/$/g,"").split("/").slice(1),S=E.join("/"),X=Object(m.a)(f.edges,E[0],h,r,E),F=X.sidenavData,z=X.breadcrumbData,M=f.edges.filter((function(e){var t=e.node;return Object(j.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===S&&Object(j.g)(t.fileAbsolutePath)!==r})).map((function(e){var t=e.node;return{value:Object(j.c)(t),label:i("Language",null,null,Object(j.g)(t.fileAbsolutePath))}})),I="object"==typeof T?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({children:T.text},T):{children:T},H=Object(p.useLocation)().pathname.split("/")[2],U=P||function(){var e=o.Children.toArray(g).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||w.split("/").pop(),V=void 0!==H&&""!==H,W=y.frontmatter&&!y.frontmatter.hideSidenav&&V,Y=V&&!A,_=!C||V&&!A,q={title:U,description:k,keywords:B,featuredImage:L},G=Y?234:0;return W&&(G+=256),Object(a.c)(o.Fragment,null,W&&Object(a.c)(c.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(a.c)(d.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(a.c)(l.g,{data:F,currentPath:D}))),Object(a.c)(c.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+G+"px)"],mt:V?[4,4,"59px"]:0,pl:V?[4,4,"64px"]:0,pr:V?[4,4,0]:0,pb:4}},Object(a.c)(O.c,q),T&&Object(a.c)(c.f,{sx:{marginTop:V?2:0}},Object(a.c)(u.l,Object.assign({sticky:!0},I,{sx:{width:"100%"}}))),_&&Object(a.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:V?0:[3,3,0]}},Object(a.c)(l.a,{data:z,pathDirs:E})),Object(a.c)(c.f,{sx:{display:["block","block","none"]}},Y&&Object(a.c)(b.b,{data:M,pagePath:D})),Object(a.c)(c.f,null,g)),Object(a.c)(c.f,{sx:{display:["none","none","block"]}},Y&&Object(a.c)(b.b,{data:M,pagePath:D})),Object(a.c)(l.e,{sidenavData:F}))}}}]);
//# sourceMappingURL=component---content-en-learn-dai-get-dai-borrow-dai-mdx-71d4a80d7d8da20d4014.js.map