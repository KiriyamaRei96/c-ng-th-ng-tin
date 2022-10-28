import styled from "styled-components";

const CommercialWrapper=styled.div` .pageBody {
    display: grid;
    padding: 100px 86px;
    grid-template-columns: 23.5% 73%;
    gap: 3.5%;

    .--navBar {
        padding-right: 15px;
        border-right: 1px solid #DCDCDC;
        padding-bottom: 50px;
        height: fit-content;

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
                    margin-bottom: 10px;

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
                        margin-bottom: 10px;
                        margin-right: 10px;
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
        .hot-menu {
            &>div {
                justify-content: space-between;

                div {
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

            margin-bottom: 30px;
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

        // .tour {
        //     cursor: pointer;
        //     box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);

        //     img {
        //         width: 100%;
        //         object-fit: cover;
        //         height: 220px;
        //     }

        //     &>div {
        //         padding: 20px 16px;

        //         h4 {
        //             font-style: normal;
        //             font-weight: 600;
        //             font-size: 16px;
        //             line-height: 22px;
        //             color: #181818;
        //             margin-bottom: 10px;

        //         }

        //         &>span {
        //             font-weight: 400;
        //             font-size: 12px;
        //             line-height: 16px;

        //             color: #6F7378
        //         }


        //         &>.divider {
        //             margin: 10px 0;
        //             border: 1px solid #DCDCDC;
        //         }

        //         .Info {

        //             font-size: 12px;
        //             line-height: 16px;
        //             color: #6F7378;
        //         }


        //     }
        // }

        // .hotel {
        //     cursor: pointer;
        //     box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);



        //     .--warpper {
        //         width: 48%;
        //         position: relative;

        //         img {
        //             height: 178px;
        //             width: 100%;
        //             object-fit: cover;
        //         }

        //         .--ribbon {
        //             display: flex;
        //             flex-direction: row;
        //             align-items: center;
        //             padding: 6px 10px;
        //             gap: 6px;

        //             position: absolute;
        //             width: 139px;
        //             height: 28px;
        //             left: 11px;
        //             top: 11px;

        //             background: rgba(0, 0, 0, 0.2);
        //             border-radius: 4px;

        //             img {
        //                 width: 16px;
        //                 height: 16px;
        //                 object-fit: cover;
        //             }

        //             span {
        //                 font-weight: 400;
        //                 font-size: 12px;
        //                 line-height: 16px;
        //                 color: #FFFFFF;
        //             }


        //         }

        //         .--item {
        //             display: flex;
        //             flex-direction: row;
        //             justify-content: center;
        //             align-items: center;
        //             padding: 4px 5px;
        //             gap: 12px;

        //             position: absolute;
        //             width: 32px;
        //             height: 32px;
        //             right: 8px;
        //             top: 8px;

        //             background: #FFFFFF;
        //             border: 1px solid #EFEFEF;
        //             box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
        //             border-radius: 100px;

        //             i {
        //                 font-weight: 900;
        //                 font-size: 12px;
        //                 line-height: 16px;
        //                 color: #FB8500;
        //             }
        //         }

        //         .--dots {
        //             position: absolute;
        //             color: white;
        //             bottom: 0;
        //             font-size: 6px;
        //             width: 100%;
        //             justify-content: center;
        //             list-style: none;
        //             margin: 0%;
        //             padding: 0;

        //             i {
        //                 margin: 0 5px;
        //             }
        //         }
        //     }

        //     .--item {
        //         width: 52%;
        //         padding: 12px 24px;
        //         flex-direction: column;

        //         h5 {
        //             font-weight: 600;
        //             font-size: 16px;
        //             line-height: 22px;
        //             color: #1C1C1C;
        //         }

        //         .--andress {
        //             i {
        //                 color: #6F7378;
        //                 font-size: 12px;
        //                 margin-right: 6px;
        //             }

        //             span {
        //                 font-weight: 400;
        //                 font-size: 12px;
        //                 line-height: 16px;

        //                 color: #6F7378;
        //             }
        //         }



        //     }


        // }

        // .restaurant {
        //     cursor: pointer;
        //     flex-direction: column;

        //     box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);

        //     .img-wrapper {
        //         position: relative;

        //         img {
        //             width: 100%;
        //             object-fit: cover;
        //             height: 167px;
        //         }

        //         .--ribbon {
        //             display: flex;
        //             flex-direction: row;
        //             align-items: center;
        //             padding: 6px 10px;
        //             gap: 6px;

        //             position: absolute;
        //             width: 139px;
        //             height: 28px;
        //             left: 10px;
        //             top: 10px;

        //             background: rgba(0, 0, 0, 0.2);
        //             border-radius: 4px;

        //             img {
        //                 width: 16px;
        //                 height: 16px;
        //                 object-fit: cover;
        //             }

        //             span {
        //                 font-weight: 400;
        //                 font-size: 12px;
        //                 line-height: 16px;
        //                 color: #FFFFFF;
        //             }


        //         }

        //         .--item {
        //             display: flex;
        //             flex-direction: row;
        //             justify-content: center;
        //             align-items: center;
        //             padding: 4px 5px;
        //             gap: 12px;

        //             position: absolute;
        //             width: 32px;
        //             height: 32px;
        //             right: 17px;
        //             top: 8px;

        //             background: #FFFFFF;
        //             border: 1px solid #EFEFEF;
        //             box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
        //             border-radius: 100px;

        //             i {
        //                 font-weight: 900;
        //                 font-size: 12px;
        //                 line-height: 16px;
        //                 color: #FB8500;
        //             }
        //         }


        //     }

        //     .--cotent {
        //         padding: 24px;

        //         h5 {
        //             font-weight: 600;
        //             font-size: 16px;
        //             line-height: 22px;
        //             color: #1C1C1C;
        //         }

        //         .--andress {
        //             i {
        //                 color: #6F7378;
        //                 font-size: 12px;
        //                 margin-right: 6px;
        //             }

        //             span {
        //                 font-weight: 400;
        //                 font-size: 12px;
        //                 line-height: 16px;

        //                 color: #6F7378;
        //             }

        //             margin-bottom: 8px;
        //         }
        //     }
        // }

        .--list {
            display: grid;




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

                /* Line */

                .views {
                    font-size: 12px;

                    line-height: 16px;
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
        }

        .--list.--Hotel {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 24px;
        }

        .--list.--Restaurant {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px 1.25%;
        }

        .--pagination {
            margin-top: 40px
        }

        .tour-sliderWarpper {
            h3 {
                font-family: 'Canela';
                font-style: normal;
                font-weight: 400;
                font-size: 40px;
                line-height: 58px;
                /* identical to box height, or 145% */


                /* Text/Heading */

                color: #1C1C1C;
            }

            margin-top: 38px;

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
                    list-style: none;
                    padding: 0;
                    text-align: center;
                    margin-top: 16px;

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
            }
        }

        .Hotel-sliderWarpper {
            h3 {
                font-family: 'Canela';
                font-style: normal;
                font-weight: 400;
                font-size: 40px;
                line-height: 58px;


                color: #1C1C1C;
            }

            margin-top: 35px;


            .HotelSlider {

                .slick-list {
                    margin: 0 -12px
                }



                .slick-dots {
                    list-style: none;
                    padding: 0;
                    text-align: center;
                    margin-top: 45px;

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

    `;
    export default CommercialWrapper