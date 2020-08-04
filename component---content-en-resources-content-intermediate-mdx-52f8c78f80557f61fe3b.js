(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{wEYN:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return y}));var a=t("zLVn"),o=(t("q1tI"),t("7ljp")),i=t("z1h2"),c={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",n)}},s=l("Aligner"),d=l("Image"),r=l("List"),m=l("Box"),p=l("Link"),b=l("CTA"),u=l("Accordion"),h=l("Checklist"),x=l("StatusBanner"),g=l("Process"),O={_frontmatter:c},j=i.a;function y(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)(j,Object.assign({},O,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Intermediate"),Object(o.mdx)("p",null,"Our Basic guide showed how Callouts and CTAs require each piece of content to start on a new line.\nThis is because each new mdx line is interpreted as a new ",Object(o.mdx)("strong",{parentName:"p"},"child")," when it is passed to the magic box which\nturns it into a React component. This means, when using more advanced components, you'll need to be aware not\njust of the props you're specifying in the actual tag, like ",Object(o.mdx)("inlineCode",{parentName:"p"},"primaryOutline")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"icon"),", but also the order\nin which you write the content in each component and ",Object(o.mdx)("strong",{parentName:"p"},"leaving new lines between each separate piece"),"."),Object(o.mdx)(s,{center:!0,sx:{marginBottom:3},mdxType:"Aligner"},Object(o.mdx)(d,{src:"../../../images/children.jpg",mdxType:"Image"})),Object(o.mdx)("h2",null,"Lists"),Object(o.mdx)("p",null,"The list component is an example of why mdx having an opinion in how it renders components works\nin our favor. With mdx, we can order our children consistently.\nThis allows us to create smart hooks for rendering each element, which is a fancy way of saying that\nwe can create really beautiful lists with more functionality and visual pizzaz than you could ever\ndream of having in normal md files. Let's dive right in."),Object(o.mdx)("p",null,"The rule is ",Object(o.mdx)("strong",{parentName:"p"},"scripting and composition come FIRST"),", which just means that you can use the list component\nin the same way you'd write lists normally. Generally we write lists beginning with a hyphen in md. You can use the hyphen,\nor not, when writing content in our ",Object(o.mdx)("inlineCode",{parentName:"p"},"List")," component - either way it will render the same thing:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"basic-list.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n\nHello World\n\n</List>\n\n<List>\n\nHeader\n\nSub Content\n\n</List>\n\n<List>\n\n<Link to="/">\n\nHello World\n\n</Link>\n\n</List>\n')),Object(o.mdx)("p",null,"All end up looking like this:"),Object(o.mdx)(r,{mdxType:"List"},Object(o.mdx)("p",null,"Hello World")),Object(o.mdx)(r,{mdxType:"List"},Object(o.mdx)(m,{mdxType:"Box"},Object(o.mdx)("p",null,"Header"),Object(o.mdx)("p",null,"Sub Content"))),Object(o.mdx)(r,{mdxType:"List"},Object(o.mdx)(p,{to:"/",mdxType:"Link"},Object(o.mdx)("p",null,"Hello World"))),Object(o.mdx)("p",null,"If you want a list element with sub content, that's easy enough to organise:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"subcontent-list.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<List>\n\n<Box>\n\nHeader\n\nSub content\n\n</Box>\n\n</List>\n")),Object(o.mdx)("p",null,"Which renders like this:"),Object(o.mdx)(r,{mdxType:"List"},Object(o.mdx)(m,{mdxType:"Box"},Object(o.mdx)("p",null,"Header"),Object(o.mdx)("p",null,"Sub content"))),Object(o.mdx)("p",null,"For more complex sub content, we recommend using a Box:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"list-v2.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<List>\n\nA Great Header\n\n<Box>\n      \n<CTA> Now with a Call to Action! </CTA>\n\n</Box>\n\n</List>\n")),Object(o.mdx)(r,{mdxType:"List"},Object(o.mdx)(m,{mdxType:"Box"},Object(o.mdx)("p",null,"A Greatent Header"),Object(o.mdx)(m,{mdxType:"Box"},Object(o.mdx)(b,{mdxType:"CTA"}," Now with a Call to Action! ")))),Object(o.mdx)("p",null,"Want to render a few links? Easy! ",Object(o.mdx)("strong",{parentName:"p"},"Please note"),": these links are wrapped in a\nBox, and are not separate Link Elements (see more on this below)."),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"list-of-links.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n \n<Box>\n\n<Link to="/">Writing style guide →</Link>\n\n</Box>\n\n</List>\n')),Object(o.mdx)("p",null,"Which ends up looking like this:"),Object(o.mdx)(r,{mdxType:"List"},Object(o.mdx)(m,{mdxType:"Box"},Object(o.mdx)(p,{to:"/",mdxType:"Link"},"Writing style guide →"))),Object(o.mdx)(b,{mdxType:"CTA"},Object(o.mdx)("p",null,"NOTE: Mind the gap! There should be a gap between list elements that will be on the same level\nor mdx will not recognize them as seperate elements.")),Object(o.mdx)("p",null,"It's possible to have an entire list element be a link by providing the Link component like so:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"list-as-link.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n\n<Link to="https://makerdao.com">\n\nMakerDao\n\n</Link>\n\n<Link to="/learn">\n\nLearn\n\n</Link>\n\n</List>\n')),Object(o.mdx)("p",null,"Which both end up looking like this:"),Object(o.mdx)(r,{mdxType:"List"},Object(o.mdx)(p,{to:"https://makerdao.com",mdxType:"Link"},Object(o.mdx)("p",null,"MakerDao")),Object(o.mdx)(p,{to:"/learn",mdxType:"Link"},Object(o.mdx)("p",null,"Learn"))),Object(o.mdx)("p",null,"These links are also capable of having subcontent as well:"),Object(o.mdx)(r,{mdxType:"List"},Object(o.mdx)(p,{to:"https://makerdao.com",mdxType:"Link"},Object(o.mdx)("p",null,"MakerDao"),Object(o.mdx)("p",null,"Sub content")),Object(o.mdx)(p,{to:"/learn",mdxType:"Link"},Object(o.mdx)("p",null,"Learn"),Object(o.mdx)("p",null,"subcontent"))),Object(o.mdx)("h2",null,"Accordion"),Object(o.mdx)("p",null,"So you want to make a list, but with a lot of content, and you don't want to take up a lot of space\non the page? Sounds like you need a collapsable accordion menu... The Accordion component is ultra simple and\nscripting works with the same child rule. Except this time:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"The first child that appears is the header of the accordion."),Object(o.mdx)("li",{parentName:"ol"},"Everything AFTER the first child will be included in the collapsable content.")),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"accordion.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Accordion>\n\n## Hello World\n\nSome other content\n\n</Accordion>\n\n<Accordion>\n\nAm I eligible to receive a micro-grant if Maker and Dai are only one part of my agenda?\n\nSome other content inside of an accordion!\n\n> CTA content inside of Accordion\n\n![Onboarding](../../../../content/images/vault-onboarding-1.png)\n\n### Let\'s see how this works?\n\n</Accordion>\n\n<Accordion openIcon="chevron_down" closeIcon="chevron_up">\n\nOf course, it\'s also possible to have your own icons for opening and closing\n\n</Accordion>\n\n<Accordion defaultOpen>\n\nAnd you can control whether the menu defaults to being open or closed...\n\nThis content will show by default now.\n\n</Accordion>\n')),Object(o.mdx)(u,{mdxType:"Accordion"},Object(o.mdx)("h2",null,"Hello World"),Object(o.mdx)("p",null,"Some other content")),Object(o.mdx)(u,{mdxType:"Accordion"},Object(o.mdx)("p",null,"Am I eligible to receive a micro-grant if Maker and Dai are only one part of my agenda?"),Object(o.mdx)("p",null,"Some other content inside of an accordion!"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"CTA content inside of Accordion")),Object(o.mdx)("p",null,Object(o.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}}),"\n      ",Object(o.mdx)("span",Object.assign({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAACLklEQVQoz12SW08TQRTH9zPKs9/AD+ATLyaaGCOCN0RSHzQQahSCculKw6003Npui0DZ3dmd2Vt3W1rCgxeYOec4W4IxJv+Xmczv/M/5nzEisjsk2rD0SI6NyA8WtmMMOAqBgmPoY8RyxQwTH7Ma8UnaekWbr4cyInJj8gSezIH5CfYjDMQ/pDckPey4mHAcrEJjgswp2v4Ls4i8mHiXooziWzL6j3Tx3IX9ZTk5KgujsPyGtnI4JI9fO/616+ZiAeUkp9jPsUSTDDsOZgzTY1mYlc/vyXcjavYFrb+kDSMA1uw1rF7T6lqtfsu9FkyF9pVwVOhI7axtUxu6DHp7qvhMjt+R03fV5wJV5ujQCJGvNTdKtfLXXXOxWlrYKc2sLsxXzGJ5qbi+cvo7cqlnQ+bC+Qn4M2r1oVrbBt+BTFc0fMWX9kyzvr58UC41ts6uROvSOfsljn/w45/CVpkDXTtXzjPoczjX0pdaBgdecXYr7ECryuseJZxSRh2f+lo3j1gO9N1hiRtPBhc+DAyBQURpSGlAqaDMy4NNGPYsZR8qT2Mu9PaBr+D3I4hZXkvbdurK2lFHRr4SiAQkAaQcbrJNfehXVWtTtTkM2pAWaOcJmfPYYDBwIWjK90U58UBO57DeShXtL2TV0Pewe9tq37ud7SPW9G6+4YkHl74qVeXjgpy6LwsGx6RBvv5xY1TWDqfQ0X0OQ8qGE3b1UZs3MHTyzC5stViSTyfkW73wP9lbcO3sbeaAAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.mdx)("img",Object.assign({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Onboarding",title:"Onboarding",src:"/static/a82603cab66874abf05c1c79b63e1576/00d43/vault-onboarding-1.png",srcSet:["/static/a82603cab66874abf05c1c79b63e1576/63868/vault-onboarding-1.png 250w","/static/a82603cab66874abf05c1c79b63e1576/0b533/vault-onboarding-1.png 500w","/static/a82603cab66874abf05c1c79b63e1576/00d43/vault-onboarding-1.png 1000w","/static/a82603cab66874abf05c1c79b63e1576/aa440/vault-onboarding-1.png 1500w","/static/a82603cab66874abf05c1c79b63e1576/29007/vault-onboarding-1.png 1600w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.mdx)("h4",null,"Let's see how this works?")),Object(o.mdx)(u,{openIcon:"chevron_down",closeIcon:"chevron_up",mdxType:"Accordion"},Object(o.mdx)("p",null,"Of course, it's also possible to have your own icons for opening and closing")),Object(o.mdx)(u,{defaultOpen:!0,mdxType:"Accordion"},Object(o.mdx)("p",null,"And you can control whether the menu defaults to being open or closed..."),Object(o.mdx)("p",null,"This content will show by default now.")),Object(o.mdx)("h2",null,"Checklist"),Object(o.mdx)("p",null,"This is another simple component meant to be more visually engaging. It is ",Object(o.mdx)("strong",{parentName:"p"},"not")," interactive - it's\njust meant to organise content in a specific way, mostly for guide pages like preparing for hackathons etc.\nLike all the above, it too follows the Child Rule."),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"checkbox.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Checklist>\n\nWe can put **anything** inside this component\n\n> How about a CTA?\n\n<StatusBanner notice>\n\nOr a Status Banner...\n\n</StatusBanner>\n\n<Image src="../../../../content/images/vault-onboarding-2.png" />\n\n#### Now we\'re talking!\n\n</Checklist>\n')),Object(o.mdx)("p",null,"Which ends up looking like this:"),Object(o.mdx)(h,{mdxType:"Checklist"},Object(o.mdx)("p",null,"We can put ",Object(o.mdx)("strong",{parentName:"p"},"anything")," inside this component"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"How about a CTA?")),Object(o.mdx)(x,{notice:!0,mdxType:"StatusBanner"},Object(o.mdx)("p",null,"Or a Status Banner...")),Object(o.mdx)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(o.mdx)("span",Object.assign({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.199999999999996%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACFUlEQVQoz12S6W7aUBBGef/3yY8mVaukG2lWwGELYPCCfTG28b5zOritVHWkT/PN9dWZudYMzuczvwVd12HaDjvLxnZcDGuPOngcvCOm+K1h9bW1d+S7Qt+ZVHXNJf5yBvwXZVmS5zlZr4Jc6qKsyIqSVM4uPs1ykjQlk3yB/BuDpKgI0oJTVnLKKyJRXNRcrp2birbI6aqSs6grC1rRJaquJa+l0R+lcp7JncHzVnE3t7idGXzStnwR/3VhEws4c3aE6ynH5aRXuJkRbRc0ZY7uK2augWbrjM2NeJOlshiMTI/hxuGztubq54QfK5t7qS+TF8oQwAxrPOwV6m8k5pK2KjACxbsyeVxNGS7GAjNYHQSo7T1uxnOuHsbcjGZ8eJkK0JJnNCT2iu3TncC+Y0+G6I+3uLPH/lcYvsPd5IFvb88M5yNuxw/MrPUFqPg4mXH9qoneuB69ycQ7AdaURwNv+YRaPOFM7/HeX6TJgq4psQU40ado2znT3YKx+LWjM3j3A15lRV5kFZ7tPa+SNXXogc3JpjpuqLw15WFFfdSl1unqAi/ycAILN7RxA1u85HAvwMBn4cuenWKMMGIThmieIm9q2kiAvk4ROmS+TX2yqP1NP6EfKZRvcoyOAhcJTEmDgZVE6HGAmyW4aYKZnFhHAVXbcM4OtLFFk3k0qUebOn19bmvi1CeIHMkBcRZyihVh5PILhcjpn/iC0qQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.mdx)("img",Object.assign({parentName:"span"},{className:"gatsby-resp-image-image",alt:"vault onboarding 2",title:"vault onboarding 2",src:"/static/6ec04f4e097204b6d19fa56ff19d06f3/00d43/vault-onboarding-2.png",srcSet:["/static/6ec04f4e097204b6d19fa56ff19d06f3/63868/vault-onboarding-2.png 250w","/static/6ec04f4e097204b6d19fa56ff19d06f3/0b533/vault-onboarding-2.png 500w","/static/6ec04f4e097204b6d19fa56ff19d06f3/00d43/vault-onboarding-2.png 1000w","/static/6ec04f4e097204b6d19fa56ff19d06f3/aa440/vault-onboarding-2.png 1500w","/static/6ec04f4e097204b6d19fa56ff19d06f3/e8950/vault-onboarding-2.png 2000w","/static/6ec04f4e097204b6d19fa56ff19d06f3/1d7f7/vault-onboarding-2.png 2038w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"checkbox-code.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const variable =\n  \"Can't be shown in the code-block above because that's too meta...\";\n")),Object(o.mdx)("h4",null,"Now we're talking!")),Object(o.mdx)("h2",null,"Process Stepper"),Object(o.mdx)("p",null,"The process stepper is a carbon copy of the list component, except shaved down to ignore the Link requirements.\nThis means the same mindset of scripting a process element is in place. The children dictate the content,\nand how the children are seperated determine each step in the process."),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"process-stepper.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<Process>\n\n### Child 1\n\nChild 2\n\n<Box>\n\n### Child 3\n\nBunches and bunches of content can go in here. Anything you like, tbh.\n\n</Box>\n\n<Box>\n\n### Child 4\n\n> Even CTAs\n\n</Box>\n\n</Process>\n")),Object(o.mdx)(g,{mdxType:"Process"},Object(o.mdx)("h3",null,"Child 1"),Object(o.mdx)("p",null,"Child 2"),Object(o.mdx)(m,{mdxType:"Box"},Object(o.mdx)("h3",null,"Child 3"),Object(o.mdx)("p",null,"Bunches and bunches of content can go in here. Anything you like, tbh.")),Object(o.mdx)(m,{mdxType:"Box"},Object(o.mdx)("h3",null,"Child 4"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Even CTAs")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"or inline code\n")))),Object(o.mdx)("h2",null,"Box"),Object(o.mdx)("p",null,"You'll notice that we've begun wrapping our children in boxes. This is the way to overcome the child rule\nand sneak in more content to one specific child should the need arise. If you wrap your multi-line content\ninto a ",Object(o.mdx)("inlineCode",{parentName:"p"},"<Box>"),", then this will be read and rendered as a single child. You can already see how useful this\nis in the context of complex lists or process steppers, and it will become more apparent with other, more visual\ncomponents like Touts."),Object(o.mdx)("p",null,"Basically, a ",Object(o.mdx)("inlineCode",{parentName:"p"},"<Box>")," is just the old html ",Object(o.mdx)("inlineCode",{parentName:"p"},"<div>")," element updated for this brave new world we'll be building together.\nNow it's time to head over to the Advanced tutorial and begin understanding our visual components and how to style everything."))}y.isMDXComponent=!0},z1h2:function(e,n,t){"use strict";var a=t("rePB"),o=t("q1tI"),i=t("2A+t"),c=t("izhR"),l=(t("xEQ+"),t("YwZP")),s=t("tW5L"),d=t("4XhP"),r=t("/xXG"),m=t("d+M2");function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}n.a=function(e){var n=e.children,t=e.pageContext,b=e.uri,u=t.frontmatter,h=u.title,x=u.description,g=u.keywords,O=u.featuredImage,j=u.status,y=u.hideLanguageSelector,f=u.hideBreadcrumbs,w="object"==typeof j?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({children:j.text},j):{children:j},A=Object(l.useLocation)().pathname.split("/")[2],k=void 0!==A&&""!==A,v={title:h||function(){var e=o.Children.toArray(n).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||b.split("/").pop(),description:x,keywords:g,featuredImage:O};return Object(i.c)(o.Fragment,null,Object(i.c)(m.b,v),j&&Object(i.c)(c.f,{sx:{marginTop:k?2:0}},Object(i.c)(r.l,Object.assign({sticky:!0},w,{sx:{width:"100%"}}))),(!f||k&&!y)&&Object(i.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:k?0:[3,3,0]}},!f&&Object(i.c)(d.a,null),k&&!y&&Object(i.c)(s.b,null)),Object(i.c)(c.f,{sx:k&&!y?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},n))}}}]);
//# sourceMappingURL=component---content-en-resources-content-intermediate-mdx-52f8c78f80557f61fe3b.js.map