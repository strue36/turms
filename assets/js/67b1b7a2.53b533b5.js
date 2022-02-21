(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9214],{94143:function(n,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return k},toc:function(){return p},default:function(){return c}});var i=e(87462),r=e(63366),a=(e(67294),e(3905)),o=e(93456),u=["components"],s={sidebar_position:1,sidebar_label:"Operations"},l="Design",k={unversionedId:"plugins/operations",id:"plugins/operations",title:"Design",description:"Rath is structured around links and their orchestration",source:"@site/docs/plugins/operations.md",sourceDirName:"plugins",slug:"/plugins/operations",permalink:"/turms/docs/plugins/operations",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/operations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Operations"},sidebar:"tutorialSidebar",previous:{title:"Enums",permalink:"/turms/docs/plugins/enums"},next:{title:"config",permalink:"/turms/docs/reference/config"}},p=[{value:"Terminating Links",id:"terminating-links",children:[],level:3},{value:"Continuation Links",id:"continuation-links",children:[],level:3}],d={toc:p};function c(n){var t=n.components,e=(0,r.Z)(n,u);return(0,a.kt)("wrapper",(0,i.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"design"},"Design"),(0,a.kt)("p",null,"Rath is structured around links and their orchestration"),(0,a.kt)(o.Mermaid,{chart:"flowchart LR;\n    id0(Query)--\x3e|Request|id1(Rath Client)\n    id1(Rath Client)--\x3e|Operation|id2(Continuation Link)\n    id2(Continuation Link)--\x3e|Operation|id3(Terminating Link)",mdxType:"Mermaid"}),(0,a.kt)("h3",{id:"terminating-links"},"Terminating Links"),(0,a.kt)("p",null,"Terminating Links make network requests to the underlying graphql\nendpoint."),(0,a.kt)("h3",{id:"continuation-links"},"Continuation Links"),(0,a.kt)("p",null,"Continuation Links take requests in form of operations and\nalter the request or introduce logic before a underlying request to\nthe endpoint."),(0,a.kt)("p",null,"As an example an Auth link"),(0,a.kt)(o.Mermaid,{chart:"sequenceDiagram\n    autonumber\n    participant Rath\n    participant AuthLink\n    participant TerminationLink\n    Rath->>AuthLink: Operation\n    AuthLink->>AuthLink: Get Token\n    AuthLink--\x3e>TerminationLink: Operation + Token\n    TerminationLink --\x3e> AuthLink: Result\n    AuthLink --\x3e> Rath: Result",mdxType:"Mermaid"}),(0,a.kt)("p",null,"The authlink can then on further store the auth token and append it to\nthe operation.\nThey can also handle complex failures"),(0,a.kt)(o.Mermaid,{chart:"sequenceDiagram\n    autonumber\n    participant Rath\n    participant AuthLink\n    participant TerminationLink\n    Rath->>AuthLink: Operation\n    AuthLink--\x3e>TerminationLink: Operation + Token\n    TerminationLink--XAuthLink: Error\n    AuthLink->>AuthLink: Refech Token\n    AuthLink--\x3e>TerminationLink: Operation + Refreshed Token\n    TerminationLink --\x3e> AuthLink: Result\n    AuthLink --\x3e> Rath: Result",mdxType:"Mermaid"}))}c.isMDXComponent=!0},11748:function(n,t,e){var i={"./locale":89234,"./locale.js":89234};function r(n){var t=a(n);return e(t)}function a(n){if(!e.o(i,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return i[n]}r.keys=function(){return Object.keys(i)},r.resolve=a,n.exports=r,r.id=11748}}]);