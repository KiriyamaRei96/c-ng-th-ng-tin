import styled from "styled-components";

 const ContactWrapper=styled.div` .contactBanner {
    .Title {
        margin-bottom: 20px;
    }
}

.contactForm {
    padding-top: 100px;
    .--title {
        font-family: var(--font-Canela);
        margin-bottom: 12px;
    }
    ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;

        li {
            display: flex;
            flex-flow: column;
            margin-bottom: 30px;

            i {
                color: var(--color-1);
                margin-right: 12px;
                font-size: 16px;
            }

            &:nth-child(1) {
                span {
                    display: flex;
                    width: 70%;
                }
            }

            &:nth-child(2) {
                span {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 14px;
                }

                a {
                    color: #343434;
                }
            }

            a {
                text-decoration: none;
            }

            &:nth-child(3) {
                margin-bottom: 0;

                span {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 14px;
                }

                a {
                    font-family: var(--font-Canela);
                    font-size: 24px;
                    display: flex;
                    align-items: center;
                    color: var(--color-1);
                }
            }
        }
    }
    .--right {
        .form {
            margin: 28px 0;

            input {
                width: 100%;
                padding: 0 10px;
                height: 44px;
                border: 1px solid #E7E7E7;
                border-radius: 4px;

                &:focus {
                    outline: none;
                    box-shadow: 0 0 0 1px var(--color-1);
                }

                &:focus-visible {
                    outline: none;
                }
            }

            .form-group {
                margin-bottom: 8px;
            }
        }

        button {
            border-radius: 4px;
            text-transform: uppercase;
            padding: 0 35px;

            &::after {
                border-radius: 4px;
            }
        }
    }
    @media (max-width: 768px){
        padding-top:3rem ;
        ul{
            margin-bottom: 2rem;
            li{
                margin-bottom: 12px;
                &:nth-child(1){
                    span{
                        width: 100%;
                    }
                }
            }
        }
    }
}

`
export default ContactWrapper