import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
	:root
	{
		font-size: 10px;
	}

  *
	{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	#__next
	{
		width: 100vw;
		height: 100vh;
	}
`