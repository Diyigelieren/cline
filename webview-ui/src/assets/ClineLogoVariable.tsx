import { SVGProps } from "react"

/**
 * ClineLogoVariable component renders the Kline logo with automatic theme adaptation.
 *
 * This component uses the VS Code theme variable `--vscode-icon-foreground` for the fill color,
 * which automatically adjusts based on the active VS Code theme (light, dark, high contrast)
 * to ensure optimal contrast with the background.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG props including className, style, etc.
 * @returns {JSX.Element} SVG Kline logo that adapts to VS Code themes
 */
const ClineLogoVariable = (props: SVGProps<SVGSVGElement>) => (
	// <svg fill="none" height="50" viewBox="0 0 47 50" width="47" xmlns="http://www.w3.org/2000/svg" {...props}>
	// 	<path
	// 		d="M46.4075 28.1192L43.5011 22.3166V18.9747C43.5011 13.4354 39.0302 8.94931 33.5162 8.94931H28.5491C28.9086 8.21513 29.106 7.3898 29.106 6.5189C29.106 3.44039 26.6149 0.949219 23.5363 0.949219C20.4578 0.949219 17.9667 3.44039 17.9667 6.5189C17.9667 7.3898 18.1641 8.21513 18.5236 8.94931H13.5565C8.04249 8.94931 3.57155 13.4354 3.57155 18.9747V22.3166L0.604424 28.104C0.305687 28.6863 0.305687 29.3799 0.604424 29.9622L3.57155 35.6838V39.0256C3.57155 44.5649 8.04249 49.0511 13.5565 49.0511H33.5162C39.0302 49.0511 43.5011 44.5649 43.5011 39.0256V35.6838L46.4024 29.942C46.691 29.3698 46.691 28.6964 46.4075 28.1192ZM20.4983 32.8483C20.4983 35.3648 18.4578 37.4053 15.9413 37.4053C13.4248 37.4053 11.3843 35.3648 11.3843 32.8483V24.747C11.3843 22.2305 13.4248 20.19 15.9413 20.19C18.4578 20.19 20.4983 22.2305 20.4983 24.747V32.8483ZM35.182 32.8483C35.182 35.3648 33.1415 37.4053 30.625 37.4053C28.1085 37.4053 26.068 35.3648 26.068 32.8483V24.747C26.068 22.2305 28.1085 20.19 30.625 20.19C33.1415 20.19 35.182 22.2305 35.182 24.747V32.8483Z"
	// 		fill="var(--vscode-icon-foreground)"
	// 	/>
	// </svg>
	<svg viewBox="0 0 23 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
                    <defs>
                        <polygon id="path-1" points="0 0 10.679625 0 10.679625 10.7710167 0 10.7710167"></polygon>
                    </defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(0, 0.0747)">
                            <path d="M7,14.4252917 C7,16.3583461 5.4331284,17.9252917 3.50033798,17.9252917 C1.5668716,17.9252917 0,16.3583461 0,14.4252917 C0,12.4922373 1.5668716,10.9252917 3.50033798,10.9252917 C5.4331284,10.9252917 7,12.4922373 7,14.4252917" fill="#00CCFE"></path>
                            <path d="M17,23.9250645 C17,26.1342096 15.2089688,27.9252917 12.9996592,27.9252917 C10.7912584,27.9252917 9,26.1342096 9,23.9250645 C9,21.7159193 10.7912584,19.9252917 12.9996592,19.9252917 C15.2089688,19.9252917 17,21.7159193 17,23.9250645" fill="#05C8C8"></path>
                            <g transform="translate(7.0978, 0)">
                                <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1"></use>
                                </mask>
                                <path d="M5.3398125,-4.58333333e-05 C8.28872917,-4.58333333e-05 10.679625,2.41124583 10.679625,5.38537083 C10.679625,8.36018333 8.28872917,10.7710167 5.3398125,10.7710167 C2.39089583,10.7710167 0,8.36018333 0,5.38537083 C0,2.41124583 2.39089583,-4.58333333e-05 5.3398125,-4.58333333e-05" fill="#2386EE" mask="url(#mask-2)"></path>
                            </g>
                            <path d="M23,32.9252917 C23,34.0294925 22.1047803,34.9252917 21,34.9252917 C19.8954128,34.9252917 19,34.0294925 19,32.9252917 C19,31.8205114 19.8954128,30.9252917 21,30.9252917 C22.1047803,30.9252917 23,31.8205114 23,32.9252917" fill="#A06EFF"></path>
                        </g>
                    </g>
                </svg>
)
export default ClineLogoVariable
