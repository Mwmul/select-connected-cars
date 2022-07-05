import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';




const GlobalStyle: any = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        a {
            color: inherit;
            text-decoration: none;
        }
		::-webkit-scrollbar {
			width: 10px;
		}


		/* Track */
		::-webkit-scrollbar-track {
			background: none;;
			border-radius: 50px;

		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #707070;
			border-radius: 50px;
			&:active {
				cursor: grabbing;
			}
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: #555;
			cursor: grab;

		}
    }
    html {
		font-family: paralucent, sans-serif;
		font-weight: 500;
		font-style: normal;
		color: #FFFFFF;
    }
    .light {
		font-weight: 300;
		letter-spacing: 3px;
	}
	.demi {
		font-weight: 600;
		letter-spacing: normal;
	}

	.heavy {
		font-weight: 900;
		letter-spacing: normal;
	}

	
    body {
		

    }
	
    #ROOT {
    }

	@keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
	@keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`

export default GlobalStyle;