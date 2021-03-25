(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{Yc6t:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));var a,r=t("zLVn"),o=(t("q1tI"),t("7ljp")),l=t("z1h2"),i={},s=(a="CTA",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",e)}),c={_frontmatter:i},d=l.a;function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.mdx)(d,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Translations and the UI"),Object(o.mdx)("p",null,'Translations can present a challenge. But not if you\'re our lead developer. Our philosophy is that\n"content creators write the website", so the ',Object(o.mdx)("inlineCode",{parentName:"p"},"content"),' folder therefore decides how the site is rendered,\nincluding translated content. However, this is an issue when translating inline UI elements that we won\'t\nprovide in MDX (like the Search bar). This means there\'s a break in how we can translate copy like "Search"\nand "No results" into the current locale...'),Object(o.mdx)("h2",null,"Why Not i18n or another library?"),Object(o.mdx)("p",null,"i18n is a Javascript API that allows developers an easy and \"lightweight\" (<- we'll get to that) way of translating\ntextual content for a node based application. It's been great, but the reason we decided NOT to use it for this\nproject is because it would couple translated content with our code. This is a big no-no, as it goes against our WYSIWYG\nphilosophy for the content folder and means that content creators would have to translate text in 2 different places."),Object(o.mdx)("p",null,"Add to this the fact that the i18n package for gatsby, and other frameworks, has a tendency to be larger than necessary.\nWe believe that keeping things simple will be a positive for the scale of our application. Therefore, we present:"),Object(o.mdx)("h2",null,"useTranslation aka MaximumLang"),Object(o.mdx)("p",null,"useTranslation is a hook developed by Réjon Taylor-Foster with inspiration from and reference to\n",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://w11i.me/how-to-build-multilingual-website-in-next-js"}),"this blog"),". It is capable of being initialized\ninside a functional components and exports the current site's locale, and a ",Object(o.mdx)("inlineCode",{parentName:"p"},"t")," function."),Object(o.mdx)("h3",null,"How to translate in code"),Object(o.mdx)("p",null,"If your ",Object(o.mdx)("inlineCode",{parentName:"p"},"en/UI.json")," looks like this:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"en/UI.json"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "UI": {\n    "Language": "English",\n    "Search": "Search",\n    "No_Results": "No results for \'{{searchText}}\'",\n    "Home": "Home"\n  }\n}\n')),Object(o.mdx)("p",null,'you can have it translated and render the word "Search" by writing the following:'),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"component-example.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import useTranslation from "@modules/localization/useTranslation";\n\nconst ComponentExample = () => {\n  const { locale, t } = useTranslation();\n\n  return <p>{t("Search")}</p>;\n};\n')),Object(o.mdx)("h3",null,"LangSpaces"),Object(o.mdx)("p",null,"We can extend the capabilities of this simple ",Object(o.mdx)("inlineCode",{parentName:"p"},"t")," function with what we call LangSpaces (Language Space):"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"en/UI.json"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "UI": {\n    "Language": "English",\n    "Search": "Search",\n    "No_Results": "No results for \'{{searchText}}\'",\n    "Home": "Home",\n    "Errors": {\n      "error_a": "This is an error inside of a langspace called Errors"\n    }\n  }\n}\n')),Object(o.mdx)("p",null,'you can have it translate and render "error_a" by writing the following:'),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"component-langspace-example.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import useTranslation from "@modules/localization/useTranslation";\n\nconst ComponentExample = () => {\n  const { locale, t } = useTranslation();\n\n  return <p>{t("error_a", "Errors")}</p>;\n};\n')),Object(o.mdx)("p",null,"For the sake of quality of life it's possible to pass in a default lang space for your current translation as well:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"component-langspace-default-example.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import useTranslation from "@modules/localization/useTranslation";\n\nconst ComponentExample = () => {\n  const { locale, t } = useTranslation("Errors"); //<- Notice\n\n  return (\n    <p>{t("error_a")}</p> //<- Notice\n  );\n};\n')),Object(o.mdx)("h3",null,"Variables and Plurals"),Object(o.mdx)("p",null,"You want the variable of counter included and with plurals? No problem, anything inside ",Object(o.mdx)("inlineCode",{parentName:"p"},"{{}}")," will be replaced when rendered:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"en/UI.json"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "UI": {\n    "Friend": "A Friend",\n    "Friend_plural": "{{count}} Friends",\n    "VariableExample": "My name is {{name}}"\n  }\n}\n')),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"variable-component-example.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import useTranslation from \'@modules/localization/useTranslation\'\n\nconst ComponentExample = () => {\n   const {locale, t} = useTranslation();\n\n  return (\n       <p>{t("Friend", null, {count: 0})}</p> //0 Friends\n       <p>{t("Friend", null, {count: 1})}</p> //Friend\n       <p>{t("Friend", null, {count: 2})}</p> //2 Friends, ect.\n       <p>{t("VariableExample", null, {name: "Réjon"})}</p> // My name is Réjon\n   )\n}\n')),Object(o.mdx)("h3",null,"Advanced Plurals"),Object(o.mdx)("p",null,"Because different locales can have multiple plurals, and different ways of counting (ie. Arabic),\nwe have a system in place to handle counting differently if the strict variable is added to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"t")," function like so:\n",Object(o.mdx)("inlineCode",{parentName:"p"},"t('Friend', null, {count: 1, strict: true})"),"."),Object(o.mdx)("p",null,"Your json will look like:\nNOTE: ",Object(o.mdx)("inlineCode",{parentName:"p"},"Friend")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"Friend_plural")," are still valid, but will be overriden when strict is provided to the variables argument."),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"en/UI.json"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "UI": {\n    "Friend": "A Friend",\n    "Friend_plural": "{{count}} Friends",\n    "Friend_0": "No Friends",\n    "Friend_1": "A Friend",\n    "Friend_2": "Two Friends",\n    "Friend_3": "Few Friends",\n    "Friend_4": "Many Friends",\n    "Friend_5": "Other/Lots of Friends"\n  }\n}\n')),Object(o.mdx)("p",null,"Your output will look something like this:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"advanced-variable-example.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import useTranslation from \'@modules/localization/useTranslation\'\n\nconst ComponentExample = () => {\n   const {locale, t} = useTranslation();\n\n  return (\n       <p>{t("Friend", null, {count: 0, strict: true})}</p> //No Friends (key: Friend_0)\n       <p>{t("Friend", null, {count: 1, strict: true})}</p> //A Friend (key: Friend_1)\n       <p>{t("Friend", null, {count: 2, strict: true})}</p> //Two Friends (key: Friend_2)\n       <p>{t("Friend", null, {count: 5, strict: true})}</p> //Other/Lots of Friends (key: Friend_5)\n   )\n}\n')),Object(o.mdx)(s,{mdxType:"CTA"},Object(o.mdx)("p",null,"NOTE: If your count goes past 4 or is less than 0, it will default to key_5")),Object(o.mdx)("h3",null,"Getting a localized string from another locale"),Object(o.mdx)("p",null,"Let's say you're currently on the English locale, but you need a string from the French locale,\nbut also want to keep your current locale. Say no more fam:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"en/UI.json"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "UI": {\n    "Language": "English"\n  }\n}\n')),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"fr/UI.json"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "UI": {\n    "Language": "Français"\n  }\n}\n')),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"multilang-example.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import useTranslation from \'@modules/localization/useTranslation\'\n\nconst ComponentExample = () => {\n   const {locale, t} = useTranslation(); //Current locale is "en"\n\n  return (\n       <p>{t("Language")}</p> //English\n       <p>{t("Language",null,null,\'fr\')}</p> //Français\n   )\n}\n')),Object(o.mdx)("p",null,"These are just examples for the sake of documentation. For an indepth on how the function works,\nsee the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/community-portal/blob/r2d/src/modules/utility/useTranslation.js"}),"comments in code"),"."))}p.isMDXComponent=!0},z1h2:function(e,n,t){"use strict";var a=t("rePB"),r=t("q1tI"),o=t("2A+t"),l=t("izhR"),i=t("xEQ+"),s=t.n(i),c=t("Wbzz"),d=t("YwZP"),p=t("4XhP"),u=t("tW5L"),m=t("/xXG"),b=t("C9jn"),j=t("d+M2"),h=t("Al62");function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}n.a=function(e){var n=Object(u.d)(),t=n.locale,i=n.t,O=n.DEFAULT_LOCALE,x=Object(c.useStaticQuery)("955314892").allMdx,f=e.children,y=e.pageContext,w=e.uri,N=y.pagePath,v=y.frontmatter,F=v.title,T=v.description,k=v.keywords,I=v.featuredImage,C=v.status,E=v.hideLanguageSelector,_=v.hideBreadcrumbs,L=N.replace(/^\/|\/$/g,"").split("/").slice(1),P=L.join("/"),S=Object(b.a)(x.edges,L[0],O,t,L),A=S.sidenavData,U=S.breadcrumbData,z=x.edges.filter((function(e){var n=e.node;return Object(h.c)(n).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===P&&Object(h.g)(n.fileAbsolutePath)!==t})).map((function(e){var n=e.node;return{value:Object(h.c)(n),label:i("Language",null,null,Object(h.g)(n.fileAbsolutePath))}})),D="object"==typeof C?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({children:C.text},C):{children:C},M=Object(d.useLocation)().pathname.split("/")[2],H=F||function(){var e=r.Children.toArray(f).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||w.split("/").pop(),W=void 0!==M&&""!==M,Y=y.frontmatter&&!y.frontmatter.hideSidenav&&W,R=W&&!E,X=!_||W&&!E,B={title:H,description:T,keywords:k,featuredImage:I},V=R?234:0;return Y&&(V+=256),Object(o.c)(r.Fragment,null,Y&&Object(o.c)(l.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(o.c)(s.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(o.c)(p.g,{data:A,currentPath:N}))),Object(o.c)(l.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+V+"px)"],mt:W?[4,4,"59px"]:0,pl:W?[4,4,"64px"]:0,pr:W?[4,4,0]:0,pb:4}},Object(o.c)(j.c,B),C&&Object(o.c)(l.f,{sx:{marginTop:W?2:0}},Object(o.c)(m.l,Object.assign({sticky:!0},D,{sx:{width:"100%"}}))),X&&Object(o.c)(l.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:W?0:[3,3,0]}},Object(o.c)(p.a,{data:U,pathDirs:L})),Object(o.c)(l.f,{sx:{display:["block","block","none"]}},R&&Object(o.c)(u.b,{data:z,pagePath:N})),Object(o.c)(l.f,null,f)),Object(o.c)(l.f,{sx:{display:["none","none","block"]}},R&&Object(o.c)(u.b,{data:z,pagePath:N})),Object(o.c)(p.e,{sidenavData:A}))}}}]);
//# sourceMappingURL=component---content-en-resources-engineering-translations-mdx-d109f9747cbb98836eaf.js.map