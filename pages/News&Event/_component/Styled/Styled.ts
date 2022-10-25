import styled from "styled-components";

export const NewsWrapper=styled.div` div.News {
    padding: 100px 86px;

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



            img {
                height: 348px;
                width: 41.5%;
                object-fit: cover;

            }



            &>div {
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
                    border: 1px solid #000000;
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
}


.Events {
    padding: 0 73.5px;

    .--title {
        margin: 0 12.5px;
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

    }

    .eventsSlider {
        margin-top: 57px;



        .--item {
            width: 100%;
            padding: 0 12.5px;
            position: relative;

            img {
                object-fit: cover;
                height: 518px;
                width: 100%;
                filter: brightness(0.7)
            }

            &>div {
                position: absolute;
                margin: 0 10%;
                top: 295px;

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
                    font-size: 27px;
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
}






`;