import styled from "styled-components";

const CommercialWrapper=styled.div` .pageBody {
    display: flex;
    justify-content: space-between;
    padding: 100px 0;

    .--navBar {
        padding-right: 15px;
        border-right: 1px solid #DCDCDC;
        padding-bottom: 50px;
        height: fit-content;
        width: 25%;

        .--divider {
            border-top: solid 1px;
            margin: 11px 0;
        }

        .--map {
            height: 132px;
            margin-bottom: 14px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.13);
            position: relative;
            display: flex;
            justify-content: center;

            button {
                padding: 6px 20px;
                gap: 10px;

                position: absolute;
                width: 122px;
                height: 32px;
                background: #FB8500;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
                font-weight: 500;
                font-size: 12px;
                line-height: 20px;
                text-align: center;
                text-transform: uppercase;
                bottom: 10px;
                color: #FFFFFF;

            }
        }

        .--OptionList {
            .--filTag {
                padding: 12px 16px;
                background: #F5F5F5;
                border-radius: 4px;
                margin-bottom: 14px;

                .--tilte {
                    justify-content: space-between;

                    h5 {
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 22px;
                        color: #1C1C1C;
                        margin: 0;
                    }

                    button {
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        color: #6F7378;
                        border: none;
                        background: none;
                        margin: 0;
                        padding: 0;



                        i {
                            margin-left: 5px;
                            font-weight: 400;
                            font-size: 10px;
                            line-height: 16px;
                            color: #6F7378;
                        }
                    }
                }

                .--list {
                    flex-wrap: wrap;

                    .filterItem {
                        display: inherit;
                        align-items: center;
                        margin-right: 10px;
                        margin-top: 10px;
                        padding: 2px 10px;
                        background: #FFFFFF;
                        border: 1px solid #DCDCDC;
                        border-radius: 3px;
                        font-weight: 400;
                        font-size: 13px;
                        line-height: 20px;
                        color: #5C626A;
                    }
                }
            }

            .--divider {
                border-color: #CACACA;
                margin: 30px 0;
            }

            .OptionGroup {
                h5 {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 22px;
                    margin: 0;
                    color: #1C1C1C;
                    margin-bottom: 12px;
                }


                .--place {
                    width: 100%;

                    .ant-select-selector {
                        height: auto;
                        padding: 8px 16px;

                    }

                }

                .--group {
                    flex-direction: column;

                    .--item {
                        margin: 0;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 20px;
                        color: #343434;
                        margin-bottom: 10px;
                        align-items: baseline;

                        .ant-checkbox-inner {
                            width: 20px;
                            height: 20px
                        }
                    }

                    .--more {
                        color: #FB8500;
                        font-size: 14px;
                        line-height: 20px;
                        cursor: pointer;
                    }

                }

                .stars {
                    flex-direction: column;


                    .ant-radio-wrapper {
                        align-items: center;


                        margin-right: 5px;


                        .ant-radio-checked {


                            .ant-radio-inner {
                                border-color: var(--color-1);

                                &::after {
                                    background-color: var(--color-1)
                                }
                            }
                        }

                        .ant-radio-inner {
                            width: 22px;
                            height: 22px;

                        }

                    }


                }
            }

            & :last-child {
                .--divider {
                    display: none;
                }
            }
        }

        .--content {}
    }

    .--content {
        width: calc(75% - 40px);

        .hot-menu {
            &>div {

                .slick-slide {
                    padding: 0 8px;
                    margin-bottom: 30px;
                }

                /* the parent */
                .slick-list {
                    margin: 0 -8px;
                }

                .--item {
                    height: 146px;
                    width: 18.5%;
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
                    display: inherit;
                    flex-direction: column;

                    img {
                        height: 104px;
                        width: 100%;
                        object-fit: cover;
                    }

                    span {
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 22px;

                        color: #343434;
                        margin: auto 10px;
                    }

                }
            }


        }

        .search {
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;

            .--input {
                width: 44%;
                padding: 12px 16px;
                height: 44px;
                display: flex;
                background: #F5F5F5;
                border: 1px solid #DCDCDC;
                border-radius: 4px;

                input {
                    border: none;
                    outline: none;
                    flex: 1;
                    background: none;
                    height: 20px;
                    font-size: 14px;
                    line-height: 20px;
                }

                i {
                    font-size: 14px;
                    color: #6F7378
                }
            }

            .--select {
                &>span {
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 20px;
                    margin-right: 10px;
                    color: #343434;
                }

                .--item {
                    .ant-select-selector {
                        height: 36px;
                        border: 1px solid #DCDCDC;
                        border-radius: 4px;
                    }

                }
            }
        }

        h2 {
            font-family: 'Canela';

            font-weight: 400;
            font-size: 40px;
            line-height: 58px;
        }

        .--list {
            .ranks {
                margin-top: auto;

                &>div {
                    display: flex;
                    padding: 0 2px;
                    align-items: baseline;
                    border: 1px solid #DCDCDC;
                    border-radius: 4px;

                    span {
                        margin-left: 2px;
                    }
                }

                .views {
                    font-size: 12px;
                    line-height: 16px;
                    padding: 0 4px;
                    margin-left: 8px;
                    color: #6F7378;
                    display: flex;
                    align-items: center;

                    i {
                        font-weight: 900;
                    }
                }

                li {
                    margin-right: 1px;
                }

                .ant-rate-star {
                    height: fit-content;

                    svg {
                        width: 14px;
                        height: 16px;
                    }
                }
            }
        }

        .--list.--tour {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px 1.25%;
            display: grid;
        }

        .--list.--Hotel {
            display: flex;
            flex-wrap: wrap;

            .slick-slide {
                >div {
                    height: 170px;
                }
            }

            .hotel {
                width: calc(50% - 10px);
                margin-right: 20px;

                &:nth-child(2n+2) {
                    margin-right: 0;
                }

                &:nth-child(n+3) {
                    margin-top: 20px;
                }

            }
        }

        .--list.--Restaurant {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px 1.25%;
            display: grid;
        }

        .--pagination {
            margin-top: 40px
        }

        .tour-sliderWarpper {
            margin-top: 38px;

            h3 {
                font-family: 'Canela';
                font-style: normal;
                font-weight: 400;
                font-size: 40px;
                line-height: 58px;
                color: #1C1C1C;
            }

            .TourSlider {
                .tour {
                    box-shadow: 0px 4px 8px rgb(0 0 0 / 8%);
                }

                .slick-list {
                    margin: 0 -0.7%
                }

                .--warpper {
                    padding: 24px 2%
                }

                .arrow {
                    top: 47%;
                }

                .slick-dots {
                    margin-top: 16px;
                }
            }
        }

        .Hotel-sliderWarpper {
            margin-top: 32px;

            h3 {
                font-family: 'Canela';
                font-style: normal;
                font-weight: 400;
                font-size: 40px;
                line-height: 58px;
                color: #1C1C1C;
            }

            .HotelSlider {
                .slick-list {
                    margin: 0 -12px
                }

                .slick-dots {
                    margin-top: 45px;
                }

                .--warpper {
                    padding: 12px;

                    .placeCard {

                        flex-direction: column;

                        h4 {
                            font-weight: 600;
                            font-size: 18px;
                            line-height: 24px;
                        }

                        img {
                            width: 100%;
                            height: 170px;
                            object-fit: cover
                        }

                        span {
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 20px;
                            color: #6F7378;
                        }

                        a {
                            color: #FB8500;
                            margin-top: 12px;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 20px;
                        }
                    }

                }
            }
        }
    }

    @media (max-width: 768px) {
        flex-flow: column;
        padding: 3rem 0;

        .--navBar {
            width: 100%;
            padding-right: 0;
            border-right: unset;
            padding-bottom: 2rem;

            .--divider {
                margin: 1rem 0 !important;
            }
        }

        .--content {
            width: 100%;

            h2 {
                font-size: 32px;
            }

            .--list {
                &.--Hotel {
                    flex-flow: column;

                    .hotel {
                        width: 100%;
                        flex-flow: column;
                    }

                    .--warpper {
                        width: 100%;
                    }

                    .--item {
                        width: 100%;
                        padding: 1rem;
                    }

                    .ranks {
                        margin-top: 1rem;
                    }
                }

                &.--tour {
                    display: flex;
                    flex-flow: column;
                }
            }

            .search {
                flex-flow: column;
                align-items: flex-start;

                .--input {
                    width: 80%;
                    margin-bottom: 12px;
                }
            }

            .Hotel-sliderWarpper {
                h3 {
                    font-size: 32px;
                    line-height: 1;
                }

                .HotelSlider {
                    .slick-slide {
                        width: 80vw;
                    }
                }
            }

            .tour-sliderWarpper {
                h3 {
                    font-size: 32px;
                }

                .arrow {
                    display: none
                }

                .slick-slide {
                    width: 80vw;
                    margin-right: 12px;
                }

                .--warpper {
                    padding: 0 !important;
                }
            }
        }
    }
}

`;
export default CommercialWrapper