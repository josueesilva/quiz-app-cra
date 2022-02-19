import React, { useState } from 'react'
import styled from 'styled-components'

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 50%;
    height: 50%;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`


const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.0;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }
`



export const Modal = ({showModal, setShowModal, children}) => {
    return (
        <>
            {showModal  && (
                <Background>
                    <ModalWrapper>
                        <ModalContent>
                            {children}
                        </ModalContent>
                    </ModalWrapper>
                </Background>
            )}
        </>
    );
};
