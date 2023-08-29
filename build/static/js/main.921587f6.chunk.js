(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,i){e.exports={root:"style_root__2F-Ec",list:"style_list__27sKJ",info:"style_info__2Osjj",accordion:"style_accordion__3K5iI",itemBtn:"style_itemBtn__2wmrC",itemBtnExpanded:"style_itemBtnExpanded__2E889",itemContent:"style_itemContent__146oh",itemPanel:"style_itemPanel__3tBMG",chevron:"style_chevron__bKEfo"}},35:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i.n(a),s=i(17),c=i.n(s),r=(i(35),i(8)),l=i(1),o=0,d=function(){var e=(new Date).toLocaleTimeString(),t=(new Date).toDateString(),i=Object(a.useState)(e),n=Object(r.a)(i,2),s=n[0],c=n[1],d=Intl.DateTimeFormat();Object(a.useEffect)((function(){var e=setInterval((function(){m()}),1e3);return function(){clearInterval(e)}}),[]);var m=function(){var e=(new Date).toLocaleTimeString();c(e),o++,console.log(o)};return Object(l.jsx)("footer",{className:"bg-amber-950 p-4 absolute bottom-0 left-0 w-full",children:Object(l.jsx)("div",{className:"container px-4",children:Object(l.jsxs)("p",{className:"text-sm text-black-900 tracking-wide text-center",children:["Designed and Developed by Madhukar Reddy.:::",Object(l.jsxs)("span",{class:"tracking-tight md:tracking-wide text-black-900 text-center ",children:[s," ",t,d]})]})})})},m=i(24),u=i(4),h=function(e){var t=e.skill,i=t.title,a=t.percentage;return Object(l.jsx)("div",{className:"w-full bg-neutral-200 dark:bg-neutral-600",children:Object(l.jsxs)("div",{className:"mb-4 md:mx-4",children:[Object(l.jsxs)("div",{className:"flex justify-between items-center mb-1",children:[Object(l.jsx)("h5",{className:"text-md text-black-400 font-light",children:i}),Object(l.jsx)("span",{className:"bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100",children:a})]}),Object(l.jsxs)("div",{class:"relative rounded-full bg-gray-200",children:[Object(l.jsx)("div",{class:"animate h-5 rounded-full bg-purple-600",style:{width:"".concat(a)}}),Object(l.jsx)("span",{class:"absolute inset-0 flex items-center justify-center text-sm font-medium text-blue-100",children:a})]})]})})},b=[{id:1,title:"Html, Css, Scss, Sass",percentage:"90%"},{id:2,title:"Bootstrap",percentage:"80%"},{id:3,title:"Material UI, TailwindCSS",percentage:"80%"},{id:4,title:"Javascript",percentage:"70%"},{id:5,title:"Typescript",percentage:"70%"},{id:6,title:"ReactJS",percentage:"80%"},{id:7,title:"Redux, Thunk, Redux-Saga",percentage:"80%"},{id:8,title:"JIRA, Slack, Agile Methodologies",percentage:"70%"},{id:9,title:"Git, Github",percentage:"80%"},{id:10,title:"Jest, Mocha, Chai, testing-library",percentage:"80%"},{id:11,title:"Rest, Graph Ql,Aws",percentage:"70%"}],p=function(){return Object(l.jsx)("div",{className:"py-4",children:Object(l.jsxs)("div",{className:"flex flex-wrap",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("div",{className:"md:mx-4",children:Object(l.jsx)("h3",{className:"text-2xl text-gray-800 font-bold mb-4 hover:text-indigo-400",children:"Skills"})})}),b.map((function(e,t){return Object(l.jsx)(h,{skill:e},t)}))]})})},j=function(){return Object(l.jsx)("section",{className:"py-8",children:Object(l.jsx)("div",{className:"flex flex-wrap md:px-4",children:Object(l.jsxs)("div",{className:"w-full",children:[Object(l.jsxs)("div",{className:"md:mx-4",children:[Object(l.jsx)("h3",{className:"text-2xl text-gray-800 font-bold mb-4 hover:text-indigo-400",children:"Who am I?"}),Object(l.jsx)("p",{className:"text-sm text-gray-400 leading-6 mb-3 aboutFontDecoration",children:"Highly skilled React JS developer with 8 years of experience in building robust and user-friendly web applications. Seeking a challenging role to utilize my expertise in React JS, along with proficiency in Docker, JIRA, Slack, GitHub, GitLab, and CI/CD, to contribute to the success of a dynamic and innovative development team."}),Object(l.jsx)("p",{className:"text-sm text-gray-400 leading-6 mb-3 aboutFontDecoration",children:"Developed and maintained React applications, utilizing Redux for state management. Implemented responsive user interfaces based on UI/UX designs, ensuring optimal user experience. Collaborated with cross-functional teams to analyze requirements and deliver solutions. Integrated RESTful APIs to fetch and update data, ensuring seamless communication with the backend. Conducted unit tests and debugging to identify and resolve issues, ensuring application stability. Contributed to code reviews, adhering to best practices and maintaining high code quality standards. Participated in agile development methodologies, attending stand-ups and providing status updates."})]}),Object(l.jsx)(p,{})]})})})},x=i(30),g=i(21),f=(i(37),function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),i=t[0],n=t[1],s=Object(a.useRef)();return Object(l.jsx)("section",{className:"pb-10",children:Object(l.jsx)("div",{className:"flex flex-wrap md:px-4",children:Object(l.jsxs)("form",{className:"p-8 md:mx-4 bg-white rounded-md shadow-md",ref:s,onSubmit:function(e){e.preventDefault(),x.a.sendForm("service_dr6helr","template_sbkquck",s.current,"m_I8C0iHhEz9VvIp1").then((function(e){e&&(console.log(e.text),Object(g.b)("Contact successfully sent!!!",{autoClose:!1}))}),(function(e){g.b.error("Please fill contact details correctly",+e)})),e.target.reset()},id:"create-course-form",children:[Object(l.jsx)("div",{className:"m-3",children:Object(l.jsx)("h3",{className:"text-2xl text-gray-800 font-bold mb-6 hover:text-indigo-400",children:"Get in Touch"})}),Object(l.jsx)(g.a,{}),Object(l.jsxs)("div",{className:"w-full flex flex-wrap",children:[Object(l.jsx)("div",{className:"w-full md:w-1/2",children:Object(l.jsx)("div",{className:"m-3",children:Object(l.jsx)("input",{type:"text",name:"user_name",maxlength:"30",placeholder:"Your Name",required:!0,className:"w-full border border-gray-800 rounded py-4 px-6 text-sm bg-white"})})}),Object(l.jsx)("div",{className:"w-full md:w-1/2",children:Object(l.jsx)("div",{className:"m-3",children:Object(l.jsx)("input",{type:"email",required:!0,name:"user_email",placeholder:"Your Email",className:"w-full border border-gray-800 rounded py-4 px-6 text-sm bg-white"})})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("div",{className:"m-3",children:Object(l.jsx)("input",{type:"text",name:"user_phone",maxlength:"10",pattern:"^(1\\s?)?(\\d{3}|\\(\\d{3}\\))[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$",required:!0,placeholder:"Phone Number",className:"w-full border border-gray-900 rounded py-4 px-6 text-sm bg-white"})})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("div",{className:"m-3",children:Object(l.jsx)("input",{type:"text",name:"user_subject",maxlength:"100",required:!0,placeholder:"Subject",className:"w-full border border-gray-800 rounded py-4 px-6 text-sm bg-white"})})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsxs)("div",{className:"m-3",children:[Object(l.jsx)("textarea",{name:"user_message",required:!0,placeholder:"Your Message",onChange:function(e){n(e.target.value)},rows:"6",maxLength:"500",className:"w-full border border-gray-800 rounded py-4 px-6 text-sm bg-white"}),Object(l.jsxs)("span",{className:"charLeft",children:[500-i.length," Characters"]})]})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("div",{className:"m-3 text-right",children:Object(l.jsx)("input",{type:"submit",value:"Send",className:"rounded bg-purple-600 text-center border-0 py-3 px-6 text-white leading-7 tracking-wide hover:bg-purple-800 cursor-pointer"})})})]})]})})})}),v=i(23),O=i(27),w=i(49),y=i(50),N=i.p+"static/media/chevron-down.637c1521.svg",k=i(14),S=i.n(k),I=["header"],R=function(e){var t=e.header,i=Object(O.a)(e,I);return Object(l.jsx)(w.a,Object(v.a)(Object(v.a)({},i),{},{header:Object(l.jsxs)(l.Fragment,{children:[t,Object(l.jsx)("img",{className:S.a.chevron,src:N,alt:"Chevron Down"})]}),className:S.a.item,buttonProps:{className:function(e){var t=e.isEnter;return"".concat(S.a.itemBtn," ").concat(t&&S.a.itemBtnExpanded)}},contentProps:{className:S.a.itemContent},panelProps:{className:S.a.itemPanel}}))};function C(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"md:mx-8",children:Object(l.jsx)("h3",{className:"text-8l font-bold text-gray-800 mb-2 hover:text-indigo-400",children:"Experience"})}),Object(l.jsx)("div",{className:S.a.accordion,children:Object(l.jsxs)(y.a,{transition:!0,transitionTimeout:250,children:[Object(l.jsx)(R,{header:"Senior Frontend developer, Cox Auto Inc. (Mobility and Fleet operations),Remote",initialEntered:!0,children:"Cox Automotive Mobility specialized in comprehensive fleet services and operations. They provide a SaaS solution for the customers to keep fleets moving safely and sustainably for the next generation. Maximize fleet uptime with the premier partner in maintenance service. Manage scheduled and emergency maintenance. The project is to develop interface for the customers to manage vehicles information, schedule preventative maintenance, define automated service schedule, generate report and analytics etc."}),Object(l.jsx)(R,{header:"Senior React developer, Statefarm, Remote",children:"AQP (Auto Quote purchase) is automatic quotation management platform from statefarm, enabling its user to explore, prepare, submit, negotiate and purchase different insurance product, like Auto Insurance, Home Insurance, Medical insurance etc. Front-end developed in React JS, some user faced pages are written in plain JSP and backend apis are developed with Spring based framework."}),Object(l.jsx)(R,{header:"Senior UI developer, Fidelity Investments, Durham, Nc",children:"Working on react js based web applications providing user interface for different functionalities like PI-Login Experience, 2FA, Security center, DAE, NUR - related to the user security of Fid.com. Additionally, working on Inactivity timeout and DBS (Delegated Brokerage Service) enhancements that are part of Fid.com and moving application on-premises to AWS."}),Object(l.jsx)(R,{header:"UI/React DEVELOPER, Ford- Dearborn, MI",children:"SYNC is an integrated in-vehicle communications and entertainment system embedded in Ford and Lincoln vehicles. SYNC handles all of the commands sent from an App Link application and delivers the intended message inside the vehicle. All UI including commands, display requests, vehicle data authorization, and responses are managed by the SYNC system on behalf of the mobile application and communicated over App Link."}),Object(l.jsx)(R,{header:"SR. UI/ React Developer, IBM, San Jose, CA",children:"The IBM Quantum Experience launched in May, giving researchers, students, and enthusiasts cloud-based access to an experimental quantum computing platform. As computing moves beyond the classic binary system, bits with infinite positions will unlock infinite possibilities. Platform users can learn quantum principles, experiment with new algorithms, and more."}),Object(l.jsx)(R,{header:"UI DEVELOPER, Bench Tech Software Pvt Ltd, Bengaluru, India",children:"Ben Tech offers full-service technology support from the switch to wire, wire to Wi-Fi, server to desktop, cloud to the employee, employee to productivity. Benjamin Keith brings 20+ years of technical knowledge, professionalism, and business experience to you."})]})})]})}var D=i(11),_=i(28),A=function(e){var t=e.service,i=t.icon,a=t.title,n=t.description;return Object(l.jsx)("div",{className:"w-full lg:w-1/2",children:Object(l.jsxs)("div",{className:"my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md",children:[Object(l.jsx)("div",{className:"w-16 h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-gray-900 bg-opacity-500 text-pink-600 transition duration-100 group-hover:bg-indigo-900",children:i}),Object(l.jsx)("h3",{className:"text-lg font-medium text-gray-800 mb-2 hover:text-indigo-400",children:a}),Object(l.jsx)("p",{className:"text-gray-400 serviceFontDecoration",children:n})]})})},T=[{id:1,icon:Object(l.jsx)(D.b,{}),title:"Web Design",description:"Web design refers to the process of creating and designing websites. It involves planning and arranging various elements such as layout, colors, graphics, fonts, and interactive features to create an aesthetically appealing and user-friendly website."},{id:2,icon:Object(l.jsx)(D.e,{}),title:"Web Development",description:"Web development refers to the process of building and maintaining websites and web applications. It involves the creation of both the front-end (client-side) and back-end (server-side) components of a website or web application."},{id:3,icon:Object(l.jsx)(D.h,{}),title:"Frontend Development",description:"Front-end development focuses on the visual and interactive aspects of a website. It involves writing code in languages such as HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript to create the user interface and implement interactive features."},{id:4,icon:Object(l.jsx)(D.a,{}),title:"Bootstrap Template",description:"Bootstrap offers a wide range of pre-built components and styles, it's essential to customize it to match your project's specific requirements. By modifying the default styles and adding your branding elements, you can create a unique and professional look for your website."},{id:4,icon:Object(l.jsx)(_.a,{}),title:"Tailwindcss Template",description:"Tailwind CSS can generate extensive CSS files, you can optimize the build by purging unused classes. Tailwind CSS includes a purge feature that removes unused styles from your production build, resulting in smaller file sizes and improved performance. "},{id:4,icon:Object(l.jsx)(D.h,{}),title:"React Template",description:"React's popularity stems from its ability to efficiently build complex, interactive, and high-performance user interfaces. It provides a declarative and component-based approach, making it easier to reason about and maintain code."}],M=function(){return Object(l.jsx)("section",{className:"pb-10",children:Object(l.jsx)("div",{className:"flex flex-wrap md:px-4",children:T.map((function(e,t){return Object(l.jsx)(A,{service:e},t)}))})})},E=function(e){var t=e.desc,i=t.title,a=t.link,n=t.description,s=t.image;return Object(l.jsx)("div",{className:"w-full lg:w-1/2",children:Object(l.jsxs)("div",{className:"my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md",children:[Object(l.jsxs)("div",{className:"relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden",children:[Object(l.jsx)("img",{src:s,alt:"coverImage",className:"w-full h-full object-cover object-center"}),Object(l.jsx)("div",{className:"absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible",children:Object(l.jsx)("ul",{className:"flex flex-wrap",children:Object(l.jsx)("li",{className:"m-2",children:Object(l.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:"w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 hover:text-green hover:bg-none-600",children:a})})})})]}),Object(l.jsx)("h3",{className:"text-lg font-medium text-gray-800 mb-2 hover:text-indigo-400",children:i}),Object(l.jsx)("p",{className:"text-gray-900",children:n})]})})},F=[{id:1,title:"Bachelors.",image:i.p+"static/media/ScientInstituteOfTechnology.fa2f4f87.jpg",description:"Bachelor of Technology in IT from Scient Institute of Technology Affiliated to JNTUH TELANGANA INDIA .",link:"https://www.scient.ac.in/"},{id:2,title:"Masters.",image:i.p+"static/media/ChicagoStateUniversity.c9c13167.jpg",description:"Master of Science in Computer Science Engineering from Chicago state University United States of America",link:"https://www.csu.edu/"}],B=function(){return Object(l.jsx)("section",{className:"pb-10",children:Object(l.jsx)("div",{className:"flex flex-wrap md:px-4 fontDecoration",children:F.map((function(e,t){return Object(l.jsx)(E,{desc:e},t)}))})})},P=[{id:1,title:"About",to:"/about"},{id:2,title:"Services",to:"/services"},{id:3,title:"Experience",to:"/works"},{id:6,title:"Education Details",to:"/Qualification"},{id:5,title:"Contact",to:"/contact"}],L=function(){return Object(l.jsxs)(m.a,{children:[Object(l.jsx)("nav",{className:"md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded font-serif",children:Object(l.jsx)("ul",{className:"flex flex-wrap",children:P.map((function(e,t){return Object(l.jsx)(q,{el:e},t)}))})}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(j,{})}),Object(l.jsx)(u.a,{path:"/services",children:Object(l.jsx)(M,{})}),Object(l.jsx)(u.a,{path:"/works",children:Object(l.jsx)(C,{})}),Object(l.jsx)(u.a,{path:"/contact",children:Object(l.jsx)(f,{})}),Object(l.jsx)(u.a,{path:"/about",children:Object(l.jsx)(j,{})}),Object(l.jsx)(u.a,{path:"/Qualification",children:Object(l.jsx)(B,{})})]})]})},q=function(e){var t=e.el,i=t.title,a=t.to;return Object(l.jsx)("li",{className:"m-3 lg:mx-5",children:Object(l.jsx)(m.b,{to:a,activeClassName:"text-purple-600",className:"text-gray-800 text-medium hover:text-purple-600",children:i})})},J=i.p+"static/media/Mountains.d5674b37.jpeg",z=function(){return Object(l.jsx)("div",{className:"h-60 w-full",children:Object(l.jsx)("img",{src:J,alt:"cover",className:"w-full h-full object-cover object-center"})})},U=i.p+"static/media/Madhukar.97365667.jpg",G=[{id:1,icon:Object(l.jsx)(D.c,{}),link:"https://www.facebook.com/?react=AQAZDm4XIn_VKrxMR10"},{id:2,icon:Object(l.jsx)(D.d,{}),link:"https://github.com/madhukarGanga?tab=repositories"},{id:3,icon:Object(l.jsx)(D.g,{}),link:"https://www.linkedin.com/in/madhukar-g-61865a160"},{id:4,icon:Object(l.jsx)(D.f,{}),link:"https://www.instagram.com/"}],H=function(){return Object(l.jsxs)("aside",{className:"sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40",children:[Object(l.jsx)("div",{className:"w-24 h-24 rounded-md overflow-hidden mx-auto mb-5",children:Object(l.jsx)("img",{src:U,alt:"shafiqhammad",className:"w-full"})}),Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("h1",{className:"text-xl text-gray-800 font-bold mb-1",children:"Madhukar Ganga"}),Object(l.jsxs)("p",{className:"text-sm text-gray-700 mb-3",children:["Frontend React Developer at",Object(l.jsx)("a",{href:"https://www.coxautoinc.com",className:"text-purple-600 pl-1",children:"Cox Auto Inc."})]}),Object(l.jsx)("a",{href:"/MadhuReactDevResume.docx",className:"inline-block mb-3 rounded bg-blue-900 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide active:bg-blue-900 hover:bg-blue-900",download:"MadhuReactDevResume",children:"Download Resume"}),Object(l.jsx)("ul",{className:"flex flex-wrap justify-center",children:G.map((function(e,t){return Object(l.jsx)(W,{social:e},t)}))})]}),Object(l.jsxs)("div",{className:"text-start pt-4",children:[Object(l.jsx)("h3",{className:"text-md mb-2 uppercase font-medium text-gray-800 hover:text-indigo-400",children:"About Me"}),Object(l.jsx)("p",{className:"text-gray-900 leading-relaxed fontDecoration",children:"I specialize in React and Redux development and have extensive experience in building robust and efficient web applications using these technologies. I possess a deep understanding of React's component-based architecture, virtual DOM, and its ecosystem of libraries and tools. Additionally, I'm well-versed in Redux, a state management library commonly used with React to handle complex application states. I can assist you with designing scalable application architectures, optimizing performance, implementing best practices, and tackling any challenges you may encounter during your development journey. Feel free to ask me anything related to React or Redux development\u2014I'm here to lend a hand!"})]})]})},W=function(e){var t=e.social,i=t.icon,a=t.link;return Object(l.jsx)("li",{className:"m-2",children:Object(l.jsx)("a",{href:a,className:"w-8 h-8 bg-white-100 rounded text-black-800 flex items-center justify-center hover:text-white hover:bg-blue-600",children:i})})};var Q=function(){return Object(l.jsxs)("main",{className:"min-h-screen relative bg-gray-50 pb-10",children:[Object(l.jsx)(z,{}),Object(l.jsx)("div",{className:"container px-4",children:Object(l.jsxs)("div",{className:"flex flex-wrap px-4",children:[Object(l.jsx)("div",{className:"w-full lg:w-1/3 ",children:Object(l.jsx)(H,{})}),Object(l.jsx)("div",{className:"w-full lg:w-2/3 ",children:Object(l.jsx)(L,{})})]})}),Object(l.jsx)(d,{})]})},Y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,51)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(Q,{})}),document.getElementById("root")),Y()}},[[46,1,2]]]);
//# sourceMappingURL=main.921587f6.chunk.js.map