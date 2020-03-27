import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        min-height: 100%;
        background-color: ${Colors.background};
        -webkit-font-smoothing: antialiased;
    }

    input, button, textarea{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
    }

    button{
        cursor: pointer;
    }

    form {
      input, textarea {
        width: 100%;
        height: 60px;
        color: ${Colors.dark_grey};
        border: 1px solid ${Colors.light_grey};
        border-radius: 8px;
        padding: 0 24px;
        margin-bottom: 8px;
      }
      textarea{
        height: 140px;
        padding: 16px 24px;
        line-height: 24px;
      }
    }

    .button{
        width: 100%;
        height: 60px;
        background-color: ${Colors.primary};
        border: 0;
        border-radius: 8px;
        color: ${Colors.white};
        font-weight: 700;
        margin-top: 8px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(90%);
        }
    }

    .back-link{
            display: flex;
            align-items: center;
            margin-top: 40px;
            color: ${Colors.dark_grey};
            font-size: 18px;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.2s;
            &:hover{
                opacity: 0.8;
            }
            svg{
                margin-right: 8px;
            }
        }

`;
