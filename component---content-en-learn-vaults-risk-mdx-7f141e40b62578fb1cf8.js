(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"EKT/":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return l}));var i=a("zLVn"),n=(a("q1tI"),a("7ljp")),r=a("z1h2"),o={},s={_frontmatter:o},c=r.a;function l(t){var e=t.components,a=Object(i.a)(t,["components"]);return Object(n.mdx)(c,Object.assign({},s,a,{components:e,mdxType:"MDXLayout"}),Object(n.mdx)("h1",null,"Vault Risk"),Object(n.mdx)("p",null,"Owning a Vault is inherently risky."),Object(n.mdx)("p",null,"This page describes the types of risk associated with owning a Vault and provides common practices for mitigating those risks."),Object(n.mdx)("h2",null,"Types of Risk"),Object(n.mdx)("p",null,"There are four major categories of risks to consider when creating a Vault: Market Risks, User Risks, Systemic Risks, and Parameter Variability Risk."),Object(n.mdx)("h3",null,"Market Risks"),Object(n.mdx)("p",null,"Using a Vault involves generating Dai and transferring ownership of your assets to a smart-contract that can sell your assets in the event of a market downturn."),Object(n.mdx)("p",null,"Any Vault with Generated Dai has a Liquidation Price, the price of the underlying asset at which one's Vault would be liquidated. Using a Vault for leverage introduces additional risk."),Object(n.mdx)("p",null,"The potential for reward is higher through leverage, but the potential for loss is magnified as well."),Object(n.mdx)("p",null,"It is a common practice among users to maintain a high Collateralization Ratio to protect from Market Risks and thereby Liquidation."),Object(n.mdx)("h3",null,"User Risks"),Object(n.mdx)("p",null,"This type of risk is associated with user error. MakerDAO can NOT reverse transactions or recover funds sent to incorrect addresses or contracts."),Object(n.mdx)("h3",null,"Systemic Risks"),Object(n.mdx)("p",null,"Systemic risks associated with operation of the Maker Protocol include, but are not limited to:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Malicious hacks attack against the smart-contract infrastructure.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Black Swan events involving one or more collateral assets.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Failure of centralized infrastructure. For example, failed internet connections, MetaMask bugs, etc."))),Object(n.mdx)("h3",null,"Parameter Variability Risk"),Object(n.mdx)("p",null,"It's important to note that Vault owners are subject to changes in the Risk Parameters that govern the system. This equates to financial risk for the Vault owner. Below is a partial list of parameters that are subject to change:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Stability Fee")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Debt Ceiling")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Liquidation Penalty"))),Object(n.mdx)("h2",null,"Mitigating Risk"),Object(n.mdx)("p",null,"Common practices for mitigating the risks associated with owning a Vault include:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Using price alerts and/or notifications to monitor Vaults")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Increasing the Collateralization Ratio of a Vault")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Maintaining enough liquidity outside of your Vault to pay back Dai generated by the Vault or add to its deposited collateral"))))}l.isMDXComponent=!0},z1h2:function(t,e,a){"use strict";var i=a("rePB"),n=a("q1tI"),r=a("2A+t"),o=a("izhR"),s=(a("xEQ+"),a("YwZP")),c=a("tW5L"),l=a("4XhP"),u=a("/xXG"),p=a("d+M2");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}e.a=function(t){var e=t.children,a=t.pageContext,m=t.uri,b=a.frontmatter,h=b.title,O=b.description,j=b.keywords,f=b.featuredImage,x=b.status,g=b.hideLanguageSelector,y=b.hideBreadcrumbs,k="object"==typeof x?function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({children:x.text},x):{children:x},w=Object(s.useLocation)().pathname.split("/")[2],v=void 0!==w&&""!==w,N={title:h||function(){var t=n.Children.toArray(e).find((function(t){return"h1"===t.props.mdxType}));if(void 0!==t)return t.props.children}()||m.split("/").pop(),description:O,keywords:j,featuredImage:f};return Object(r.c)(n.Fragment,null,Object(r.c)(p.b,N),x&&Object(r.c)(o.f,{sx:{marginTop:v?2:0}},Object(r.c)(u.l,Object.assign({sticky:!0},k,{sx:{width:"100%"}}))),(!y||v&&!g)&&Object(r.c)(o.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:v?0:[3,3,0]}},!y&&Object(r.c)(l.a,null),v&&!g&&Object(r.c)(c.b,null)),Object(r.c)(o.f,{sx:v&&!g?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},e))}}}]);
//# sourceMappingURL=component---content-en-learn-vaults-risk-mdx-7f141e40b62578fb1cf8.js.map