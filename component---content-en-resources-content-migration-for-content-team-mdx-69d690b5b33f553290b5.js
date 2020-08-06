(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"36Tv":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("z1h2"),r={},o={_frontmatter:r},s=i.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.mdx)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",null,"Migration from .md to (.mdx) files"),Object(l.mdx)("h3",null,"Setting up Local development"),Object(l.mdx)("p",null,"Let's set up local development environments! Being able to hotload your changes into a local website is no small feat and is kind of a badass skill. ",Object(l.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/tutorial/"}),"Here is Gatsby's guide to doing basically everything in this doc")," it's elegant, thorough, and helfpul AF. Plus it's like a half hour, tops, of following directions and installing things."),Object(l.mdx)("h3",null,"The terminal"),Object(l.mdx)("p",null,"🤨 ",Object(l.mdx)("strong",{parentName:"p"}," i see you're reading on... ")),Object(l.mdx)("p",null,"If one hasn't done anything before in the terminal, recognize that it's the pinnacle of laziness & elegance. Developers literally have set this thing up to run on as few characters as possible. Our devs, specifically, have set community contributors to use even fewer commands."),Object(l.mdx)("p",null,"If you're lazy (congratulations 🎊 ) , then here the short-short guide to Installs"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"https://code.visualstudio.com/download"}),"VS code"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"IDE's with the best text highlighting experience, and development ease/packages/extensions/themes, borders on an obsession. so, download packages/extensions at one's own discretion. Generally it's best to have:",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"A linter"),Object(l.mdx)("li",{parentName:"ul"},"A prettier extension"),Object(l.mdx)("li",{parentName:"ul"},"Something to enable terminal(the shell) in your IDE"),Object(l.mdx)("li",{parentName:"ul"},"A theme <-- this is where the obsessions start"))))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"https://brew.sh/"}),"homebrew"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Little package manager that makes life so much easier. Also, it allows package installs for everything this portal needs."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"https://nodejs.org/en/"}),"node.js"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"the underlying architecture under the hood is react.js. Both Nodejs and React are javascript languages that can be executed both client and server-side. Developers can execute the Reactjs code directly in the Nodejs environment. The React DOM has components specifically designed to work with Nodejs that reduce lines of code, making server-side rendering comparatively easy.")))),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"brew install node\n")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"https://yarnpkg.com/"}),"yarn"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"A simpler package manager with some fancy sauce on it in the comm-dev instance. Let's do command line for yarn too 🤭")))),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"brew install yarn\n{or}\nnpm install -g yarn\n")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object.assign({parentName:"li"},{href:""}),"Gatsby"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Let's install gatsby via terminal, keeping those terminal command skils sharp.")))),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"npm install -g gatsby-cli\n")),Object(l.mdx)("h3",null,"I pressed buttons, now what??"),Object(l.mdx)("p",null,"By this point all the dependencies should be downloaded. let's get our hands dirty"),Object(l.mdx)("p",null,Object(l.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/community-portal"}),"clone that community repo")," and get building in the IDE! Getting started is as simple as entering the commands ",Object(l.mdx)("inlineCode",{parentName:"p"},"yarn")," then ",Object(l.mdx)("inlineCode",{parentName:"p"},"yarn start")," in the terminal. So head to terminal and run those commands in order."),Object(l.mdx)("p",null,"Normally there is a flurry of activity in the terminal and eventually some pages that say success."),Object(l.mdx)("p",null,Object(l.mdx)("img",Object.assign({parentName:"p"},{src:"https://i.imgur.com/EL88h6k.png",alt:null}))),Object(l.mdx)("p",null,"Navigate to localhost:8000 in the web browser of choice. :boom: Boom, you just built your local environment. Now when editing an .mdx file and hitting save, Gatsby will do all the work to render the site for you with all the new ",Object(l.mdx)("strong",{parentName:"p"},Object(l.mdx)("em",{parentName:"strong"},"glorious"))," changes."),Object(l.mdx)("h3",null,"Common commands to fix things"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"yarn")," before you ",Object(l.mdx)("inlineCode",{parentName:"li"},"yarn start")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"yarn clean")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"gatsby clean")),Object(l.mdx)("li",{parentName:"ul"},"Possibly you'll need to delete the packagelock.json file. then run those clean commands again."),Object(l.mdx)("li",{parentName:"ul"},"We've seen multiple terminal windows open with ",Object(l.mdx)("inlineCode",{parentName:"li"},"yarn start")," then the browser says no and a bunch of errors return. Close one of the terminals and try it all again."),Object(l.mdx)("li",{parentName:"ul"},"Occasionally closing VScode and the browser will fix things, in addition to the commands above. ",Object(l.mdx)("em",{parentName:"li"},"The :black_square_button: turn off :white_square_button: turn on of local builds."))))}c.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var a=n("rePB"),l=n("q1tI"),i=n("2A+t"),r=n("izhR"),o=(n("xEQ+"),n("YwZP")),s=n("tW5L"),c=n("4XhP"),m=n("/xXG"),d=n("d+M2");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.a=function(e){var t=e.children,n=e.pageContext,b=e.uri,u=n.frontmatter,h=u.title,j=u.description,O=u.keywords,g=u.featuredImage,x=u.status,f=u.hideLanguageSelector,y=u.hideBreadcrumbs,w="object"==typeof x?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:x.text},x):{children:x},N=Object(o.useLocation)().pathname.split("/")[2],v=void 0!==N&&""!==N,k={title:h||function(){var e=l.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||b.split("/").pop(),description:j,keywords:O,featuredImage:g};return Object(i.c)(l.Fragment,null,Object(i.c)(d.b,k),x&&Object(i.c)(r.f,{sx:{marginTop:v?2:0}},Object(i.c)(m.l,Object.assign({sticky:!0},w,{sx:{width:"100%"}}))),(!y||v&&!f)&&Object(i.c)(r.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:v?0:[3,3,0]}},!y&&Object(i.c)(c.a,null),v&&!f&&Object(i.c)(s.b,null)),Object(i.c)(r.f,{sx:v&&!f?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-resources-content-migration-for-content-team-mdx-69d690b5b33f553290b5.js.map