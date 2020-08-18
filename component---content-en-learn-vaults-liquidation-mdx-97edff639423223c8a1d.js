(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{AwyB:function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return r})),i.d(t,"default",(function(){return s}));var a,o=i("zLVn"),l=(i("q1tI"),i("7ljp")),n=i("z1h2"),r={},c=(a="Tout",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.mdx)("div",e)}),u={_frontmatter:r},d=n.a;function s(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(l.mdx)(d,Object.assign({},u,i,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",null,"Liquidation"),Object(l.mdx)("p",null,"Liquidation is the process of selling collateral to cover the amount of Dai a user has generated from their Vault."),Object(l.mdx)("p",null,"Liquidation helps to ensure that Dai is always backed by an appropriate amount of collateral by closing-out Vaults that are under their minimum required Collateralization Ratio for their given collateral type."),Object(l.mdx)("h2",null,"How Liquidation Works"),Object(l.mdx)("p",null,"A Vault can be liquidated if the value of its collateral falls below the required minimum level, called the Liquidation Ratio."),Object(l.mdx)("p",null,"To make sure that the required surplus of collateral exists at all times, a class of users called Keepers are incentivized to maintain a constant watch for Vaults that become under-collateralized."),Object(l.mdx)("p",null,"During the Liquidation process, enough collateral is sold to cover the debt along with a Liquidation Penalty, leaving the remaining collateral available for withdrawal."),Object(l.mdx)("h2",null,"Liquidation Ratio"),Object(l.mdx)("p",null,"The Liquidation Ratio is the minimum required collateralization level for each Vault type before it is considered undercollateralized and subject to Liquidation."),Object(l.mdx)("p",null,"The Maker Protocol’s Oracles provide the system with pricing data that is used to track Vaults for when their Liquidation Ratio is breached. Once breached, they are available for Liquidation."),Object(l.mdx)("p",null,"Each Vault type’s Liquidation Ratio is determined by a combination of the collateral’s risk profile and the Stability Fee. There may be multiple Vault types for each collateral, with varying Liquidation Ratios and Stability Fees."),Object(l.mdx)("p",null,"The Liquidation Ratio of a Vault is typically displayed on front-ends that offer Vaults. To calculate a Liquidation Ratio, simply use the following formula"),Object(l.mdx)(c,{mdxType:"Tout"},Object(l.mdx)("p",null,"Liquidation Ratio = (Collateral Amount x Collateral Price) ÷ Generated Dai × 100")),Object(l.mdx)("h3",null,"Example"),Object(l.mdx)("p",null,"For example, a Vault with a 150% Liquidation Ratio will require a minimum $1.50 of collateral value for every $1 of Dai generated."),Object(l.mdx)("p",null,"If the value of the collateral falls to \\$1.49 it will be Liquidated to cover the generated Dai in addition to a fee called the Liquidation Penalty."),Object(l.mdx)("h2",null,"Liquidation Price"),Object(l.mdx)("p",null,"The Liquidation Price is the price at which a Vault becomes vulnerable to liquidation."),Object(l.mdx)("p",null,"Vault owners can lower their liquidation price by adding more collateral or returning Dai to the Vault."),Object(l.mdx)("p",null,"The Liquidation Price of a Vault is typically displayed on front-ends that offer Vaults. To calculate a Liquidation Price, simply use the following formula:"),Object(l.mdx)(c,{mdxType:"Tout"},Object(l.mdx)("p",null,"Liquidation Price = (Generated Dai ","*"," Liquidation Ratio) / (Amount of Collateral)")),Object(l.mdx)("h2",null,"Liquidation Penalty"),Object(l.mdx)("p",null,"A Liquidation Penalty is a fee paid by Vault owners when the value of their collateral reaches the Vault's Liqudation Price."),Object(l.mdx)("p",null,"The Liquidation Penalty is added to the Vault’s total outstanding generated DAI when liquidation occurs, which results in more collateral being sold at auction."),Object(l.mdx)("p",null,"Proceeds from Liquidation Penalties are put towards the Surplus Auctions, which result in burned MKR."),Object(l.mdx)("p",null,"Liquidation Penalties prevent ",Object(l.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/livnev/auction-grinding/blob/master/grinding.pdf"}),"Auction Grinding Attacks"),", which allow an attacker to break the Maker Protocol's auction mechanism and exploit the Maker Protocol for profit."))}s.isMDXComponent=!0},z1h2:function(e,t,i){"use strict";var a=i("rePB"),o=i("q1tI"),l=i("2A+t"),n=i("izhR"),r=(i("xEQ+"),i("YwZP")),c=i("tW5L"),u=i("4XhP"),d=i("/xXG"),s=i("d+M2");function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}t.a=function(e){var t=e.children,i=e.pageContext,h=e.uri,m=i.frontmatter,b=m.title,f=m.description,O=m.keywords,j=m.featuredImage,y=m.status,x=m.hideLanguageSelector,w=m.hideBreadcrumbs,g="object"==typeof y?function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){Object(a.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({children:y.text},y):{children:y},q=Object(r.useLocation)().pathname.split("/")[2],L=void 0!==q&&""!==q,v={title:b||function(){var e=o.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||h.split("/").pop(),description:f,keywords:O,featuredImage:j};return Object(l.c)(o.Fragment,null,Object(l.c)(s.b,v),y&&Object(l.c)(n.f,{sx:{marginTop:L?2:0}},Object(l.c)(d.l,Object.assign({sticky:!0},g,{sx:{width:"100%"}}))),(!w||L&&!x)&&Object(l.c)(n.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:L?0:[3,3,0]}},!w&&Object(l.c)(u.a,null),L&&!x&&Object(l.c)(c.b,null)),Object(l.c)(n.f,{sx:L&&!x?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-learn-vaults-liquidation-mdx-97edff639423223c8a1d.js.map