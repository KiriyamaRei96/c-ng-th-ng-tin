import styled from "styled-components";

export const CommercialWrapper=styled.div` .pageBody {
    display: grid;
    padding: 100px 86px;
    grid-template-columns: 26% 71.5%;
    gap: 2.5%;

    .--navBar {
        .--divider {
            border-top: solid 1px;
            margin: 11px 0;
        }

        .--searchWraper {
            margin-bottom: 30px;
            height: 165px;
            padding: 18px;
            background: #fb8500;
            border-radius: 10px;

            &>div {
                border: 1px dashed #dcdcdc;
                border-radius: 10px;
                flex-direction: column;
                height: 100%;
                padding: 24px;

                .--divider {
                    border-color: #fff;
                }

                span {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 22px;
                    text-transform: capitalize;
                    color: #ffffff;
                }

                &>div {
                    position: relative;
                    padding: 8px 12px;
                    width: 100%;
                    height: 37px;
                    align-items: center;
                    background: #FFFFFF;
                    border-radius: 500px;

                    input {
                        border: none;
                        outline: none
                    }

                    button {
                        border: none;
                        background: none;
                        position: absolute;
                        right: 10px;
                        color: #5C626A;
                    }
                }
            }
        }

        .--OptionList {
            padding: 20px 30px 23px;
            border: 1px dashed #DCDCDC;
            border-radius: 10px;





            .--divider {
                border-color: #CACACA;
            }

            .OptionGroup {

                h5 {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 22px;
                    margin: 0;

                }




                ul {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }
            }
        }
    }

    .--content {}
}

`;