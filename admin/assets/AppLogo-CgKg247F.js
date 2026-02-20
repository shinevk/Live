import{j as i}from"./index-UWoPjhNw.js";const l=({theme:s="light",size:t="lg"})=>{const e=`ai-gradient-${t}-${s}`,a=i.jsx("style",{children:`
			@keyframes ai-dot-bounce {
				0%, 100% { transform: translateY(0); opacity: 0.3; }
				50% { transform: translateY(-3px); opacity: 1; }
			}
			@keyframes ai-fade-in-out {
				0%, 45% { opacity: 1; visibility: visible; }
				55%, 100% { opacity: 0; visibility: hidden; }
			}
			@keyframes ai-lines-fade {
				0%, 45% { opacity: 0; visibility: hidden; }
				55%, 90% { opacity: 1; visibility: visible; }
				100% { opacity: 0; visibility: hidden; }
			}
			.ai-logo-group {
				transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
				transform-origin: center;
			}
			.ai-dot-anim {
				animation: ai-dot-bounce 1.2s infinite ease-in-out;
			}
			.ai-dot-container-anim {
				animation: ai-fade-in-out 5s infinite ease-in-out;
			}
			.ai-lines-container-anim {
				animation: ai-lines-fade 5s infinite ease-in-out;
			}
			.ai-logo-text-styled {
				font-size: 18px;
				font-weight: 800;
				letter-spacing: -0.5px;
				font-family: 'Outfit', 'Inter', sans-serif;
				user-select: none;
				background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				display: inline-block;
			}
		`});return t==="sm"?i.jsxs("span",{className:"logo-sm",children:[a,i.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ai-logo-group",style:{verticalAlign:"middle"},children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:e,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[i.jsx("stop",{offset:"0%",stopColor:"#4f46e5"}),i.jsx("stop",{offset:"100%",stopColor:"#9333ea"})]})}),i.jsx("path",{d:"M8 12C8 9.79086 9.79086 8 12 8H28C30.2091 8 32 9.79086 32 12V24C32 26.2091 30.2091 28 28 28H18L10 33V28H12C9.79086 28 8 26.2091 8 24V12Z",fill:"#ffffff",stroke:`url(#${e})`,strokeWidth:"1.5"}),i.jsxs("g",{className:"ai-dot-container-anim",children:[i.jsx("circle",{className:"ai-dot-anim",cx:"17",cy:"18",r:"1.5",fill:`url(#${e})`,style:{animationDelay:"0s"}}),i.jsx("circle",{className:"ai-dot-anim",cx:"20",cy:"18",r:"1.5",fill:`url(#${e})`,style:{animationDelay:"0.2s"}}),i.jsx("circle",{className:"ai-dot-anim",cx:"23",cy:"18",r:"1.5",fill:`url(#${e})`,style:{animationDelay:"0.4s"}})]}),i.jsxs("g",{className:"ai-lines-container-anim",children:[i.jsx("rect",{x:"14",y:"15",width:"12",height:"2.5",rx:"1.25",fill:`url(#${e})`,fillOpacity:"0.9"}),i.jsx("rect",{x:"14",y:"21",width:"8",height:"2.5",rx:"1.25",fill:`url(#${e})`,fillOpacity:"0.7"})]})]})]}):i.jsxs("span",{className:"logo-lg",style:{display:"inline-block",verticalAlign:"baseline"},children:[a,i.jsx("span",{className:"ai-logo-text-styled",children:"ProjectX"})]})};export{l as A};
