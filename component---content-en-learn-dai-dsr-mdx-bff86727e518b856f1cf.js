(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{L5VF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("z1h2"),i={},c={_frontmatter:i},l=r.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.mdx)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Dai Savings Rate"),Object(o.mdx)("p",null,"The Dai Savings Rate (DSR) is a variable rate of accrual earned by locking Dai in the DSR smart contract."),Object(o.mdx)("p",null,"Its purpose is to allow Maker governance to influence demand for Dai through changes in monetary policy."),Object(o.mdx)("p",null,"Dai holders can earn savings automatically and natively while retaining control of their Dai. The DSR smart contract has no withdrawal limits, deposit limits, or liquidity constraints. The rate is actively set by MKR token holders through ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/governance/"}),"on-chain governance"),"."),Object(o.mdx)("h2",null,"How it Works"),Object(o.mdx)("p",null,"Dai holders can lock their Dai into the DSR smart contract at any time. Once locked, Dai continuously accrues to the user's balance, based on the current DSR."),Object(o.mdx)("p",null,"For more technical details, please visit ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module/pot-detailed-documentation"}),"Pot - Detailed Documentation")," in our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal"),"."),Object(o.mdx)("h2",null,"FAQs"),Object(o.mdx)("h3",null,"Can the DSR be negative or zero?"),Object(o.mdx)("p",null,"It is not possible for the DSR to be set to a negative rate with the current code-base."),Object(o.mdx)("p",null,"In theory, it’s possible for MKR governors to commission a rewrite of the code to be able to support negative rates, however, negative rates on the DSR would likely encourage holders to withdraw their Dai."),Object(o.mdx)("h3",null,"Does Dai automatically earn the DSR?"),Object(o.mdx)("p",null,"No. Dai only earns the rate if it is deposited into the DSR smart-contract."),Object(o.mdx)("h3",null,"Is the DSR its own smart contract?"),Object(o.mdx)("p",null,"Yes, the DSR is a part of the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module"),". This module is responsible for collecting Stability Fees and distributing Dai to DSR users."),Object(o.mdx)("p",null,"For a better understanding of the smart-contract structure of the Maker Protocol, visit our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal"),"."),Object(o.mdx)("h3",null,"When users lock Dai into the DSR, is that Dai pooled?"),Object(o.mdx)("p",null,"Yes, all Dai locked into the DSR is technically pooled together. However, the system tracks deposits on an individual basis."),Object(o.mdx)("h3",null,"Do DSR accruals compound or are they only earned on the principal?"),Object(o.mdx)("p",null,"In the code, DSR is continuously compounding at a growth rate of x% per second. For example, when the DSR is set to 2%, it will be accumulating at 1.0000000006279371924910298109948‬% per second."),Object(o.mdx)("p",null,"Practically, users experience an annual compounding of the displayed rate. For example, if the DSR was 2%, assuming the user put in 100 Dai, at the end of the first year they would have 102.00, and at the end of the second year they would have 104.04."),Object(o.mdx)("p",null,"Technical documentation about how Rates work in the Maker Protocol can be found in our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module")," documentation."),Object(o.mdx)("h3",null,"What is the formula for the expected accruals earned through the DSR?"),Object(o.mdx)("p",null,"Although the DSR compounds at a growth rate of x% per second, in practice the user experiences an annual compounding of the displayed rate."),Object(o.mdx)("p",null,"The easiest way to calculate how much one would earn using the DSR is to use an Annual Compounding interest formula. A Compound Interest Calculator can serve this purpose, simply make sure Compound (n) is set to Annually (1/yr)."),Object(o.mdx)("p",null,"Formula:"),Object(o.mdx)("p",null,"A = P(1 + r)^t"),Object(o.mdx)("p",null,"Where:"),Object(o.mdx)("p",null,"A = ending value of your deposit"),Object(o.mdx)("p",null,"P = the principal deposit amount"),Object(o.mdx)("p",null,"r = the annual interest rate (decimal)"),Object(o.mdx)("p",null,"t = the number of years the principal amount will stay in the DSR"),Object(o.mdx)("h3",null,"Are there constraints such as minimum lockup time or withdrawal limits?"),Object(o.mdx)("p",null,"Dai in DSR has no liquidity or time constraints. There is no minimum lockup time and no withdrawal limit for Dai in the DSR."),Object(o.mdx)("p",null,"Users can freely enter into and out of the DSR, only needing to pay the Ethereum transaction fee."),Object(o.mdx)("h3",null,"Does Dai earned by the DSR get calculated and paid out at the time of withdrawal, or is it continuously added to the user’s balance?"),Object(o.mdx)("p",null,"The amount earned is recalculated and counted towards each user’s balance multiple times a day. In practice, the DSR compounds once a year and is paid out pro-rata at the time of withdrawal."),Object(o.mdx)("p",null,"The displayed rate is what a user would earn on their principal in one-year using a simple interest calculation. For example, if the DSR is 2% and a user deposits 100 Dai they can expect to have 102 Dai in exactly 1 year."),Object(o.mdx)("p",null,"Technical documentation about how rates work in the Maker Protocol can be found in our Rates Module documentation."),Object(o.mdx)("h3",null,"How is the DSR being used by MKR token holders as a monetary policy tool?"),Object(o.mdx)("p",null,"The DSR is a global parameter that can be raised or lowered to influence demand for Dai."),Object(o.mdx)("p",null,"Raising the DSR incentivizes users to hold more Dai, leading to higher demand for Dai, whereas lowering the DSR has the opposite effect of reducing demand for Dai."),Object(o.mdx)("p",null,"This is reflected in the spot market price of Dai; if Dai is trading below a dollar, then the DSR can be raised to increase demand for Dai which would bring up the price of Dai."),Object(o.mdx)("p",null,"Conversely, if Dai is trading above a dollar, then the DSR can be lowered to reduce the demand for holding Dai which may help bring down the price of Dai."),Object(o.mdx)("h3",null,"Where can someone find information to better understand the economic impact of the DSR?"),Object(o.mdx)("p",null,"The In-Depth Analysis section of the Awesome-MakerDAO resource library offers comprehensive literature on this topic. This section is always expanding as more information becomes available."),Object(o.mdx)("h3",null,"Does the DSR reduce the MKR burn rate?"),Object(o.mdx)("p",null,"To answer this question accurately, one must understand what the value of the DSR is. The DSR is a cost to the system, but it is also one of the most important drivers of demand for Dai. The value that it brings as a monetary policy tool and source of Dai demand largely outweighs its cost."),Object(o.mdx)("h3",null,"Are Stability Fees structurally higher due to the existence of the DSR?"),Object(o.mdx)("p",null,"Yes."),Object(o.mdx)("h3",null,"Where can I find more technical information about the DSR?"),Object(o.mdx)("p",null,"Visit our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal")," for all technical documentation of the Maker Protocol."),Object(o.mdx)("p",null,"Technical documentation of the DSR is included in the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module/pot-detailed-documentation"}),"Pot - Detailed Documentation")," subsection."),Object(o.mdx)("p",null,"And documentation about how Rates work in the Maker Protocol is located in the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module")," section."))}s.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var n=a("rePB"),o=a("q1tI"),r=a("2A+t"),i=a("izhR"),c=(a("xEQ+"),a("YwZP")),l=a("tW5L"),s=a("4XhP"),d=a("/xXG"),u=a("d+M2");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=function(e){var t=e.children,a=e.pageContext,m=e.uri,p=a.frontmatter,b=p.title,f=p.description,O=p.keywords,j=p.featuredImage,D=p.status,x=p.hideLanguageSelector,y=p.hideBreadcrumbs,g="object"==typeof D?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:D.text},D):{children:D},w=Object(c.useLocation)().pathname.split("/")[2],R=void 0!==w&&""!==w,S={title:b||function(){var e=o.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||m.split("/").pop(),description:f,keywords:O,featuredImage:j};return Object(r.c)(o.Fragment,null,Object(r.c)(u.b,S),D&&Object(r.c)(i.f,{sx:{marginTop:R?2:0}},Object(r.c)(d.l,Object.assign({sticky:!0},g,{sx:{width:"100%"}}))),(!y||R&&!x)&&Object(r.c)(i.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:R?0:[3,3,0]}},!y&&Object(r.c)(s.a,null),R&&!x&&Object(r.c)(l.b,null)),Object(r.c)(i.f,{sx:R&&!x?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-learn-dai-dsr-mdx-bff86727e518b856f1cf.js.map