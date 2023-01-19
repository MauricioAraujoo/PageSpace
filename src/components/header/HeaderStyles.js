import styled from "styled-components";
import BGH from '../../../Public/assets/hr-pattern.png'

export const Hdiv = styled.div`
    height: 100px;
    width: 100%;
    

    nav{
        background-image: url(${BGH});   
        background-position : top;
        
        align-items: center;
        background-color: rgba(13,46,66,.5);
        opacity: 0.7;
        padding:8px;
    }
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
    }
    .actions1{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

`


