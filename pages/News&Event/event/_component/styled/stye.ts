import styled from "styled-components";

const EventsWrapper=styled.div` .detailnewsBanner {
    .Title {
        margin-bottom: 20px;
    }
}

.potision {
    right: unset !important;
    color: #6F7378 !important;
}

.detailnewsContent {
    padding: 100px 0;

    .--left {
        padding-right: 10%;
        width: calc(100% - 10px);
        border-right: 1px solid #E7E7E7;
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

                i {
                    font-size: 12px;
                    color: #6F7378;
                    margin-right: 6px;
                }

                a {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                span {
                    color: #6F7378;
                }

                &:nth-child(1),
                &:nth-child(2) {
                    margin-right: 28px;
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        transform: translate(0, -50%);
                        width: 4px;
                        height: 4px;
                        left: calc(100% + 12px);
                        background: #2C2C2C;
                        border-radius: 50%;
                    }
                }

                &:nth-child(3) {
                    margin-right: 12px;
                }
            }
        }

        .--des {
            border: 1px dashed #DCDCDC;
            border-radius: 6px;
            padding: 20px;
            font-weight: 600;
            margin-bottom: 36px;
        }

        article {
            font-size: 14px;
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
                border: 1px solid #E7E7E7;
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
                    transition: all .15s ease;

                    &:hover {
                        color: var(--color-1);
                    }
                }
            }
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
            background: #FFFFFF;
            border: 1px solid #E7E7E7;
            border-radius: 30px;
            display: flex;
            align-items: center;
            font-weight: 600;
            color: #6F7378;

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

                &:nth-child(n+2) {
                    border: 1px solid #EBEBEB;
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
            background: #F6F8FB;
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
                color: #6F7378;

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
}

`;
export default EventsWrapper;