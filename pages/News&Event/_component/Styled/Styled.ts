import styled from "styled-components";

const NewsWrapper=styled.div` 
div.News {
    padding: 100px 0;

    h3 {
        font-family: 'Canela';
        font-style: normal;
        font-weight: 400;
        font-size: 52px;
        line-height: 66px;
        color: #1C1C1C;
        margin-bottom: 20px
    }

    .--hotSlider {
        padding: 50px 0;
        border-top: 1px solid #DCDCDC;

        .--item {
            justify-content: space-between;
            cursor: pointer;

            .--img {
                height: 348px;
                width: 41.5%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .--txt {
                width: 55%;
                padding: 16px 0;

                h4 {
                    font-family: 'Canela';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 30px;
                    line-height: 38px;
                    color: #1C1C1C;
                    margin-top: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;


                }

                &>.divider {
                    border-bottom: 1px solid #000000;
                    margin-top: 18px;
                    margin-bottom: 33px;
                    width: 40px;
                }

                &>span {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #5C626A;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;

                }

                a {
                    margin-top: 30px
                }
            }
        }
    }

    .--catalog {
        .select {
            h4 {
                font-family: 'Canela';
                font-style: normal;
                font-weight: 500;
                line-height: 30px;
                color: #6F7378;
                padding: 15px 0;
                margin-right: 40px;
                margin-bottom: 0;
                cursor: pointer
            }

            .active {
                color: #FB8500;
                position: relative;

                :after {
                    content: '';
                    position: absolute;
                    border-top: 2px solid #FB8500;
                    width: 100%;
                    bottom: 1px;
                    left: 0;
                }
            }

            margin-bottom: 50px;
        }

        .--list {
            display: flex;
            flex-wrap: wrap;
            .--item {
                cursor: pointer;
                width: calc(100%/3 - 16px);
                margin-right: 24px;
                &:nth-child(3n+3){
                    margin-right: 0;
                }
                &:nth-child(n+4){
                    margin-top: 40px;
                }
                .--img {
                    height: 370px;
                    margin-bottom: 24px;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;

                    }
                }

                .Info {
                    margin-bottom: 20px;

                    .divider {
                        margin: 0 12px;
                    }
                }

                h5 {
                    font-family: 'Canela';
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 30px;
                    color: #1C1C1C;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    transition: all .15s ease;
                    &:hover{
                        color: var(--color-1);
                    }
                }

                &>.divider {
                    border-bottom: 1px solid #DCDCDC;
                    width: 22px;
                    margin: 16px 0;
                }

                &>span {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #6F7378;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    margin-bottom: 8px;
                }

                .--more {
                    align-items: center;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    text-transform: uppercase;
                    color: #000000;
                    transition: all .15s ease;
                    i {
                        font-size: 12px;
                        margin-left: 16px;
                        color: var(--color-1);
                    }
                    &:hover{
                        color: var(--color-1);
                    }
                }
            }
        }

        .--pagination {
            margin-top: 45px;
        }
    }
    @media (min-width: 769px) and  (max-width: 1279px){
        .--catalog{
            .--list{
                .--item{
                    .--img{
                        height: 280px;
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        padding: 3rem 0;
        h3{
            font-size: 32px;
            line-height: 1;
        }
        .--hotSlider {
            padding: 24px 0 0;
            i.divider{
                margin: 0 12px !important;
            }
            .--item {
                flex-flow: column;

                .--img {
                    width: 100%;
                    height: 240px;
                }

                .--txt {
                    width: 100%;
                }

            }
            .divider{
                margin: 12px 0 !important;
            }
            .arrow {
                top: 122px;
                transform: none;

                &.prevarrow {
                    right: calc(100% - 32px);
                }
            }
        }

        .--hotNews {
            margin-bottom: 1rem;
        }

        .--catalog {
            .select {
                overflow-x: auto;
                padding-bottom: 1rem;
                margin-bottom: 1rem;

                h4 {
                    width: max-content;
                    flex: 0 0 auto;
                    padding: 8px 0;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            .--list {
                grid-template-columns: unset;
                display: flex;
                flex-flow: column;
                gap: unset;
                .--item{
                    width: 100%;
                    margin-right: 0;
                    &:nth-child(n+4){
                        margin-top: 0;
                    }
                }
                .Info{
                    margin-bottom: 12px !important;
                }
            }

            .--img {
                height: 240px !important;

                img {
                    margin-bottom: 16px !important;
                }
            }

            .--item {
                height: max-content !important;
                margin-bottom: 24px;
            }
        }
    }
}

.Events {
    .--title {
        border-bottom: 1px solid #DCDCDC;
        text-align: center;
        span {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #FB8500;
        }

        h3 {
            font-family: 'Canela';
            font-style: normal;
            font-weight: 400;
            font-size: 52px;
            line-height: 66px;
            color: #1C1C1C;
            margin: 20px 0;
        }

    }

    .eventsSlider {
        margin-top: 55px;
        flex-direction: column;

        .row {
            margin-bottom: 60px;
        }

        .col-md-4 {
            &:nth-child(n+4) {
                margin-top: 24px;
            }
        }

        .--item {
            width: 100%;
            position: relative;
            cursor: pointer;

            .--img {
                height: 510px;
                width: 100%;
                position: relative;

                &::after {
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                filter: brightness(0.7);
            }

            .--txt {
                position: absolute;
                padding: 0 40px;
                bottom: 2rem;
                width: 100%;

                .--tag {
                    justify-content: center;
                    align-items: center;
                    padding: 6px 16px;
                    width: 132px;
                    height: 28px;
                    background: #FB8500;
                    border-radius: 100px;
                }

                h5 {
                    font-family: 'Canela';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 30px;
                    color: #FFFFFF;
                    margin: 18px 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                }

                span.date {
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 16px;
                    color: #FFFFFF;
                    padding-bottom: 1rem;
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        border-bottom: 1px solid #DCDCDC;
                        width: 40px;
                    }
                }
            }

        }

        .slick-dots {
            list-style: none;
            padding: 0;
            text-align: center;
            margin-top: 47px;

            margin-bottom: 0;

            li.slick-active {
                background: #FB8500;
            }

            li {
                width: 18.8px;
                height: 18.8px;
                background: #D9D9D9;
                border-radius: 50%;
                display: inline-block;
                margin: 0 9.5px;

                button {
                    border: none;
                    background: none;
                    color: transparent;
                }
            }
        }

        .nextarrow {
            left: calc(100% + 3.5px);
            display: flex;
        }

        .prevarrow {
            right: calc(100% + 3.5px);
            display: flex;
        }
    }
    @media (min-width: 769px) and  (max-width: 1279px){
        .eventsSlider{
            .--item{
                .--img{
                    height: 400px;
                }
                .--txt{
                    padding: 0 24px;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .--title{
            h3{
                font-size: 32px;
                line-height: 1;
            }
        }
        .eventsSlider {
            flex-flow: column;
            margin-top: 24px;
            .--img {
                height: 400px !important;
            }
            .--txt{
                padding: 0 1rem !important;
            }
            .col-md-4 {
                margin-bottom: 20px;
                margin-top: 0 !important;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}






`;
export default NewsWrapper