import styled from "styled-components";
import BGH from '../../../Public/assets/hr-pattern.png'

export const Hdiv = styled.nav`
    width: 100%;
    background-image: url(${BGH});   
    background-position : top; 
    align-items: center;
    background-color: rgba(13,46,66,.5);
    opacity: 0.7;
    padding-top: 6px;
    img{
        width: 100px;
    }
    li{
       
        list-style: none;
        cursor: pointer;
        color: #7e7e7e;;
    }
    li:hover{
        color: #FFF;
        text-shadow: 0 0 20px #7af6fb;
    }
    .actions1{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .line-end{
        width: 100%;
        height: 1px;
        background: #0a5688;
        margin-top: 2px ;
    }
`


