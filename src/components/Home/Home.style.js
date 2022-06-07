import styled from 'styled-components';

export const Image=styled.img`
    margin:6px 4.18rem;
    width:16rem;
    height:4.31rem;

    @media screen and (max-width: 375px) {
        margin:6px 2rem;
    }
`;

export const Main=styled.div`
    background: #F4F8FA;
    padding: 2.06rem 6.5rem 6.375rem 9.75rem;

    @media screen and (max-width: 1300px) {
        padding:2.06rem 3rem 6.375rem 3rem;
    }

    @media screen and (max-width: 768px) {
        padding:2.06rem 0rem 6.375rem 0rem;
    }
`

export const Head=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');
    font-family: 'Work Sans',sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 2.06rem;
    line-height: 120%;
    text-align: center;
    color: #1B31A8;

    .highlight{
        font-weight: 600;
    }
`;

export const MapInfo=styled.div`
    display:flex;
    gap:8.125rem;
    justify-content:space-between;

    @media screen and (max-width: 1300px) {
        gap:4rem;
    }

    @media screen and (max-width: 1024px) {
        gap:3rem;
    }

    @media screen and (max-width: 768px) {
        flex-direction:column;
        align-items:center;
    }

    @media screen and (max-width: 425px) {
        padding:0rem 3rem;
    }

    .googleMap{
        width:35rem;
        height:31.93rem;

        @media screen and (max-width: 425px) {
            width: 100%;
        }
    }
`

export const Form=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&family=Work+Sans:wght@400;500;600&display=swap');

    display:flex;
    flex-direction:column;

    @media screen and (max-width: 425px) {
        width:100%;
    }

    form{
        display:flex;
        gap:4.81rem;
        justify-content:space-between;

        @media screen and (max-width: 1024px) {
            gap:2rem;
        }

        @media screen and (max-width: 425px) {
            flex-direction:column;
            align-items:center;
            gap:0;
            margin-bottom:4rem;
        }
    }

    form div{
        display:flex;
        flex-direction:column;
    }

    .inputField{
        margin-top:2.56rem;

        @media screen and (max-width: 425px) {
            width:100%;
        }
    }

    label{
        font-family: 'Work Sans';
        font-weight: 400;
        font-size: 0.875rem;
        color: #000000;
        margin-bottom:6px;
    }

    .input{
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 1.5rem;
        color: #4D6475;
        width: 17rem;
        height: 3.5rem;
        margin-bottom:3.06rem;
        border: 1px solid #E9EEF2;
        border-radius: 4px;
        padding-left:2.75rem;

        @media screen and (max-width: 425px) {
            width:-webkit-fill-available;
        }
    }

    .calc{
        background: #1B31A8;
        border-radius: 2rem;
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        border:0;
        padding:1.31rem 2.06rem;
        align-self:center;
        text-align: center;
        color: #FFFFFF;
    }

    .distance{
        height:4.68rem;
        border: 1px solid #E9EEF2;
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 2rem;
        width: -webkit-fill-available;
        text-align: right;
        color: #0079FF;
        border-radius: 8px 8px 0px 0px;
        background:#ffffff;
        padding-right:1.56rem;
    }

    .distanceText{
        font-family: 'Work Sans',sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        color: #1E2A32;
        border: 1px solid #E9EEF2;
        padding:2.06rem 1.68rem;
        border-radius: 0px 0px 8px 8px;
    }

    .distHighlight{
        font-weight:600;
    }
    .origin,.destination{
        position:relative;
    }
    
    .distanceField{
        position:relative;

        div{
            position:absolute;
            left:4%;
            top:35%;
            font-family: 'Work Sans',sans-serif;
            font-weight: 400;
            font-size:1.25rem;
            color: #1E2A32;
        }
    }
`;

export const Location=styled.img`
    position:absolute;
    top:14%;
    left:4%;
    width:1.5rem; 
    height:1.68rem;
`;