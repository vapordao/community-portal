(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{EiyH:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return i})),r.d(t,"default",(function(){return c}));var n=r("zLVn"),o=(r("q1tI"),r("7ljp")),a=r("z1h2"),i={},l={_frontmatter:i},s=a.a;function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.mdx)(s,Object.assign({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Dai Credit System"),Object(o.mdx)("p",null,"The core function of the Dai Credit System is to allow users to self-issue Dai-denominated loans against collateral deposited into smart contract-based escrow. "),Object(o.mdx)("p",null,"At the core is the collateral portfolio, a pool of on-chain digital assets that back the Dai supply. "),Object(o.mdx)("p",null,"While the collateral presents a source of value, additional heuristics are required to maintain a soft peg of $1. "),Object(o.mdx)("h3",null,"Governance"),Object(o.mdx)("h4",null,"Arbitrage"),Object(o.mdx)("p",null,"In particular, the Dai Credit System incentivizes arbitrageurs to buy and sell Dai in the open marketplace. "),Object(o.mdx)("p",null,"This arbitrage is supported by monetary policy adjustments that influence the supply and demand for Dai recursively until Dai has returned back to its target price. "),Object(o.mdx)("p",null,"Market makers have come to rely on these Stability Fee changes, and as a result supply the necessary liquidity to minimize outsized deviations."),Object(o.mdx)("h4",null,"Emergency Shutdown"),Object(o.mdx)("p",null,"In extreme events, 1 Dai can be redeemed for $1 worth of collateral through a process known as Emergency Shutdown. "),Object(o.mdx)("p",null,"However, collateral values can sometimes fluctuate dramatically. If they were to suffer a sharp decline in value, the settlement feature enabled by Emergency Shutdown may not allow for full redemption. "),Object(o.mdx)("p",null,"As a last line of defense against volatile asset prices, a process for auctioning MKR tokens exists as a backstop for undercollateralized Dai. "),Object(o.mdx)("h3",null,"MKR Token Holders"),Object(o.mdx)("p",null,"MKR token holders are ultimately the group motivated to ensure the successful operation of the Dai Credit System."),Object(o.mdx)("p",null,"MKR token holders coordinate themselves using a decentralized governance process through which they evaluate and select appropriate collateral assets. "),Object(o.mdx)("p",null,"The success of this endeavor is strongly correlated to a proficient risk evaluation of the collateral set. "),Object(o.mdx)("p",null,"A failure in due diligence or coordination will result in severe losses for both end users of the protocol (in the form of declining Dai price) as well as MKR token holders (in the form of MKR dilution). "),Object(o.mdx)("p",null,"While the incentives for MKR token holders are clear, executing the plan requires additional work."),Object(o.mdx)("h4",null,"Decentralized Risk Function"),Object(o.mdx)("p",null,"There is considerable overhead with respect to quantifying risk in the Dai Credit System and managing it appropriately. "),Object(o.mdx)("p",null,"It is not practical (nor necessarily advisable) for MKR token holders to directly analyze it themselves. "),Object(o.mdx)("p",null,"A simple and intuitive solution is to outsource risk specialists who are tasked with evaluation of the risks. "),Object(o.mdx)("p",null,"While the traditional model of a centralized risk function could operate as a bootstrapping mechanism, we also propose a more robust and decentralized blueprint."),Object(o.mdx)("p",null,"The primary idea is to create the Decentralized Risk Function, a process by which distributed teams of independent risk specialists are incentivized to exercise due diligence on the collateral portfolio and create models for appropriate monetary policy. "),Object(o.mdx)("p",null,"The decentralized model affords us a near limitless talent pool, blanket coverage, and uninterrupted operation. "),Object(o.mdx)("h4",null,"Risk Teams"),Object(o.mdx)("p",null,"Decentralized risk teams are designed to be resistant to capture from biased ecosystem actors; risk teams operate solely for the benefit of MKR token holders."),Object(o.mdx)("p",null,"Through the governance process, the MKR token holders are responsible for managing the operational aspects of Maker risk teams. "))}c.isMDXComponent=!0},z1h2:function(e,t,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("2A+t"),i=r("izhR"),l=(r("xEQ+"),r("YwZP")),s=r("tW5L"),c=r("4XhP"),d=r("/xXG"),u=r("d+M2");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.children,r=e.pageContext,h=e.uri,m=r.frontmatter,b=m.title,f=m.description,y=m.keywords,O=m.featuredImage,j=m.status,g=m.hideLanguageSelector,x=m.hideBreadcrumbs,v="object"==typeof j?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({children:j.text},j):{children:j},k=Object(l.useLocation)().pathname.split("/")[2],w=void 0!==k&&""!==k,D={title:b||function(){var e=o.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||h.split("/").pop(),description:f,keywords:y,featuredImage:O};return Object(a.c)(o.Fragment,null,Object(a.c)(u.b,D),j&&Object(a.c)(i.f,{sx:{marginTop:w?2:0}},Object(a.c)(d.l,Object.assign({sticky:!0},v,{sx:{width:"100%"}}))),(!x||w&&!g)&&Object(a.c)(i.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:w?0:[3,3,0]}},!x&&Object(a.c)(c.a,null),w&&!g&&Object(a.c)(s.b,null)),Object(a.c)(i.f,{sx:w&&!g?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-learn-collateral-and-risk-dai-credit-system-mdx-18c9d37cb1f83e78a1dc.js.map