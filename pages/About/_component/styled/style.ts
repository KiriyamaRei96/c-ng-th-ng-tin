import styled from "styled-components";

const AboutWrapper=styled.div ` 
.aboutIntro {
    padding: 100px 0;
    .--video {
        position: relative;
        .--img {
            width: 100%;
            height: 800px;
            position: relative;

            &::after {
                background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        a {

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .--left {
        position: relative;
        .--card {
            position: absolute;
            bottom: 0;
            right: -60px;
            background: var(--color-1);
            padding: 30px 80px;
            color: #FFF;
            font-family: var(--font-Canela);
            font-weight: 600;
        }
        h4{
            color: #FFF;
            margin-bottom: 0;
            p{
                margin-bottom: 0;
            }
        }
        .--icon {
            margin-bottom: 20px;
        }
    }

    .--content {
        padding-left: 3.5rem;

        h1 {
            margin-bottom: 36px;
        }

        .--des {
            padding-left: 108px;
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            position: relative;
            margin-bottom: 42px;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                width: 84px;
                top: 10px;
                border-bottom: 1px solid var(--color-1);
            }
        }

        article {
            line-height: 22px;
            padding-left: 108px;
        }

        a {
            margin-left: 108px;
            margin-top: 42px;
        }
    }

    .list_aboutIntro {
        margin-top: 60px;

        .--item {
            width: 25%;
            border-left: 1px dashed #DCDCDC;
            padding: 0 14px;

            &:nth-child(1) {
                border-left: none;
            }
        }

        .--icon {
            margin-right: 20px;
            width: 100px;
            height: 100px;
            flex: 0 0 auto;
            img {
                max-width: 100px;
                max-height: 100px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        h4 {
            font-family: var(--font-Canela);
            margin-bottom: 12px;
        }

        span {
            font-size: 14px;
        }
    }
    @media (max-width: 768px){
        padding: 3rem 0;
        .--video{
            .--img{
                height: 240px;
            }
        }
        .--left{
            .--card{
                right: 0;
                padding: 24px;
                position: relative;
                right: unset;
                bottom: unset;
                width: 100%;
            }
        }
        .--content{
            padding: 1rem 0 0 0;
            .Title{
                margin-bottom: 1.5rem;
            }
            .--des{
                padding-left: 0;
                margin-bottom: 12px;
                &::before{
                    display: none;
                }
            }
            article{
                padding-left: 0;
            }
            a{
                margin-left: 0;
                margin-top: 1.5rem;
            }
        }
        .list_aboutIntro {
            flex-flow: column;
            margin-top: 3rem;
            .--item{
                padding: 0;
                width: 100%;
                border-left:none ;
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom:1px solid #dcdcdc ;
                &:last-child{
                    margin-bottom: 0;
                    padding-bottom: 0;
                    border: none;
                }
            }
           
        }
    }
}
.aboutDiscover {
    padding-bottom: 100px;
    .Title {
        margin-bottom: 60px;
    }
    .list_aboutDiscover {
        .--img {
            width: 100%;
            height: 340px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .--txt {
            padding: 30px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            text-align: center;

            h4 {
                font-family: var(--font-Canela);
                font-weight: 600;
                margin-bottom: 18px;
            }

            a {
                color: var(--color-1);
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                text-transform: uppercase;
            }
        }
        .--warpper {
            padding-right: calc(var(--bs-gutter-x) * .5);
            padding-left: calc(var(--bs-gutter-x) * .5);
            margin-top: var(--bs-gutter-y);
        }
        .slick-dots {
            margin-top: 2rem;
        }

    }
    @media (max-width: 768px){
        padding-bottom: 3rem;
        .Title{
            margin-bottom: 2rem;
        }
        .list_aboutDiscover{
            .--warpper{
                padding: 0;
            }
            .--img{
                height: 220px;
            }
            .--txt{
                padding: 1rem;
            }
            .slick-dots{
                margin-top: 1rem;
            }
        }
    }
}
.aboutWhy {
    padding: 100px 0;
    background: #F6F8FB;
    h1 {
        margin-bottom: 60px;
    }
    .list_Why {
        display: flex;
        flex-wrap: wrap;

        .--item {
            width: calc(100%/3 - 52px);
            margin-right: 78px;
            position: relative;

            &:nth-child(3n+3) {
                margin-right: 0;
            }

            &:nth-child(n+4) {
                margin-top: 60px;
            }

            .--number {
                position: absolute;
                font-size: 126px;
                top: 0;
                left: 0;
                color: rgba(251, 133, 0, 0.1);
                font-family: var(--font-Canela);
                font-weight: 600;
                line-height: 105px;
            }
        }

        .--top {
            display: flex;
            margin-bottom: 14px;
            align-items: flex-start;

            img {
                margin-right: 1rem;
            }

            h4 {
                font-family: var(--font-Canela);
                font-weight: 600;
            }
        }
    }
    @media (max-width: 768px){
        padding: 3rem 0;
        .list_Why{
            flex-flow: column;
            .--item{
                width: 100%;
                margin-right: 0;
                margin-bottom: 1.5rem;
                margin-top: 0 !important;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
}
.aboutBlock {
    position: relative;
    .--img {
        width: 100%;
        height: 500px;
        position: relative;

        &::after {
            background: linear-gradient(0deg, rgba(56, 56, 56, 0.4), rgba(56, 56, 56, 0.4));
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .Title {
        margin-bottom: 40px;
    }
    .--txt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        text-align: center;
        color: #FFF;

        h1 {
            color: #FFF;
        }

        a {
            height: 44px;
            background: rgba(255, 255, 255, 0.11);
            border: 1px solid rgba(255, 255, 255, 0.48);
            backdrop-filter: blur(2px);
            color: #FFF;
            display: flex;
            width: max-content;
            margin: auto;
            padding: 0 20px;
            text-decoration: none;
            align-items: center;
            border-radius: 100px;
            text-transform: uppercase;
            font-size: 14px;
        }
    }
    @media (max-width: 768px){
        padding: 3rem 0;
        .--txt{
            position: relative;
            top: unset;
            left: unset;
            transform: none;
            width: 100%;
            .Title{
                margin-bottom: 1.5rem;
            }
            a{
                height: 40px;
                font-size: 12px;
            }
        }
        .--img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
`;
export default AboutWrapper;