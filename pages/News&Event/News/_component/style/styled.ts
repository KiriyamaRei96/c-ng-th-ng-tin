import styled from "styled-components";

const NewsDetailWarpper=styled.div` .detailnewsBanner {
    .Title {
        margin-bottom: 20px;
    }
}

.--backshare {
    margin-top: 40px;

    a {
        text-decoration: none;
    }

    .--back {
        padding: 10px 24px;
        background: #ffffff;
        border: 1px solid #e7e7e7;
        border-radius: 30px;
        display: flex;
        align-items: center;
        font-weight: 600;
        color: #6f7378;

        img {
            margin-right: 8px;
        }
    }

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin-bottom: 0;
        align-items: center;

        li {
            margin-left: 8px;

            &:first-child {
                margin-right: 20px;
            }

            &:nth-child(n + 2) {
                border: 1px solid #ebebeb;
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
                border-radius: 42px;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;

                img {
                    width: 18px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        flex-flow: column;

        .--back {
            width: max-content;
            padding: 6px 12px;
            margin-bottom: 12px;
        }
    }
}

.detailnewsContent {
    padding: 100px 0;

    .--left {
        padding-right: 10%;
        width: calc(100% - 10px);
        border-right: 1px solid #e7e7e7;
        height: 100%;

        .--title {
            font-size: 30px;
            line-height: 38px;
            font-family: var(--font-Canela);
            margin-bottom: 20px;
        }

        .--note {
            margin-bottom: 30px;
            font-size: 14px;

            img {
                margin-right: 6px;
            }

            .--item {
                display: flex;
                align-items: center;

                a {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                i {
                    font-size: 12px;
                    color: #6f7378;
                    margin-right: 6px;
                }

                span {
                    color: #6f7378;
                }

                &:nth-child(1),
                &:nth-child(2) {
                    margin-right: 28px;
                    position: relative;

                    &::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        transform: translate(0, -50%);
                        width: 4px;
                        height: 4px;
                        left: calc(100% + 12px);
                        background: #2c2c2c;
                        border-radius: 50%;
                    }
                }

                &:nth-child(3) {
                    margin-right: 12px;
                }
            }
        }

        .--des {
            border: 1px dashed #dcdcdc;
            border-radius: 6px;
            padding: 20px;
            font-weight: 600;
            margin-bottom: 36px;
        }

        article {
            font-size: 14px;
            img{
                width: 100% !important;
                height: auto !important;
            }
        }
    }

    .--right {
        .--titlenews {
            font-size: 30px;
            font-family: var(--font-Canela);
            font-weight: 600;
            margin-bottom: 20px;
        }

        .othernews {
            .--img {
                height: 200px;
                width: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            h5 {
                padding: 24px;
                border: 1px solid #e7e7e7;
                font-family: var(--font-Canela);
                font-weight: 600;

                a {
                    color: #000;
                    text-decoration: none;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 26px;
                    -webkit-line-clamp: 2;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    transition: all 0.15s ease;

                    &:hover {
                        color: var(--color-1);
                    }
                }
            }
        }
    }
    @media (min-width: 769px) and  (max-width: 1279px){
        .--right{
            .othernews{
                .--img{
                    height: 160px;
                }
                h5{
                    padding: 12px;
                    font-size: 18px;
                }
            }
        }
    }
    @media (max-width: 768px) {
        padding: 3rem 0;

        .row {
            flex-flow: column;
        }

        .col-md-3,
        .col-md-9 {
            width: 100% !important;
        }

        .--left {
            padding-right: 0;
            width: 100%;
            border-right: unset;

            .--note {
                flex-wrap: wrap;
            }

            article {
                img {
                    width: 100% !important;
                    height: auto !important;
                }
            }
        }

        .--right {
            margin-top: 1.5rem;
        }
    }
}

.detaileventContent {
    .--backshare {
        margin-top: 40px;

        a {
            text-decoration: none;
        }

        .--back {
            padding: 10px 24px;
            background: #ffffff;
            border: 1px solid #e7e7e7;
            border-radius: 30px;
            display: flex;
            align-items: center;
            font-weight: 600;
            color: #6f7378;

            img {
                margin-right: 8px;
            }
        }

       
    }

    .col-md-9 {
        width: 72%;
    }

    .col-md-3 {
        width: 28%;
    }

    .--coment {
        margin-top: 60px;

        h3 {
            font-size: 30px;
            font-family: var(--font-Canela);
        }
    }

    .list_coment {
        .--avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            flex: 0 0 auto;
            overflow: hidden;
            margin-right: 10px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .--name_customer {
            display: flex;
            align-items: center;
        }

        .--txt {
            padding: 20px;
            background: #f6f8fb;
            border-radius: 0px 0px 0px 30px;

            h6 {
                font-weight: 600;
                margin-right: 20px;
                margin-bottom: 0;
            }

            .--time {
                font-size: 14px;
                display: flex;
                align-items: center;
                color: #6f7378;

                img {
                    margin-right: 6px;
                }
            }

            .--top {
                margin-bottom: 10px;
            }

            .--answer {
                color: var(--color-1);
                font-size: 14px;
                cursor: pointer;

                i {
                    margin-right: 6px;
                }
            }
        }

        .--item {
            margin-bottom: 1rem;

            &.--feedback {
                padding-left: 60px;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 3rem 0;

        .row {
            flex-flow: column;
        }

        .col-md-3,
        .col-md-9 {
            width: 100%;
        }
    }
}

`;
export default NewsDetailWarpper;