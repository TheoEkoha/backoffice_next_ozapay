(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1370],{59470:function(e,t,n){Promise.resolve().then(n.bind(n,16401))},16401:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=n(57437),i=n(2265),s=n(15713),r=n(46619),l=n(57531);let o=[{title:"All Day Event",start:d("YEAR-MONTH-01")},{title:"Rendezvous",start:d("YEAR-MONTH-07"),end:d("YEAR-MONTH-10")},{groupId:"999",title:"Repeating Event",start:d("YEAR-MONTH-09T16:00:00+00:00")},{groupId:"999",title:"Repeating Event",start:d("YEAR-MONTH-16T16:00:00+00:00")},{title:"Dontiste",start:"YEAR-MONTH-17",end:d("YEAR-MONTH-19")},{title:"Consultation",start:d("YEAR-MONTH-18T10:30:00+00:00"),end:d("YEAR-MONTH-18T12:30:00+00:00")},{title:"Visit",start:d("YEAR-MONTH-18T12:00:00+00:00")},{title:"maladie",start:d("YEAR-MONTH-19T07:00:00+00:00")},{title:"Meeting",start:d("YEAR-MONTH-18T14:30:00+00:00")},{title:"controlle",start:d("YEAR-MONTH-18T17:30:00+00:00")},{title:"finish",start:d("YEAR-MONTH-18T20:00:00+00:00")}];function d(e){let t=new Date,n=t.getFullYear().toString(),a=(t.getMonth()+1).toString();return 1===a.length&&(a="0"+a),e.replace("YEAR",n).replace("MONTH",a)}var x=n(76520),p=n(37169),c=n(83719),m=n(94614),h=n(33037),u=n(64593),f=n(44376),g=n(95635),b=n(32591),j=n(66858),T=n(95253),N=n(77589),E=n(62737),v=n.n(E),Z=n(32529),R=n(54952),A=n(5069),M=n(10054);let O={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:500,width:"100%",bgcolor:"background.paper",boxShadow:24,borderRadius:"8px"};var k=e=>{let{params:{lang:t}}=e,[n,d]=i.useState(!1),E=()=>d(!1),[k,Y]=i.useState(v()("2023-01-01T21:11:54"));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{pageTitle:"Calendar",dashboardUrl:"/".concat(t,"/"),dashboardText:"Dashboard"}),(0,a.jsxs)(x.Z,{sx:{boxShadow:"none",borderRadius:"10px",p:"25px 20px",mb:"15px"},children:[(0,a.jsxs)(p.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #EEF0F7",paddingBottom:"10px",mb:"20px"},className:"for-dark-bottom-border",children:[(0,a.jsx)(c.Z,{component:"h3",sx:{fontSize:18,fontWeight:500},children:"Calendar"}),(0,a.jsxs)(f.Z,{onClick:()=>d(!0),variant:"contained",sx:{textTransform:"capitalize",borderRadius:"8px",fontWeight:"500",fontSize:"13px",padding:"12px 20px",color:"#fff !important"},children:[(0,a.jsx)(T.default,{sx:{position:"relative",top:"-1px"},className:"mr-5px"})," ","Add Event"]})]}),(0,a.jsx)(r.Z,{defaultView:"dayGridMonth",plugins:[l.Z],events:o,displayEventEnd:"true",eventColor:"#"+Math.floor(16777215*Math.random()).toString(16)})]}),(0,a.jsx)(b.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:n,onClose:E,closeAfterTransition:!0,BackdropComponent:u.Z,BackdropProps:{timeout:500},children:(0,a.jsx)(g.Z,{in:n,children:(0,a.jsxs)(p.Z,{sx:O,className:"dark-BG-101010",children:[(0,a.jsxs)(p.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#EDEFF5",borderRadius:"8px",padding:"20px 20px"},className:"bg-black",children:[(0,a.jsx)(c.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{fontWeight:"500",fontSize:"18px"},children:"Add New Event"}),(0,a.jsx)(m.Z,{"aria-label":"remove",size:"small",onClick:E,className:"modal-close",children:(0,a.jsx)(N.Z,{})})]}),(0,a.jsx)(p.Z,{component:"form",noValidate:!0,onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},children:(0,a.jsx)(p.Z,{sx:{background:"#fff",padding:"20px 20px",borderRadius:"8px"},className:"dark-BG-101010",children:(0,a.jsxs)(h.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,a.jsxs)(h.ZP,{item:!0,xs:12,md:12,lg:12,children:[(0,a.jsx)(c.Z,{component:"h5",sx:{fontWeight:"500",fontSize:"14px",mb:"12px"},children:"Event Name"}),(0,a.jsx)(j.Z,{autoComplete:"event-name",name:"eventName",fullWidth:!0,id:"eventName",label:"Event Name",autoFocus:!0,InputProps:{style:{borderRadius:8}}})]}),(0,a.jsxs)(h.ZP,{item:!0,xs:12,md:12,lg:12,children:[(0,a.jsx)(c.Z,{component:"h5",sx:{fontWeight:"500",fontSize:"14px",mb:"12px"},children:"Date & Time"}),(0,a.jsx)(R._,{dateAdapter:A.y,children:(0,a.jsx)(Z.Z,{className:"date-time-picker",children:(0,a.jsx)(M.x,{value:k,onChange:e=>{Y(e)},renderInput:e=>(0,a.jsx)(j.Z,{...e})})})})]}),(0,a.jsx)(h.ZP,{item:!0,xs:12,textAlign:"end",children:(0,a.jsxs)(f.Z,{type:"submit",variant:"contained",sx:{mt:1,textTransform:"capitalize",borderRadius:"8px",fontWeight:"500",fontSize:"13px",padding:"12px 20px",color:"#fff !important"},children:[(0,a.jsx)(T.default,{sx:{position:"relative",top:"-2px"},className:"mr-5px"})," ","Save"]})})]})})})]})})})]})}},15713:function(e,t,n){"use strict";var a=n(57437);n(2265);var i=n(87138),s=n(4563),r=n.n(s);t.default=e=>{let{pageTitle:t,dashboardUrl:n,dashboardText:s}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:r().pageTitle,children:[(0,a.jsx)("h1",{children:t}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:n,children:s})}),(0,a.jsx)("li",{children:t})]})]})})}},4563:function(e){e.exports={pageTitle:"PageTitle_pageTitle__1BBnT"}}},function(e){e.O(0,[5117,8554,5067,231,3568,77,3991,3037,5278,2363,8774,6291,15,5056,6858,2152,3936,3742,1230,7769,8871,2062,76,2971,7023,1744],function(){return e(e.s=59470)}),_N_E=e.O()}]);