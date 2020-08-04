(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{vlz1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return A}));var l=n("zLVn"),a=(n("q1tI"),n("7ljp")),o=n("z1h2"),m={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",t)}},d=c("Accordion"),i=c("Aligner"),r=c("Image"),s=c("Callout"),u=c("Authors"),p=c("Box"),b=c("Button"),x=c("Checklist"),h=c("Chocolate"),j=c("Icon"),O=c("Code"),g=c("Column"),f=c("InfoBlock"),y=c("List"),w=c("Link"),C=c("Process"),N=c("StatusBanner"),B=c("Tout"),T=c("Video"),k={_frontmatter:m},v=o.a;function A(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.mdx)(v,Object.assign({},k,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"Component Palette"),Object(a.mdx)("h4",null,"This page serves as a palette for all the components this project has to offer."),Object(a.mdx)("p",null,"If you want to know where we started and ",Object(a.mdx)("strong",{parentName:"p"},"why")," components exist see ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.notion.so/Components-e4455d1797f74c48aae3019692a39413"}),"this"),"."),Object(a.mdx)("hr",null),Object(a.mdx)("h4",null,"Definitions"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("strong",{parentName:"p"},"WYSIWYG"),": What you see is what you get.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("strong",{parentName:"p"},"Component"),": A lego block like code element you can use for more advanced content like buttons.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("strong",{parentName:"p"},"MD"),": Shorthand for Markdown")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("strong",{parentName:"p"},"MDX"),": Shorthand for MarkdownExtended (ie. MDX is the name of the rendering engine we use.)")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("strong",{parentName:"p"},"Child/Children"),": Content that is wrapped by a Component. New lines between content will be recognized as a new child.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("strong",{parentName:"p"},"Child Rule"),": A pattern introduced for more complex components that recognized each individual child as a repeatable element of a component. (ie. List, InfoBlock, ect.)"))),Object(a.mdx)("hr",null),Object(a.mdx)("h4",null,"Disclaimers"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"To see dark/light mode variants click the moon/sun in the header")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"This palette is primarily to showcase component usage in a vacuum. See the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/resources/frankenstein"}),"Frankenstein page")," for advanced usages.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"For an in-depth on props available for these components please see the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/resources/content/cheatsheet"}),"Cheatsheet"))),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"Any component that's not listed here, but exists in the project")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"Always remember. What you see is what you get. (WYSIWYG). We follow the markdown spec and will ",Object(a.mdx)("strong",{parentName:"p"},"NOT")," deviate from it."))),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Accordion"),Object(a.mdx)("p",null,"Click the Accordion header to show and hide the content it offers."),Object(a.mdx)("p",null,"The First element is always the header. Every other element will be hidden away."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Accordion>Hello World This is hidden inside the Accordion.</Accordion>\n")),Object(a.mdx)("hr",null),Object(a.mdx)(d,{mdxType:"Accordion"},Object(a.mdx)("p",null,"Hello World"),Object(a.mdx)("p",null,"This is hidden inside the Accordion.")),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Aligner"),Object(a.mdx)("p",null,"This is a utility component built to work with the ",Object(a.mdx)("inlineCode",{parentName:"p"},"Image")," component."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Dev Note (Réjon): This component exists because remark-images wraps our elements automatically with styles that make it difficult to align an image. It only really works well if the container of the image is large enough to facilitate it.")),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Aligner center sx={{height: '400px', width: '100%'}}>\n\n<Image src=\"/images/starfox.png\" />\n\n</Aligner>\n\n<Aligner bottom right sx={{height: '400px', width: '100%'}}>\n\n![starfox](/images/starfox.png)\n\n</Aligner>\n")),Object(a.mdx)("hr",null),Object(a.mdx)(i,{center:!0,sx:{height:"400px",width:"100%"},mdxType:"Aligner"},Object(a.mdx)(r,{src:"/images/starfox.png",mdxType:"Image"})),Object(a.mdx)(i,{bottom:!0,right:!0,sx:{height:"400px",width:"100%"},mdxType:"Aligner"},Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/starfox.png",alt:"starfox"})))),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Authors"),Object(a.mdx)(s,{variant:"warning",icon:"warning",mdxType:"Callout"},Object(a.mdx)("h4",null,"Child Rule in Effect")),Object(a.mdx)("p",null,"This is a utility component originally built to display the AllContributors grid.\nYet, it also serves as good way for folks to set an author at the end of a page."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<Authors all/>\n\n<Authors list author="@MaximumCrash"/>\n')),Object(a.mdx)("hr",null),Object(a.mdx)(u,{all:!0,mdxType:"Authors"}),Object(a.mdx)(u,{list:!0,author:"@MaximumCrash",mdxType:"Authors"}),Object(a.mdx)("hr",null),Object(a.mdx)("p",null,"It's also possible to render a custom author by filling out the correct information like so:"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Dev Note(Réjon): You MUST fill out the information EXACTLY how it's written below to get a custom author to render with the correct information.")),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Authors list>\n  <Box>\n    ![Réjon](/images/starfox.png) [Réjon Taylor-Foster](https://rejontaylor.com)\n    [Another Test](https://github.com) [Twitter](https://twitter.com)\n    [Medium](https://medium.com) # Réjon Taylor-Foster ## Lorem ipsum dolor sit\n    amet, consectetur adipiscing elit. Donec pharetra quam augue. Nulla\n    facilisi. Ut sed volutpat nisl. Cras eget nunc sed erat malesuada faucibus.\n    Donec non vehicula elit. Interdum et malesuada fames ac ante ipsum primis in\n    faucibus. Sed blandit imperdiet maximus. In hac habitasse platea dictumst.\n    Sed id luctus justo. Morbi in tortor et quam lacinia finibus ac in quam.\n    Suspendisse mollis efficitur dui eu laoreet. ### MaximumCrash - ideas -\n    audio - doc - 👀 - 💦\n  </Box>\n</Authors>\n")),Object(a.mdx)(u,{list:!0,mdxType:"Authors"},Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/starfox.png",alt:"Réjon"}))),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://rejontaylor.com"}),"Réjon Taylor-Foster")),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com"}),"Another Test")),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://twitter.com"}),"Twitter")),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://medium.com"}),"Medium")),Object(a.mdx)("h1",null,"Réjon Taylor-Foster"),Object(a.mdx)("h2",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra quam augue. Nulla facilisi. Ut sed volutpat nisl. Cras eget nunc sed erat malesuada faucibus. Donec non vehicula elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit imperdiet maximus. In hac habitasse platea dictumst. Sed id luctus justo. Morbi in tortor et quam lacinia finibus ac in quam. Suspendisse mollis efficitur dui eu laoreet."),Object(a.mdx)("h3",null,"MaximumCrash"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"ideas"),Object(a.mdx)("li",{parentName:"ul"},"audio"),Object(a.mdx)("li",{parentName:"ul"},"doc"),Object(a.mdx)("li",{parentName:"ul"},"👀"),Object(a.mdx)("li",{parentName:"ul"},"💦")))),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Button"),Object(a.mdx)("p",null,"It's a button. Not much more to it."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Dev Note(Réjon): Because this site doesn't provide any stateful functionality (besides light/dark modes), Buttons are built to serve as a unique visual display of links.")),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<Button to="/"> ET phone Home </Button>\n\n<Button secondary inline to="/resources/recipes/palette"> Inlined Secondary </Button>\n\n<Button outline to="/resources/recipes/palette"> Click Here </Button>\n\n<Button small to="/resources/recipes/palette"> Small Button </Button>\n\n<Button to="https://makerdao.com"> External Link Button </Button>\n')),Object(a.mdx)("hr",null),Object(a.mdx)(b,{to:"/",mdxType:"Button"}," ET phone Home "),Object(a.mdx)(b,{disabled:!0,inline:!0,to:"/resources/recipes/palette",mdxType:"Button"}," ","Disabled Inline"," "),Object(a.mdx)(b,{secondary:!0,inline:!0,to:"/resources/recipes/palette",mdxType:"Button"}," ","Inlined Secondary"," "),Object(a.mdx)(b,{outline:!0,to:"/resources/recipes/palette",mdxType:"Button"}," ","Click Here"," "),Object(a.mdx)(b,{small:!0,to:"/resources/recipes/palette",mdxType:"Button"}," ","Small Button"," "),Object(a.mdx)(b,{to:"https://makerdao.com",mdxType:"Button"}," External Link Button "),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Callout"),Object(a.mdx)("p",null,"This component is for callouts. It can also be written as a blockquote ",Object(a.mdx)("inlineCode",{parentName:"p"},">")," markdown style."),Object(a.mdx)("p",null,"To have icons show up you have to provide an icon name from our icon palette. See the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/resources/icon-palette"}),"Icon Palette")," for those."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<Callout>\n\nHowdy\n\n</Callout>\n\n<Callout icon="lightbulb">\n\nMaker dao callout\n\n</Callout>\n\n> blockquote Callout Markdown Style\n')),Object(a.mdx)("hr",null),Object(a.mdx)(s,{mdxType:"Callout"},Object(a.mdx)("p",null,"Howdy")),Object(a.mdx)(s,{icon:"lightbulb",mdxType:"Callout"},Object(a.mdx)("p",null,"Maker dao callout")),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"blockquote Callout Markdown Style")),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Checklist"),Object(a.mdx)(s,{variant:"warning",icon:"warning",mdxType:"Callout"},Object(a.mdx)("h4",null,"Child Rule in Effect")),Object(a.mdx)("p",null,"This is a non-functioning checklist component. It is simply styled to look like one."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Checklist>\n  Child A Child B\n  <Box>\n    Child C<Checklist>Child C - A Child C - B</Checklist>\n  </Box>\n</Checklist>\n")),Object(a.mdx)("hr",null),Object(a.mdx)(x,{mdxType:"Checklist"},Object(a.mdx)("p",null,"Child A"),Object(a.mdx)("p",null,"Child B"),Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("p",null,"Child C"),Object(a.mdx)(x,{mdxType:"Checklist"},Object(a.mdx)("p",null,"Child C - A"),Object(a.mdx)("p",null,"Child C - B")))),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Chocolate (Box)"),Object(a.mdx)(s,{variant:"warning",icon:"warning",mdxType:"Callout"},Object(a.mdx)("h4",null,"Child Rule in Effect")),Object(a.mdx)("p",null,'Originally named "Chocolate Box" components, this component takes into consideration the child rule.\nEach child is recognized as a new element. Thus it\'s recommended for more diverse content to be contained\nby a ',Object(a.mdx)("inlineCode",{parentName:"p"},"Box")," component."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<Chocolate>\n  <Box>\n    <Icon size={"40px"} name="maker" />\n    ##### Child A Some content about something\n  </Box>\n\n  <Box>\n    <Icon size={"40px"} name="globe" />\n    ##### Child B Some content about something\n  </Box>\n\n  <Box>\n    <Icon size={"40px"} name="wrench" />\n    ##### Child C Some content about something\n  </Box>\n</Chocolate>\n')),Object(a.mdx)("hr",null),Object(a.mdx)(h,{mdxType:"Chocolate"},Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)(j,{size:"40px",name:"maker",mdxType:"Icon"}),Object(a.mdx)("h5",null,"Child A"),Object(a.mdx)("p",null,"Some content about something")),Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)(j,{size:"40px",name:"globe",mdxType:"Icon"}),Object(a.mdx)("h5",null,"Child B"),Object(a.mdx)("p",null,"Some content about something")),Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)(j,{size:"40px",name:"wrench",mdxType:"Icon"}),Object(a.mdx)("h5",null,"Child C"),Object(a.mdx)("p",null,"Some content about something"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",null,"Code"),Object(a.mdx)("p",null,"There are 2 types of code elements."),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},"The code blocks you've been seeing so far that leverage 3 back ticks ",Object(a.mdx)("inlineCode",{parentName:"li"},"(```)")),Object(a.mdx)("li",{parentName:"ol"},"Inline code that leverage 1 back tick ",Object(a.mdx)("inlineCode",{parentName:"li"},"like this"))),Object(a.mdx)("p",null,"#2 makes use of the ",Object(a.mdx)("inlineCode",{parentName:"p"},"Code")," component like so:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{}),'<Code>\n\nconst var = "variable";\n\n</Code>\n')),Object(a.mdx)(O,{mdxType:"Code"},'const var = "variable";'),Object(a.mdx)("p",null,"However ",Object(a.mdx)("strong",{parentName:"p"},"inline code doesn't support language highlighting"),"."),Object(a.mdx)("p",null,"#1 makes use of the PrismJS library in conjunction with ThemeUI to render code blocks like so."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Dev Note(Réjon): We only support so many languages (JS, Text, HTML, CSS, and Markdown). If you want more, check out the ",Object(a.mdx)("a",Object.assign({parentName:"strong"},{href:"https://prismjs.com/#supported-languages"}),"PrismJS documentation")," about it.")),Object(a.mdx)("p",null,"You can provide a language to show it's tab."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const variable = "string";\n')),Object(a.mdx)("p",null,"If you want to show a file name just provide ",Object(a.mdx)("inlineCode",{parentName:"p"},"title=file-name.js")," (or whatever the name is)"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"palette.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const example = "This is an example with a title tab";\n')),Object(a.mdx)("hr",null),Object(a.mdx)("h3",null,"Column"),Object(a.mdx)(s,{variant:"warning",icon:"warning",mdxType:"Callout"},Object(a.mdx)("h4",null,"Child Rule in Effect")),Object(a.mdx)("p",null,"This component follows a similar pattern to that of the ",Object(a.mdx)("inlineCode",{parentName:"p"},"Chocolate Box")," component.\nTo get a header though, there needs to be a child that has children. It is recommended\nto use a ",Object(a.mdx)("inlineCode",{parentName:"p"},"Box"),"."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},'Dev Note(Réjon): In design documentation this is mentioned as the "2-Column Comparison" component.')),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Column>\n\nChild A - Full Width\n\n</Column>\n\n<Column>\n\nChild A - with Sibling\n\nChild B - with Sibling\n\n</Column>\n\n<Column>\n\n<Box>\n\n#### Child A\n\nFull Width with a Header\n\n</Box>\n\n</Column>\n\n\n<Column>\n\n<Box>\n\n#### Child A\n\nWith a sibling and a Header\n\n</Box>\n\n<Box>\n\n#### Child B\n\nWith a sibling and a Header\n\n</Box>\n\n</Column>\n")),Object(a.mdx)("hr",null),Object(a.mdx)(g,{mdxType:"Column"},Object(a.mdx)("p",null,"Child A - Full Width")),Object(a.mdx)("hr",null),Object(a.mdx)(g,{mdxType:"Column"},Object(a.mdx)("p",null,"Child A - with Sibling"),Object(a.mdx)("p",null,"Child B - with Sibling")),Object(a.mdx)("hr",null),Object(a.mdx)(g,{mdxType:"Column"},Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("h4",null,"Child A"),Object(a.mdx)("p",null,"Full Width with a Header"))),Object(a.mdx)("hr",null),Object(a.mdx)(g,{mdxType:"Column"},Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("h4",null,"Child A"),Object(a.mdx)("p",null,"With a sibling and a Header")),Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("h4",null,"Child B"),Object(a.mdx)("p",null,"With a sibling and a Header"))),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Info Block"),Object(a.mdx)(s,{variant:"warning",icon:"warning",mdxType:"Callout"},Object(a.mdx)("h4",null,"Child Rule in Effect")),Object(a.mdx)("p",null,"This component is similar to that of a Hero content section.\nDepending on when you put the image is the side it will show up on. If there's no image first or last in content, the content will be centered."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"It is highly recommend you use a box component here. Each child is recognized and will render as so.")),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<InfoBlock>\n\n![starfox](/images/starfox.png)\n\n<Box>\n\n### Hello World\n\nSome more content\n\n</Box>\n\n</InfoBlock>\n\n<InfoBlock>\n\n<Box>\n\n### Hello World\n\nSome more content\n\n</Box>\n\n<Image src="/images/starfox.png" />\n\n</InfoBlock>\n\n<InfoBlock>\n\n<Box>\n\n### I am centered\n\n<Image src="/images/starfox.png" />\n\nSome more content\n\n</Box>\n\n</InfoBlock>\n')),Object(a.mdx)("hr",null),Object(a.mdx)(f,{mdxType:"InfoBlock"},Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/starfox.png",alt:"starfox"}))),Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("h3",null,"Hello World"),Object(a.mdx)("p",null,"Some more content"))),Object(a.mdx)(f,{mdxType:"InfoBlock"},Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("h3",null,"Hello World"),Object(a.mdx)("p",null,"Some more content")),Object(a.mdx)(r,{src:"/images/starfox.png",mdxType:"Image"})),Object(a.mdx)(f,{mdxType:"InfoBlock"},Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("h3",null,"I am centered"),Object(a.mdx)(r,{src:"/images/starfox.png",mdxType:"Image"}),Object(a.mdx)("p",null,"Some more content"))),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"List"),Object(a.mdx)("p",null,"The List component is great if you want to display content...in the form of....a list."),Object(a.mdx)(s,{variant:"warning",icon:"warning",mdxType:"Callout"},Object(a.mdx)("h4",null,"Child Rule in Effect")),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"To get the most out of lists (ie. headers, subcontent, links) you MUST use a ",Object(a.mdx)("inlineCode",{parentName:"strong"},"Box")," or ",Object(a.mdx)("inlineCode",{parentName:"strong"},"Link")," component\nbased on your specific needs.")),Object(a.mdx)("hr",null),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<List>\n\nElement A\n\nElement B\n\n</List>\n\n<List>\n\n<Box>\n\nElement A Header\n\nSome content below the header\n\n</Box>\n\nElement B with no subcontent\n\n<Box>\n\nElement C Header\n\nSome content below the header\n\n</Box>\n\n</List>\n\n<List>\n\n<Link to="/">\n\nLink Element A Header\n\nSome content below the header\n\n</Link>\n\n<Link to="https://makerdao.com/">\n\nExternal Link Element B Header\n\nSome content below the header\n\n</Link>\n\n</List>\n')),Object(a.mdx)("hr",null),Object(a.mdx)(y,{mdxType:"List"},Object(a.mdx)("p",null,"Element A"),Object(a.mdx)("p",null,"Element B")),Object(a.mdx)("hr",null),Object(a.mdx)(y,{mdxType:"List"},Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("p",null,"Element A Header"),Object(a.mdx)("p",null,"Some content below the header")),Object(a.mdx)("p",null,"Element B with no subcontent"),Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("p",null,"Element C Header"),Object(a.mdx)("p",null,"Some content below the header"))),Object(a.mdx)("hr",null),Object(a.mdx)(y,{mdxType:"List"},Object(a.mdx)(w,{to:"/",mdxType:"Link"},Object(a.mdx)("p",null,"Link Element A Header"),Object(a.mdx)("p",null,"Some content below the header")),Object(a.mdx)(w,{to:"https://makerdao.com/",mdxType:"Link"},Object(a.mdx)("p",null,"External Link Element B Header"),Object(a.mdx)("p",null,"Some content below the header"))),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Process"),Object(a.mdx)("p",null,"This components great for stepping folks through a numbered process."),Object(a.mdx)(s,{variant:"warning",icon:"warning",mdxType:"Callout"},Object(a.mdx)("h4",null,"Child Rule in Effect")),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},'Dev Note(Réjon): In design specs this in named "Process Stepper"')),Object(a.mdx)("hr",null),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Process>\n  ### Process Information 1 ### Process Information 2\n  <Box>\n    ### Process Information 3 Some more content here. The usual suspects and\n    whatever you'd want to put.\n  </Box>\n</Process>\n")),Object(a.mdx)("hr",null),Object(a.mdx)(C,{mdxType:"Process"},Object(a.mdx)("h3",null,"Process Information 1"),Object(a.mdx)("h3",null,"Process Information 2"),Object(a.mdx)(p,{mdxType:"Box"},Object(a.mdx)("h3",null,"Process Information 3"),Object(a.mdx)("p",null,"Some more content here. The usual suspects and whatever you'd want to put."))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",null,"Status Banner"),Object(a.mdx)("p",null,"This is your run of the mill status banner. It's also capable of being sticky."),Object(a.mdx)("hr",null),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<StatusBanner>\n\nRegular old status banner\n\n</StatusBanner>\n\n<StatusBanner warning>\n\nWarning status!\n\n</StatusBanner>\n\n<StatusBanner sticky>\n\nI will stick to the top of the screen.\n\n</StatusBanner>\n")),Object(a.mdx)("hr",null),Object(a.mdx)(N,{mdxType:"StatusBanner"},Object(a.mdx)("p",null,"Regular old status banner")),Object(a.mdx)("hr",null),Object(a.mdx)(N,{warning:!0,mdxType:"StatusBanner"},Object(a.mdx)("p",null,"Warning status!")),Object(a.mdx)("hr",null),Object(a.mdx)(N,{sticky:!0,mdxType:"StatusBanner"},Object(a.mdx)("p",null,"I will stick to the top of the screen.")),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Tables"),Object(a.mdx)("p",null,"We support the lowest spec for tables in MD. None of that Github alignment stuff here."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"| Header A       | Header B                    |\n| --------------- | ------------------------- |\n| Content A        | Content A              |\n| Content B          | Content B              |\n")),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Header A"),Object(a.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Header B"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Content A"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Content A")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Content B"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Content B")))),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Tout"),Object(a.mdx)(s,{variant:"warning",icon:"warning",mdxType:"Callout"},Object(a.mdx)("h4",null,"Child Rule in Effect")),Object(a.mdx)("p",null,"Tout components are meant to be like ultra fancy links, but you can put anything inside of them.\n",Object(a.mdx)("strong",{parentName:"p"},"If there's only one child it will be full width.")),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Tout>\n\nElement A - Full Width\n\n</Tout>\n\n\n<Tout>\n\n### Element A\n\n### Element B\n\n</Tout>\n")),Object(a.mdx)("hr",null),Object(a.mdx)(B,{mdxType:"Tout"},Object(a.mdx)("p",null,"Element A - Full Width")),Object(a.mdx)("hr",null),Object(a.mdx)(B,{mdxType:"Tout"},Object(a.mdx)("h3",null,"Element A"),Object(a.mdx)("h3",null,"Element B")),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Video"),Object(a.mdx)("p",null,"It's possible to show videos here. They'll always be full width with no styles."),Object(a.mdx)("hr",null),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'`youtube: [Your love!](mzDVaKRApcg)`\n\n<Video src="https://www.youtube.com/embed/kpk2tdsPh0A"/>\n')),Object(a.mdx)("hr",null),Object(a.mdx)("p",null,Object(a.mdx)("div",Object.assign({parentName:"p"},{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"50%",position:"relative",height:"0",overflow:"hidden"}})," ",Object(a.mdx)("div",Object.assign({parentName:"div"},{className:"embedVideo-container"})," ",Object(a.mdx)("iframe",Object.assign({parentName:"div"},{title:"Your love!",src:"https://www.youtube.com/embed/mzDVaKRApcg?rel=0",className:"embedVideo-iframe",style:{border:"0",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},allowFullScreen:!0}))," ")," ")),Object(a.mdx)("hr",null),Object(a.mdx)(T,{src:"https://www.youtube.com/embed/kpk2tdsPh0A",mdxType:"Video"}),Object(a.mdx)("hr",null),Object(a.mdx)("h3",null,"This is a living document. Add or remove components as you change things. And always remember to have fun."),Object(a.mdx)(u,{author:"@MaximumCrash",list:!0,mdxType:"Authors"}))}A.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var l=n("rePB"),a=n("q1tI"),o=n("2A+t"),m=n("izhR"),c=(n("xEQ+"),n("YwZP")),d=n("tW5L"),i=n("4XhP"),r=n("/xXG"),s=n("d+M2");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}t.a=function(e){var t=e.children,n=e.pageContext,p=e.uri,b=n.frontmatter,x=b.title,h=b.description,j=b.keywords,O=b.featuredImage,g=b.status,f=b.hideLanguageSelector,y=b.hideBreadcrumbs,w="object"==typeof g?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:g.text},g):{children:g},C=Object(c.useLocation)().pathname.split("/")[2],N=void 0!==C&&""!==C,B={title:x||function(){var e=a.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||p.split("/").pop(),description:h,keywords:j,featuredImage:O};return Object(o.c)(a.Fragment,null,Object(o.c)(s.b,B),g&&Object(o.c)(m.f,{sx:{marginTop:N?2:0}},Object(o.c)(r.l,Object.assign({sticky:!0},w,{sx:{width:"100%"}}))),(!y||N&&!f)&&Object(o.c)(m.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:N?0:[3,3,0]}},!y&&Object(o.c)(i.a,null),N&&!f&&Object(o.c)(d.b,null)),Object(o.c)(m.f,{sx:N&&!f?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-resources-recipes-palette-mdx-be4efe934e22291231f2.js.map